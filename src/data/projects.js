// --- IMPORTAÇÕES: GENIALL ---
import geniallCover from '../assets/img/projetos/GeniAll/jogo.png';
import geniallLogo from '../assets/img/projetos/GeniAll/logo.png';
import geniallHistoria from '../assets/img/projetos/GeniAll/historia.png';
import geniallJogo from '../assets/img/projetos/GeniAll/jogo.png';
import geniallJogoMemoria from '../assets/img/projetos/GeniAll/jogoDaMemoria.png';
import geniallLoja from '../assets/img/projetos/GeniAll/loja.png';
import geniallPersonagens from '../assets/img/projetos/GeniAll/personagens.png';
import geniallQuiz from '../assets/img/projetos/GeniAll/quiz.png';
import geniallRegistro from '../assets/img/projetos/GeniAll/registro.png';
import geniallVerdadeiroOuFalso from '../assets/img/projetos/GeniAll/verdadeiroOuFalso.png';

// --- IMPORTAÇÕES: SKILLO ---
import skilloCover from '../assets/img/projetos/Skillo/chamadaPraAcao.png';
import skilloLogo from '../assets/img/projetos/Skillo/logo.png';
import skilloAgendamentos from '../assets/img/projetos/Skillo/agendamentos.png';
import skilloAulas from '../assets/img/projetos/Skillo/aulas.png';
import skilloConfiguracaoPerfil from '../assets/img/projetos/Skillo/configuracaoPerfil.png';
import skilloCriarFormulario from '../assets/img/projetos/Skillo/criarFormulario.png';
import skilloDepoimentos from '../assets/img/projetos/Skillo/depoimentos.png';
import skilloDesenvolverExercicio from '../assets/img/projetos/Skillo/desenvolverExercicio.png';
import skilloFeedDeVideos from '../assets/img/projetos/Skillo/feedDeVideos.png';
import skilloInteresses from '../assets/img/projetos/Skillo/interesses.png';
import skilloLogin from '../assets/img/projetos/Skillo/login.png';
import skilloPaginaInicial from '../assets/img/projetos/Skillo/paginaInicial.png';
import skilloPerfil from '../assets/img/projetos/Skillo/perfil.png';
import skilloRegistro from '../assets/img/projetos/Skillo/registro.png';
import skilloTirarFoto from '../assets/img/projetos/Skillo/tirarFoto.png';

// --- IMPORTAÇÕES: GABRIEL STORE ---
import storeCover from '../assets/img/projetos/GabrielStore/sobre.png';
import storeLogo from '../assets/img/projetos/GabrielStore/logo.jpg';
import storeLogin from '../assets/img/projetos/GabrielStore/login.png';
import storeProdutos from '../assets/img/projetos/GabrielStore/produtos.png';
import storeCarrinho from '../assets/img/projetos/GabrielStore/meuCarrinho.png';
import storePedidos from '../assets/img/projetos/GabrielStore/pedidos.png';
import storeMeuProdutos from '../assets/img/projetos/GabrielStore/meuProdutos.png';
import storeCadastroColaboradores from '../assets/img/projetos/GabrielStore/cadastroColaboradores.png';
import storeColaboradores from '../assets/img/projetos/GabrielStore/colaboradores.png';
import storeMinhasVendas from '../assets/img/projetos/GabrielStore/minhasVendas.png';
import storeRegistro from '../assets/img/projetos/GabrielStore/registro.png';

// --- IMPORTAÇÕES: MARCENARIA APOLINARIO ---
import marcenariaCover from '../assets/img/projetos/MarcenariaApolinario/home.png';
import marcenariaLogo from '../assets/img/projetos/MarcenariaApolinario/logo.svg';
import marcenariaChamadaPraCompra from '../assets/img/projetos/MarcenariaApolinario/chamadaPraCompra.png';
import marcenariaFalePeloWhatsApp from '../assets/img/projetos/MarcenariaApolinario/FalePeloWhatsApp.png';
import marcenariaRedesSociais from '../assets/img/projetos/MarcenariaApolinario/RedesSociais.png';
import marcenariaServicoPrincipal from '../assets/img/projetos/MarcenariaApolinario/servicoPrincipal.png';
import marcenariaServicos from '../assets/img/projetos/MarcenariaApolinario/Servicos.png';
import marcenariaSobre from '../assets/img/projetos/MarcenariaApolinario/sobre.png';

