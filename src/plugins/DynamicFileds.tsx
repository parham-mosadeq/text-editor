import React, { ChangeEvent, MutableRefObject } from 'react';

interface DynamicContentProps {
  content: string;
  editorRef: MutableRefObject<Node | undefined>;
  handleContent: (event: ChangeEvent<HTMLInputElement>) => void;
}

export class DynamicContent extends React.Component {
  constructor(props: DynamicContentProps) {
    super(props);
  }
  node: Selection | null = window.getSelection();
  // get all nodes

  handleClick() {
    const input = document.createElement('input');
    // todo
    // ! to fix
    // ! each input, has its previous instances name
    // todo

    input.contentEditable = 'true';
    input.innerText = 'edit here';
    input.classList.add('dynamic_field-input');
    input.addEventListener('input', (event) => this.props.handleContent(event));
    input.setAttribute('name', this.props.content);

    if (this.node?.anchorNode?.nodeName === 'TD') {
      this.node?.anchorNode.parentElement?.appendChild(input);
      // console.log(this.node?.anchorNode.parentElement?.innerText);
    }

    this.node?.anchorNode?.parentElement?.appendChild(input);
  }
}
