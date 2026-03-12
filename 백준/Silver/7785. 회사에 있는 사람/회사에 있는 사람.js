const fs = require('fs')
const [_, ...arr] = fs.readFileSync(0).toString().trim().split('\n')
const set = new Set()

arr.forEach(i => {
  const [name, log] = i.split(' ')
  if (log === 'enter') set.add(name)
  else set.delete(name)
})

console.log([...set].sort().reverse().join('\n'))