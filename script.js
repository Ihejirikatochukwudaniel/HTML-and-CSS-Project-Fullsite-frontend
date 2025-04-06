const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  item.querySelector('.question').addEventListener('click', () => {
    item.classList.toggle('active');

    // Change the +/− icon
    const icon = item.querySelector('.icon');
    icon.textContent = item.classList.contains('active') ? '−' : '+';
  });
});
