"use strict";

/*
  JavaScript Midterm
  Mini Expense Tracker

  Complete the application using the requirements
  provided in the exam instructions.
*/

// ------------------------------------
// 1. SELECT DOM ELEMENTS
// ------------------------------------
const descriptionInput = document.getElementById("description");
const amountInput = document.getElementById("amount");
const categorySelect = document.getElementById("category");
const addButton = document.getElementById("add-expense");
const resetButton = document.getElementById("reset");
const expenseList = document.getElementById("expense-list");
const expenseCount = document.getElementById("expense-count");
const totalDisplay = document.getElementById("total");
const budgetStatus = document.getElementById("budget-status");
const message = document.getElementById("message");
// ------------------------------------
// 2. APPLICATION DATA
// ------------------------------------
let expenses = [];
const budget = 500;


// ------------------------------------
// 3. FUNCTIONS
// ------------------------------------
function addExpense() {
  const description = descriptionInput.value.trim();
  const amountText = amountInput.value.trim();
  const amount = Number(amountText);
  const category = categorySelect.value;

  message.className = "message";

  if (description === "") {
    message.textContent = "Please enter an expense description.";
    message.classList.add("error");
    return;
  }

  if (amountText === "") {
    message.textContent = "Please enter an amount.";
    message.classList.add("error");
    return;
  }

  if (!Number.isFinite(amount) || amount <= 0) {
    message.textContent = "Please enter a valid amount greater than 0.";
    message.classList.add("error");
    return;
  }

  const expense = {
    description: description,
    amount: amount,
    category: category
  };

  expenses.push(expense);
  displayExpenses();
  updateBudget();

  message.textContent = "Expense added successfully!";
  message.classList.add("success");

  descriptionInput.value = "";
  amountInput.value = "";
  categorySelect.selectedIndex = 0;
}

function displayExpenses() {
  expenseList.innerHTML = "";

  if (expenses.length === 0) {
    const emptyMessage = document.createElement("p");
    emptyMessage.className = "empty-message";
    emptyMessage.textContent = "No expenses have been added yet.";
    expenseList.appendChild(emptyMessage);
  }

  for (let i = 0; i < expenses.length; i++) {
    const expense = expenses[i];
    const item = document.createElement("div");
    item.className = "expense-item";

    const description = document.createElement("span");
    description.className = "expense-description";
    description.textContent = expense.description;

    const category = document.createElement("span");
    category.className = "expense-category";
    category.textContent = expense.category;

    const amount = document.createElement("span");
    amount.className = "expense-amount";
    amount.textContent = "$" + expense.amount.toFixed(2);

    item.appendChild(description);
    item.appendChild(category);
    item.appendChild(amount);
    expenseList.appendChild(item);
  }

  expenseCount.textContent = expenses.length + " Expenses";
  totalDisplay.textContent = "$" + calculateTotal().toFixed(2);
}

function calculateTotal() {
  let total = 0;

  for (let i = 0; i < expenses.length; i++) {
    total += expenses[i].amount;
  }

  return total;
}

function updateBudget() {
  const total = calculateTotal();

  if (total <= budget) {
    budgetStatus.textContent = "You are under budget.";
    budgetStatus.className = "budget-status under-budget";
  } else {
    budgetStatus.textContent = "You are over budget.";
    budgetStatus.className = "budget-status over-budget";
  }
}

function resetApplication() {
  expenses = [];
  descriptionInput.value = "";
  amountInput.value = "";
  categorySelect.selectedIndex = 0;
  message.textContent = "";
  message.className = "message";

  displayExpenses();
  updateBudget();
}

// ------------------------------------
// 4. EVENT LISTENERS
// ------------------------------------
addButton.addEventListener("click", addExpense);
resetButton.addEventListener("click", resetApplication);
