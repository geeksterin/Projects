function numberSum(N) {
                                var total = 0;
                                for (var i = 1; i <= N; i++) {
                                    total += i;
                                }
                                return total;
}
                            
//console.log(numberSum(8))

function factorial(n) {
                                    var fact = 1;
                                    for (var i = 1; i <= n; i++) {
                                        fact = fact * i;
                                    }
                                    return fact;
}
      
//console.log(factorial(8))

function calculateArea(myRadius) {
                    return (myRadius * myRadius * Math.PI);
}
                

//console.log(calculateArea(6))

function fToC(fahrenheit) {
                            
                            return (fahrenheit - 32) * 5 / 9;
                            
                           
}
                        console.log(fToC(45));