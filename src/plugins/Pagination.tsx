import { useMemo } from 'react';

export const Pagination = () => {
  const numberContainer = document.createElement('span');
  const container = document.getElementsByClassName('fr-element');
  const lineBreaks = container[0] && container[0].getElementsByTagName('hr');

  numberContainer.classList.add('page-number_span');

  const totalPages = lineBreaks?.length + 1 || 1;

  useMemo(() => {
    for (let i = 0; i < lineBreaks?.length; i++) {
      numberContainer.innerText = `${i + 1}/${totalPages}`;
      lineBreaks[i].classList.add('page-number_container');
      lineBreaks[i]?.insertAdjacentElement('afterbegin', numberContainer);
    }
  }, [totalPages]);

  return totalPages;
};
