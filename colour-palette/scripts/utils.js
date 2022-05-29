function createNotification(text) {
  const body = document.querySelector("body");
  const notification = document.createElement("p");
  notification.classList.add("notification");
  notification.innerText = text;
  body.append(notification);
  setTimeout(() => notification.remove(), 5000);
}

function randomNumber(possibilities) {
  return Math.floor(Math.random() * possibilities);
}

function actionAllColours(coloursArr, fn) {
  coloursArr.forEach((colour) => !colour.isLocked && colour[fn]());
}

export { createNotification, randomNumber, actionAllColours };
