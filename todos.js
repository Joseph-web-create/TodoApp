const container = document.getElementById("container-div");
const addBtn = document.getElementById("adding-task-data");
const taskForm = document.getElementById("taskform");
const modal = document.getElementById("modal");
const closs = document.getElementById("close");
const add1 = document.getElementById("add1");
const titleInput = document.getElementById("titleinput");
const dateInput = document.getElementById("dateinput");
const textArea = document.getElementById("text-area");

const taskData = JSON.parse(localStorage.getItem("Mydata")) || [];

const addtask = () => {
  const date1 = new Date();

  if (
    titleInput.value.trim() === "" ||
    dateInput.value === "" ||
    textArea.value.trim() === ""
  ) {
    alert(`Input field's are empty enter your input's`);
    modal.style.display = "none";
    return;
  }

  const taskObj = {
    id: `${titleInput.value
      .toLowerCase()
      .split(" ")
      .join("-")}-${date1.getTime()}
          `,
    title: titleInput.value,
    dueDate: dateInput.value,
    textArea: textArea.value,
    time: date1.getHours() + ":" + date1.getMinutes(),
  };

  taskData.unshift(taskObj);

  localStorage.setItem("Mydata", JSON.stringify(taskData));

  updatePage();
  reset();
};

const updatePage = () => {
  container.innerHTML = taskData
    .map(
      (task) => `
    <div class="p-3 rounded-[5px] bg-[#eeeeee] w-[100%]" id="${task.id}">
      <h2 class="text-[1.5rem] font-bold">${task.title}</h2>
      <p class="text-[green] my-[10px]">Due date: ${task.dueDate}</p>
      <h2 class="font-bold mb-[5px]">Description</h2>
      <p>${task.textArea}</p>
      <div class="flex justify-between items-center mt-[8px]">
        <h3 class="bg-[var(--bgheader)] p-2 rounded-[5px] text-[white]">Time: ${task.time}</h3>
        <button class="bg-red-400 p-2 w-[100px] hover:bg-red-200 rounded-[5px] text-[white] cursor-pointer" 
          onclick="deleteTaskBtn(this)">Delete</button>
      </div>
    </div>
  `
    )
    .join("");

  modal.style.display = "none";
};

const deleteTaskBtn = (ele) => {
  const findId = taskData.findIndex((task) => task.id === ele.parentElement.id);
  taskData.splice(findId, 1);
  ele.parentElement.remove();
  localStorage.setItem("Mydata", JSON.stringify(taskData));
  updatePage();
};

const reset = () => {
  titleInput.value = "";
  dateInput.value = "";
  textArea.value = "";
};

addBtn.addEventListener("click", addtask);

add1.addEventListener("click", () => {
  modal.style.display = "flex";
});

closs.addEventListener("click", () => {
  modal.style.display = "none";
});

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

document.addEventListener("DOMContentLoaded", updatePage);
