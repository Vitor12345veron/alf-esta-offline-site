export const SITE_CONFIG = {
  title: 'ALF Está Offline | Projeto Educacional',
  description:
    'Literatura, competências socioemocionais e cultura digital consciente para escolas, famílias e redes de ensino.',
  author: 'Fabrício Lopes',
  phone: '5535984377973',
  whatsappMessage:
    'Olá, tenho interesse no Projeto ALF Está Offline. Gostaria de mais informações.',
  instagram: '@vidacraque',
  siteRef: 'vidacraque.com.br',
  email: 'contato@vidacraque.com.br',
} as const;

export function getWhatsAppLink(message?: string): string {
  const text = encodeURIComponent(message || SITE_CONFIG.whatsappMessage);
  return `https://wa.me/${SITE_CONFIG.phone}?text=${text}`;
}

export const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'O Livro', href: '#livro' },
  { label: 'Projeto Educacional', href: '#projeto' },
  { label: 'Metodologia', href: '#metodologia' },
  { label: 'BNCC', href: '#bncc' },
  { label: 'Autor', href: '#autor' },
  { label: 'Contato', href: '#contato' },
] as const;

export const HERO = {
  title: 'ALF Está Offline',
  subtitle:
    'Uma jornada literária para reconectar estudantes, famílias e escolas em uma era dominada pelas telas.',
  supportText:
    'Um projeto educacional que une literatura, competências socioemocionais e cultura digital consciente para o Ensino Fundamental II.',
  buttons: {
    primary: 'Solicitar apresentação',
    secondary: 'Conhecer o projeto',
    whatsapp: 'Falar no WhatsApp',
  },
} as const;

export const PROBLEM = {
  title: 'O problema que precisamos enfrentar',
  lead: 'Enquanto a tecnologia promete aproximar, muitas famílias estão cada vez mais distantes dentro da própria casa.',
  items: [
    { title: 'Uso excessivo de telas', description: 'Horas diárias absorvidas por notificações, jogos e redes sociais.' },
    { title: 'Isolamento social', description: 'Estudantes fisicamente presentes, mas emocionalmente distantes.' },
    { title: 'Ansiedade', description: 'Pressão constante de comparação e estímulos digitais ininterruptos.' },
    { title: 'Dificuldade de concentração', description: 'Fragmentação da atenção e resistência à leitura prolongada.' },
    { title: 'Enfraquecimento dos vínculos familiares', description: 'Pais e filhos dividem o mesmo teto, mas não a mesma vida.' },
    { title: 'Redução dos hábitos de leitura', description: 'Leitura perde espaço para conteúdos rápidos e superficiais.' },
    { title: 'Dificuldade de comunicação presencial', description: 'Conversas presenciais são substituídas por mensagens e reações.' },
  ],
} as const;

export const BOOK = {
  title: 'Uma narrativa para despertar famílias',
  paragraphs: [
    'Alf é um garoto como tantos da sua geração: encontrou nos jogos e nas redes sociais a atenção e o pertencimento que faltavam na vida real.',
    'A história convida pais, filhos e educadores a refletirem sobre presença, propósito, vínculos e reconexão. Mais do que uma narrativa juvenil, é um chamado à escuta e ao encontro.',
  ],
  quote: 'Existe um vazio que nenhuma tela consegue preencher.',
  cta: 'Ver amostra de leitura',
  sampleLink: '#contato',
} as const;

export const EDUCATIONAL_PROJECT = {
  title: 'Mais que um livro: uma experiência pedagógica completa',
  lead: 'O projeto transforma a leitura em uma experiência de formação humana, com aplicação orientada em sala de aula.',
  cards: [
    { title: 'Livro do estudante', description: 'Narrativa completa de Alf Está Offline, escrita para provocar reflexão e diálogo.' },
    { title: 'Guia pedagógico do professor', description: 'Mais de 250 páginas com mediação capítulo a capítulo, planejamento e avaliação.' },
    { title: 'Parecer técnico pedagógico', description: 'Documento para subsidiar Secretarias de Educação, conselhos e coordenações.' },
    { title: 'Material de apoio', description: 'Fichas, rubricas, cronogramas e instrumentos de acompanhamento da jornada.' },
    { title: 'Atividades interdisciplinares', description: 'Conexões com língua portuguesa, arte, ciências humanas e projetos de vida.' },
    { title: 'Avaliação formativa', description: 'Registros contínuos que valorizam o processo e o desenvolvimento do estudante.' },
  ],
} as const;

export const TARGET_AUDIENCE = {
  title: 'Público-alvo',
  groups: [
    '6º ano',
    '7º ano',
    '8º ano',
    '9º ano',
    'Escolas de tempo integral',
    'Projetos sociais',
    'Bibliotecas',
    'Escolas confessionais',
    'Redes públicas e privadas',
  ],
} as const;

export const OBJECTIVES = {
  title: 'Objetivos',
  general: {
    label: 'Objetivo geral',
    text: 'Desenvolver competências leitoras, socioemocionais e cidadãs por meio da literatura, promovendo reflexões sobre relações humanas, equilíbrio no uso das tecnologias, convivência familiar, protagonismo juvenil e projeto de vida.',
  },
  specific: {
    label: 'Objetivos específicos',
    items: [
      'Fortalecer o hábito da leitura',
      'Desenvolver interpretação textual',
      'Estimular pensamento crítico',
      'Promover cultura digital consciente',
      'Fortalecer vínculos familiares',
      'Desenvolver empatia',
      'Estimular comunicação respeitosa',
      'Incentivar protagonismo juvenil',
      'Favorecer projeto de vida',
    ],
  },
} as const;

