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
        case "< 40":
          tax = 0.3 * (income + extraIncome - deductions - 800000);
          break;
        case ">=40 < 60":
          tax = 0.4 * (income + extraIncome - deductions - 800000);
          break;
        case ">=60":
          tax = 0.1 * (income + extraIncome - deductions - 800000);
          break;
        default:
          break;
      }
    }

    const overallIncome = income + extraIncome - tax;

    const resultModal = new bootstrap.Modal(
      document.getElementById("resultModal")
    );
    const resultText = document.getElementById("resultText");
    const overallIncomeText = document.getElementById("overallIncomeText");

    resultText.textContent = `${tax.toFixed(2)}`;
    overallIncomeText.textContent = `${overallIncome.toFixed(2)}`;

    resultModal.show();
  });

  function initializePopovers() {
    const popovers = document.querySelectorAll('[data-bs-toggle="popover"]');
    popovers.forEach((popover) => {
      const contentId = popover.getAttribute("data-bs-content");
      const content = document.getElementById(contentId);
      const bsPopover = new bootstrap.Popover(popover, {
        content: content.innerHTML,
        trigger: "hover",
        placement: "top",
      });
    });
  }

  initializePopovers();
});
