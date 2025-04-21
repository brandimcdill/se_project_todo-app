class Todo {
  constructor(data, selector, handleCheck, handleDelete) {
    this._data = data;
    this._completed = data.completed;
    this._name = data.name;
    this._date = data.date;
    this._id = data.id;
    this._selector = selector;
    this._handleCheck = handleCheck;
    this._handleDelete = handleDelete;
    this._templateElement = document.querySelector(selector);
  }

  _setEventListeners() {
    this._deleteBtnEl.addEventListener("click", () => {
      this._handleDelete(this._completed);
      this._remove();
    });
    this._checkboxEl.addEventListener("change", () => {
      this._toggleCompletion();
      this._handleCheck(this._completed);
    });
  }

  _generateCheckboxEl() {
    this._checkboxEl = this._templateElement.querySelector(".todo__completed");
    this._todoLabel = this._templateElement.querySelector(".todo__label");
    this._checkboxEl.checked = this._data.completed;
    this._checkboxEl.id = `todo-${this._data.id}`;
    this._todoLabel.setAttribute("for", `todo-${this._data.id}`);
  }

  _toggleCompletion = () => {
    this._completed = !this._completed;
  };
  _remove = () => {
    this._templateElement.remove();
    this._templateElement = null;
  };

  getView() {
    this._templateElement = this._templateElement.content
      .querySelector(".todo")
      .cloneNode(true);

    this._todoNameEl = this._templateElement.querySelector(".todo__name");

    this._todoDate = this._templateElement.querySelector(".todo__date");
    this._deleteBtnEl =
      this._templateElement.querySelector(".todo__delete-btn");

    this._todoNameEl.textContent = this._data.name;
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
