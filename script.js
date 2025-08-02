function calculateEMI() {
  const amount = parseFloat(document.getElementById("amount").value);
  const interest = parseFloat(document.getElementById("interest").value);
  const tenure = parseInt(document.getElementById("tenure").value);
  const result = document.getElementById("result");

  // Validate input
  if (!amount || !interest || !tenure || amount <= 0 || interest <= 0 || tenure <= 0) {
    result.innerHTML = "❌ Please enter valid positive values.";
    return;
  }

  const monthlyRate = interest / 12 / 100;
  const emi = (amount * monthlyRate * Math.pow(1 + monthlyRate, tenure)) /
              (Math.pow(1 + monthlyRate, tenure) - 1);
  const totalPayment = emi * tenure;
  const totalInterest = totalPayment - amount;

  result.innerHTML = `
    ✅ <strong>Monthly EMI:</strong> ₹${emi.toFixed(2)}<br>
    💰 <strong>Total Payment:</strong> ₹${totalPayment.toFixed(2)}<br>
    📈 <strong>Total Interest:</strong> ₹${totalInterest.toFixed(2)}
  `;
}
