const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

function append(val) { display.value += val; }
function clearDisplay() { display.value = ''; }
function backspace() { display.value = display.value.slice(0, -1); }
function calculate() {
  try {
    let exp = display.value
      .replace(/×/g, '*')
      .replace(/÷/g, '/')
      .replace(/%/g, '/100');
    display.value = eval(exp);
  } catch {
    display.value = 'Error';
  }
}

buttons.forEach(btn => {
  if (btn.classList.contains('btn-clear')) btn.onclick = clearDisplay;
  else if (btn.classList.contains('btn-back')) btn.onclick = backspace;
  else if (btn.classList.contains('btn-equals')) btn.onclick = calculate;
  else btn.onclick = () => append(btn.textContent);
});
