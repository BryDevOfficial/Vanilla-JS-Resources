document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.elementor-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    // Revenue field: field_1b59cc1
    const revenueChecks = form.querySelectorAll('[name="form_fields[field_1b59cc1][]"]:checked');
    const revenueValues = Array.from(revenueChecks).map(input => input.value);
    const revenueTrigger =
      revenueValues.includes('$100k - $250k') ||
      revenueValues.includes('$250k - $500k');

    // Web Budget field: field_9bd1ddf
    const webBudgetChecks = form.querySelectorAll('[name="form_fields[field_9bd1ddf][]"]:checked');
    const webBudgetValues = Array.from(webBudgetChecks).map(input => input.value);
    const webBudgetTrigger = webBudgetValues.includes('>$5000');

    // Social Media Budget field: field_f11f8a2
    const smBudgetChecks = form.querySelectorAll('[name="form_fields[field_f11f8a2][]"]:checked');
    const smBudgetValues = Array.from(smBudgetChecks).map(input => input.value);
    const smBudgetTrigger =
      smBudgetValues.includes('>$1500') ||
      smBudgetValues.includes('$1500 - $3,000');

    // Redirect if ANY condition is met
    const shouldRedirectToNotFit = revenueTrigger || webBudgetTrigger || smBudgetTrigger;

    if (shouldRedirectToNotFit) {
      e.preventDefault(); // Stop Elementor's default redirect
      window.location.href = 'https://digitalinnovationmg.com/thank-you/'; // Replace with your actual URL
    }
    // Else: Elementor continues with default Dubsado redirect
  });
});