function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/eufeliz.png")
  } else {
    // caso contrario, manter
    img.setAttribute("src", "./assets/minhafotoo.png")
  }
}
