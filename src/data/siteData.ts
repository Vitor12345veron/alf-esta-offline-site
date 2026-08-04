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

export const TEACHER_GUIDE = {
  eyebrow: 'Guia pedagógico do professor',
  title: 'Instrução pedagógica completa',
  lead: 'Mais de 250 páginas que acompanham o professor módulo a módulo: o olhar psicológico por trás de cada tema, a mediação em sala, o planejamento das aulas e as aplicações práticas com os estudantes.',
  toggleOpen: 'Ver o guia pedagógico completo',
  toggleClose: 'Recolher o guia pedagógico',
  framework: {
    title: 'Como cada módulo é conduzido',
    lead: 'Todo módulo é desenvolvido nos cinco momentos da Mediação Literária Reflexiva, para que a leitura vire experiência formativa e não apenas conteúdo:',
    steps: [
      { number: '01', title: 'Sensibilização', description: 'Ativar repertório, emoção e curiosidade antes da leitura, criando um ambiente psicológico seguro para o tema.' },
      { number: '02', title: 'Leitura compartilhada', description: 'Ler com pausas e escuta ativa, dando ao professor o papel de mediador da experiência estética e afetiva.' },
      { number: '03', title: 'Mediação', description: 'Perguntas abertas e rodas de conversa que transformam a narrativa em espelho para a vida do estudante.' },
      { number: '04', title: 'Atividade prática', description: 'Traduzir os valores da história em produção, projeto ou vivência concreta.' },
      { number: '05', title: 'Diário de bordo', description: 'Registro pessoal que consolida a aprendizagem e desenvolve autoconhecimento e metacognição.' },
    ],
  },
  modulesLead: 'Cada eixo temático abaixo é apresentado com o olhar psicológico do desenvolvimento do adolescente, seguido das orientações de mediação, planejamento e aplicação em sala.',
  modules: [
    {
      number: '01',
      title: 'Uso consciente da tecnologia',
      focus: 'Hiperconexão, atenção e presença',
      psychology:
        'Na adolescência, o cérebro ainda amadurece as regiões responsáveis pela regulação de impulsos e pela recompensa. As telas oferecem estímulos rápidos e imprevisíveis que fortalecem circuitos de dopamina e dificultam a tolerância ao tédio, ao silêncio e à espera. O olhar psicológico aqui não é moralizar o uso, mas ajudar o estudante a perceber como a atenção é disputada e como o excesso afeta sono, ansiedade e autoestima comparativa.',
      mediation:
        'Conduza sem julgamento: acolha o vínculo real que o jovem tem com o digital antes de problematizá-lo. Use perguntas que geram consciência — "o que você sente quando fica sem o celular?", "quem decide o que aparece na sua tela?" — e valide as respostas para que a reflexão seja genuína, não imposta.',
      planning:
        'Reserve de 2 a 3 aulas. Comece pela sensibilização com uma dinâmica de observação do próprio uso, avance para a leitura mediada do capítulo correspondente e feche com um pacto coletivo de convivência digital construído pela turma.',
      classroom:
        'Proponha um "diário de tempo de tela" por três dias, rodas de conversa sobre gatilhos de uso e a criação de combinados da turma. Registre no diário de bordo o que cada um percebeu sobre a própria atenção.',
    },
    {
      number: '02',
      title: 'Vínculos familiares e presença',
      focus: 'Pertencimento, escuta e afeto',
      psychology:
        'O adolescente vive a tensão entre buscar autonomia e continuar precisando de referência e segurança afetiva. Quando o vínculo familiar é frágil ou substituído por presenças apenas físicas — todos juntos, mas cada um na sua tela — surgem sentimentos de solidão, irritabilidade e desvalorização. Trabalhar presença é cuidar da base emocional que sustenta autoestima e sensação de pertencimento.',
      mediation:
        'Trate o tema com sensibilidade, reconhecendo que há diferentes configurações e histórias familiares. Evite idealizar "a família perfeita"; medie para que cada estudante identifique presenças significativas em sua vida, sejam elas quais forem, e nomeie o que é presença de verdade.',
      planning:
        'Planeje 2 aulas com atividade que atravesse a escola e a casa. Antecipe combinados com a coordenação para envolver as famílias de forma voluntária e respeitosa, sem expor situações pessoais.',
      classroom:
        'Sugira o desafio "uma refeição sem telas" ou uma conversa guiada com um adulto de referência, seguido de registro reflexivo. Em sala, promova roda de partilha voluntária sobre o que mudou na qualidade da presença.',
    },
    {
      number: '03',
      title: 'Identidade e autoconhecimento',
      focus: 'Autoimagem, emoções e autenticidade',
      psychology:
        'A construção da identidade é a tarefa central dessa fase: o jovem se pergunta quem é e como é visto. Redes sociais amplificam a comparação e a busca por validação externa, o que pode fragilizar a autoimagem. O foco psicológico é fortalecer a identidade a partir de dentro — valores, emoções, história pessoal — reduzindo a dependência do olhar alheio.',
      mediation:
        'Crie um espaço de confiança onde não há resposta certa. Nomear emoções amplia o repertório emocional; ajude o estudante a diferenciar quem ele é do que ele mostra. Cuide para que a partilha seja sempre voluntária e livre de exposição.',
      planning:
        'Reserve 2 a 3 aulas articuladas ao componente de projeto de vida. Combine produção individual (escrita de si) com um fechamento coletivo que valorize a diversidade de histórias da turma.',
      classroom:
        'Trabalhe autorretrato escrito, linha da vida ou "carta para si mesmo". Explore a diferença entre o perfil online e a pessoa real, registrando descobertas no diário de bordo.',
    },
    {
      number: '04',
      title: 'Propósito e projeto de vida',
      focus: 'Sentido, metas e esperança',
      psychology:
        'Ter um porquê é fator de proteção psicológica: projeto de vida e sentido de futuro reduzem comportamentos de risco e sustentam a motivação. Muitos adolescentes vivem no imediatismo das telas e têm dificuldade de projetar-se adiante. O olhar aqui é despertar esperança realista, conectando escolhas do presente a sonhos possíveis.',
      mediation:
        'Medie como quem faz perguntas, não como quem entrega respostas prontas. Acolha sonhos sem julgar seu "tamanho" e ajude a transformar desejos difusos em metas concretas e alcançáveis, reforçando a crença do estudante na própria capacidade.',
      planning:
        'Planeje 2 aulas com produto final visível — um mural, um mapa de sonhos ou um plano pessoal. Conecte o eixo às competências de projeto de vida da BNCC e a possíveis parcerias com a comunidade.',
      classroom:
        'Proponha o "mapa do futuro" com metas de curto, médio e longo prazo, ou a definição de um pequeno passo prático a dar na semana. Retome no diário de bordo para acompanhar o compromisso.',
    },
    {
      number: '05',
      title: 'Protagonismo, empatia e convivência',
      focus: 'Alteridade, respeito e ação',
      psychology:
        'O grupo tem enorme peso emocional na adolescência: pertencer, ser aceito e reconhecido molda comportamentos. Ambientes digitais podem intensificar exclusão, comparação e agressividade. Desenvolver empatia e protagonismo ajuda o jovem a sair do papel de espectador e a se perceber como alguém capaz de cuidar do outro e transformar seu contexto.',
      mediation:
        'Medie conflitos como oportunidades de aprendizagem, não como faltas a punir. Estimule a troca de perspectiva — "como o outro se sentiu?" — e dê protagonismo real, deixando decisões e responsabilidades nas mãos da turma sempre que possível.',
      planning:
        'Reserve 2 a 3 aulas culminando em uma ação coletiva. Alinhe com a gestão escolar para que a iniciativa dos estudantes ganhe espaço concreto na escola ou na comunidade.',
      classroom:
        'Organize rodas de convivência, projetos de impacto social ou campanhas contra o bullying idealizadas pelos próprios estudantes. Registre no diário de bordo o papel que cada um assumiu e o que aprendeu com o outro.',
    },
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
