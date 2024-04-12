# Tax Calculator

The Tax Calculator project is a web application designed to help users calculate their tax liability based on various factors such as income, age, and deductions.

## Live Demo

Check out the live demo of this project [here](https://yourliveurl.com).

## Features

- Calculate tax based on user input.
- Handle errors and edge cases gracefully.
- Utilize Bootstrap for styling and layout.
- Provide tooltips for additional information.

### Assumptions

- Users are expected to enter numeric values for income, extra income, and deductions.
- Age is selected from predefined options: <40, >=40 <60, >=60.
- All calculations adhere to the provided formula and tax rates.
- Tooltips offer supplementary information and explanations.

## Tax Calculation Formula

Tax is calculated according to the following formula:

- Income under 8 Lakhs (after deductions) is not taxed.
- Income over 8 Lakhs is taxed at different rates based on age:
  - 30% for individuals under 40 years old.
  - 40% for individuals between 40 and 60 years old.
  - 10% for individuals aged 60 and above.

## How to Use

1. Clone or download the project files to your local machine:
   ```bash
   git clone https://github.com/RutikKulkarni/Tax-Calculator.git
   ```
2. Open the `index.html` file in a web browser.
3. Fill in the required fields: Gross Annual Income, Extra Income, Age, and Deductions.
4. Click on the "Submit" button.
5. View the tax calculation result in the modal window.

## Technologies Used

- HTML
- CSS
- JavaScript
- Bootstrap

## File Structure

```
Tax-Calculator/
│
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── README.md
```

## Credits

- Icons provided by [Ionicons](https://ionicons.com/).
- Tooltip functionality provided by [Bootstrap](https://getbootstrap.com/).
