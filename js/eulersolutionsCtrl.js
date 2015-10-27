app.controller('eulersolutionsCtrl',
        function($scope){
                $scope.message = "Angular is pretty awesome!";
                $scope.solutions = [
                        {"nr":1,
                        "solution": function(){
                                if(this.implemented){
                                //multiples of 3 or 5 in range [0..1000]
                                var x = new Date();
                                var result = 0;
                                var numbers = [];
                                var isMultiple = false;
                                for (var i = 0; i < 1000; i++) {
                                        if (i % 3 == 0) {
                                                result += i;
                                                isMultiple = true;
                                        } else if (i % 5 == 0) {
                                                result += i;
                                                isMultiple = true;
                                        };
                                        if (isMultiple) {
                                                numbers.push(i);
                                                isMultiple = false;
                                        };
                                }
                                this.time = new Date() - x + "ms";
                                this.answer = result;
                                } else {
                                  $scope.notImplemented();
                                }
                        },
                        "answer": "",
                        "time": "",
                        "implemented": true
                        },
                        {"nr":2,
                        "solution": function(){
                                if(this.implemented){
                                //sum of all even valued fibonacci number with a value that doesn't exceed four mill.
                                var x = new Date();
                                var result = 0;
                                var number = 0;
                                var nrOne = 1;
                                var nrTwo = 1;
                                while(number < 4*10e5){
                                        console.log('Currently processing: '+ number);
                                        number = nrOne + nrTwo;
                                        if(number % 2 == 0) {
                                                result += number;
                                        }
                                        nrOne = nrTwo;
                                        nrTwo = number;
                                }
                                this.time = new Date() - x + "ms";
                                this.answer = result;
                                } else {
                                  $scope.notImplemented();
                                }
                        },
                        "answer": "",
                        "time": "",
                        "implemented": true
                        },
                        {
                                "nr":3,
                                "solution": function(){
                                    if(this.implemented){
                                        //Find the largest prime factor of 600851475143
                                        var origNr = 600851475143;
                                        var remainder = origNr;
                                        var sqrtOfRemainder = Math.sqrt(origNr);
                                        var primes = [];
                                        var hasRemainder = true;
                                        var counter = 2;
                                        var finished = false;
                                        while (!finished) {
                                                if (primes.length > 0){

                                                } else {
                                                        while (hasRemainder) {
                                                                if ($scope.isPrime(counter)){
                                                                        //push prime to primes-array if not exist
                                                                        if(remainder%counter==0){
                                                                                //counter is a prime factor of the number
                                                                                remainder = remainder / counter;
                                                                                sqrtOfRemainder = Math.sqrt(remainder);
                                                                        } // if
                                                                } // if
                                                        } // while
                                                } // if .. else
                                        } // while
                                    } else {
                                      $scope.notImplemented();
                                    }
                                },
                                "answer": "",
                                "time": "",
                                "implemented": false
                        },
               {
                 "nr":4,
               "solution": function(){
                 if(this.implemented){
                 var x = new Date();
                 var product;
                 var palindrome = 0;
                 var text;
                 
                 for(x=999;x>99;x--){
                   for(y=999;y>99;y--){
                     product = x*y;
                     text = product+"";
                     if(text == text.split('').reverse().join('')){
                       if(product > palindrome){
                         palindrome = product;
                      }
                    }
                  }
                }
                this.answer = palindrome;
                this.time = new Date() - x + "ms"
                 } else {
                   $scope.notImplemented();
                }
              },
               "answer":"",
               "time":"",
               "implemented": true
              },
               {
                 "nr":6,
               "solution": function(){
                 if(this.implemented){
                   var x = new Date();
                   var sumOfSquares = 0;
                   var squareOfSum = 0;
                   var sumOfNumbers = 0;
                   
                   for(var i = 1; i < 100; i++){
                     sumOfSquares = i * i;
                     sumOfNumbers += i;
                  }
                  
                  squareOfSum = sumOfNumbers^2;
                  
                  this.answer = sumOfSquares - squareOfSum;
                  this.time = new Date() - x + "ms";
                } else {
                  $scope.notImplemented();
                }
              },
               "answer":0,
               "time":0,
               "implemented": true
              }
                ];
                $scope.executeSolution = function(solution){

                };
                $scope.notImplemented = function(){
                  alert("This method is not implemented yet!");
                };
                $scope.isPrime = function(n) {
                        if (isNaN(n) || !isFinite(n) || n%1 || n<2) return false;
                        if (n%2 == 0) return (n==2);
                        if (n%3 == 0) return (n==3);
                        var m = Math.sqrt(n);
                        for (var i=5;i<=m;) {
                                if (n%i==0) return false;
                                if (n%(i+2)==0) return false;
                        }
                        return true;
                }
        });