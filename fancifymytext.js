//Wrap Alert to a function
function alertHello() {
    alert("Hello, world!");
}

//Function to increase font size
function makeTextBigger() {
    const textArea = document.getElementById("userText");
    textArea.style.fontSize = "24pt";
}

//Function to apply or remove styles based on the selected radio button
function toggleFancy() {
    const textArea = document.getElementById("userText");
    const isFancy = document.getElementById("fancyShmancy").checked;
//Color changing logic
    if (isFancy) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

//Convert text to uppercase and add "-Moo" to the end of sentences
function addMoo() {
    const textArea = document.getElementById("userText");
    let text = textArea.value.toUpperCase();
    const sentences = text.split(".");
    text = sentences.map(sentence => sentence.trim() + "-Moo").join(". ");
    textArea.value = text;
}

//Event listeners for buttons
document.getElementById("biggerBtn").onclick = makeTextBigger;
document.getElementById("fancyShmancy").onchange = toggleFancy;
document.getElementById("boringBetty").onchange = toggleFancy;
document.getElementById("mooBtn").onclick = addMoo;
