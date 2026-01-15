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

import marcenariaCover from '../assets/img/projetos/MarcenariaApolinario/home.png';
import marcenariaLogo from '../assets/img/projetos/MarcenariaApolinario/logo.svg';
import marcenariaChamadaPraCompra from '../assets/img/projetos/MarcenariaApolinario/chamadaPraCompra.png';
import marcenariaFalePeloWhatsApp from '../assets/img/projetos/MarcenariaApolinario/FalePeloWhatsApp.png';
import marcenariaRedesSociais from '../assets/img/projetos/MarcenariaApolinario/RedesSociais.png';
import marcenariaServicoPrincipal from '../assets/img/projetos/MarcenariaApolinario/servicoPrincipal.png';
import marcenariaServicos from '../assets/img/projetos/MarcenariaApolinario/Servicos.png';
import marcenariaSobre from '../assets/img/projetos/MarcenariaApolinario/sobre.png';

export const projects = [
  {
    id: 1,
    slug: 'geniall',
    title: 'GeniAll',
    description: 'Plataforma educacional com trilhas gamificadas e comunidade ativa.',
    longDescription:
      'A GeniAll é uma plataforma edtech pensada para manter alunos engajados e para facilitar a rotina de professores. Criamos jornadas mobile-first com quizzes, biblioteca multimídia e desafios colaborativos que aumentam a retenção e simplificam a gestão de turmas.',
    coverImage: geniallCover,
    carouselImage: geniallCover,
    logo: geniallLogo,
    tags: ['EdTech', 'Mobile-first', 'Gamificação'],
    challenge:
      'Entregar uma experiência digital que combinasse aprendizado rápido, colaboração e monitoramento em tempo real, sem sacrificar a facilidade de uso para professores e alunos.',
    solution:
      'Desenhamos fluxos simples para criação de aulas, publicação de vídeos, fóruns e avaliações interativas. Tudo foi pensado para funcionar bem em telas pequenas, com navegação clara e feedback visual imediato.',
    results: [
      'Onboarding guiado reduziu dúvidas de suporte no primeiro acesso.',
      'Professores conseguem publicar aulas completas em minutos, com formulários e quizzes prontos.',
      'Alunos engajam mais com feed de vídeos curado e interações entre turmas.',
    ],
    gallery: [
      { src: geniallHistoria, alt: 'Linha do tempo e narrativa dos personagens' },
      { src: geniallJogo, alt: 'Tela principal do jogo educativo' },
      { src: geniallJogoMemoria, alt: 'Jogo da memória com cartas temáticas' },
      { src: geniallLoja, alt: 'Loja in-app para itens colecionáveis' },
      { src: geniallPersonagens, alt: 'Personagens ilustrados e suas habilidades' },
      { src: geniallQuiz, alt: 'Quiz interativo para reforçar o aprendizado' },
      { src: geniallRegistro, alt: 'Fluxo de registro simples para novos alunos' },
      { src: geniallVerdadeiroOuFalso, alt: 'Desafio de verdadeiro ou falso gamificado' },
    ],
  },
  {
    id: 2,
    slug: 'skillo',
    title: 'Skillo',
    description: 'Ecossistema para conectar alunos, mentores e empresas.',
    longDescription:
      'Skillo nasceu para aproximar comunidade acadêmica e mercado. Criamos experiências colaborativas, dashboards de progresso e módulos de prática para que cada aluno tenha visibilidade das próximas oportunidades.',
    coverImage: skilloCover,
    carouselImage: skilloCover,
    logo: skilloLogo,
    tags: ['Comunidade', 'Conteúdo ao vivo', 'Dados'],
    challenge:
      'Construir um hub único que juntasse aulas ao vivo, mentorias, biblioteca de vídeos e ferramentas de networking sem gerar fricção na navegação.',
    solution:
      'Mapeamos as jornadas principais e priorizamos o discovery de conteúdo. Implementamos filtros rápidos, feed personalizado e cards ricos para aulas, mentorias e oportunidades.',
    results: [
      'Alunos encontram aulas e mentorias relevantes em poucos cliques.',
      'Mentores conseguem criar e gerenciar sessões com agendamento automático.',
      'Comunidade ativa com perfis completos, interesses e registro simplificado.',
    ],
    gallery: [
      { src: skilloPaginaInicial, alt: 'Página inicial com destaques e calendário de aulas' },
      { src: skilloAgendamentos, alt: 'Agendamentos de aulas e mentorias com confirmação' },
      { src: skilloAulas, alt: 'Catálogo de aulas com filtros e categorias' },
      { src: skilloConfiguracaoPerfil, alt: 'Configuração rápida de perfil do aluno' },
      { src: skilloCriarFormulario, alt: 'Criação de formulários para atividades' },
      { src: skilloDepoimentos, alt: 'Sessão de depoimentos da comunidade' },
      { src: skilloDesenvolverExercicio, alt: 'Editor para desenvolver exercícios' },
      { src: skilloFeedDeVideos, alt: 'Feed de vídeos sob demanda para revisão' },
      { src: skilloInteresses, alt: 'Seleção de interesses para personalizar recomendações' },
      { src: skilloLogin, alt: 'Tela de login com autenticação' },
      { src: skilloPerfil, alt: 'Perfil detalhado do estudante' },
      { src: skilloRegistro, alt: 'Fluxo de registro orientado para novos usuários' },
      { src: skilloTirarFoto, alt: 'Captura de imagem para completar tarefas' },
    ],
  },
  {
    id: 3,
    slug: 'gabriel-store',
    title: 'Gabriel Store',
    description: 'Loja virtual pensada para escalar catálogo e equipe.',
    longDescription:
      'Projeto de e-commerce com foco em gestão de produtos, pedidos e colaboradores. O painel foi desenhado para que a operação acompanhe o crescimento da loja sem perder controle de estoque, vendas e atendimento.',
    coverImage: storeCover,
    carouselImage: storeCover,
    logo: storeLogo,
    tags: ['E-commerce', 'Gestão', 'Operação'],
    challenge:
      'Centralizar gestão de produtos, pedidos e equipe em uma interface simples para operação diária.',
    solution:
      'Criamos um painel modular com gestão de catálogo, visão de carrinho e fluxo de pedidos. Colaboradores têm perfis com permissões claras e acompanhamento de vendas.',
    results: [
      'Cadastro e atualização de produtos mais rápido com visão organizada por categorias.',
      'Fluxo de pedidos transparente para acompanhamento do cliente e da equipe.',
      'Controle de colaboradores e permissões para manter a operação segura.',
    ],
    gallery: [
      { src: storeLogin, alt: 'Tela de login da loja virtual' },
      { src: storeRegistro, alt: 'Fluxo de registro para novos clientes' },
      { src: storeProdutos, alt: 'Catálogo de produtos com filtros' },
      { src: storeCarrinho, alt: 'Carrinho do cliente com resumo do pedido' },
      { src: storePedidos, alt: 'Gestão de pedidos e status de entrega' },
      { src: storeMeuProdutos, alt: 'Visão de produtos cadastrados pelo colaborador' },
      { src: storeCadastroColaboradores, alt: 'Cadastro de colaboradores com permissões' },
      { src: storeColaboradores, alt: 'Lista de colaboradores e times' },
      { src: storeMinhasVendas, alt: 'Painel de vendas e indicadores de performance' },
    ],
  },
  {
    id: 4,
    slug: 'marcenaria-apolinario',
    title: 'Marcenaria Apolinario',
    description: 'Site institucional para marcenaria com foco em conversão e contato direto.',
    longDescription:
      'Site desenvolvido para a Marcenaria Apolinario com design moderno e foco na experiência do cliente. Criamos uma interface que destaca os serviços, facilita o contato via WhatsApp e apresenta o portfólio de forma visual e atrativa, aumentando a conversão de visitantes em clientes.',
    coverImage: marcenariaCover,
    carouselImage: marcenariaCover,
    logo: marcenariaLogo,
    tags: ['Site Institucional', 'Conversão', 'WhatsApp'],
    challenge:
      'Criar uma presença digital profissional que transmitisse qualidade e confiança, facilitando o contato direto com potenciais clientes e destacando os serviços oferecidos pela marcenaria.',
    solution:
      'Desenvolvemos um site responsivo com seções bem definidas: home impactante, apresentação dos serviços, sobre a empresa e integração direta com WhatsApp. O design prioriza a navegação intuitiva e call-to-actions claros para conversão.',
    results: [
      'Aumento no número de contatos via WhatsApp com botões estratégicos.',
      'Apresentação profissional dos serviços aumenta a confiança dos clientes.',
      'Site responsivo funciona perfeitamente em todos os dispositivos.',
    ],
    gallery: [
      { src: marcenariaCover, alt: 'Página inicial com apresentação da marcenaria' },
      { src: marcenariaServicoPrincipal, alt: 'Destaque do serviço principal oferecido' },
      { src: marcenariaServicos, alt: 'Catálogo completo de serviços da marcenaria' },
      { src: marcenariaSobre, alt: 'Sobre a empresa e história da marcenaria' },
      { src: marcenariaChamadaPraCompra, alt: 'Call-to-action para solicitar orçamento' },
      { src: marcenariaFalePeloWhatsApp, alt: 'Integração direta com WhatsApp para contato' },
      { src: marcenariaRedesSociais, alt: 'Links para redes sociais e contato' },
    ],
  },
];

export const getProjectBySlug = (slug) => projects.find((project) => project.slug === slug);
