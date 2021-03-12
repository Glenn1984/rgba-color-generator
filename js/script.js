const rgbNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const alphaNumber = () => (rgbNumber(50, 100) * 0.01).toFixed(2);

const generateColor = () => (`rgba(${[rgbNumber(0, 255), rgbNumber(0, 255), rgbNumber(0, 255), alphaNumber()].join(", ")})`);

const listItem = document.querySelectorAll(".color");

listItem.forEach(item => {
    item.style.backgroundColor = generateColor();
    item.textContent = generateColor();
});
