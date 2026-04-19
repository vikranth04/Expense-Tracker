const add_task=document.getElementById("input-button");
add_task.addEventListener("click", function () {
let input_box = document.getElementById("input-box");
let ul = document.querySelector("ul");
let li = document.createElement("li");
let span = document.createElement("span");

let input = input_box.value;
if (input === "") return;
span.textContent = input;
li.appendChild(span);
ul.appendChild(li);
input_box.value = ""; 
// deleting the task
const deleteBT=document.getElementById("delete-task");
deleteBT.addEventListener("click",function(){
li.remove();
})
});