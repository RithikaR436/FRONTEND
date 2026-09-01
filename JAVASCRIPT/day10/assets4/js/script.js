
function sumAll(...numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}
console.log(sumAll(1, 2, 3, 4, 5)); 


const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];
const combined = [...nums1, ...nums2];
console.log(combined); 