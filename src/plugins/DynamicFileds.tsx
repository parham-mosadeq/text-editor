<<<<<<< HEAD
import React, { ChangeEvent, MutableRefObject } from 'react';

type DynamicFieldsProps = {
  modalValue?: string;
  editorRef?: MutableRefObject<unknown>;
  showModal?: boolean;
  anchorNode?: Node | null;
  handleModalVal?: (event: ChangeEvent<HTMLInputElement>) => void;
=======
import { getParentElement } from 'lexical/LexicalUtils';
import React, { MutableRefObject } from 'react';

type DynamicFieldsProps = {
  dynamicValue?: string;
  editorRef?: MutableRefObject<unknown>;
  showModal?: boolean;
>>>>>>> c4690b233fb4d855926d186cf6516105b14b7fd1
  onChange?: (event?: string) => void;
};
export class DynamicFields extends React.Component {
  constructor(props: DynamicFieldsProps) {
    super(props);
    this.state = {
<<<<<<< HEAD
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
=======
      dynamicValue: this.props.dynamicValue,
      caretAnchor: null,
    };
  }

  handleClick = () => {
    const selectedObj = window.getSelection();
    const anchorNode = selectedObj && selectedObj.anchorNode;
    const editorInstance = this.props?.editorRef.current;

    console.log(anchorNode?.parentElement, 'anchorNode1');
    if (editorInstance && this.props.editorRef.current.el) {
      const dynamicField = document.createElement('div');

      dynamicField.setAttribute('name', this.state.dynamicValue);
      dynamicField.classList.add('dynamic_field-span');
      dynamicField.innerText = this.state.dynamicValue;

      anchorNode?.parentElement &&
        anchorNode?.parentElement.appendChild(dynamicField);
      console.log(this.state, 'anchorNode2 state');
>>>>>>> c4690b233fb4d855926d186cf6516105b14b7fd1
    } else {
      console.error('The editor instance is not available.');
    }
  };
}
