// FORMULARIO

let currentPage = 1;
const pages = document.querySelectorAll('.form-page');

function nextPage() {
  if (currentPage < pages.length) {
    pages[currentPage - 1].classList.remove('active');
    pages[currentPage].classList.add('active');
    currentPage++;
  }
}

function prevPage() {
  if (currentPage > 1) {
    pages[currentPage - 1].classList.remove('active');
    pages[currentPage - 2].classList.add('active'); 
    currentPage--;
  }
}