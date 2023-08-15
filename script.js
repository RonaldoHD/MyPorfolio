const canvas = document.getElementById("canvas");
const scoreDisplay = document.getElementById("score");
const ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();

let snake = [
  { x: 150, y: 150 },
  { x: 140, y: 150 },
  { x: 130, y: 150 },
  { x: 120, y: 150 },
  { x: 110, y: 150 }
];
let dx = 10;
let dy = 0;
let food = { x: 300, y: 300 };
let score = 0; // Initialize the score variable

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < snake.length; i++) {
    ctx.fillStyle = i === 0 ? "yellow" : "green";
    ctx.fillRect(snake[i].x, snake[i].y, 10, 10);
  }

  ctx.fillStyle = "red";
  ctx.fillRect(food.x, food.y, 10, 10);

  if (snake[0].x === food.x && snake[0].y === food.y) {
    score += 1; // Increment the score
    scoreDisplay.innerText = score; // Update the score on the HTML element

    let newTail = { x: snake[snake.length - 1].x, y: snake[snake.length - 1].y };
    snake.push(newTail);
    food = {
      x: Math.floor(Math.random() * (canvas.width / 10)) * 10,
      y: Math.floor(Math.random() * (canvas.height / 10)) * 10
    };
  }
  
  snake.pop();

  let newHead = { x: snake[0].x + dx, y: snake[0].y + dy };
  snake.unshift(newHead);

  if (
    newHead.x < 0 ||
    newHead.x >= canvas.width ||
    newHead.y < 0 ||
    newHead.y >= canvas.height
  ) {
    clearInterval(interval);
    alert("Game over!");
  }

  for (let i = 1; i < snake.length; i++) {
    if (newHead.x === snake[i].x && newHead.y === snake[i].y) {
      clearInterval(interval);
      alert("Game over!");
    }
  }
}

function main() {
  document.addEventListener("keydown", function (event) {
    if (event.keyCode === 37 && dx !== 10) {
      dx = -10;
      dy = 0;
    } else if (event.keyCode === 38 && dy !== 10) {
      dx = 0;
      dy = -10;
    } else if (event.keyCode === 39 && dx !== -10) {
      dx = 10;
      dy = 0;
    } else if (event.keyCode === 40 && dy !== -10) {
      dx = 0;
      dy = 10;
    }
  });

  interval = setInterval(draw, 60);
}

main();
