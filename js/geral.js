const boxProjetos = document.querySelector('#Projetos');
const up = document.querySelector('#Up')

window.addEventListener('scroll', () => {
    if (boxProjetos.getBoundingClientRect().y <= 0) up.classList.add('On')
    else up.classList.remove('On')
})