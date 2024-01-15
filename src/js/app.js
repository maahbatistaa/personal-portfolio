var typed = new Typed('.text', {
  strings: ['Desenvolvedora Full Stack', '&amp; UX/UI Designer.'],
  typeSpeed: 50,
  backSpeed: 100,
  backDelay: 100,
  loop: true,
});

var projects = [
  {
    imgSrc: './src/img/project6.avif',
    projectLink: 'https://jordan-shoes-ashy.vercel.app',
    title: 'Front-end',
    description: '',
  },
  {
    imgSrc: './src/img/project4.avif',
    projectLink: 'https://blog-codelandia-omega.vercel.app',
    title: 'Front-end',
    description:
      'Landing Page de um blog de tecnologia. Utilizando flex para torna-lo responsivo.',
  },
  {
    imgSrc: './src/img/project5.avif',
    projectLink: 'https://maahbatistaa.github.io/ControleFinanceiro/',
    title: 'Full Stack',
    description:
      'Controle Financeiro foi desenvolvido com HTML, CSS e JS, o intuito desse projeto é ter algo fácil e simples para controle de gastos. Você pode ter o controle de entrada e saida, além do saldo atual. Armazenamento local.',
  },
  {
    imgSrc: './src/img/project1.avif',
    projectLink: 'https://flexblog-green.vercel.app',
    title: 'Front-end',
    description:
      'FlexBlog foi o projeto final do curso CSS Flexbox. Obtive o conhecimento e a pratica do flexbox, utilizando diversas formas de alinhar os itens com o flexbox, além de torna-lo responsivo utilizando poucos media queries, pois o flexbox já adapta o layout automaticamente ao utilizar o flex-wrap.',
  },
  {
    imgSrc: './src/img/project2.avif',
    projectLink: 'https://bikcraft-flame.vercel.app',
    title: 'Front-end & UI/UX Design',
    description:
      'Bikcraft projeto final do curso HTML e CSS. Além de ter feito todo o prototipo no curso de UI Design, eu pude colocar em prática tudo que aprendi ao longo do curso, o que inclui: Posicionamento; Tags semânticas; Responsividade; Boas práticas no CSS.',
  },
  {
    imgSrc: './src/img/project3.avif',
    projectLink: 'https://wildbeast-pink.vercel.app',
    title: 'Front-end',
    description:
      'Wildbeast projeto final do curso CSS Grid. Utilizando o Grid facilita a criação de layouts flexíveis e responsivos, reduzindo a utilização de floats que era usado para fazer o mesmo posicionamento.',
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
