const btnEl = document.getElementById("btn");
const bmiInputEl = document.getElementById("bmi-result");
const weightConditionEl = document.getElementById("weight-condition");

function calculateBMI() {
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;

  if (!height || !weight || height <= 0 || weight <= 0) {
    alert("Please enter valid height and weight!");
    return;
  }

  const heightValue = height / 100;
  const bmiValue = weight / (heightValue * heightValue);
  bmiInputEl.value = bmiValue.toFixed(1);

  if (bmiValue < 18.5) {
    weightConditionEl.innerText = "Underweight";
  } else if (bmiValue < 25) {
    weightConditionEl.innerText = "Normal weight";
  } else if (bmiValue < 30) {
    weightConditionEl.innerText = "Overweight";
  } else {
    weightConditionEl.innerText = "Obesity";
  }
}

btnEl.addEventListener("click", calculateBMI);
