function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // if (html.classList.contains("light")) {
  //  html.classList.remove("light")
  // } else {
  //  html.classList.add("light")
  // }

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a tag imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/assets/Pedro.png")
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/assets/Fernando.png")
  }

  // pegar a tag paragraphs
  const paragraph1 = document.getElementById("paragraph1")
  const paragraph2 = document.getElementById("paragraph2")

  // substituir o primeiro paragrafo
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    paragraph1.textContent = "Pedro Matos"
    paragraph2.textContent = "Aprendiz de Mário Kart"
  } else {
    // se tiver sem light mode, manter a imagem normal
    paragraph1.textContent = "Fernando Bueno"
    paragraph2.textContent = "King of Mário Kart"
  }
}
