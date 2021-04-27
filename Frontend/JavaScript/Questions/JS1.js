/* Q1*/
function is_integer(n) {
  return typeof n == "number" && Math.floor(n) == n; //nearest no
}

/* Q2*/
function numberSum(N) {
  var total = 0;
  for (var i = 1; i <= N; i++) {
    total += i;
  }
  return total;
}

/* Q3*/
function temp_conv(from, reading) {
  if (from === "celsius") {
    return (reading * 9) / 5 + 32 + " degree F";
  } else {
    return ((reading - 32) * 5) / 9 + " degree celsius";
  }
}

/* Q4*/
function factorial(n) {
  var fact = 1;
  for (var i = 1; i <= n; i++) {
    fact = fact * i;
  }
  return fact;
}

/* Q5*/
function convert_to_coins(amount) {
  var denominations = [25, 10, 5, 2, 1];
  var coins = 0;
  while (amount > 0) {
    while (amount < denominations[coins]) {
      coins++;
    }
    amount = amount - denominations[coins];
    console.log(denominations[coins]);
  }
}
