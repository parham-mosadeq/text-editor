import React, { ChangeEvent, MutableRefObject } from 'react';

// interface DynamicContentProps {
//   modalValue?: string;
//   editorRef: MutableRefObject<Node | undefined>;
//   handleClick: () => void;
//   handleDynamicVal: () => void;
//   handleModalVal: (event: ChangeEvent<HTMLInputElement>) => void;
// }
interface DynamicContentProps {
  content: string;
  editorRef: MutableRefObject<Node | undefined>;
  handleContent: (event?: ChangeEvent<HTMLDivElement>) => void;
}

export class DynamicContent extends React.Component {
  constructor(props: DynamicContentProps) {
    super(props);
  }
  node: Selection | null = window.getSelection();
  // get all nodes

  handleClick() {
    const div = document.createElement('input');

    div.contentEditable = 'true';
    div.classList.add('dynamic_field-span');
    div.addEventListener('input', (event) => this.props.handleContent(event));
    div.setAttribute('name', this.props.content);

    this.node?.anchorNode?.parentElement?.appendChild(div);

    console.log(this.props.content, 'content 2');
    console.log(this.node?.anchorNode);
  }
}
