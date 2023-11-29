const selectionArticle = document.querySelector(".selection");

const yourChoiceDiv = document.getElementById("your-choice");

let userSelectImg = document.createElement("img");

selectionArticle.addEventListener("click", (e) => {
  console.log(e.target.id);
  if (e.target.id) {
    userSelectImg.src = `./assets/${e.target.id}.png`;
    userSelectImg.alt = e.target.id;
    yourChoiceDiv.appendChild(userSelectImg);
  }
});
