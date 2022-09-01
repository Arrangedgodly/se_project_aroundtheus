export class Section {
  constructor({ items, renderer }, sectionSelector) {
    this._items = items;
    this._renderer = renderer;

    this._section = document.querySelector(sectionSelector);
  }

  renderItems() {
    this._items.forEach(this._renderer);
  }

  addItem(element) {
    this._section.append(element);
  }

  addNewItem(element) {
    this._section.prepend(element);
  }
}