const fs = require('fs')
const [n, ...arr] = fs.readFileSync(0).toString().trim().split('\n')
let stack = []
arr.map((item, index) => {
    const [com, num] = item.split(' ')
    switch (com) {
        case 'push':
            stack.push(num)
            break
        case 'pop':
            console.log(stack.pop() ?? '-1')
            break
        case 'size':
            console.log(stack.length)
            break
        case 'empty':
            console.log(stack.length == 0 ? '1' : '0')
            break
        case 'top':
            console.log(stack[stack.length - 1] ?? -1)
            break
        default:
            break
    }
})