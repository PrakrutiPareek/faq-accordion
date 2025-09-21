const faqs = document.querySelectorAll('.faq');

faqs.forEach((faq) => {
   faq.addEventListener('click', () => {
        faqs.forEach(f => {
            if (f !== faq) {
                f.classList.remove("active");
                f.nextElementSibling.querySelector('.answer-content').classList.remove('active');
            };
        });

    faq.classList.toggle ('active');
    const answer = faq.nextElementSibling.querySelector(".answer-content");
    answer.classList.toggle ('active');
   });

   
});
    








