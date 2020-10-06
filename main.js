var elementos = 1000;
var metodo = new Array(elementos - 1).fill(1);
var maxDivisor = Math.floor(Math.sqrt(elementos));
var primos = [];

for (let i = 2; i <= maxDivisor; i++) {
  if (metodo[i - 2]) {
    for (let j = i; j <= Math.floor(elementos / i); j++) {
      metodo[i * j - 2] = 0;
    }
  }
}

metodo.forEach((primo, index) => {
  if (primo) primos.push(index + 2);
});

console.log(primos);
