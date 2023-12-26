import React from 'react';

export class DateBtn extends React.Component {
  constructor(props: object) {
    super(props);
  }

  getCurrentDate = () => {
    const today = new Date();
    const year = today.toLocaleString('fa-IR', {
      year: 'numeric',
      calendar: 'persian',
    });
    const month = today.toLocaleString('fa-IR', {
      month: '2-digit',
      calendar: 'persian',
    });
    const day = today.toLocaleString('fa-IR', {
      day: '2-digit',
      calendar: 'persian',
    });

    return `${year}/${month}/${day}`;
  };

  handleClick = () => {
    const selectedObj = window.getSelection();
    let anchorNode = selectedObj.anchorNode;

    const editorInstance = this.props?.current;
    if (editorInstance && this.props.current.el) {
      const dateElement = document.createElement('span');
      const dateTitle = document.createElement('span');
      const dateHolder = document.createElement('span');
      const getDate = this.getCurrentDate();

      dateHolder.innerText = getDate;
      dateTitle.innerText = ' تاریخ: ';

      dateElement.appendChild(dateTitle);
      dateElement.appendChild(dateHolder);
      dateElement.classList.add('custom_date');

      // const editorContainer: Element = parentDiv.children[2].children[0];
      anchorNode?.parentElement.appendChild(dateElement);
      // console.log(parentDiv.children[2].children[0]);
    } else {
      console.error('The editor instance is not available.');
    }
  };
  render() {
    return <button onClick={this.handleClick}>نمایش تاریخ امروز</button>;
  }
}
