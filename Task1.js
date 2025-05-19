// 1. Check if a number is prime
function isPrime(n) {
    if (n <= 1) return false; // Numbers less than or equal to 1 are not prime

    // Checking from 2 to square root of n
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false; // If divisible, not prime
    }
    return true; // No divisors found, prime number
}

// Example usage
let number = 12;
console.log(`${number} is ${isPrime(number) ? "a prime" : "not a prime"} number.`);


// 2. Temperature converter (Celsius ↔ Fahrenheit)
function celsiusToFahrenheit(celsius) {
    // Formula: (C * 9/5) + 32
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    // Formula: (F - 32) * 5/9
    return (fahrenheit - 32) * 5/9;
}

// Example usage
let celsius = 25;
console.log(`${celsius}°C is ${celsiusToFahrenheit(celsius)}°F`);

let fahrenheit = 77;
console.log(`${fahrenheit}°F is ${fahrenheitToCelsius(fahrenheit)}°C`);


// 3. Print the multiplication table of a given number
function multiplicationTable(n, limit = 10) {
    for (let i = 1; i <= limit; i++) {
        console.log(`${n} x ${i} = ${n * i}`);
    }
}

// Example usage
console.log(`Multiplication Table of 5:`);
multiplicationTable(5);


// 4. Find the largest and smallest number in an array
function findLargestSmallest(arr) {
    if (arr.length === 0) return {largest: null, smallest: null};

    let largest = arr[0];
    let smallest = arr[0];

    for (let num of arr) {
        if (num > largest) largest = num;
        if (num < smallest) smallest = num;
    }

    return {largest, smallest};
}

// Example usage
let array = [3, 1, 4, 1, 5, 9, 2, 6, 5];
let {largest, smallest} = findLargestSmallest(array);
console.log(`Array: [${array.join(", ")}]`);
console.log(`Largest number: ${largest}`);
console.log(`Smallest number: ${smallest}`);

