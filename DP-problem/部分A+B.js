/**
 * Created by tlhagh on 2016/9/12.
 */
function f(n)
{
    if (n == 1000000007)
        return 0;
    return 1 + Math.min(f((n - 3) / 4), f((n - 7) / 8));
}
console.log(f(125000000));