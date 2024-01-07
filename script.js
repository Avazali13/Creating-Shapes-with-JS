// //! task 1
document.write("Task1", "<br>");
let b = 13;
let halfYolka = "";
for (let i = 0; i < b; i++) {
  halfYolka += "*";
  document.write(halfYolka);
  document.write("<br>");
}
document.write('<br>')


// ! task 2
let a = 13;
let kvadratYolka = "";
document.write("Task2", "<br>");
for (let i = 0; i < a; i++) {
  for (let j = 0; j < a; j++) {
    document.write("  *  &nbsp");
  }

  document.write("<br>");
}
document.write('<br>')











// //!Task 3

document.write("Task 3", "<br>");


const kvadrat=function(c){
  for(let i=0;i<c;i++){
    document.write(" *")
  
  }
  document.write('<br>')
  for(let i=0;i<c-2;i++){
    document.write("*")
   
  for(let j=0;j<c-2;j++){
    document.write(" &nbsp&nbsp ")
  }
  document.write('*')
  document.write('<br>')
  }
  for(let i=0;i<c;i++){
    document.write(" *")
  
  }
}

kvadrat(13)

document.write('<br>');
document.write('<br> <br> <br>')
// //!Task 4 
document.write('Task 4 <br> <br>')

let d=8;

for(let i=0;i<d;i++){
  for(let j=d;j>i;j--){
    document.write('&nbsp&nbsp')
  }
  for(let k=0;k<=(i*2);k++){
    document.write('*')
  }
  document.write('<br>')
}

document.write('<br>');


//! Task 5

document.write('Task 5 Fibonacci <br> ')

const Fibonacci=function(fib){
  let arr=[0,1];
  for(let i=0;i<fib-2;i++){
    arr.push(arr[i]+arr[i+1])
  }
  document.write('<br>',arr)
}

Fibonacci(7);

//! Task 6
document.write('<br> <br> <br>')
document.write('Task 6 <br> <br>')
let f=5;

for(let i=1;i<=10;i++){
  for(let j=0;j<=10;j++){
    document.write(`${i} x ${j} = ${i*j}`)
    document.write('<br>')
  }
  document.write('----------------');
  document.write('<br>')
}


document.write('<br>')
