import { TopicItem, FaqItem } from '../types';

export const HERO_DATA = {
  headline: "Domine GPS e piloto automático",
  subheadline: "Aprenda todas as configurações de GPS e piloto automático que todo operador precisa dominar para configurar, calibrar e operar máquinas agrícolas com precisão",
  badgeText: "Treinamento 100% online",
  heroImageUrl: "/images/hero-gps-monitor.svg",
  metrics: [
    { label: "Operadores Formados", value: "+17.000" },
    { label: "Configurações Práticas", value: "+50" },
    { label: "Garantia Incondicional", value: "7 Dias" },
    { label: "Satisfação dos Alunos", value: "4.9/5 ★" },
  ]
};

export const WHAT_YOU_WILL_LEARN_TOPICS: TopicItem[] = [
  {
    id: "linhas-orientacao",
    title: "LINHAS DE ORIENTAÇÃO",
    description: "Crie linhas A/B, pistas retas e curvas e configure o direcionamento correto para cada operação.",
    image: "/images/topic-linhas-ab.jpg",
    iconName: "Compass",
    badgeText: "Pistas Retas & Curvas A/B",
    features: [
      "Configuração exata do Ponto A e Ponto B",
      "Pistas de orientação retas e adaptativas no campo",
      "Pistas curvas e alinhamento em cabeceiras de talhão",
      "Ajuste fino de espaçamento e compensação de erro"
    ]
  },
  {
    id: "piloto-automatico",
    title: "PILOTO AUTOMÁTICO",
    description: "Configure e ajuste o piloto para manter a máquina trabalhando com precisão entre as passadas.",
    image: "/images/topic-piloto-automatico.jpg",
    iconName: "Cpu",
    badgeText: "Precisão RTK 2.5cm",
    features: [
      "Ajuste de sensibilidade e agressividade do esterçamento",
      "Calibração do ganho do volante elétrico e hidráulico",
      "Engate automático em linhas e retomadas suaves",
      "Eliminação de oscilações e efeito 'zig-zag' no tiro"
    ]
  },
  {
    id: "gps-monitor",
    title: "GPS E MONITOR",
    description: "Aprenda a calibrar o sistema, entender o sinal e corrigir falhas que podem comprometer a operação.",
    image: "/images/topic-gps-monitor.jpg",
    iconName: "Radio",
    badgeText: "Sinais RTK, SF3 e EGNOS",
    features: [
      "Sinais de correção e tolerância a perda de satélites",
      "Calibração do sensor TCM (terreno e inclinação)",
      "Diagnóstico e correção rápida de alarmes no monitor",
      "Ajuste de deslocamento de antena (offset do centro)"
    ]
  },
  {
    id: "implemento",
    title: "IMPLEMENTO",
    description: "Configure largura de trabalho, espaçamento, sobreposição e parâmetros do implemento corretamente.",
    image: "/images/topic-implemento.jpg",
    iconName: "Settings",
    badgeText: "Largura & Sobreposição",
    features: [
      "Diferença entre largura física e largura efetiva",
      "Offset do pino de engate e distância do receptor",
      "Controle automático de desligamento de seções",
      "Ajustes em plantadeiras, pulverizadores e distribuidores"
    ]
  },
  {
    id: "mapas-talhoes",
    title: "MAPAS E TALHÕES",
    description: "Crie mapas, limites, cabeceiras e linhas de orientação para organizar a operação dentro do talhão.",
    image: "/images/topic-mapas-talhoes.jpg",
    iconName: "Map",
    badgeText: "Limites & Cabeceiras",
    features: [
      "Gravação e demarcação de limites de talhão no GPS",
      "Configuração de zonas de cabeceira e área de manobra",
      "Exportação e importação de dados de talhões",
      "Organização de clientes, fazendas e safras"
    ]
  },
  {
    id: "operacoes-agricolas",
    title: "PLANTIO, PULVERIZAÇÃO E COLHEITA",
    description: "Aprenda como configurar GPS e piloto automático nas principais operações da fazenda e entenda os monitores presentes nas máquinas agrícolas de última geração.",
    image: "/images/topic-operacoes-multimarcas.jpg",
    iconName: "Tractor",
    badgeText: "Monitores GS4, Pro700, etc.",
    features: [
      "Operação prática em John Deere, Case, New Holland e Trimble",
      "Configuração de velocidade com controle GPS no plantio",
      "Corte de seção e taxa variável na pulverização",
      "Mapeamento de produtividade em tempo real na colheita"
    ]
  }
];

