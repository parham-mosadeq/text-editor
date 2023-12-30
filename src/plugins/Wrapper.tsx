export class Wrapper {
  createWrapper(content) {
    const wrapper = document.createElement('div');
    const froalaContainer =
      document.getElementsByClassName('fr-element') &&
      document.getElementsByClassName('fr-element')[0];
    wrapper.classList.add('content-wrapper');

    wrapper.innerHTML = content;

    console.log(content);
    if (froalaContainer) froalaContainer.appendChild(wrapper);
    console.log(froalaContainer);
  }
}
