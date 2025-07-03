
class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
        });
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".ul",
    ".ul li",
);
mobileNavbar.init();

const imagens = document.querySelectorAll('.projetos1');

imagens.forEach((imagem) => {
    imagem.addEventListener('mouseenter', () => {
        imagens.forEach((img) => {
            if (img !== imagem) {
                img.classList.add('blur'); // Adiciona a classe 'blur' nas imagens que não estão sendo sobrepostas
            }
        });
    });

    imagem.addEventListener('mouseleave', () => {
        imagens.forEach((img) => {
            img.classList.remove('blur'); // Remove a classe 'blur' de todas as imagens ao retirar o mouse
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const themeToggleBtn = document.getElementById("theme-toggle");
    const body = document.body;

    // Check if a theme is already selected in localStorage
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
        body.classList.add(currentTheme);
    }

    themeToggleBtn.addEventListener("click", function () {
        body.classList.toggle("light-theme");

        // Save the current theme in localStorage
        if (body.classList.contains("light-theme")) {
            localStorage.setItem("theme", "light-theme");
        } else {
            localStorage.removeItem("theme");
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const themeToggleButton = document.getElementById("theme-toggle");
    const listas2Image = document.getElementById("listas2");

    themeToggleButton.addEventListener("click", function() {
        document.body.classList.toggle("light-theme");

        if (listas2Image.src.includes("listras.png")) {
            listas2Image.src = "./listras2.png"; // Caminho da imagem para o tema claro
        } else {
            listas2Image.src = "./listras.png"; // Caminho da imagem original
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const themeToggleButton = document.getElementById("theme-togglee");
    const listas2Image = document.getElementById("listas2");

    themeToggleButton.addEventListener("click", function() {
        document.body.classList.toggle("light-theme");

        if (listas2Image.src.includes("listras.png")) {
            listas2Image.src = "./listras2.png"; // Caminho da imagem para o tema claro
        } else {
            listas2Image.src = "./listras.png"; // Caminho da imagem original
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Função para adicionar a classe de animação
    function addAnimationClass(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }

    // Configuração do Intersection Observer
    let options = {
        threshold: 0.001 // Altera a porcentagem da visualização necessária para acionar a animação
    };

    let observer = new IntersectionObserver(addAnimationClass, options);

    // Seleciona os elementos a serem animados
    let sobre = document.querySelector('.sobre');
    let descricao = document.querySelector('.descricao');
    let listas = document.querySelector('.listas');
    let ul4Elements = document.querySelectorAll('.ul4'); // Seleciona todas as ul4
    let contatos = document.querySelector('.contatos');

    // Observa os elementos
    observer.observe(sobre);
    observer.observe(descricao);
    observer.observe(listas);
    observer.observe(contatos);
    ul4Elements.forEach(ul => observer.observe(ul)); // Adiciona cada uma ao observer
});
document.addEventListener("DOMContentLoaded", function () {
    const textoElement = document.getElementById("texto");
    const textoOriginal = "Olá, meu nome é";
    
    let i = 0;
    
    function digitar() {
        if (i < textoOriginal.length) {
            textoElement.innerHTML += textoOriginal.charAt(i);
            i++;
            setTimeout(digitar, 100); // Ajuste a velocidade aqui
        }
    }

    digitar();
});
window.addEventListener("scroll", function () {
    const nav = document.querySelector("nav");
    if (window.scrollY > 50) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });
   