export const METHODOLOGY = {
  title: 'Mediação Literária Reflexiva',
  lead: 'Cada capítulo do livro é desenvolvido em cinco momentos pedagógicos:',
  steps: [
    { number: '01', title: 'Sensibilização', description: 'Preparação emocional e cognitiva do estudante para o tema do capítulo.' },
    { number: '02', title: 'Leitura Compartilhada', description: 'Leitura orientada pelo professor, com pausas e escuta ativa.' },
    { number: '03', title: 'Mediação', description: 'Perguntas abertas, rodas de conversa e reflexões coletivas.' },
    { number: '04', title: 'Atividade Prática', description: 'Aplicação dos valores trabalhados na narrativa em projetos e exercícios.' },
    { number: '05', title: 'Diário de Bordo', description: 'Registro pessoal da aprendizagem e do autoconhecimento.' },
  ],
} as const;

export const DIFFERENTIAL = {
  title: 'Quatro dimensões integradas',
  cards: [
    { title: 'Literária', description: 'Formação de leitores com gosto pela leitura e pelo diálogo com textos.' },
    { title: 'Cognitiva', description: 'Interpretação, argumentação e pensamento crítico sobre questões reais.' },
    { title: 'Socioemocional', description: 'Empatia, autoconhecimento e convivência respeitosa.' },
    { title: 'Formação humana', description: 'Projeto de vida, família, propósito e responsabilidade.' },
  ],
} as const;

export const BNCC = {
  title: 'Alinhamento à BNCC',
  lead: 'O projeto dialoga com competências essenciais da BNCC e pode apoiar ações de leitura, convivência, cidadania e desenvolvimento integral.',
  tags: [
    'Linguagens',
    'Projeto de Vida',
    'Cultura Digital',
    'Comunicação',
    'Argumentação',
    'Responsabilidade',
    'Autoconhecimento',
    'Empatia',
    'Cooperação',
    'Cidadania',
  ],
} as const;

export const IMPLEMENTATION = {
  title: 'Implementação',
  lead: 'Sugestão de cronograma para escolas e secretarias:',
  steps: [
    'Apresentação do projeto à equipe gestora',
    'Formação dos professores',
    'Distribuição dos livros',
    'Aplicação semanal dos capítulos',
    'Atividades interdisciplinares',
    'Participação das famílias',
    'Culminância do projeto',
    'Avaliação institucional',
  ],
} as const;

export const RESULTS = {
  title: 'Resultados esperados',
  cards: [
    { title: 'Aumento do interesse pela leitura', description: 'Estudantes mais engajados com livros e narrativas significativas.' },
    { title: 'Melhoria da interpretação textual', description: 'Leitura mais atenta, argumentativa e crítica.' },
    { title: 'Maior participação dos estudantes', description: 'Aulas com mais troca, escuta e protagonismo juvenil.' },
    { title: 'Desenvolvimento de competências socioemocionais', description: 'Autoconhecimento, empatia e regulação emocional.' },
    { title: 'Maior diálogo entre escola e família', description: 'Conexão mais estreita entre casa, escola e comunidade.' },
    { title: 'Uso mais consciente das tecnologias', description: 'Reflexão sobre hábitos digitais e escolhas saudáveis.' },
    { title: 'Fortalecimento da cultura de convivência', description: 'Ambiente escolar mais acolhedor e respeitoso.' },
    { title: 'Ampliação do protagonismo estudantil', description: 'Jovens mais preparados para refletir e agir sobre suas vidas.' },
  ],
} as const;

export const AUTHOR = {
  title: 'Sobre o Autor',
  name: 'Fabrício Lopes',
  paragraphs: [
    'Fabrício Lopes é psicanalista, empresário, escritor e criador do Projeto OFFLINE. Autor de Vida de Craque e O Toque, dedica sua trajetória a ajudar pessoas a desenvolverem seu potencial, encontrarem propósito e restaurarem vínculos.',
    'Sua própria história de superação se tornou base para uma mensagem de esperança, restauração e transformação. Com sensibilidade e autoridade, Fabrício construiu uma proposta literária e pedagógica que fala diretamente com estudantes, famílias e educadores.',
  ],
  buttons: {
    primary: 'Conhecer o autor',
    secondary: 'Falar com Fabrício',
  },
} as const;

export const CTA = {
  title: 'Leve o Projeto ALF Está Offline para sua escola ou rede de ensino',
  text: 'Uma proposta pronta para implantação, com livro, guia pedagógico, material de apoio e metodologia estruturada para professores e estudantes.',
  buttons: {
    primary: 'Solicitar proposta',
    secondary: 'Agendar apresentação',
    whatsapp: 'Falar no WhatsApp',
  },
} as const;

export const CONTACT = {
  title: 'Entre em contato',
  lead: 'Preencha os dados abaixo e nossa equipe retornará em breve.',
  form: {
    name: 'Nome',
    institution: 'Instituição',
    city: 'Cidade/Estado',
    phone: 'Telefone/WhatsApp',
    email: 'E-mail',
    interestType: 'Tipo de interesse',
    interestOptions: ['Escola', 'Secretaria de Educação', 'Projeto social', 'Família', 'Outro'],
    message: 'Mensagem',
    submit: 'Enviar interesse',
  },
} as const;

export const FOOTER = {
  title: 'ALF Está Offline',
  tagline: 'Projeto Educacional · Fabrício Lopes',
  phone: '(35) 9 8437 7973',
  links: [
    { label: 'Início', href: '#inicio' },
    { label: 'O Livro', href: '#livro' },
    { label: 'Projeto Educacional', href: '#projeto' },
    { label: 'Metodologia', href: '#metodologia' },
    { label: 'Autor', href: '#autor' },
    { label: 'Contato', href: '#contato' },
  ],
  copyright: `© ${new Date().getFullYear()} ALF Está Offline. Todos os direitos reservados.`,
} as const;
