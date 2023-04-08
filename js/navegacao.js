export function navegacaoHide() {
    const checkboxNav = document.getElementById("navegacao__checkbox");
    const links = document.querySelectorAll(".js-menu");
    const containerLinks = document.querySelector(".js-nav");
    checkboxNav.addEventListener("change", (checkbox) => {
      links.forEach((link) => {
        link.classList.toggle("ativa_nav");
      });
      containerLinks.classList.toggle(".ativa_container_nav");
    });
  }
  