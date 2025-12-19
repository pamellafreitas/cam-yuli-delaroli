const slides = document.querySelectorAll(".slide");
const indicadores = document.querySelectorAll(".slider-indicadores span");

  indicadores.forEach((indicador, index) => {
    indicador.addEventListener("click", () => {
      
      slides.forEach(slide => slide.classList.remove("ativo"));
      indicadores.forEach(i => i.classList.remove("ativo"));

      slides[index].classList.add("ativo");
      indicador.classList.add("ativo");

    });
  });

