const cardOutput = document.getElementById("cardOutput");
const outputText = document.getElementById("outputText");
const btnEncript = document.getElementById("btnEncript");
const btnCopy = document.getElementById("btnCopy");
const errorMessage = document.getElementById("errorMessage");
const noTextOutput = document.getElementById("noTextOutput");
const imageNoTextOutput = document.getElementById("imageNoTextOutput");

const charEncript = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat",
};

function verifyInput(text) {
  const regex = /^[a-z\s!;?.,@]+$/;
  const isValid = regex.test(text);
  if (!isValid) {
    return false;
  } else {
    return true;
  }
}

const encriptText = () => {
  const inputText = document.getElementById("inputText").value.trim();

  // melhorar a lógica da letras maiúscualas/inicias maiusculas
  if (verifyInput(inputText)) {
    outputText.style.display = "inline-block";
    let textEncripted = inputText
      .replaceAll("e", charEncript.e)
      .replaceAll("i", charEncript.i)
      .replaceAll("a", charEncript.a)
      .replaceAll("o", charEncript.o)
      .replaceAll("u", charEncript.u);

    outputText.innerText = textEncripted;
    imageNoTextOutput.style.display = "none";
    noTextOutput.style.display = "none";
    cardOutput.style.display = "flex";
    btnCopy.style.display = "block";
    errorMessage.style.visibility = "hidden";
  } else {
    errorMessage.style.visibility = "visible";
    imageNoTextOutput.style.display = "block";
    noTextOutput.style.display = "block";
    outputText.style.display = "none";
    btnCopy.style.display = "none";
  }
};

const desencriptText = () => {
  const inputText = document.getElementById("inputText").value;
  if (verifyInput(inputText)) {
    outputText.style.display = "inline-block";
    let textEncripted = inputText
      .replaceAll(charEncript.e, "e")
      .replaceAll(charEncript.i, "i")
      .replaceAll(charEncript.a, "a")
      .replaceAll(charEncript.o, "o")
      .replaceAll(charEncript.u, "u");

    outputText.innerText = textEncripted;
    imageNoTextOutput.style.display = "none";
    noTextOutput.style.display = "none";
    cardOutput.style.display = "flex";
    btnCopy.style.display = "block";
    errorMessage.style.visibility = "hidden";
  } else {
    errorMessage.style.visibility = "visible";
    imageNoTextOutput.style.display = "block";
    noTextOutput.style.display = "block";
    outputText.style.display = "none";
    btnCopy.style.display = "none";
  }
};

const clipBoard = () => {
  outputText.select();
  navigator.clipboard.writeText(outputText.value);
};
