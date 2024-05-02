function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  
  function join(arr) {
    let result = '';
    for (let i = 0; i < arr.length; i++) {
      result += arr[i];
    }
    return result;
  }
  

  alert(sumArray([1, 2, 3])); // 6
  alert(sumArray([10, 3, 10, 4])); // 27
  alert(sumArray([-5, 100])); // 95
  alert(join(["h", "o", "l", "a"])); // "hola"
  alert(join(["c", "h", "a", "u"])); // "chau"
  