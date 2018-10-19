/**
 * Created by tlhagh on 2016/9/9.
 */
//x行y列矩阵图求路径条数问题（简单dp）
function main(x,y){
    var arr=[];
    for (var i = 0; i < x; i++) {
        arr[i] = [];
        for (var j = 0; j < y; j++) {
            arr[i][j]=0;
        }
    }
    for(var j=0;j<y;j++)
        arr[0][j]=1;              //第一行进行初始化
    for(var i=0;i<x;i++)
        arr[i][0]=1;              //第一列进行初始化
    console.log(arr);
    for(var i=1;i<x;i++)
    {
        for(var j=1;j<y;j++)
            arr[i][j]=arr[i][j-1]+arr[i-1][j];   //状态转移方程
    }
    return arr[x-1][y-1];
}
console.log(main(4,2));