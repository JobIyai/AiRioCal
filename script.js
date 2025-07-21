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

function calculateBreakEven() {
  const cost = parseFloat(document.getElementById('be-cost').value) || 0;
  const rate = parseFloat(document.getElementById('be-rate').value) || 0;

  if (rate === 0) return;

  const weeklyRate = rate * 4;
  const breakEvenHours = cost / weeklyRate;

  const beResult = document.getElementById('be-result');
  beResult.innerHTML = `
    <p class="text-xl font-semibold">You need to save <strong>${breakEvenHours.toFixed(2)} hours/week</strong> for this tool to break even.</p>
  `;
  beResult.classList.remove('hidden');
}
