function calculateROI() {
  const monthlyCost = parseFloat(document.getElementById('monthlyCost').value) || 0;
  const timeSaved = parseFloat(document.getElementById('timeSaved').value) || 0;
  const hourlyRate = parseFloat(document.getElementById('hourlyRate').value) || 0;
  const extraIncome = parseFloat(document.getElementById('extraIncome').value) || 0;

  const monthlyValue = timeSaved * hourlyRate * 4 + extraIncome;
  const roi = monthlyValue - monthlyCost;
  const verdict = roi >= 0 ? '✅ Worth it!' : '❌ Not worth it yet';

  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `
    <p class="text-xl font-semibold">Estimated ROI: $${roi.toFixed(2)}</p>
    <p class="text-lg mt-2">${verdict}</p>
  `;
  resultDiv.classList.remove('hidden');
}
