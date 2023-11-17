function solution(b, s) {
    let dp = Array.from({ length: b + 1 }, () => Array(s + 1).fill(0));
    function a(n, k) {
        if (dp[n][k] !== 0) {
            return dp[n][k];
        }
        if (k === 0 || n === k) return 1;
        dp[n][k] = a(n - 1, k - 1) + a(n - 1, k);
        return dp[n][k];
    }
    return a(b, s);
}
