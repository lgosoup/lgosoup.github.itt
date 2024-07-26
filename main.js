const forwardArrowEl = document.querySelector('.forward-arrow');
const backArrowEl = document.querySelector('.back-arrow');
const pageEls = document.querySelectorAll('.book .page');
let count = 0;



forwardArrowEl.addEventListener('click', function () {
  if (count == 4) {
    return 0;
  }
  setTimeout(() => {pageEls[count].classList.add('covered');
  }, 750);
  pageEls[count+5].classList.add('back');
  count=count + 1;
  setTimeout(() => {pageEls[count].classList.remove('covered');
  }, 750);
  pageEls[count+6].classList.remove('back');


})

// backArrowEl.addEventListener('click', function () {
//   if (count == 0) {
//     return 0;
//   }
//   setTimeout(() => {pageEls[count].classList.remove('covered');
//   }, 750);
//   pageEls[count+1].classList.remove('back');
//   count=count - 1;
//   setTimeout(() => {pageEls[count].classList.add('covered');
//   }, 750);
//   pageEls[count+1].classList.add('back');


// })