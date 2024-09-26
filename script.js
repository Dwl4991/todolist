document.addEventListener("DOMContentLoaded", function () {
  const toDoForm = document.getElementById("toDoForm");
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  //load task form localstorage
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  // Function to render tasks
  function renderTasks() {
    taskList.innerHTML = ""; //clear existing tasks
    tasks.forEach((task, index) => {
      const li = document.createElement("li");
      li.textContent = task;

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.addEventListener("click", function () {
        removeTask(index);
      });
      li.appendChild(deleteBtn);
      taskList.appendChild(li);
    });
  }

  //function to add a task
  function addTask(task) {
    if (task) {
      tasks.push(task);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      renderTasks();
    }
  }

  //fungsi untuk menghapus
  function removeTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
  }

  //Handle form submision
  toDoForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const task = taskInput.value.trim();
    addTask(task);
    taskInput.value = ""; //clearing input after adding task
  });

  // Initial render
  renderTasks();
});
