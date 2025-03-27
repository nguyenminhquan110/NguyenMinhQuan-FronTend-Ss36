document.addEventListener("DOMContentLoaded", function () {
    const taskForm = document.getElementById("task-form");
    const taskInput = document.getElementById("task-input");
    const pendingTasks = document.getElementById("pending-tasks").querySelector("ul");
    const inProgressTasks = document.getElementById("in-progress-tasks").querySelector("ul");
    const completedTasks = document.getElementById("completed-tasks").querySelector("ul");

    // Lấy danh sách công việc từ localStorage
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // Hiển thị công việc từ localStorage
    function renderTasks() {
        pendingTasks.innerHTML = "";
        inProgressTasks.innerHTML = "";
        completedTasks.innerHTML = "";

        tasks.forEach(task => {
            const taskElement = document.createElement("li");
            taskElement.textContent = task.name;

            const button = document.createElement("button");
            if (task.status === "pending") {
                button.textContent = "Chuyển tiếp";
                button.addEventListener("click", () => updateTaskStatus(task.id, "in-progress"));
                pendingTasks.appendChild(taskElement);
            } else if (task.status === "in-progress") {
                button.textContent = "Chuyển tiếp";
                button.addEventListener("click", () => updateTaskStatus(task.id, "completed"));
                inProgressTasks.appendChild(taskElement);
            } else if (task.status === "completed") {
                button.textContent = "Đã hoàn thành";
                button.disabled = true;
                completedTasks.appendChild(taskElement);
            }
            taskElement.appendChild(button);
        });
    }

    // Thêm công việc mới
    taskForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const taskName = taskInput.value.trim();
        if (taskName) {
            const newTask = {
                id: Date.now(),
                name: taskName,
                status: "pending"
            };
            tasks.push(newTask);
            saveTasks();
            renderTasks();
            taskInput.value = "";
        }
    });

    // Cập nhật trạng thái công việc
    function updateTaskStatus(taskId, newStatus) {
        const task = tasks.find(t => t.id === taskId);
        if (task) {
            task.status = newStatus;
            saveTasks();
            renderTasks();
        }
    }

    // Lưu công việc vào localStorage
    function saveTasks() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    // Hiển thị công việc khi tải trang
    renderTasks();
});