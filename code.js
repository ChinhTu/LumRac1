const rows = 12;
const columns = 13;
const blackPoints = 5;
let redPoint = {
  redX: 0,
  redY: 0,
};
const arrBlackPoint = [];
let isStartGame = false;

const $ = (value) => {
  return document.getElementById(value);
};

const randomInteger = () => {
  return Math.floor(Math.random() * rows);
};

function Check(x, y) {
  let check = false;
  for (let i = 0; i < arrBlackPoint.length; i++) {
    if (arrBlackPoint[i].x == x && arrBlackPoint[i].y == y) {
      check = true;
      break;
    }
  }
  return check;
}

const randomArrBlackPoints = () => {
  for (let i = 0; i < blackPoints; i++) {
    const x = randomInteger();
    const y = randomInteger();
    if (!Check(x, y)) {
      arrBlackPoint.push({ x, y });
    }
  }
};

const board = $("board");

const ReloadGround = () => {
  for (let i = 0; i <= rows; i++)
    for (let j = 0; j <= columns; j++) {
      const square = document.createElement("div");
      square.setAttribute("class", "square");
      square.setAttribute("id", "square");
      square.setAttribute("data-x", i);
      square.setAttribute("data-y", j);

      if (isStartGame) {
        console.log(
          "🚀 ~ file: code.js ~ line 44 ~ ReloadGround ~ isStartGame",
          isStartGame
        );

        if (i === redPoint.redX && j === redPoint.redY) {
          const red = document.createElement("div");
          red.setAttribute("class", "red");
          square.append(red);
        }
        if (Check(i, j)) {
          const black = document.createElement("div");
          black.setAttribute("class", "black");
          square.append(black);
        }
      }
      board.append(square);
      console.log(
        "🚀 ~ file: code.js ~ line 73 ~ ReloadGround ~ square",
        square
      );
    }
};

const handleStartGame = () => {
  isStartGame = true;
  alert("Start Game");
  ReloadGround();
};
