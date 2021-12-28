// SELECTORS
const color = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.querySelector(".btn");
const colorCode = document.querySelector(".colorName");

// EVENT LISTENERS
btn.addEventListener('click',() =>{
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += color[iterrator()];//#+1
    }
    colorCode.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
    // console.log(hexColor);
})
let iterrator = () => {
  return Math.floor(Math.random() * color.length);//
};
