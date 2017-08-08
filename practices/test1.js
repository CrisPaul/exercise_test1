'use strict';
//var n=90;
function isPrime(n){
  for(var i= 2;i<=Math.sqrt(n);i++){
    if(n%i ==0){
      return false;
    }
  }
  return true;
}
function PrimerFactor(n){
  var hash = [];
  var collection = [];
  while(n>1){
    for(var i=2;i<=n;i++){
      if(isPrime(i) && n % i == 0){
        //如果hash中有这个质数，则存储的数目+1
        if(hash[i]){
          hash[i] = hash[i] + 1;
        }//否则把该质数作为key，value为1
        else{
          hash[i] = 1;
        }
        //除掉这个最小的质数因子
        n /= i;
        collection .push(i);
      }
    }

  }
  return collection;
}

module.exports = PrimerFactor;
