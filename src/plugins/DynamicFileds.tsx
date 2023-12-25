import { getParentElement } from 'lexical/LexicalUtils';
import React, { MutableRefObject } from 'react';

type DynamicFieldsProps = {
  dynamicValue?: string;
  editorRef?: MutableRefObject<unknown>;
  showModal?: boolean;
  onChange?: (event?: string) => void;
};
export class DynamicFields extends React.Component {
  constructor(props: DynamicFieldsProps) {
    super(props);
    this.state = {
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
    } else {
      console.error('The editor instance is not available.');
    }
  };
}
