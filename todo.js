// init
let list = document.querySelector("#my-todo");
const todos = [
  "Hit the gym",
  "Read a book",
  "Buy eggs",
  "Organize office",
  "Pay bills"
];
for (let todo of todos) {
  addItem(todo);
}

function addItem(text) {
  let newItem = document.createElement("li");
  newItem.innerHTML = `
    <label for="todo">${text}</label>
    <i class="delete fa fa-trash"></i>
  `;
  list.appendChild(newItem);
}

// Create and add "如果 input 還沒有輸入內容，不會產生新的 todo"
const addBtn = document.querySelector("#addBtn");
addBtn.addEventListener("click", function (event) {
  let inputValue = document.querySelector("#newTodo").value;
  if (inputValue !== "") {
    addItem(inputValue);
  }
});

// Delete and check
// add'當你完成一項 todo 時，完成的 todo 會被送進另一個清單'
// add 新增完成後的顏色
list.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete")) {
    let li = event.target.parentElement;
    li.remove();
  } else if (event.target.tagName === "LABEL") {
    event.target.classList.toggle("checked");
    event.target.classList.add("red");
    let check = event.target.parentElement;
    let done = document.querySelector("#my-done");
    done.appendChild(check);
  }
});

// 當使用者在 input#newTodo 裡按下 Enter 鍵時，一樣可以新增 todo
const input = document.querySelector("input");
input.addEventListener("keypress", function (evevt) {
  let text = input.value;
  if (event.keyCode == 13) {
    addItem(text);
  }
});
