// Selecionando os elementos
const btnInsight = document.querySelector('.btn-insight');
const carousel = document.querySelector('.carousel');
const track = document.querySelector('.carousel-track');
const btnRight = document.querySelector('.arrow.right');
const btnLeft = document.querySelector('.arrow.left');

// Lista de textos (Insights)
const insights = [
  "Insight 1: Os registros de ocorrências no Brasil apresentam forte concentração nas regiões Sudeste e Nordeste, indicando maior volume de denúncias nessas áreas ao longo do período analisado.",
  "Insight 2: A predominância de registros nas regiões Sudeste e Nordeste pode estar associada tanto à maior população quanto a uma maior formalização, evidenciando diferenças regionais no acesso e uso dos canais de registro.",
  "Insight 3: Os dados mostram que ocorrências de estupro e estupro de vulnerável representam a maior parte dos registros, indicando que esses tipos de crime são os mais frequentemente formalizados nos sistemas oficiais."
];

let indiceAtual = 0;

// 1. Mostrar o carrossel ao clicar no botão principal
btnInsight.addEventListener('click', () => {
  carousel.classList.toggle('active');
  track.innerText = insights[indiceAtual]; // Coloca o primeiro texto
});

// 2. Mudar para o próximo (Seta Direita)
btnRight.addEventListener('click', () => {
  indiceAtual = (indiceAtual + 1) % insights.length; // Volta ao início se chegar no fim
  track.innerText = insights[indiceAtual];
});

// 3. Voltar para o anterior (Seta Esquerda)
btnLeft.addEventListener('click', () => {
  indiceAtual = (indiceAtual - 1 + insights.length) % insights.length;
  track.innerText = insights[indiceAtual];
});


const myObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show')
    } else {
      entry.target.classList.remove('show')
    }
  })
})

const elements = document.querySelectorAll('.hidden')
elements.forEach((element) => myObserver.observe(element))

var btn = document.getElementById("btnTopo");

window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

btn.addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

function fecharAviso() {
  document.getElementById("aviso-mobile").style.display = "none";
}
