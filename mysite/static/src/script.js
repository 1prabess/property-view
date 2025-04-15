const table = document.getElementById("table");

let total_price = 0;
let total_rent = 0;
let total_emi = 0;
let total_tax = 0;
let total_other_expenses = 0;
let total_net_expenses = 0;
let total_net_income = 0;

let properties = [];
let net_incomes = [];
let net_expenses = [];

let emis = [];
let taxes = [];
let other_expenses = [];

for (let i = 1; i < table.rows.length - 1; i++) {
  total_price += Number(table.rows[i].cells[1].innerText);
  total_rent += Number(table.rows[i].cells[2].innerText);
  total_emi += Number(table.rows[i].cells[3].innerText);
  total_tax += Number(table.rows[i].cells[4].innerText);
  total_other_expenses += Number(table.rows[i].cells[5].innerText);
  total_net_expenses += Number(table.rows[i].cells[6].innerText);
  total_net_income += Number(table.rows[i].cells[7].innerText);

  net_incomes.push(Number(table.rows[i].cells[7].innerText));
  net_expenses.push(Number(table.rows[i].cells[6].innerText));
  properties.push(table.rows[i].cells[0].innerText);

  emis.push(Number(table.rows[i].cells[3].innerText));
  taxes.push(Number(table.rows[i].cells[4].innerText));
  other_expenses.push(Number(table.rows[i].cells[5].innerText));
}

console.log(emis, taxes, other_expenses);

document.getElementById("totalPrice").innerText = total_price;
document.getElementById("totalRent").innerText = total_rent;
document.getElementById("totalEmi").innerText = total_emi;
document.getElementById("totalTax").innerText = total_tax;
document.getElementById("totalOtherExpense").innerText = total_other_expenses;
document.getElementById("totalNetExpense").innerText = total_net_expenses;
document.getElementById("totalNetIncome").innerText = total_net_income;

document.getElementById("file").addEventListener("change", function () {
  document.getElementById("file-upload-form").submit();
});

const ctx = document.getElementById("incomeChart");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: properties,
    datasets: [
      {
        label: "Income",
        data: net_incomes,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

const ctx2 = document.getElementById("expenseChart");

new Chart(ctx2, {
  type: "bar",
  data: {
    labels: properties,
    datasets: [
      {
        label: "Expense",
        data: net_expenses,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

const ctx3 = document.getElementById("incomeSpreadChart");

new Chart(ctx3, {
  type: "doughnut",
  data: {
    labels: properties,
    datasets: [
      {
        label: "Income",
        data: net_incomes,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

const ctx4 = document.getElementById("expenseSpreadChart");

new Chart(ctx4, {
  type: "bar",
  data: {
    labels: properties,
    datasets: [
      {
        label: "Emis",
        data: emis,
        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
      {
        label: "Other Expenses",
        data: other_expenses,
        backgroundColor: ["rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
      {
        label: "Taxes",
        data: taxes,
        backgroundColor: ["rgba(255, 206, 86, 0.2)"],
        borderColor: ["rgba(255, 206, 86, 1)"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
