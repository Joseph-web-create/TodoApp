const container = document.getElementById("container-div");
const addBtn = document.getElementById("adding-task-data");
const taskForm = document.getElementById("taskform");
const modal = document.getElementById("modal");
const closs = document.getElementById("close");
const add1 = document.getElementById("add1");
const titleInput = document.getElementById("titleinput");
const dateInput = document.getElementById("dateinput");
const textArea = document.getElementById("text-area");


const taskData = [];


const addtask = () =>{
        const date1 = new Date();

        const taskObj = {
          id: `${titleInput.value
            .toLowerCase()
            .split("")
            .join("-")}-${date1.getTime()}
          `,
          title: titleInput.value,
          dueDate: dateInput.value,
          textArea: textArea.value,
          time: date1.getHours() + ":" + date1.getMinutes(),
        };

        taskData.unshift(taskObj)
        updatePage()
        console.log(taskObj);
}

const updatePage = () =>{
        
        taskData.forEach((task) =>{
                container.innerHTML += `
                <div class="p-3 rounded-[5px] bg-[#eeeeee]">
                        <h2 class="text-[1.5rem] font-bold " id="${task.id}">${task.title}</h2>
                        <p class="text-[green] my-[10px]">Due date: ${task.dueDate}</p>

                        <h2 class="font-bold mb-[5px]">Description</h2>
                        <p>${task.textArea}</p>
                        <div class="flex   justify-between items-center mt-[8px]">
                                <h3 class="bg-[var(--bgheader)] p-2 rounded-[5px] text-[white]">Time: ${task.time}</h3>
                                <button class="bg-red-400 p-2 w-[100px] hover:bg-red-200 rounded-[5px]
                                text-[white] cursor-pointer" onclick="deleteTask(this)">Delete</button>
                        </div>
                </div>`;
        })

        modal.classList.remove("flex");
        modal.classList.add("hidden");
}

console.log(taskData)

addBtn.addEventListener("click", addtask);

add1.addEventListener("click", () => {
  modal.classList.remove("hidden");
  modal.classList.add("flex");
});

closs.addEventListener("click", ()=>{
        modal.classList.remove("flex");
        modal.classList.add("hidden")
})

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  
});