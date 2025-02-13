function solution(nums) {
    let answer = 0;
    
    const isPrime = (num) => {
        for(let i = 2; num > i; i++) {
            if(num % i === 0) return false;
        }
        return num > 1;
    }

    const result = [];
    function helper(items, index) {
        if (items.length === 3) {
            result.push(items);
            return;
        }
        for (let i = index; i < nums.length; i++) {
            helper([...items, nums[i]], i + 1);
        }
    }
    helper([], 0);
    result.map(i => {if (isPrime(i.reduce((acc, n) => acc += n))) answer++});

    return answer
}