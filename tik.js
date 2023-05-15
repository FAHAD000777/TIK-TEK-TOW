let turn = "X";

const changeturn = () => {
  return turn === "X" ? "O" : "X";
};

const checkWin = () => {
  let boxtext = document.getElementsByClassName("boxtext");
  let win = [
    [0, 1, 2, 2, 6.5, 0],
    [3, 4, 5, 2, 21, 0],
    [6, 7, 8, 2, 36, 0],
    [0, 3, 6, -13, 22, 90],
    [1, 4, 7, 3, 22, 90],
    [2, 5, 8, 17, 22, 90],
    [0, 4, 8, 2, 21, 45],
    [2, 4, 6, 2, 22.5, 135],
  ];
  win.forEach((e) => {
    if (
      boxtext[e[0]].innerText !== "" &&
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[1]].innerText === boxtext[e[2]].innerText
    ) {
      document.getElementsByClassName("info")[0].innerText =
        boxtext[e[0]].innerText + " wins!";
      const gifs = document.querySelectorAll(".gifs");
      gifs.forEach((gif) => {
        gif.style.display = "list-item";

       document.querySelector(".line").style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
       document.querySelector(".line").style.width = "40vw"
      });
    }
  });
};

function gamelogic() {
  let boxes = document.getElementsByClassName("box");
  Array.from(boxes).forEach((element) => {
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener("click", () => {
      if (boxtext.innerText === "") {
        boxtext.innerText = turn;
        checkWin();
        if (document.getElementsByClassName("info")[0].innerText.includes("wins")) {
          // Game is already won, don't allow further moves
          return;
        }
        turn = changeturn();
        document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
      }
    });
  });
}
gamelogic();

let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  let boxtext = document.getElementsByClassName("boxtext");
  Array.from(boxtext).forEach((element) => {
    element.innerText = "";
  });
  const gifs = document.querySelectorAll(".gifs");
  gifs.forEach((gif) => {
    gif.style.display = "none";
  });
  turn = "X"; // Reset turn to "X"
  document.getElementsByClassName("info")[0].innerText = "Turn for " + turn; // Reset the turn information text
  document.querySelector(".line").style.width = "0vw"
});