const fs = require("fs");
const [_, ...arr] = fs.readFileSync(0).toString().trim().split("\n");
let answer = [];
let s = 0;
class Queue {
  constructor() {
    this.items = [];
  }
  push(item) {
    this.items.push(item);
  }
  pop() {
    return s < this.items.length ? this.items[s++] : -1;
  }
  size() {
    return this.items.length - s;
  }
  empty() {
    return this.items.length - s === 0;
  }
}
const queue = new Queue();
arr.map((cmd) => {
  const [c, v] = cmd.split(" ");
  if (c === "push") queue.push(v);
  else if (c === "pop") answer.push(queue.pop());
  else if (c === "size") answer.push(queue.size());
  else if (c === "empty") answer.push(queue.empty() ? 1 : 0);
  else if (c === "front") answer.push(queue.items[s] ?? -1);
  else if (c === "back")
    answer.push(queue.size() === 0 ? -1 : queue.items[queue.items.length - 1]);
});
console.log(answer.join("\n"));