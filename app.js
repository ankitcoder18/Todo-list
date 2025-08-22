let inp = document.getElementById("inp");
let text = document.querySelector(".text");

function Add() {
  if (inp.value.trim() === "") {
    alert("Please enter a task ✨");
  } else {
    let newTask = document.createElement("div");
    newTask.classList.add("task");

    newTask.innerHTML = `
      <p>${inp.value}</p>
      <div>
        <i class="fa-solid fa-check"></i>
        <i class="fa-solid fa-trash"></i>
      </div>
    `;

    // Mark task completed
    newTask.querySelector(".fa-check").addEventListener("click", function () {
      newTask.classList.toggle("completed");
      newTask.querySelector("p").style.textDecoration =
        newTask.classList.contains("completed") ? "line-through" : "none";
      newTask.querySelector("p").style.color =
        newTask.classList.contains("completed") ? "#aaa" : "#333";
    });

    // Delete task
    newTask.querySelector(".fa-trash").addEventListener("click", function () {
      newTask.style.animation = "fadeOut 0.4s forwards";
      setTimeout(() => newTask.remove(), 400);
    });

    text.appendChild(newTask);
    inp.value = "";
  }
}

// Enter key functionality
inp.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    Add();
  }
});

// Extra animation for delete
let style = document.createElement("style");
style.innerHTML = `
@keyframes fadeOut {
  to { opacity: 0; transform: translateX(50px); }
}`;
document.head.appendChild(style);
