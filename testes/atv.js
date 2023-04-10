
const lucas = ["testando", "Arrays", "ou", "seila"];

let LCjoin = LC.join("-");

console.log(LCjoin);

// atv2 ====================================================\\

const ordem = ["testando", "Arrays", "ou", "seila"];

ordem.shot();

console.log(ordem);


//==========================================================\\


function myfunction(a,b){
    let array = [];
    if(a.indexof(b) !==-1) {
        array.push(b+a);
        return array;
    } 
    
    else{
        array.push(a+b);
        return array;
    }
}

console.log(myfunction ('a','b'));


//=================================================\\

const testshift = ["não", "gosto", "do", "curso"];

testshift.shift(); 

console.log(testshift);  