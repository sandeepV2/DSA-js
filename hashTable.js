// create unique numbers for each input of strings.
// say a to z is mapped to prime numbers.
// sum of all the numbers MOD of size of the array.

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

[...Array(5).keys()];
alphabet = [..."abcdefghijklmnopqrstuvwxyz"];
let char_value = new Map();
let start = 2;
let idx = 0;
primes = [...Array(1000).keys()].map((i) => i + 2).filter(isPrime);
alphabet.forEach((element) => {
  char_value.set(element, primes[idx]);
  idx++;
});

// console.log(isPrime(11));
console.log(char_value);

function hash(str) {
  let hash_value = 0;

  for (const char of str) {
    // console.log(char, char_value[char]);
    hash_value += char_value.get(char);
  }
  console.log(hash_value);
  return hash_value % 10;
}

// console.log(hash("bag"));
let hash_table = [...Array(10).fill(0)];
function insert_into_hashtable(productObj) {
  let hash_v = hash(productObj.name);
  hash_table[hash_v] = productObj.price;
}

function get_price(prodName) {
  let hash_v = hash(prodName);
  return hash_table[hash_v];
}

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

let prodObj1 = new Product("bag", 101);
let prodObj2 = new Product("tie", 102);
let prodObj3 = new Product("mouse", 103);
let prodObj4 = new Product("house", 104);

console.log(prodObj3);
insert_into_hashtable(prodObj1);
insert_into_hashtable(prodObj2);
insert_into_hashtable(prodObj3);
insert_into_hashtable(prodObj4);
console.log(hash_table);
console.log(get_price("mouse"));

function range(start, end) {
  return Array.apply(0, Array(end - 1)).map((_, index) => index + start);
}

console.log(range(3, 20));
