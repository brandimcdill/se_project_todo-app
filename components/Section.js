class Section {
  constructor({ items, renderer, containerSelector }) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems() {
    if (!Array.isArray(this._items)) {
      throw new Error("Items must be an array");
    }
    this._items.forEach((item) => {
      this._renderer(item);
    });
  }

  addItem(element) {
    if (!element) {
      throw new Error("Element is required for addItem method");
    }
    this._container.append(element);
  }
  prependItem(element) {
    if (!element) {
      throw new Error("Element is required for prependItem method");
    }
    this._container.prepend(element);
  }
}

export default Section;
