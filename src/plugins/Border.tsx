// type BorderProps = {
//   borderStyles?: string;
// };
export class Border {
  constructor() {}

  getParentDiv() {
    const parentDiv =
      document.getElementsByClassName('fr-element') &&
      document.getElementsByClassName('fr-element')[0];
    return parentDiv;
  }

  addBorder() {
    const parentDiv = this.getParentDiv();
    // parentDiv?.classList?.add(`page-border`);
    parentDiv;
    console.log(parentDiv);
  }
}
