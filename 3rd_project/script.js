// Global array to store all expenses
let expenses = [];

// Button click
let addBtn = document.getElementById("add-btn");

addBtn.addEventListener("click", function () {
  let title = document.getElementById("title").value;
  let amount = document.getElementById("amount").value;
  let category = document.getElementById("category").value;

  // Validation
  if (title === "" || amount === "" || category === "") {
    alert("Please fill all fields");
    return;
  }

  // Add to array (IMPORTANT)
  expenses.push({
    title: title,
    amount: Number(amount), // convert to number
    category: category
  });

  // Clear inputs
  document.getElementById("title").value = "";
  document.getElementById("amount").value = "";
  document.getElementById("category").value = "";

  // Update UI
  renderExpenses();
  calculateTotal();
});


// 🧩 Render using map()
function renderExpenses() {
  let expenseItems = document.getElementById("expense-items");

  expenseItems.innerHTML = expenses
    .map(
      (item, index) =>
        `<li>
          ${item.category} - ${item.title} - ₹${item.amount}
          <button class="delete-btn" onclick="deleteExpense(${index})">Delete</button>
        </li>`
    )
    .join("");
}


// ❌ Delete functionality
function deleteExpense(index) {
  expenses.splice(index, 1);
  renderExpenses();
  calculateTotal();
}


// ➕ Calculate totals using reduce()
function calculateTotal() {

  // Total expenses
  const totalExpenses = expenses.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);

  // Food expenses only
  const foodExpenses = expenses.reduce((acc, item) => {
    if (item.category === "Food") {
      return acc + item.amount;
    }
    return acc;
  }, 0);

  const result = expenses.reduce(
  (acc, item) => {
    // Update category total
    acc.totals[item.category] =
      (acc.totals[item.category] || 0) + item.amount;

    // Check if this is highest
    if (acc.totals[item.category] > acc.maxAmount) {
      acc.maxAmount = acc.totals[item.category];
      acc.maxCategory = item.category;
    }

    return acc;
  },
  { totals: {}, maxCategory: "", maxAmount: 0 }
);

  // Update UI
  document.getElementById("total-amount").innerHTML = `₹${totalExpenses}`;
  document.getElementById("food-expense").innerHTML = ` ₹${foodExpenses}`;
  document.getElementById("highest-category").innerHTML = `${result.maxCategory} (₹${result.maxAmount})`;
}
 