export const INSTRUCTOR_DATA = {
  name: "Professor Allyson Viana",
  title: "Especialista em Máquinas Agrícolas e Fundador da Inprotec",
  imageUrl: "/images/instructor-allyson.jpg",
  bio: [
    "Allyson Viana é especialista em máquinas agrícolas, fundador da Inprotec e possui mais de 15 anos de experiência prática no campo.",
    "Ao longo de sua trajetória, já atendeu mais de 250 fazendas e participou diretamente da formação de mais de 17 mil operadores em todo o Brasil.",
    "Sua metodologia é focada justamente no que o operador precisa saber na prática: entender a máquina, configurar corretamente e saber o que fazer quando estiver sozinho dentro da cabine.",
    "Neste treinamento, ele vai te mostrar passo a passo como trabalhar com GPS, piloto automático e tecnologia embarcada sem complicação e sem enrolação."
  ],
  stats: [
    { label: "Anos de Experiência no Campo", value: "+15 Anos" },
    { label: "Operadores Treinados", value: "+17.000" },
    { label: "Fazendas Atendidas", value: "+250" }
  ]
};

export const PRICING_DATA = {
  originalPrice: "R$ 297",
  currentPrice: "R$ 97",
  paymentDetails: "Pagamento único. Você entra hoje e já pode começar a estudar.",
  benefits: [
    "Curso completo de GPS e Piloto Automático",
    "Aulas práticas e direto ao ponto",
    "Acesso imediato ao treinamento",
    "Material complementar em PDF",
    "Certificado de conclusão reconhecido",
    "Carteirinha personalizada do operador",
    "7 dias de garantia incondicional"
  ],
  guaranteeHeadline: "Você tem 7 dias para testar o treinamento",
  guaranteeSubhead: "Entre, assista e decida depois.",
  guaranteeText: [
    "Faça sua matrícula e acesse todo o treinamento.",
    "Durante os próximos 7 dias, você poderá assistir às aulas, conhecer a metodologia e avaliar se o curso faz sentido para você.",
    "Se dentro desse período decidir que o treinamento não é para você, basta solicitar o reembolso dentro do prazo da garantia.",
    "Você recebe o valor pago de volta.",
    "Ou seja: você pode começar a aprender GPS e piloto automático hoje sem assumir o risco da compra."
  ]
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Preciso ter trator ou máquina própria para fazer o curso?",
    answer: "Não! O curso foi feito para quem já trabalha ou deseja começar a trabalhar no campo. Com as videoaulas práticas e exemplos passo a passo, você aprende todas as telas e comandos direto no seu celular ou computador."
  },
  {
    question: "Por quanto tempo terei acesso ao treinamento?",
    answer: "Você terá 1 ano (12 meses) de acesso completo a todas as aulas, atualizações e materiais do treinamento, podendo assistir no seu próprio ritmo, quantas vezes quiser, pelo celular, tablet ou computador."
  },
  {
    question: "Como recebo meu Certificado e minha Carteirinha do Operador?",
    answer: "Assim que concluir as aulas do treinamento, o sistema libera automaticamente o seu Certificado de Conclusão em PDF de alta resolução e a sua Carteirinha do Operador personalizada pronta para uso."
  },
  {
    question: "Quais marcas de monitores e GPS são abordadas?",
    answer: "O treinamento foca na lógica universal de funcionamento e nas configurações presentes nos principais monitores do mercado (John Deere GS3/GS4, New Holland Intelliview, Case Pro700, Trimble, Stara, Agres, Topcon, etc.)."
  },
  {
    question: "Como funciona a garantia de 7 dias?",
    answer: "É 100% livre de risco. Se por qualquer motivo você achar que o curso não é para você, basta nos enviar uma mensagem dentro de 7 dias após a compra e devolveremos todo o seu dinheiro."
  }
];

