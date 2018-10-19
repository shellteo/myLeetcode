/**
 * Created by tlhagh on 2016/9/13.
 */

/**
 * 数塔问题 是动态规划经典的题目，下面来初步讲解下
 * 将一个由N 行数字组成的三角形，如图所以，设计一个算法，计算出三角形的由顶至底的一条路径，使该路径经过的数字总和最大。
 * @param arr
 * @returns {*}
 */
function main(arr)
{
    for (var i=arr.length-1; i>0; i--){
        for (var j=0; j<i; j++){
            arr[i-1][j]+=Math.max(arr[i][j],arr[i][j+1]);
        }
    }
    return arr[0][0];
}
var arr=[];
for(var i=0;i<5;i++){
    arr[i]=[];
    for (var j = 0; j <=i; j++) {
        arr[i][j]=0
    }
}
arr[0][0]=7;
arr[1][0]=3;
arr[1][1]=8;
arr[2][0]=8;
arr[2][1]=1;
arr[2][2]=0;
arr[3][0]=2;
arr[3][1]=7;
arr[3][2]=4;
arr[3][3]=4;
arr[4][0]=4;
arr[4][1]=5;
arr[4][2]=2;
arr[4][3]=6;
arr[4][4]=5;
console.log(arr);
console.log(main(arr));

