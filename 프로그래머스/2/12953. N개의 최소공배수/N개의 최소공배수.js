const gcd = (a,b) => {
    if(b === 0){
        return a;
    }else if(a%b === 0){
        return b;
    }else{
        return gcd(b, a%b);
    };
};

const lcm = (a,b) => {
    return (a*b) / gcd(a,b);
};

function solution(arr){
  let answer = 1;
  for (let i = 0; i < arr.length; i++) {
    answer = lcm(answer, arr[i]);
  };
  return answer;
};