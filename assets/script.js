function calculateROI() {
  const monthlyCost = parseFloat(document.getElementById('monthlyCost').value) || 0;
  const timeSaved = parseFloat(document.getElementById('timeSaved').value) || 0;
  const hourlyRate = parseFloat(document.getElementById('hourlyRate').value) || 0;
  const extraIncome = parseFloat(document.getElementById('extraIncome').value) || 0;
  const monthlyValue = timeSaved * hourlyRate * 4 + extraIncome;
  const roi = monthlyValue - monthlyCost;
  const verdict = roi >= 0 ? '✅ Worth it!' : '❌ Not worth it yet';
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `<p class="text-xl font-semibold">Estimated ROI: $${roi.toFixed(2)}</p><p class="text-lg mt-2">${verdict}</p>`;
  resultDiv.classList.remove('hidden');
}

function calculateBreakEven() {
  const cost = parseFloat(document.getElementById('be-cost').value) || 0;
  const rate = parseFloat(document.getElementById('be-rate').value) || 0;
  if (rate === 0) return;
  const weeklyRate = rate * 4;
  const breakEvenHours = cost / weeklyRate;
  const beResult = document.getElementById('be-result');
  beResult.innerHTML = `<p class="text-xl font-semibold">Save <strong>${breakEvenHours.toFixed(2)} hrs/week</strong> to break even.</p>`;
  beResult.classList.remove('hidden');
}

function filterTools() {
  const input = document.getElementById('toolSearch');
  const filter = input.value.toLowerCase();
  const list = document.getElementById('toolList').getElementsByTagName('li');
  for (let i = 0; i < list.length; i++) {
    const item = list[i];
    const text = item.textContent || item.innerText;
    item.style.display = text.toLowerCase().includes(filter) ? "" : "none";
  }
}

function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.classList.toggle("dark");
  document.body.classList.toggle("bg-white");
  document.body.classList.toggle("bg-gray-900");
  document.body.classList.toggle("text-gray-900");
  document.body.classList.toggle("text-white");
}
