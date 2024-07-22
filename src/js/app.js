var typed = new Typed('.text', {
  strings: ['Desenvolvedora Front-end', '&amp; UX/UI Designer.'],
  typeSpeed: 50,
  backSpeed: 100,
  backDelay: 100,
  loop: true,
});

var projects = [
  {
    imgSrc: './src/img/project1.avif',
    projectLink: 'https://github.com/maahbatistaa/cadastro-de-pessoa',
    title: 'Full Stack and UI Designer',
    description:
      'Site para cadastrar pessoas físicas. Nele você pode fazer seu registro, logar e cadastrar pessoas fisicas, além de cadastrar mais de uma pessoas, você pode também deletar pessoas.',
  },
  {
    imgSrc: './src/img/project2.avif',
    projectLink:
      'https://maahbatistaa.github.io/projects-origamid/animais-fantasticos/',
    title: 'Front-end',
    description: 'Projeto realizado no curso de JavaScript da Origamid',
  },
  {
    imgSrc: './src/img/project3.avif',
    projectLink: 'https://agencia-xyz-ebon.vercel.app',
    title: 'Front-end',
    description: 'Projeto realizado para praticar CSS Grid e CSS Flexbox',
  },
  {
    imgSrc: './src/img/wildbeast.png',
    projectLink: 'https://maahbatistaa.github.io/projects-origamid/wildbeast/',
    title: 'Front-end',
    description: 'Projeto realizado no curso de CSS Grid da Origamid',
  },
  {
    imgSrc: './src/img/bikcraft.png',
    projectLink: 'https://maahbatistaa.github.io/projects-origamid/bikcraft/',
    title: 'Front-end',
    description: 'Projeto realizado no curso de HTML e CSS para Iniciantes',
  },
];

var projectsContainer = document.getElementById('projects-container');

projects.forEach((project) => {
  projectsContainer.innerHTML += `
      <div class="row">
        <img src="${project.imgSrc}" alt="">
        <div class="layer">
          <a href="${project.projectLink}">
            <h5>${project.title}</h5>
            <p>${project.description}</p>
          </a>
        </div>
      </div>
    `;
});
