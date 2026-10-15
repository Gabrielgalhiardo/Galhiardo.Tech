// --- IMPORTAÇÕES: ALTEK ---
import altekCover from '../assets/img/projetos/Altek/home.png';
import altekLogo from '../assets/img/projetos/Altek/logo.png';
import altekSolucoes from '../assets/img/projetos/Altek/solucoes.png';
import altekServicos from '../assets/img/projetos/Altek/servicos.png';
import altekSobre from '../assets/img/projetos/Altek/sobre.png';
import altekInspiracoes from '../assets/img/projetos/Altek/inspiracoes.png';
import altekOrcamento from '../assets/img/projetos/Altek/orcamento.png';
import altekLocalizacao from '../assets/img/projetos/Altek/localizacao.png';

// --- IMPORTAÇÕES: AURÉVYRA ---
import aurevyraCover from '../assets/img/projetos/Aurevyra/home.png';
import aurevyraLogo from '../assets/img/projetos/Aurevyra/logo.png';
import aurevyraTratamentos from '../assets/img/projetos/Aurevyra/tratamentos.png';
import aurevyraSobre from '../assets/img/projetos/Aurevyra/sobre.png';
import aurevyraLocalizacao from '../assets/img/projetos/Aurevyra/localizacao.png';
import aurevyraPerguntasFrequentes from '../assets/img/projetos/Aurevyra/perguntasFrequentes.png';
import aurevyraContato from '../assets/img/projetos/Aurevyra/contato.png';

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
    slug: 'altek',
    title: 'Altek',
    description: 'Site institucional de serralheria e vidraçaria com foco em orçamentos.',
    longDescription:
      'Site da Altek, serralheria e vidraçaria localizada em São Mateus, São Paulo. A apresentação reúne soluções em vidro e alumínio, inspirações de aplicação e informações para solicitar um orçamento ou visitar a empresa.',
    coverImage: altekCover,
    carouselImage: altekCover,
    logo: altekLogo,
    tags: ['Site Institucional', 'Vidraçaria', 'WhatsApp'],
    challenge: 'Apresentar a variedade de soluções em vidro e alumínio e facilitar o contato para projetos sob medida.',
    solution: 'Catálogo visual de serviços, galeria de inspirações e chamadas para orçamento com acesso ao WhatsApp e à localização.',
    results: [
      'Soluções organizadas por tipo de aplicação.',
      'Contato direto para solicitar orçamentos.',
      'Endereço e mapa para encontrar a empresa.',
    ],
    gallery: [
      { src: altekCover, alt: 'Página inicial da Altek' },
      { src: altekSolucoes, alt: 'Soluções em vidro e alumínio' },
      { src: altekServicos, alt: 'Serviços de vidraçaria e serralheria' },
      { src: altekSobre, alt: 'Sobre a Altek em São Mateus' },
      { src: altekInspiracoes, alt: 'Galeria de inspirações para ambientes' },
      { src: altekOrcamento, alt: 'Chamada para orçamento e localização' },
      { src: altekLocalizacao, alt: 'Mapa de localização e canais de contato' },
    ],
  },
  {
    id: 2,
    slug: 'aurevyra',
    title: 'Aurévyra',
    description: 'Site de estética e bem-estar com apresentação de tratamentos faciais.',
    longDescription:
      'Site da Aurévyra, marca de estética e bem-estar voltada ao cuidado facial. O projeto apresenta tratamentos, a proposta de atendimento e o espaço, com perguntas frequentes e contato pelo WhatsApp para agendar uma avaliação.',
    coverImage: aurevyraCover,
    carouselImage: aurevyraCover,
    logo: aurevyraLogo,
    tags: ['Estética', 'Bem-estar', 'Site Institucional'],
    challenge: 'Traduzir a proposta acolhedora da marca em uma experiência digital que apresente os cuidados e facilite o primeiro contato.',
    solution: 'Identidade visual suave, apresentação dos tratamentos e informações de atendimento com chamadas para agendar uma avaliação.',
    results: [
      'Tratamentos faciais apresentados de forma clara.',
      'Dúvidas frequentes reunidas antes do atendimento.',
      'Acesso ao WhatsApp para agendar uma avaliação.',
    ],
    gallery: [
      { src: aurevyraCover, alt: 'Página inicial da Aurévyra' },
      { src: aurevyraTratamentos, alt: 'Limpeza de pele e tratamentos faciais' },
      { src: aurevyraSobre, alt: 'Proposta de cuidado e atendimento da Aurévyra' },
      { src: aurevyraLocalizacao, alt: 'Espaço e localização da clínica' },
      { src: aurevyraPerguntasFrequentes, alt: 'Perguntas frequentes sobre o atendimento' },
      { src: aurevyraContato, alt: 'Contato para agendar uma avaliação' },
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
