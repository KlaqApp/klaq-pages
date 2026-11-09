import type { Dictionary } from "./en";

export const ptBr: Dictionary = {
  meta: {
    title: "Klaq | Seu diário audiovisual",
    description:
      "Registre os filmes, séries e livros que você ama: progresso, notas, reviews, listas e histórico, com seus amigos junto. Em breve para iOS e Android.",
  },
  nav: {
    features: "Recursos",
    community: "Comunidade",
    roadmap: "Novidades",
    download: "Baixar",
    contribute: "Apoiar",
    home: "Início",
    skip: "Pular para o conteúdo",
  },
  language: {
    label: "Idioma",
    switchTo: "English",
    short: "EN",
  },
  hero: {
    eyebrow: "Seu diário audiovisual",
    titleLead: "Tudo o que você assiste e lê.",
    titleAccent: "Em um só lugar.",
    subtitle:
      "O Klaq guarda cada filme, série e livro, do seu progresso às suas notas e seu histórico, e deixa você compartilhar tudo com os amigos, em um app tão gostoso de usar quanto as histórias que você ama.",
  },
  stores: {
    appStoreTop: "Baixar na",
    appStore: "App Store",
    playStoreTop: "Disponível no",
    playStore: "Google Play",
    soon: "Em breve",
  },
  mockup: {
    rated: "Sua nota",
    watched: "Assistido",
    season: "T",
    score: "4,5",
  },
  features: {
    eyebrow: "Recursos",
    title: "Feito para quem ama o que assiste.",
    subtitle: "Tudo o que você precisa para lembrar da sua vida nas telas (e nas páginas), e nada além disso.",
    items: {
      progress: {
        title: "Nunca perca onde parou",
        text: "Séries acompanhadas episódio a episódio. O Klaq sabe qual é o próximo, e quando ele estreia.",
      },
      ratings: {
        title: "Dê sua nota",
        text: "Notas de meia em meia estrela e, se quiser, uma review. Compartilhe a nota como imagem.",
      },
      watchlist: {
        title: "Quero assistir",
        text: "Salve tudo o que chamar sua atenção. Sua lista sempre a um toque.",
      },
      history: {
        title: "Seu histórico, intacto",
        text: "Cada filme, cada episódio e cada reassistida, numa linha do tempo de tudo o que você viu.",
      },
      stats: {
        title: "Seus números",
        text: "Horas assistidas, gêneros favoritos, se suas notas batem com as do público e como anda o seu ano nas telas.",
      },
      books: {
        title: "Livros também",
        text: "Sua estante mora no Klaq: quero ler, lendo e lido, com progresso de páginas, nota e review.",
      },
      offline: {
        title: "Funciona offline",
        text: "Sua biblioteca fica no seu aparelho e sincroniza quando você volta a ficar online.",
      },
      theme: {
        title: "Do seu jeito",
        text: "Tema automático, claro ou escuro, a cor de destaque que combina com você (ou qualquer cor que quiser) e três ícones para o app. Experimente:",
      },
    },
    of: "de",
    nextUp: "Próximo",
    statsLabel: "horas neste mês",
    synced: "Sincronizado",
    shareRating: "Compartilhar",
    days: ["S", "T", "Q", "Q", "S", "S", "D"],
    historyItems: ["Filme", "Episódio", "Reassistido"],
    bookStatus: "Lendo",
    bookPages: "página 184 de 320",
    bookShelves: ["Quero ler", "Lendo", "Lido"],
    accents: {
      cyan: "Ciano",
      coral: "Coral",
      spring: "Primavera",
      amber: "Âmbar",
    },
  },
  community: {
    eyebrow: "Comunidade",
    title: "Melhor com amigos.",
    subtitle:
      "Siga pessoas, veja o que elas estão assistindo e lendo e converse sobre isso. Você decide quem vê o seu perfil.",
    items: {
      reviews: {
        title: "Reviews e respostas",
        text: "Escreva o que achou de um filme, série, episódio ou livro. Leia a opinião dos outros e responda.",
      },
      feed: {
        title: "A atividade dos amigos",
        text: "Veja o que as pessoas que você segue assistiram e avaliaram, num feed que separa uma coisa da outra.",
      },
      privacy: {
        title: "Perfil privado, se quiser",
        text: "Com a conta privada, só quem você aprovar vê seu histórico, suas listas e sua estante.",
      },
      notifications: {
        title: "Avisos que importam",
        text: "Novos seguidores, pedidos aceitos e respostas às suas reviews, direto no celular.",
      },
      safety: {
        title: "Um espaço respeitoso",
        text: "Denuncie reviews e respostas, bloqueie quem quiser e marque os spoilers. As regras da comunidade valem para todos.",
      },
    },
    review: {
      name: "Marina",
      handle: "@marina",
      score: "4,5",
      title: "Seus Amigos e Vizinhos",
      text: "O elenco segura cada cena, e o último episódio me pegou. Ansiosa pela próxima temporada.",
      spoiler: "Spoiler",
      replies: "3 respostas",
      reply: "Responder",
    },
    feed: [
      { initial: "A", name: "Ana", verb: "assistiu", what: "The Pitt · S02E05" },
      { initial: "R", name: "Rafa", verb: "avaliou", what: "Duna: Parte Dois", score: "5" },
      { initial: "J", name: "Júlia", verb: "começou a ler", what: "A Biblioteca da Meia-Noite" },
    ],
    request: {
      label: "Pedido para seguir",
      name: "Leo",
      handle: "@leo",
      accept: "Aceitar",
      decline: "Recusar",
    },
    notices: ["Ana começou a seguir você", "Rafa respondeu sua review"],
    safetyActions: ["Denunciar review", "Bloquear @usuario", "Regras da comunidade"],
  },
  marquee: ["Filmes", "Séries", "Novelas", "Programas", "Animes", "Documentários", "Livros"],
  tour: {
    eyebrow: "Dá uma olhada",
    title: "Este é o Klaq. De verdade.",
    subtitle: "Sem mockup, é o app de verdade.",
    screens: [
      {
        title: "Início",
        text: "Seus próximos episódios, na ordem certa, e as séries que você já está assistindo.",
        image: "/screens/home.jpg",
      },
      {
        title: "Gaveta",
        text: "Todo o seu histórico, organizado por categoria.",
        image: "/screens/library.jpg",
      },
      {
        title: "Timeline",
        text: "Do que você já viu ao que ainda vem por aí.",
        image: "/screens/timeline.jpg",
      },
      {
        title: "Detalhes da série",
        text: "Nota, sinopse e seu progresso de episódios, tudo num só lugar.",
        image: "/screens/show.jpg",
      },
      {
        title: "Detalhes do episódio",
        text: "Marque o que já assistiu e vá direto para o próximo.",
        image: "/screens/episode.jpg",
      },
      {
        title: "Perfil",
        text: "Suas estatísticas, seus seguidores e quem você segue.",
        image: "/screens/profile.jpg",
      },
    ],
  },
  roadmap: {
    eyebrow: "O que vem por aí",
    title: "O Klaq está só começando.",
    subtitle: "Veja o que estamos construindo a seguir.",
    badge: "Em breve",
    items: [
      {
        title: "Jogos",
        text: "Registre o que você jogou com o mesmo cuidado dos filmes e dos livros.",
      },
      {
        title: "Diário de leitura",
        text: "Cada página registrada vira um dia no seu diário, como a timeline de filmes e séries.",
      },
      {
        title: "Listas personalizadas",
        text: "Crie suas próprias listas para qualquer ocasião, humor ou maratona.",
      },
      {
        title: "Listas compartilhadas",
        text: "Combine o que assistir com amigos e família.",
      },
      {
        title: "Lembretes de episódios",
        text: "Um aviso quando sair episódio novo de uma série que você acompanha.",
      },
    ],
  },
  download: {
    eyebrow: "Baixar",
    title: "Seu próximo episódio está esperando.",
    subtitle: "Em breve na App Store e no Google Play.",
  },
  beta: {
    title: "Ainda não saiu?",
    subtitle: "O Klaq está em beta fechado no iPhone e no Android. Peça acesso e seja um dos primeiros a experimentar.",
    cta: "Pedir acesso ao beta",
    emailSubject: "Quero testar o beta do Klaq",
  },
  contribute: {
    eyebrow: "Apoie",
    title: "Um app independente, mantido por você.",
    subtitle:
      "O Klaq é um projeto independente. Se ele já faz parte da sua rotina, uma contribuição de qualquer valor ajuda a mantê-lo no ar e evoluindo.",
    cta: "Apoiar o Klaq",
    emailSubject: "Quero apoiar o Klaq",
    feedback: "Enviar feedback",
    cards: [
      { title: "Mantém tudo no ar", text: "Servidores, banco de dados e os serviços dos quais o Klaq depende todos os dias." },
      { title: "Mais tempo para criar", text: "Cada contribuição vira horas dedicadas a novos recursos e correções." },
      { title: "Independência", text: "O apoio de quem usa o Klaq mantém o foco em quem usa." },
    ],
  },
  footer: {
    tagline: "Seu diário audiovisual.",
    legal: "Legal",
    privacy: "Política de Privacidade",
    terms: "Termos e Condições",
    deleteAccount: "Excluir conta",
    contact: "Contato",
    project: "Projeto",
    tmdb: "Este produto usa a API do TMDB, mas não é endossado nem certificado pelo TMDB.",
    rights: "Todos os direitos reservados.",
  },
  legal: {
    effective: "Em vigor desde 5 de novembro de 2026",
    contents: "Nesta página",
    backHome: "Voltar ao início",
    backToTop: "Voltar ao topo",
    translationNotice:
      "Esta é uma tradução oferecida por conveniência. Em caso de divergência, prevalece a versão em inglês.",
    privacy: {
      title: "Política de Privacidade",
      description: "O que o Klaq coleta, por quê, com quem compartilha e como exercer seus direitos.",
    },
    terms: {
      title: "Termos e Condições",
      description: "As regras de uso do Klaq, incluindo as regras da comunidade para reviews e respostas.",
    },
    deleteAccount: {
      title: "Excluir sua conta",
      description: "Como excluir sua conta do Klaq e o que acontece com os seus dados.",
      ctaText: "Preencha o formulário com o e-mail que você usa para entrar no Klaq. Se preferir, peça por e-mail.",
      formCta: "Pedir a exclusão da conta",
      emailCta: "Pedir por e-mail",
      emailSubject: "Excluir minha conta do Klaq",
    },
  },
  notFound: {
    title: "Essa cena foi cortada.",
    text: "A página que você procura não existe ou mudou de lugar.",
    cta: "Voltar ao início",
  },
};
