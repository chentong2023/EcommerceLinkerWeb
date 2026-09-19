const menu = document.querySelector('.menu');
const links = document.querySelector('.links');

if (menu) menu.addEventListener('click', () => links.classList.toggle('open'));

document.querySelectorAll('.faqq').forEach(q =>
  q.addEventListener('click', () => q.parentElement.classList.toggle('open'))
);

document.querySelectorAll('[data-scroll]').forEach(a => a.addEventListener('click',
   e => {
    const t = document.querySelector(a.dataset.scroll);
    if (t) {
        e.preventDefault();
        t.scrollIntoView({
            behavior: 'smooth'
        })
    }
}));