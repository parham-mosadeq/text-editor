export class Footer {
  addFooter() {
    const isFooter = document.getElementsByClassName('footer');
    console.log(isFooter);
    if (isFooter.length) return;
    const footer = document.createElement('footer');
    const div = document.createElement('div');

    const container = document.getElementsByClassName('fr-element');

    footer.classList.add('footer');
    footer.contentEditable = 'true';
    footer.innerText = 'footer';

    container &&
      container[0]?.lastElementChild?.previousElementSibling?.append(div);
    container && container[0]?.lastElementChild?.replaceWith(footer);
  }
}
1;
