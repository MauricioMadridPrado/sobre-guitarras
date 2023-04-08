export function guitarristasHide() {
    const imagensGuitarristas = document.querySelectorAll(".js-img-guitarrista");
  
    imagensGuitarristas.forEach((imagem) => {
      imagem.addEventListener("click", (event) => {
        const nome = event.target.getAttribute("alt");
        const guitarristas = document.querySelectorAll(
          ".js-texto-guitarrista h2"
        );
  
        guitarristas.forEach((guitarista) => {
          const textoDoGuitarrista = guitarista.parentElement;
          if (guitarista.innerHTML === nome) {
            textoDoGuitarrista.classList.add("ativo_guitarrista");
          } else {
            textoDoGuitarrista.classList.remove("ativo_guitarrista");
          }
  
          //   console.log(guitarista.nextElementSibling);
        });
      });
    });
  }