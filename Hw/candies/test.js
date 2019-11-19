import { Module } from "module";

function candies(n,k,ar){
    ar.sort( function(a, b) {return b-a} );
    
    const min =ar[k-1];
    var dif;$
    let i=0; 
    while(i<k){
    dif=ar[i]-min;
    ar[i]-=dif;
    i++;
    }
    return ar;
    
}
console.log(candies(5,3,[3,4,5,6,4]));
console.log(module)













