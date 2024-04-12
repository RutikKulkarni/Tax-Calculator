document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("taxForm");
  const ageInput = document.getElementById("age");
  const incomeInput = document.getElementById("income");
  const extraIncomeInput = document.getElementById("extraIncome");
  const deductionsInput = document.getElementById("deductions");

  const ageError = document.getElementById("ageError");
  const incomeError = document.getElementById("incomeError");
  const extraIncomeError = document.getElementById("extraIncomeError");
  const deductionsError = document.getElementById("deductionsError");

  // Initialize Bootstrap popovers
//   const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
//   const popoverList = Array.from(popoverTriggerList).map(function (popoverTriggerEl) {
//     return new bootstrap.Popover(popoverTriggerEl, {
//       container: 'body' // Specify container to avoid rendering problems
//     });
//   });

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    ageError.textContent = "";
    incomeError.textContent = "";
    extraIncomeError.textContent = "";
    deductionsError.textContent = "";

    let isValid = true;

    if (!ageInput.value) {
      ageError.textContent = "Age is required";
      isValid = false;
    }

    if (!incomeInput.value) {
      incomeError.textContent = "Income is required";
      isValid = false;
    }

    if (!isValid) return;

    const ageGroup = ageInput.value;
    const income = parseFloat(incomeInput.value);
    const extraIncome = parseFloat(extraIncomeInput.value) || 0;
    const deductions = parseFloat(deductionsInput.value) || 0;

    let tax = 0;
    if (income + extraIncome - deductions > 800000) {
      switch (ageGroup) {
        case "<40":
          tax = 0.3 * (income + extraIncome - deductions - 800000);
          break;
        case ">=40 <60":
          tax = 0.4 * (income + extraIncome - deductions - 800000);
          break;
        case ">=60":
          tax = 0.1 * (income + extraIncome - deductions - 800000);
          break;
        default:
          break;
      }
    }

    const resultModal = new bootstrap.Modal(
      document.getElementById("resultModal")
    );
    const resultText = document.getElementById("resultText");
    resultText.textContent = `Tax Amount: ${tax.toFixed(2)} Lakhs`;
    resultModal.show();
  });
});