// --- IMPORTAÇÕES: LESTTI COMPANY ---
import lesttiCover from '../assets/img/projetos/Lestti/home.png';
import lesttiLogo from '../assets/img/projetos/Lestti/logo.png';
import lesttiColecoes from '../assets/img/projetos/Lestti/colecos.png';
import lesttiCombos from '../assets/img/projetos/Lestti/combos.png';
import lesttiContato from '../assets/img/projetos/Lestti/contato.png';
import lesttiLancamentos from '../assets/img/projetos/Lestti/lancamentos.png';
import lesttiProdutos from '../assets/img/projetos/Lestti/produtos.png';

export const projects = [
  {
    id: 1,
    slug: 'geniall',
    title: 'GeniAll',
    description: 'Plataforma educacional com trilhas gamificadas e comunidade ativa.',
    longDescription:
      'A GeniAll é uma plataforma edtech pensada para manter alunos engajados e facilitar a rotina de professores. Criamos jornadas mobile-first com quizzes, biblioteca multimídia e desafios colaborativos que aumentam a retenção.',
    coverImage: geniallCover,
    carouselImage: geniallCover,
    logo: geniallLogo,
    tags: ['EdTech', 'Mobile-first', 'Gamificação'],
    challenge: 'Entregar uma experiência digital que combinasse aprendizado rápido e monitoramento em tempo real.',
    solution: 'Fluxos simples para criação de aulas e avaliações interativas com feedback visual imediato.',
    results: [
      'Onboarding guiado reduziu dúvidas de suporte.',
      'Gestão de aulas em minutos para professores.',
      'Engajamento alto com trilhas gamificadas.',
    ],
    gallery: [
      { src: geniallHistoria, alt: 'Narrativa dos personagens' },
      { src: geniallJogo, alt: 'Tela principal do jogo' },
      { src: geniallJogoMemoria, alt: 'Jogo da memória' },
      { src: geniallLoja, alt: 'Loja de itens colecionáveis' },
      { src: geniallPersonagens, alt: 'Habilidades dos personagens' },
      { src: geniallQuiz, alt: 'Quiz interativo' },
      { src: geniallRegistro, alt: 'Fluxo de registro' },
      { src: geniallVerdadeiroOuFalso, alt: 'Desafio verdadeiro ou falso' },
    ],
  },
  {
    id: 2,
    slug: 'skillo',
    title: 'Skillo',
    description: 'Ecossistema para conectar alunos, mentores e empresas.',
    longDescription:
      'Skillo aproxima a comunidade acadêmica do mercado através de mentorias e conteúdo ao vivo. Criamos dashboards de progresso e módulos práticos para visibilidade de carreiras.',
    coverImage: skilloCover,
    carouselImage: skilloCover,
    logo: skilloLogo,
    tags: ['Comunidade', 'Conteúdo ao vivo', 'Dados'],
    challenge: 'Construir um hub único para aulas ao vivo e networking sem fricção.',
    solution: 'Mapeamento de jornada com filtros rápidos e feed personalizado de vídeos.',
    results: [
      'Discovery de conteúdo em poucos cliques.',
      'Agendamento automático para mentores.',
      'Perfis completos com interesses específicos.',
    ],
    gallery: [
      { src: skilloPaginaInicial, alt: 'Página inicial e calendário' },
      { src: skilloAgendamentos, alt: 'Gestão de agendamentos' },
      { src: skilloAulas, alt: 'Catálogo de aulas' },
      { src: skilloConfiguracaoPerfil, alt: 'Configuração de perfil' },
      { src: skilloCriarFormulario, alt: 'Criação de formulários' },
      { src: skilloDepoimentos, alt: 'Depoimentos da comunidade' },
      { src: skilloDesenvolverExercicio, alt: 'Editor de exercícios' },
      { src: skilloFeedDeVideos, alt: 'Feed de vídeos' },
      { src: skilloInteresses, alt: 'Personalização de interesses' },
      { src: skilloLogin, alt: 'Tela de login' },
      { src: skilloPerfil, alt: 'Perfil do estudante' },
      { src: skilloRegistro, alt: 'Fluxo de registro' },
      { src: skilloTirarFoto, alt: 'Captura de tarefas' },
    ],
  },
  {
    id: 3,
    slug: 'gabriel-store',
    title: 'Gabriel Store',
    description: 'Loja virtual focada em escalabilidade de catálogo e equipe.',
    longDescription:
      'E-commerce robusto com painel administrativo para gestão de estoque, vendas e controle de acesso de colaboradores.',
    coverImage: storeCover,
    carouselImage: storeCover,
    logo: storeLogo,
    tags: ['E-commerce', 'Gestão', 'Operação'],
    challenge: 'Centralizar a operação de uma loja em crescimento em uma interface simples.',
    solution: 'Painel modular com visão de vendas, controle de pedidos e permissões por colaborador.',
    results: [
      'Atualização de produtos por categoria.',
      'Fluxo de pedidos transparente para o cliente.',
      'Indicadores de performance de vendas.',
    ],
    gallery: [
      { src: storeLogin, alt: 'Login administrativo' },
      { src: storeRegistro, alt: 'Registro de clientes' },
      { src: storeProdutos, alt: 'Catálogo de produtos' },
      { src: storeCarrinho, alt: 'Resumo do carrinho' },
      { src: storePedidos, alt: 'Gestão de pedidos' },
      { src: storeMeuProdutos, alt: 'Meus produtos cadastrados' },
      { src: storeCadastroColaboradores, alt: 'Cadastro de equipe' },
      { src: storeColaboradores, alt: 'Lista de colaboradores' },
      { src: storeMinhasVendas, alt: 'Painel de performance' },
    ],
  },
  {
    id: 4,
    slug: 'marcenaria-apolinario',
    title: 'Marcenaria Apolinario',
    description: 'Site institucional com foco em conversão e portfólio visual.',
    longDescription:
      'Desenvolvido para destacar a qualidade artesanal, facilitando o contato direto do cliente via WhatsApp e redes sociais.',
    coverImage: marcenariaCover,
    carouselImage: marcenariaCover,
    logo: marcenariaLogo,
    tags: ['Site Institucional', 'Conversão', 'WhatsApp'],
    challenge: 'Transmitir confiança e profissionalismo através de um portfólio digital.',
    solution: 'Design responsivo com CTAs estratégicos e integração total com canais de atendimento.',
    results: [
      'Aumento de orçamentos via WhatsApp.',
      'Exposição clara dos serviços principais.',
      'Navegação fluida em dispositivos móveis.',
    ],
    gallery: [
      { src: marcenariaCover, alt: 'Página inicial' },
      { src: marcenariaServicoPrincipal, alt: 'Serviço em destaque' },
      { src: marcenariaServicos, alt: 'Lista de serviços' },
      { src: marcenariaSobre, alt: 'Sobre a marcenaria' },
      { src: marcenariaChamadaPraCompra, alt: 'Chamada para orçamento' },
      { src: marcenariaFalePeloWhatsApp, alt: 'Botão de WhatsApp' },
      { src: marcenariaRedesSociais, alt: 'Redes sociais' },
    ],
  },
  {
    id: 5,
    slug: 'lestti-company',
    title: 'Lestti Company',
    description: 'Plataforma fitness para venda de produtos e combos exclusivos.',
    longDescription:
      'A Lestti Company foca na experiência de compra para o público fitness, organizando produtos por coleções e facilitando o acesso a lançamentos e combos promocionais.',
    coverImage: lesttiCover,
    carouselImage: lesttiCover,
    logo: lesttiLogo,
    tags: ['Fitness', 'E-commerce', 'Lifestyle'],
    challenge: 'Organizar um catálogo dinâmico de roupas e acessórios fitness de forma visualmente atraente.',
    solution: 'Navegação por coleções e lançamentos, com foco em conversão e suporte direto ao cliente.',
    results: [
      'Acesso rápido a combos promocionais.',
      'Segmentação clara por tipo de coleção.',
      'Facilidade de contato para suporte pré-venda.',
    ],
    gallery: [
      { src: lesttiCover, alt: 'Home da Lestti' },
      { src: lesttiColecoes, alt: 'Visualização de coleções' },
      { src: lesttiCombos, alt: 'Combos promocionais' },
      { src: lesttiContato, alt: 'Página de contato' },
      { src: lesttiLancamentos, alt: 'Novos lançamentos' },
      { src: lesttiProdutos, alt: 'Catálogo geral de produtos' },
    ],
  },
];

export const getProjectBySlug = (slug) => projects.find((project) => project.slug === slug);