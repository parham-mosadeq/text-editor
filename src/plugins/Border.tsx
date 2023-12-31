export class Border {
  constructor() {}

  addBorder(borderColor = 'black', borderStyle = 'solid', borderWidth = '4') {
    const wrapper = document.getElementsByClassName('fr-element ');

    console.log(borderColor, borderStyle, borderWidth);
    wrapper[0].setAttribute(
      'style',
      `border:${borderWidth}px ${borderStyle} ${borderColor};
      `
    );
  }
}
