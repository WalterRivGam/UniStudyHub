const contenedorLLM = document.querySelector('.contenedor-llm');
const btnLLMMostrar = document.querySelector('.btn-llm-mostrar');
const btnLLMOcultar = document.querySelector('.btn-llm-ocultar');

btnLLMMostrar.addEventListener('click', () => {
  contenedorLLM.classList.toggle('ocultar');
  btnLLMMostrar.classList.toggle('ocultar');
  btnLLMOcultar.classList.toggle('ocultar');
});

btnLLMOcultar.addEventListener('click', () => {
  contenedorLLM.classList.toggle('ocultar');
  btnLLMMostrar.classList.toggle('ocultar');
  btnLLMOcultar.classList.toggle('ocultar');
});
