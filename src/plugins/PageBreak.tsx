import React from 'react';

export class PageBreak extends React.Component {
  private container: HTMLCollectionOf<Element>;

  constructor(props: number) {
    super(props);
    this.container = document.getElementsByClassName('fr-element');
  }

  addPageBreak(pageHeight: number, handlePageBreak: () => void) {
    console.log(this.container[0]?.scrollHeight);
    console.log(pageHeight, 'pageHeight - out');
    if (this.container[0]?.scrollHeight > pageHeight) {
      const breaker = document.createElement('hr');
      console.log(this.container[0]);
      this.container[0].append(breaker);
      handlePageBreak();
    }
  }
}
