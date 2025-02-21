const container = document.getElementById("container-div");
const addBtn = document.getElementById("add-task");
const modal = document.getElementById("modal");
const closs = document.getElementById("close");
const add1 = document.getElementById("add1");
const title = document.getElementById("title");
const date = document.getElementById("date");
const textArea = document.getElementById("text-area");


const todos = [];


add1.addEventListener("click", () => {
  modal.classList.remove("hidden");
  modal.classList.add("flex");
});

closs.addEventListener("click", (e)=>{
        e.preventDefault();
        modal.classList.remove("flex");
        modal.classList.add("hidden")
})