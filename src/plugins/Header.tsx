export class Header {
  addHeader() {
    const isHeader = document.getElementsByClassName('header');
    if (isHeader.length) return;
    const header = document.createElement('header');
    const container = document.getElementsByClassName('fr-element');

    header.classList.add('header');
    header.contentEditable = 'true';
    header.innerText = 'header';
    // console.log(container[0].firstChild);
    // container && container[0].appendChild(header);
    container && container[0]?.firstElementChild?.replaceWith(header);
  }
}
