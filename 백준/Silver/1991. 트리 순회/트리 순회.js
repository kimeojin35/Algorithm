const fs = require("fs");
const [num, ...testcase] = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(num);
const tree = {};
testcase.map((i) => {
  const [parent, left, right] = i.split(" ");
  tree[parent] = [left, right];
});
let result = ["", "", ""];

const preorder = () => {
  let stack = ["A"];
  while (stack.length) {
    const node = stack.shift();
    stack.unshift(...tree[node].filter((i) => i != "."));
    result[0] += node;
  }
};

const inorder = (node) => {
  if (node == ".") return;
  const [l, r] = tree[node];
  inorder(l);
  result[1] += node;
  inorder(r);
};

const postorder = (node) => {
  if (node == ".") return;
  const [l, r] = tree[node];
  postorder(l);
  postorder(r);
  result[2] += node;
};

preorder();
inorder("A");
postorder("A");
console.log(result.join("\n"));