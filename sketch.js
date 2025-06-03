function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(135, 206, 235); // Céu azul

  // Divisão da tela
  stroke(0);
  line(width / 2, 0, width / 2, height);

  // --- Lado Cidade ---
  fill(200);
  rect(width / 2 + 20, height - 150, 60, 150); // Prédio 1
  rect(width / 2 + 100, height - 120, 40, 120); // Prédio 2
  rect(width / 2 + 160, height - 180, 80, 180); // Prédio 3

  // Janelas da cidade
  fill(255, 255, 100);
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 5; j++) {
      rect(width / 2 + 25 + i * 80, height - 140 + j * 30, 15, 20);
    }
  }

  // Carro simples
  fill(255, 0, 0);
  rect(width / 2 + 50, height - 50, 80, 30);
  fill(0);
  ellipse(width / 2 + 65, height - 20, 20, 20);
  ellipse(width / 2 + 110, height - 20, 20, 20);

  // --- Lado Campo ---
  fill(60, 179, 113); // Grama
  rect(0, height - 100, width / 2, 100);

  // Árvore simples
  fill(139, 69, 19); // Tronco
  rect(100, height - 120, 20, 40);
  fill(34, 139, 34); // Folhas
  ellipse(110, height - 140, 80, 80);

  // Plantação (linhas de plantações)
  stroke(0, 100, 0);
  for (let x = 20; x < width / 2; x += 20) {
    line(x, height - 100, x + 10, height - 120);
  }

  // Sol
  fill(255, 204, 0);
  ellipse(700, 80, 80, 80);
}