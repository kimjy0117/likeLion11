let fun1 = document.getElementById("input1")
let submit1 = document.getElementById("submit1")

let fun2 = document.getElementById("input2")
let submit2 = document.getElementById("submit2")

let ToDo1 = {
    index: Number,
    content: String,
    check: Boolean,
};

let ToDo2 = {
    index: Number,
    content: String,
    check: Boolean,
};

let arr1 = [];
let arr2 = [];
let count1 = 0;
let count2 = 0;
let elResult1;
let elResult2;

function show1(){
    ToDo1.index = count1;
    ToDo1.content = fun1.value;
    ToDo1.check = false;
    arr1.push(ToDo1);
    elResult1 = document.getElementById('result1'+count1);
    elResult1.innerText = arr1[count1].content;
    fun1.value = '';
    count1++;
}

function show2(){
    ToDo2.index = count2;
    ToDo2.content = fun2.value;
    ToDo2.check = false;
    arr2.push(ToDo2);
    elResult2 = document.getElementById('result2'+count2);
    elResult2.innerText = arr2[count2].content;
    fun2.value = '';
    count2++;
}

submit1.addEventListener('click', show1);
submit2.addEventListener('click', show2);
