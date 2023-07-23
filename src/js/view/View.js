export default class View {
  _data;
  render(data, render = true) {
    if (!data || (Array.isArray(data) && data.length === 0)) {
      return 0;
    }
    this._data = data;
    const markup = this._generateMarkup();
    if (!render) return markup;
  }
}
