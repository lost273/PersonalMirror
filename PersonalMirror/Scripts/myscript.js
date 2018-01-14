var strSum = prompt("Enter the sum", 1000);
var strPercent = prompt("Enter the percentage", 10);
var sum = parseInt(strSum);
var procent = parseInt(strPercent);
sum = sum + sum * procent / 100;
alert("Deposit is: " + sum);