// faq.js

// Toggle FAQ answer visibility
function toggleFAQ(clickedElement) {
  const faqItem = clickedElement.closest('.faq-item');

  // Close other FAQs (accordion style)
  document.querySelectorAll('.faq-item').forEach(item => {
    if (item !== faqItem) {
      item.classList.remove('active');
    }
  });

  // Toggle the clicked item
  faqItem.classList.toggle('active');
}

// Attach click event to all FAQ questions
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".faq-question").forEach(question => {
    question.addEventListener("click", function () {
      toggleFAQ(this);
    });
  });
});
