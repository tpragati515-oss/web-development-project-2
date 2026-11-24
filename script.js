let expenses = [];

function addExpense() {
  let name = document.getElementById("name").value.trim();
  let amount = Number(document.getElementById("amount").value);
  let category = document.getElementById("category").value;

  if (name === "" || amount <= 0 || isNaN(amount)) {
    document.getElementById("error").textContent = "Enter a name and an amount above 0.";
    return;
  }
  document.getElementById("error").textContent = "";

  expenses.push({ name: name, amount: amount, category: category });
  document.getElementById("name").value = "";
  document.getElementById("amount").value = "";
  showExpenses();
}

function deleteExpense(index) {
  expenses.splice(index, 1);
  showExpenses();
}

function showExpenses() {
  let filter = document.getElementById("filter").value;
  let list = document.getElementById("list");
  let total = 0;
  list.innerHTML = "";

  for (let i = 0; i < expenses.length; i++) {
    let e = expenses[i];
    if (filter === "All" || filter === e.category) {
      total += e.amount;
      list.innerHTML += "<li>" + e.name + " - ₹" + e.amount + " (" + e.category + ")" +
        " <button onclick='deleteExpense(" + i + ")'>Delete</button></li>";
    }
  }
  document.getElementById("total").textContent = total;
}

document.getElementById("addBtn").onclick = addExpense;
document.getElementById("filter").onchange = showExpenses;