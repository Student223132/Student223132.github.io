export function fib(n){
    let result = BigInt(0)
    let prev1 = 1;
    let prev2 = 0;
    if (n === 0){
        result = 0;
    }
    else{
        if (n === 1){
            result = 1;
        }
        else{
            for (let i = 2; i<=n;i++){
                result = prev1+prev2;
                prev2 = prev1;
                prev1 = result;
            }
        }
    }
    return result;
}