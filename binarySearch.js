const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let ans = 13;
let index = -1;

let low = 0;
let high = array.length-1;

while(high>low){
    let mid = Math.floor(((low+high)/2));
    if(array[mid] > ans){
        high = mid;
    }
    else if(array[mid] < ans){
        low = mid;
    }
    else{
        low = high;
        index = mid;
    }
}
console.log(index);





