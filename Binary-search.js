let numbers = [3, 7, 11, 15, 20, 25, 30];
let target = 25;
let left = 0;
let right = numbers.length - 1;

while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (numbers[middle] === target) {
        console.log("Found at index:", middle);
        break;
    }
    else if (numbers[middle] < target) {
        left = middle + 1;
    }
    else {
        right = middle - 1;
    }
}
