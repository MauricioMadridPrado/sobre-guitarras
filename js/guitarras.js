export function guitarrasHide() {
    const imagensGuitarra = document.querySelectorAll(".js-img-guitarra");
    imagensGuitarra.forEach((imagem) => {
      imagem.addEventListener("click", (event) => {
        const nome = event.target.getAttribute("alt");
        const guitarras = document.querySelectorAll(".js-texto-guitarra h2");
        console.log(nome);
        console.log(guitarras);
  
        guitarras.forEach((guitarra) => {
          const textoDaGuitarra = guitarra.parentElement;
          console.log(nome);
          console.log(guitarra);
          console.log(textoDaGuitarra);
          if (guitarra.innerHTML === nome) {
            textoDaGuitarra.classList.add("ativo_guitarra");
          } else {
            textoDaGuitarra.classList.remove("ativo_guitarra");
          }
  
          //   console.log(guitarista.nextElementSibling);
        });
      });
    });
  }