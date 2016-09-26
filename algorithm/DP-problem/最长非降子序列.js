/**
 * Created by tlhagh on 2016/9/13.
 */
function main(arr){
    var dp=[],res=0,n=arr.length;
    for (var i = 0; i < arr.length; i++) {
        dp[i]=1;
        for(var j=0;j<i;j++){
            if(arr[j]<arr[i]&&dp[j]+1>dp[i]){
                dp[i]=dp[j]+1;
            }
        }
    }
    for(var i=0;i<n;i++)
        if(res<dp[i])
            res=dp[i];
    return res;
}
console.log(main([5, 3, 4, 8, 6,7,8,9,10]));


function longStr(str1,str2){


    var la = str1.length;
    var lb = str2.length;
    var dp=[];
    for(var m=0;m<=la;m++){
        dp[m]=[];
        for (var n = 0; n <=lb; n++) {
            dp[m][n]=0;
        }
    }

    for ( var i = 1; i <= la; i++) {
        for ( var j = 1; j <= lb; j++){
            if (str1[i - 1] == str2[j - 1]){
                dp[i][j] = dp[i-1][j-1]+1;
            }
            else{
                dp[i][j] = Math.max(dp[i-1][j],dp[i][j-1]);
            }
        }
    }
    return dp[la][lb];
}
var arr1="123";
console.log(arr1 instanceof String);
console.log(arr1[0] instanceof String);

