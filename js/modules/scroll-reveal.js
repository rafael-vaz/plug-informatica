//? animacoes para o evento de scroll
const scrollConfig = {
  slideLeft: {
    distance: "150%",
    origin: "left",
    opacity: null,
  },
  slideRight: {
    distance: "150%",
    origin: "right",
    opacity: null,
  },
  slideDown: {
    distance: "150%",
    origin: "top",
    opacity: null,
  },
  slideTop: {
    distance: "150%",
    origin: "bottom",
    opacity: null,
  },
};

export default function initScrollReveal() {
  ScrollReveal({ reset: true });
  ScrollReveal().reveal("#draw-banner", scrollConfig.slideRight);
  ScrollReveal().reveal(".card", scrollConfig.slideLeft);
  ScrollReveal().reveal(".text-animation", scrollConfig.slideLeft);
  ScrollReveal().reveal("#draw-animation", scrollConfig.slideLeft);
  ScrollReveal().reveal(".main-text", scrollConfig.slideRight);
  ScrollReveal().reveal(".category-text", scrollConfig.slideRight);
  ScrollReveal().reveal(".form-orcamento", scrollConfig.slideLeft);
  ScrollReveal().reveal(".info-container", scrollConfig.slideLeft);
  ScrollReveal().reveal(".social-network", scrollConfig.slideRight);
  ScrollReveal().reveal(".services-category", scrollConfig.slideLeft);
  ScrollReveal().reveal(".service-paragraph", scrollConfig.slideLeft);
  ScrollReveal().reveal(".service-list", scrollConfig.slideLeft);
  ScrollReveal().reveal(".services-draw", scrollConfig.slideRight);
  ScrollReveal().reveal(".form-calls", scrollConfig.slideLeft);
  ScrollReveal().reveal(".calls-draw", scrollConfig.slideRight);
  ScrollReveal().reveal(".form-contact", scrollConfig.slideLeft);
  ScrollReveal().reveal(".contact-details", scrollConfig.slideRight);
}
