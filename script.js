  document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("new-task");
  const addTaskButton = document.getElementById("add-task-button");
  const taskList = document.getElementById("task-list");
  const filterButtons = document.querySelectorAll(".filter-btn");

  let tasks = [];

  addTaskButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
      const task = {
        id: Date.now(),
        text: taskText,
        completed: false,
      };
      tasks.push(task);
      taskInput.value = "";
      renderTasks();
    }
  });

  taskList.addEventListener("click", (e) => {
    if (e.target.classList.contains("task-text")) {
      const taskId = e.target.parentElement.dataset.id;
      tasks = tasks.map((task) => {
        if (task.id == taskId) {
          task.completed = !task.completed;
        }
        return task;
      });
      renderTasks();
    }
  });

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelector(".filter-btn.active").classList.remove("active");
      button.classList.add("active");
      renderTasks();
    });
  });

  function renderTasks() {
    const filter = document.querySelector(".filter-btn.active").id;
    taskList.innerHTML = "";

    tasks
      .filter((task) => {
        if (filter === "filter-all") return true;
        if (filter === "filter-active") return !task.completed;
        if (filter === "filter-completed") return task.completed;
      })
      .forEach((task) => {
        const li = document.createElement("li");
        li.classList.add("task-item");
        li.dataset.id = task.id;
        li.innerHTML = `
                    <span class="task-text ${
                      task.completed ? "completed" : ""
                    }">${task.text}</span>
                `;
        taskList.appendChild(li);
      });
  }
});

const motivationSentences = [
  "You're stronger than you think.",
  "If you don't take risks, you can't create a future.",
  "Sometimes, life sucks and you have to keep on moving.",
  "The biggest adventure you can ever take is to live the life of your dreams.",
  "Pave your own road, don't follow the others blindly.",
  "We walk a path of thorns to reach a garden of roses.",
  "Every loss we have is an opportunity for us to grow.",
  "This world is cruel and merciless.. But it's also very beautiful. Never forget that.",
  "But nothing's ever perfect, haven't you realised that yet? Earth turns on a tilted axis just doing the best it can.",
  "If you still can't do it, then you probably aren't putting in the work.",
  "Midgets have it harder than you. - Gab Patriarca",
  "Don't let these walls talk tuhya.",
  "Pre thats MASSIVE. - Elijah Masangkay",
  "I have a huge IQ, and not something else. - Francis San Jose",
  "Don't be a buzzcut, be a low taper fade.",
  "Bro why did you guys think it was small? - Elijah Masangkay",
];

const motivationElement = document.getElementById("motivation");
const rouletteElement = document.getElementById("roulette");

function getRandomMotivation() {
  const randomIndex = Math.floor(Math.random() * motivationSentences.length);
  motivationElement.textContent = motivationSentences[randomIndex];
}

rouletteElement.addEventListener("click", getRandomMotivation);

getRandomMotivation();

/* edit mental check-up msgs here bass */
function happy() {
  const element = document.getElementById("message");
  element.innerHTML =
    "We're so pleased to hear that! Keep on spreading that positivity to everyone!";
}
function sad() {
  const element = document.getElementById("message");
  element.innerHTML =
    "To be honest, you're not alone. Push through it. You're stronger than you know. Everything will be alright in time, but for now, keep going!";
}
function angry() {
  const element = document.getElementById("message");
  element.innerHTML =
    "Try and calm down, put on some music, or just take a deep breath. Don't take it all out on the wrong person or the wrong thing.";
}
function stressed() {
  const element = document.getElementById("message");
  element.innerHTML =
    "Wherever you're from, we get that stress you're feeling right now. Try to concentrate, and remember you're not alone in this.";
}
function focused() {
  const element = document.getElementById("message");
  element.innerHTML =
    "Keep focusing on what you're doing, your lock-in will be crazy! We believe in you!";
}

document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("new-task");
  const addTaskButton = document.getElementById("add-task-button");
  const taskList = document.getElementById("task-list");
  const filterButtons = document.querySelectorAll(".filter-btn");

  let tasks = [];

  addTaskButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
      const task = {
        id: Date.now(),
        text: taskText,
        completed: false,
      };
      tasks.push(task);
      taskInput.value = "";
      renderTasks();
    }
  });

  taskList.addEventListener("click", (e) => {
    if (e.target.classList.contains("task-text")) {
      const taskId = e.target.parentElement.dataset.id;
      tasks = tasks.map((task) => {
        if (task.id == taskId) {
          task.completed = !task.completed;
        }
        return task;
      });
      renderTasks();
    }
  });

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelector(".filter-btn.active").classList.remove("active");
      button.classList.add("active");
      renderTasks();
    });
  });

  function renderTasks() {
    const filter = document.querySelector(".filter-btn.active").id;
    taskList.innerHTML = "";

    tasks
      .filter((task) => {
        if (filter === "filter-all") return true;
        if (filter === "filter-active") return !task.completed;
        if (filter === "filter-completed") return task.completed;
      })
      .forEach((task) => {
        const li = document.createElement("li");
        li.classList.add("task-item");
        li.dataset.id = task.id;
        li.innerHTML = `
                    <span class="task-text ${
                      task.completed ? "completed" : ""
                    }">${task.text}</span>
                `;
        taskList.appendChild(li);
      });
  }
});

document
  .getElementById("background-switcher")
  .addEventListener("click", function () {
    var body = document.body;
    if (body.style.backgroundImage) {
      body.style.backgroundImage = "";
    } else {
      body.style.backgroundImage =
        "url(https://github.com/sebastianarcilla/cs06cs13project/blob/main/light%20mode.jpg?raw=true)";
    }
  });
