export {}
console.log(
  "Plasmo!!!!!!!"
)

const addButton = document.createElement("button");
addButton.textContent = "+";
addButton.style.position = "fixed";
addButton.style.top = "10px";
addButton.style.right = "10px";
addButton.style.zIndex = "9999";
addButton.style.backgroundColor = "#4CAF50";
addButton.style.border = "none";
addButton.style.color = "white";
addButton.style.fontSize = "24px";
addButton.style.padding = "8px 16px";
addButton.style.cursor = "pointer";
addButton.onclick = () => {
  chrome.runtime.sendMessage({ action: "savePageInfo" });
};

document.body.appendChild(addButton);
