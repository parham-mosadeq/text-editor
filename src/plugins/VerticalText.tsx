export class VerticalText {
  private container;

  constructor() {
    this.container = document.getElementsByClassName('fr-element');
  }

  handleMouseMove(event) {
    const { top, left } = event.target.getBoundingClientRect();
    const x = event.clientX - left;
    const y = event.clientY - top;

    const verticalParagraph = document.createElement('p');

    verticalParagraph.contentEditable = 'true';
    verticalParagraph.innerText = 'asdb ';
    verticalParagraph.classList.add('verticalText');

    verticalParagraph.setAttribute('style', `top:${y}px; left:${x}px;`);
    this.container[0].appendChild(verticalParagraph);

    console.log(y, 'y', x, 'x', top, left, 'rect');

    console.log('removeEventListener');
  }

  addVerticalText() {
    console.log('start');
    this.container[0].addEventListener('mousedown', (event) =>
      this.handleMouseMove(event)
    );
    console.log('added to dom');
    this.container[0].removeEventListener('mousedown', this.handleMouseMove);
  }
}

