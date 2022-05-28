const arrayOfNums: number[] = [0, 1, 3,  5, 7];
const secondArrOfNums: number[] = [2, 4, 6, 8];
//concat two arrays
const unionOfTwoArrays: number[] = arrayOfNums.concat(secondArrOfNums);
console.log(unionOfTwoArrays);
const logArrays = (array: number[]) => {
    array.forEach((element: number) => console.log(element));
    for(const element of array)
        console.log(element);
}
//indexOf() return index of first match
console.log("index of 7 is", unionOfTwoArrays.indexOf(7));
//logArrays(unionOfTwoArrays);


