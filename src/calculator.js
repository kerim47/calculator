import * as matFunc from "./calc_funcs.js";

let value_1 = 5;
let value_2 = 5;

let resultArray = [
  matFunc.topla(value_1, value_2),
  matFunc.carpma(value_1, value_2),
  matFunc.bol(value_1, value_2),
  matFunc.karekokAlma(value_1),
  matFunc.kalan(value_1, value_2),
];

let htmlRenderText = "Results: \n";
resultArray.forEach((element) => {
  htmlRenderText += `${element.islem}: ${element.sonuc}` + "\n";
});
document.getElementById("result").innerText = htmlRenderText;

// Equals button click
function buttonClick(value) {
  const currentInput = document.getElementById("values").value;
  document.getElementById("values").value = currentInput + value;
}

// Her bir butona tıklama olayını ekleyin
document
  .getElementById("btnId1")
  .addEventListener("click", () => buttonClick("1"));
document
  .getElementById("btnId2")
  .addEventListener("click", () => buttonClick("2"));
document
  .getElementById("btnId3")
  .addEventListener("click", () => buttonClick("3"));
document
  .getElementById("btnIdMultiply")
  .addEventListener("click", () => buttonClick("*"));
document
  .getElementById("btnId4")
  .addEventListener("click", () => buttonClick("4"));
document
  .getElementById("btnId5")
  .addEventListener("click", () => buttonClick("5"));
document
  .getElementById("btnId6")
  .addEventListener("click", () => buttonClick("6"));
document
  .getElementById("btnIdDivide")
  .addEventListener("click", () => buttonClick("/"));
document
  .getElementById("btnId7")
  .addEventListener("click", () => buttonClick("7"));
document
  .getElementById("btnId8")
  .addEventListener("click", () => buttonClick("8"));
document
  .getElementById("btnId9")
  .addEventListener("click", () => buttonClick("9"));
document
  .getElementById("btnIdSubtract")
  .addEventListener("click", () => buttonClick("-"));

document.getElementById("btnIdBack").addEventListener("click", () => {
  const currentInput = document.getElementById("values");
  const inputValue = currentInput.value;

  if (inputValue.length > 1) currentInput.value = inputValue.slice(0, -1);
  else currentInput.value = "";
});
document
  .getElementById("btnId0")
  .addEventListener("click", () => buttonClick("0"));
document
  .getElementById("btnIdAC")
  .addEventListener(
    "click",
    () => (document.getElementById("values").value = "")
  );
document
  .getElementById("btnIdAdd")
  .addEventListener("click", () => buttonClick("+"));

// Sonuçları gör butonu olayını ekleyin
document.getElementById("btnId").addEventListener("click", () => {
  const currentInput = document.getElementById("values").value;
  document.getElementById("result").innerText = "Result: " + currentInput;
});
let inputValue  = ""
document.getElementById("btnId").addEventListener("click", () => {
  const currentInput = document.getElementById("values").value;
  document.getElementById("values").value = "";
  inputValue = currentInput;
  const values = inputValue.split(/([+\-*/])/).filter(Boolean);
  console.log("Değerler: ", values);
  let value1 = parseFloat(values[0]);
  let operator = values[1];
  let value2 = parseFloat(values[2]);
  let result;
  switch (operator) {
    case "+":
      result = matFunc.topla(value1, value2);
      break;
    case "-":
      result = matFunc.cikarma(value1, value2);
      break;
    case "*":
      result = matFunc.carpma(value1, value2);
      break;
    case "/":
      result = matFunc.bol(value1, value2);
      break;
    default:
      console.log("Hata: Geçersiz operatör");
      break;
  }
  document.getElementById("result").innerText = result.sonuc;
});
// Örnek olarak kullanılacak değerler

