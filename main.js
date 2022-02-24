function min(a,b){
    if (a<b){
        return a;
    } else {
        return b
    }
}
let result=min(134,135);
console.log(result);
function pow(x, n) {
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  
    return result;
  }

  let x = prompt("x?", '');
  let n = prompt("n?", '');
  
  if (n < 1) {
    alert(`Степень ${n} не поддерживается, используйте натуральное число`);
  } else {
    alert( pow(x, n) );
  }

var z = 5921;
var y = 0;
for(; z; z = Math.floor(z / 10)) {
    y *= 10;
    y += z % 10;
}
console.log(y);