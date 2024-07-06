
let One=document.getElementById("one");
let two=document.getElementById("two");
let three=document.getElementById("three");
let add=document.getElementById("add");

let result=document.getElementById("result");
One.addEventListener("click",function() {
    result.innerHTML=One.innerHTML;
})
two.addEventListener("click",function() {
    result.innerText=two.innerText;
})
console.log(One);
console.log(two);
console.log(add);


