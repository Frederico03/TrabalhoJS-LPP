// Add event listeners to checkboxes
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
    const label = this.parentNode.querySelector("label");
    if (this.checked) {
      label.style.textDecoration = "line-through";
    } else {
      label.style.textDecoration = "none";
    }
  });
});

// Add task functionality
const addButton = document.getElementById("addButton");
const taskInput = document.getElementById("taskInput");
const priorityInput = document.getElementById("priorityInput");
const dateInput = document.getElementById("dateInput");
const checklist = document.getElementById("checklist");



addButton.addEventListener("click", function () {
  const taskText = taskInput.value.trim();
  const taskPriority = priorityInput.value;
  const rawTaskDate = new Date(dateInput.value); // Parse the date
  const formattedTaskDate = rawTaskDate.toLocaleDateString("pt-BR"); // Format the date

  if (taskText !== "" && formattedTaskDate !== "Invalid Date") {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const label = document.createElement("label");
    label.textContent = taskText;
    label.style.marginRight = "10px";

    const priorityLabel = document.createElement("span");
    priorityLabel.textContent = `Prioridade: ${taskPriority}`;

    const dateLabel = document.createElement("span");
    dateLabel.textContent = `Data: ${formattedTaskDate}`;

    const removeButton = document.createElement("button");
    removeButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                                </svg>`;
    removeButton.classList.add("remove-button");
    removeButton.addEventListener("click", function () {
      li.remove(); // Remove o item da lista
    });

    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(priorityLabel);
    li.appendChild(dateLabel);
    li.appendChild(removeButton);
    checklist.appendChild(li);

    checkbox.addEventListener("change", function () {
      const label = this.parentNode.querySelector("label");
      if (this.checked) {
        label.style.textDecoration = "line-through";
      } else {
        label.style.textDecoration = "none";
      }
    });

    taskInput.value = "";
    dateInput.value = "";
    updateAddButtonState();
  } else {
    alert("Por favor, preencha todos os campos obrigatórios.");
  }
});
