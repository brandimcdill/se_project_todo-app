class Todo {
  constructor(data, selector) {
    this._data = data;
    this._templateElement = document.querySelector(selector);
  }

  _setEventListeners() {
    this._todoCheckboxEl.addEventListener("change", () => {
      this._data.completed = !this._data.completed;
    });
    this._todoDeleteBtn.addEventListener("click", () => {
      this._templateElement.remove();
    });
  }

  _generateCheckboxEl() {
    this._todoCheckboxEl =
      this._templateElement.querySelector(".todo__completed");
    this._todoLabel = this._templateElement.querySelector(".todo__label");
    this._todoCheckboxEl.checked = this._data.completed;
    this._todoCheckboxEl.id = `todo-${this._data.id}`;
    this._todoLabel.setAttribute("for", `todo-${this._data.id}`);
  }

  getView() {
    this._templateElement = this._templateElement.content
      .querySelector(".todo")
      .cloneNode(true);

    this._todoNameEl = this._templateElement.querySelector(".todo__name");

    this._todoDate = this._templateElement.querySelector(".todo__date");
    this._todoDeleteBtn =
      this._templateElement.querySelector(".todo__delete-btn");

    this._todoNameEl.textContent = this._data.name;
    //TODO - implement dates
    // If a due date has been set, parsing this it with `new Date` will return a
    // number. If so, we display a string version of the due date in the todo.
    this._dueDate = new Date(this._data.date);
    if (!isNaN(this._dueDate)) {
      this._todoDate.textContent = `Due: ${this._dueDate.toLocaleString(
        "en-US",
        {
          year: "numeric",
          month: "short",
          day: "numeric",
        }
      )}`;
    }

    this._generateCheckboxEl();
    this._setEventListeners();

    return this._templateElement;
  }
}
export default Todo;
