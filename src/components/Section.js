export class Section {
  constructor({ items, renderer }, sectionSelector) {
    this._renderedItems = items;
    this._renderer = renderer;

    this._section = document.querySelector(sectionSelector);
  }

  renderItems() {
    this._renderedItems.forEach(item => this._renderer(item));
  }

  addItem(element) {
    this._section.append(element);
  }

  addNewItem(element) {
    this._section.prepend(element);
  }
}