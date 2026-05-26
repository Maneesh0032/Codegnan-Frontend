let taskForm = document.getElementById("taskForm");
let taskName = document.getElementById("taskName");
let taskDesc = document.getElementById("taskDesc");
let taskList = document.getElementById("taskList");
let searchTask = document.getElementById("searchTask");
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

window.onload = () => {
    displayTasks(tasks);
};

function addTask(e){
    e.preventDefault();
    let task = {
        id: Date.now(),
        name: taskName.value,
        description: taskDesc.value
    };
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks(tasks);
    taskForm.reset();
}

function displayTasks(data){
    taskList.innerHTML = "";
    data.map((item) => {
        let card = document.createElement("div");
        card.classList.add("task-card");
        card.innerHTML = `
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <button class="delete-btn" onclick="deleteTask(${item.id})">
                Delete
            </button>`;
        taskList.appendChild(card);
    });
}
function deleteTask(id){
    tasks = tasks.filter((item) => item.id !== id);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks(tasks);
}


searchTask.addEventListener("keyup", () => {
    let value = searchTask.value.toLowerCase();
    let filteredTasks = tasks.filter((item) =>
        item.name.toLowerCase().includes(value)
    );
    displayTasks(filteredTasks);
});


let weatherBtn = document.getElementById("weatherBtn");
let weatherResult = document.getElementById("weatherResult");

weatherBtn.onclick = async function(){
    let city = document.getElementById("city").value;
    if(city === ""){
        alert("Please enter city name");
        return;
    }
    try{
        let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=546f52b7c0269a013a845e161628bdb5&units=metric`
);
        let data = await response.json();
        if(data.cod == 200){
            weatherResult.innerHTML = `
                <h3>${data.name}</h3>
                <p>Temperature: ${data.main.temp} °C</p>
            `;
        }else{
            weatherResult.innerHTML = `
                <p>City not found</p>`;
        }

    }
    catch(error){

        weatherResult.innerHTML = `
            <p>Something went wrong</p>`;
    }

};