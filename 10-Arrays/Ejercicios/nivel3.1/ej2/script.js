function isUniform(arr) {
    if (arr.length === 0) {
        return true;
    }
    let firstElement = arr[0];
    for (let i = 1; i < arr.length; i++) {
       
        if (arr[i] !== firstElement) {
            return false;
        }
    }
    return true;
}

console.log(isUniform([1, 1, 1, 1])); // true
console.log(isUniform([1, 2, 1, 1])); // false
console.log(isUniform(["a", "b", "p"])); // false
console.log(isUniform(["b", "b", "b"])); // true
