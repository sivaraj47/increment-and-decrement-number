let incr = document.getElementById("inc");
let dec = document.getElementById("dec");
let count = 0;

incr.addEventListener("click",()=>{
  count++;
  document.getElementById("view").innerHTML="The Value is &nbsp;"+ count;
});

dec.addEventListener("click",()=>{
  count--;
  document.getElementById("view").innerHTML="The Value is " + count;
});
