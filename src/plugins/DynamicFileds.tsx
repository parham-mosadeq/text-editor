import React, { ChangeEvent, MutableRefObject } from 'react';

type DynamicFieldsProps = {
  modalValue?: string;
  editorRef?: MutableRefObject<unknown>;
  showModal?: boolean;
  anchorNode?: Node | null;
  handleModalVal?: (event: ChangeEvent<HTMLInputElement>) => void;
  onChange?: (event?: string) => void;
};
export class DynamicFields extends React.Component {
  constructor(props: DynamicFieldsProps) {
    super(props);
    this.state = {
      modalValue: this.props.modalValue,
      prevNode: null,
    };
  }

  selectedObj = window.getSelection();
  anchorNode = this.selectedObj && this.selectedObj.anchorNode;

  handleSelectionChange = () => {
    if (this.selectedObj && this.anchorNode) {
      if (
        this.anchorNode.previousSibling &&
        this.anchorNode.previousSibling.previousSibling
      ) {
        this.setState({
          twoNodesBeforeSelection:
            this.anchorNode.previousSibling.previousSibling,
        });
      } else {
        this.setState({ twoNodesBeforeSelection: null });
      }
    }
  };

  componentDidMount() {
    document.addEventListener('mouseup', this.handleSelectionChange);
  }

  componentWillUnmount() {
    document.removeEventListener('mouseup', this.handleSelectionChange);
  }

  openModal = () => {
    const input = document.createElement('input');
    // const btn = document.createElement('button');

    input.classList.add('dynamic-input_handler');
    // btn.classList.add('dynamic-input_btn');
    // btn.innerText = 'click';
    if (this.anchorNode && this.anchorNode.parentElement) {
      console.log(this.anchorNode.parentElement, 'btn');
      this.anchorNode.parentElement.appendChild(input);
      // this.anchorNode.parentElement.appendChild(btn);
      input.addEventListener('input', this.props.handleModalVal);
      input.addEventListener('keydown', (event) => this.props.onChange(event));
    }
  };

  handleClick = () => {
    console.log(this.props, 'props');
    const editorInstance = this.props?.editorRef.current;

    if (editorInstance && this.props.editorRef.current.el) {
      const dynamicField = document.createElement('div');
      this.handleSelectionChange();
      dynamicField.setAttribute('name', this.state.modalValue);
      dynamicField.classList.add('dynamic_field-span');
      console.log(this.state, 'this.state.modalValue');
      dynamicField.innerText = this.state.modalValue;

      this.anchorNode?.parentElement?.parentElement &&
        this.anchorNode?.appendChild(dynamicField);
      console.log(this.anchorNode, 'this.anchorNode');
      document.body.getElementsByClassName('dynamic-input_handler')[0].remove();
      // document.body.getElementsByClassName('dynamic-input_btn')[0].remove();
    } else {
      console.error('The editor instance is not available.');
    }
  };
}
