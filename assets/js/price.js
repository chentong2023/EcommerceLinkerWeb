const tabs = document.querySelectorAll('.switcher button');
const cards = document.querySelector('[data-section="cards"]');
const compare = document.querySelector('[data-section="compare"]');

tabs.forEach(tab => tab.addEventListener('click', () => {
    tabs.forEach(x => x.classList.remove('active'));
    tab.classList.add('active');
    const view = tab.dataset.view;
    cards.hidden = view !== 'cards';
    compare.hidden = view !== 'compare';
}));

document.querySelectorAll('.choose').forEach(button =>
    button.addEventListener('click', () => {
        const name = button.closest('.plan-card').querySelector('h2').textContent;
        button.textContent = '已选择 · ' + name;
        button.classList.add('selected');
        document.querySelector('.cta').scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    }));

document.querySelectorAll('.plan-card').forEach(card => {
    card.addEventListener('pointermove', e => {
        if (innerWidth < 901) return;
        const r = card.getBoundingClientRect(),
            x = (e.clientX - r.left) / r.width - .5,
            y = (e.clientY - r.top) / r.height - .5;
        const lift = card.classList.contains('featured') ? -20 : -10;
        card.style.transform = `translateY(${lift}px) rotateY(${x*5}deg) rotateX(${-y*4}deg)`
    });
    card.addEventListener('pointerleave', () => {
        card.style.transform = card.classList.contains('featured') ? 'translateY(-20px)' : ''
    })
});