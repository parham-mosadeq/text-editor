export class PageBreak {
  private container: HTMLCollectionOf<Element>;

  constructor() {
    this.container = document.getElementsByClassName('fr-element');
  }

  addPageBreak(pageHeight: number, handlePageBreak: () => void) {
    if (this.container[0]?.scrollHeight > pageHeight) {
      const breaker = document.createElement('hr');
      const caret = document.createElement('p');

      caret.contentEditable = 'true';
      caret.innerText = ' ';

      breaker.classList.add(`${pageHeight}`);

      this.container[0].append(breaker);
      this.container[0]?.append(caret);

      handlePageBreak();
      console.log(pageHeight);
      caret.focus();
    }
  }
}
