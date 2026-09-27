import { RecipeItem, CourseModule, Testimonial, FAQItem } from '../types';

export const RECIPES_DATA: RecipeItem[] = [
  {
    id: 'tradicional',
    name: 'Brownie Tradicional Fudgy Le Bron',
    category: 'classicos',
    tag: 'Carro-Chefe',
    description: 'A receita de família lapidada com ciência gastronômica. Casquinha craquelada crocante impecável, centro úmido e denso, zero gosto residual e massa livre de lactose.',
    costEstimate: 'R$ 1,20',
    suggestedPrice: 'R$ 7,00 - R$ 9,00',
    profitMargin: '480%',
    image: '/images/brownie_cut_fudgy_1790449597580.jpg',
    highlights: ['Validade de 15 dias em temperatura ambiente', 'Até 90 dias congelado', 'Perfeito para revenda e delivery']
  },
  {
    id: 'brookie',
    name: 'Brookie Americano (Cookie + Brownie)',
    category: 'especiais',
    tag: 'Sucesso Viral',
    description: 'A união mais desejada da confeitaria moderna: base fudgy do brownie de chocolate nobre coberta com massa artesanal de cookie americano e gotas crocantes.',
    costEstimate: 'R$ 1,60',
    suggestedPrice: 'R$ 9,00 - R$ 12,00',
    profitMargin: '520%',
    image: '/images/brookie_redvelvet_showcase_1790449606182.jpg',
    highlights: ['Textura dupla irresistível', 'Visual que salta aos olhos no Instagram', 'Ideal para cafeterias']
  },
  {
    id: 'red-velvet',
    name: 'Brownie Red Velvet com Cream Cheese',
    category: 'especiais',
    tag: 'Alta Confeitaria',
    description: 'Cor rubi aveludada marcante com o autêntico toque de cacau e baunilha, finalizado com espirais sedosas de brigadeiro artesanal de Cream Cheese.',
    costEstimate: 'R$ 1,80',
    suggestedPrice: 'R$ 10,00 - R$ 13,00',
    profitMargin: '450%',
    image: '/images/brookie_redvelvet_showcase_1790449606182.jpg',
    highlights: ['Campeão de vendas em datas comemorativas', 'Combinação agridoce sofisticada', 'Margem de lucro premium']
  },
  {
    id: 'nutella-ninho',
    name: 'Brownie Nutella com Ninho Duo',
    category: 'recheados',
    tag: 'Mais Vendido',
    description: 'Brownie super chocolatudo recheado generosamente com a autêntica Nutella e brigadeiro cremoso de leite Ninho em ponto de corte perfeito.',
    costEstimate: 'R$ 2,10',
    suggestedPrice: 'R$ 10,00 - R$ 14,00',
    profitMargin: '380%',
    image: '/images/hero_lebron_brownie_1790449586483.jpg',
    highlights: ['Explosão de recheio cremoso', 'Apelo unânime no balcão', 'O recheio não endurece no frio']
  },
  {
    id: 'blondie-ninho',
    name: 'Blondie de Ninho Dourado',
    category: 'classicos',
    tag: 'Inovação',
    description: 'A versão loira do brownie, feita com manteiga de cacau e chocolate branco nobre, com textura densa, úmida e caramelizada com notas de leite Ninho.',
    costEstimate: 'R$ 1,75',
    suggestedPrice: 'R$ 8,50 - R$ 11,00',
    profitMargin: '420%',
    image: '/images/brownie_cut_fudgy_1790449597580.jpg',
    highlights: ['Diferencial competitivo frente à concorrência', 'Excelente para combos Duo', 'Sabor amanteigado inesquecível']
  },
  {
    id: 'barras-recheadas',
    name: 'Barras Recheadas Gourmet (Bônus Exclusivo)',
    category: 'recheados',
    tag: 'Ticket Alto',
    description: 'Barras pesadas e recheadas de chocolate com pedaços macios de brownie e 13 opções de recheios trufados (Pistache, Doce de Leite, Brigadeiro Belga, Oreo).',
    costEstimate: 'R$ 5,50',
    suggestedPrice: 'R$ 25,00 - R$ 38,00',
    profitMargin: '350%',
    image: '/images/packaging_and_boxes_1790449628210.jpg',
    highlights: ['Presente perfeito o ano inteiro', 'Embalagens elegantes prontas no Canva', 'Cardápio Monte a Sua Barra']
  },
  {
    id: 'copos-felicidade',
    name: 'Copos da Felicidade (Zero Desperdício)',
    category: 'especiais',
    tag: '100% Aproveitamento',
    description: 'Aprenda a transformar todas as bordinhas e sobras de corte dos brownies em sobremesas de luxo em camadas com mousses e morangos frescos.',
    costEstimate: 'R$ 3,20',
    suggestedPrice: 'R$ 16,00 - R$ 22,00',
    profitMargin: '490%',
    image: '/images/hero_lebron_brownie_1790449586483.jpg',
    highlights: ['Custo de brownie zerado na base', 'Sensação no iFood e balcão', 'Multiplica o faturamento']
  },
  {
    id: 'saudavel-funcional',
    name: 'Brownie Saudável & Funcional (Sem Glúten)',
    category: 'funcionais',
    tag: 'Mercado em Alta',
    description: 'Desenvolvido especialmente para o público fitness, celíaco e intolerante à lactose. Sabor idêntico ao brownie tradicional com ingredientes limpos.',
    costEstimate: 'R$ 2,30',
    suggestedPrice: 'R$ 11,00 - R$ 15,00',
    profitMargin: '390%',
    image: '/images/brownie_cut_fudgy_1790449597580.jpg',
    highlights: ['Atende academias e lojas de suplementos', 'Fórmula testada sem amargor', 'Certificação nutricional ANVISA']
  }
];

export const COURSE_MODULES: CourseModule[] = [
  {
    id: 1,
    title: 'Módulo 1: O Ebook de Ouro & Fundamentos dos Brownies Perfeitos',
    subtitle: 'Processos, química dos ingredientes, utensílios e segredos da casquinha',
    badge: 'Base Científica',
    lessons: [
      'Aula 1: E-book Receitas Premium: processos, utensílios, produção e congelamento',
      'Aula 2: Lista Completa de Utensílios Necessários + Links Diretos de Compra Econômica',
      'Aula 3: O Segredo da Casquinha Craquelada Crocante sem mistérios ou erros',
      'Aula 4: Técnicas de ajuste fino de temperatura e ponto de fornada no forno caseiro'
    ]
  },
  {
    id: 2,
    title: 'Módulo 2: O Laboratório de Receitas Mais Lucrativas do Brasil',
    subtitle: 'Todas as receitas passo a passo em vídeo Full HD',
    badge: 'Vídeo Aulas Práticas',
    lessons: [
      'Aula 5: A Receita Tradicional Oficial Le Bron (Óleo vs Manteiga para máxima umidade)',
      'Aula 6: A Versão Gourmet com Manteiga e variações de intensidade de cacau',
      'Aula 7: Receita Brownie de Nutella cremosa do começo ao fim',
      'Aula 8: Receita Brookie Americano (massa de cookie + massa de brownie)',
      'Aula 9: Brownies de Chocolates Picados (Ao Leite, Meio Amargo, Blend, Trio e Branco)',
      'Aula 10: Receita Red Velvet com brigadeiro artesanal de Cream Cheese',
      'Aula 11: Receita Blondie de Ninho Dourado + Combos DUO',
      'Aula 12: Receita Nesquik Rosa e Sabores Nostálgicos',
      'Aula 13: Brownies Recheados de Alta Densidade (sem vazar na forma)',
      'Aula 14: Copos da Felicidade: reaproveitando 100% das bordinhas com lucro triplicado',
      'Aula 15: Receita Exclusiva de Brownie Saudável / Funcional (Sem glúten & sem lactose)',
      'Aula 16: Produção em Larga Escala: batendo a massa na batedeira industrial e planetária'
    ]
  },
  {
    id: 3,
    title: 'Módulo 3: Validade, Congelamento e Logística Inteligente',
    subtitle: 'Como estocar por 90 dias sem perder 1% da qualidade',
    badge: 'Eficiência Operacional',
    lessons: [
      'Aula 17: Técnicas profissionais de embalo com cintas personalizadas',
      'Aula 18: Conservação em temperatura ambiente por até 15 dias com umidade intacta',
      'Aula 19: Congelamento correto e descongelamento sem condensação ou alteração de casquinha',
      'Aula 20: Como organizar a produção em lotes semanais para trabalhar apenas 2 dias por semana'
    ]
  },
  {
    id: 4,
    title: 'Módulo 4: A Mina de Ouro da Revenda (Intensivão Pontos de Venda)',
    subtitle: 'O método exato que colocou a Le Bron em centenas de estabelecimentos',
    badge: 'Faturamento Recorrente',
    lessons: [
      'Aula 21: Introdução aos Pontos de Venda: o segredo da previsibilidade de faturamento',
      'Aula 22: Noções básicas de comportamento e negociação com donos de comércios',
      'Aula 23: Preciso ser MEI? Passo a passo legal e formalização simplificada',
      'Aula 24: Modelos e escolha de expositores para balcão que triplicam o giro',
      'Aula 25: Abordando o ponto comercial pela primeira vez (Script Testado)',
      'Aula 26: Folder de Parceria Editável no Canva (Formato A5 para apresentação)',
      'Aula 27: Folder de Parceria para envio via WhatsApp',
      'Aula 28: Pós-abordagem, acompanhamento e fechamento de contratos',
      'Aula 29: Como gerenciar pagamentos, reposição e comissionamento inteligente',
      'Aula 30: Planejamento de rotas de entregas otimizadas com custo reduzido'
    ]
  },
  {
    id: 5,
    title: 'Módulo 5: Máquina de Vendas no Instagram, WhatsApp e iFood',
    subtitle: 'Scripts prontos e estratégias para vender todos os dias sem ser chato',
    badge: 'Vendas Ativas',
    lessons: [
      'Aula 31: A base comportamental que faz o cliente desejar o brownie no primeiro olhar',
      'Aula 32: Vendas no Instagram + Scripts prontos para Direct e Stories que convertem',
      'Aula 33: Vendas no WhatsApp: listas de transmissão magnéticas e fechamento rápido',
      'Aula 34: Passo a passo para cadastrar e posicionar seu brownie no topo do iFood',
      'Aula 35: Estratégias de Venda Ambulante e eventos corporativos de alto ticket',
      'Aula 36: Geração de Código de Barras (EAN-13) para fornecer a grandes supermercados',
      'Bônus Ebook: Instagram que Vende Todos os Dias 2026',
      'Bônus Ebook: Como tirar fotos profissionais e apetitosas em casa com o seu celular'
    ]
  },
  {
    id: 6,
    title: 'Módulo 6: Precificação Automática, Finanças & Nova Tabela Nutricional',
    subtitle: 'Nunca mais tenha dúvidas se está tendo lucro real na sua produção',
    badge: 'Planilhas Prontas',
    lessons: [
      'Aula 37: Como calcular seu pró-labore, custo fixo e margem líquida real',
      'Aula 38: Planilha Automática de Precificação de Brownies (basta preencher os ingredientes)',
      'Aula 39: Planilha de Precificação para Encomendas e Produtos Personalizados',
      'Aula 40: Cálculo exato do consumo de energia do forno elétrico e gás de cozinha',
      'Aula 41: Planilha de Fluxo de Caixa Diário e Controle de Fornecedores Atacadistas',
      'Aula 42: Planilha de Programação de Compras e Estoque Mínimo',
      'Aula 43: Kit Tabela Nutricional Automatizada de acordo com a Nova Legislação ANVISA'
    ]
  },
  {
    id: 7,
    title: 'Módulo BÔNUS: Curso Completo de Barras Recheadas',
    subtitle: 'O produto com o maior ticket médio e margem de lucro da confeitaria',
    badge: 'Bônus Gratuito',
    lessons: [
      'Passo a passo da produção dos 13 recheios trufados mais cobiçados',
      'Montagem e finalização de Barras Recheadas Grandes e Médias',
      'E-book Recheios Irresistíveis: os 13 melhores sabores para vendas no atacado e varejo',
      'Planilha de Precificação e Gestão de Pedidos exclusiva para Barras Recheadas',
      'Pack de Embalagens e Cintas editáveis no Canva exclusivo para Barras',
      'Cardápio digital pronto "Monte a Sua Barra" para postar no WhatsApp e redes'
    ]
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'camila',
    name: 'Camila Rodrigues',
    city: 'Florianópolis / SC',
    result: 'R$ 6.420 no segundo mês',
    monthlyRevenue: 'R$ 6.420/mês',
    quote: 'Eu estava desempregada e comecei com 1 forma na minha cozinha. Segui o método de pontos de venda do curso e hoje entrego brownies em 8 cafeterias do centro. Já pago todas as contas da casa com brownies!',
    avatarText: 'CR',
    tags: ['Revenda em Cafeterias', '8 Pontos Fixos']
  },
  {
    id: 'marcos',
    name: 'Marcos Vinícius',
    city: 'Belo Horizonte / MG',
    result: 'Fornadas esgotadas no iFood',
    monthlyRevenue: 'R$ 8.900/mês',
    quote: 'A planilha de precificação e as fotos com celular mudaram meu jogo. O brownie com casquinha craquelada da Le Bron não tem comparação, as avaliações no iFood são só 5 estrelas!',
    avatarText: 'MV',
    tags: ['Delivery iFood', 'Nota 5.0']
  },
  {
    id: 'patricia',
    name: 'Patrícia Mendonça',
    city: 'Campinas / SP',
    result: 'Recuperou investimento em 3 dias',
    monthlyRevenue: 'R$ 4.750/mês',
    quote: 'Com apenas a primeira fornada eu vendi para os colegas de trabalho do meu marido e já recuperei os 99 reais do curso no mesmo dia. O suporte da Jéssica no WhatsApp tirou todas as minhas dúvidas!',
    avatarText: 'PM',
    tags: ['Retorno Imediato', 'Suporte WhatsApp']
  },
  {
    id: 'renata',
    name: 'Renata Albuquerque',
    city: 'Curitiba / PR',
    result: 'R$ 11.200 na Páscoa e Natal',
    monthlyRevenue: 'R$ 11.200/mês',
    quote: 'O bônus das Barras Recheadas é um verdadeiro tesouro. Nas datas comemorativas eu precisei fechar a agenda 10 dias antes porque não dava conta de tantas encomendas. Melhor investimento da minha vida!',
    avatarText: 'RA',
    tags: ['Barras Recheadas', 'Ticket Alto']
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: 'Por que a receita usa óleo ao invés de manteiga?',
    answer: 'O óleo garante que o brownie permaneça extremamente úmido, fudgy e macio mesmo após dias em temperatura ambiente ou quando servido gelado, além de baratear em até 40% o custo de produção. A manteiga endurece em temperaturas amenas e encurta a vida de prateleira. No curso, a Jéssica também ensina a versão com manteiga para quem prefere, mas você verá como o óleo cria a textura perfeita e sem NENHUM gosto residual.'
  },
  {
    question: 'Quanto tempo até meu investimento no curso retornar?',
    answer: 'Com apenas UMA única fornada de brownie tradicional (rendimento médio de 16 a 24 pedaços), vendida a R$ 7,00 cada, você fatura mais de R$ 120,00 e já recupera 100% do valor do curso e ainda coloca lucro no bolso. Muitos alunos recuperam o valor em 24 a 48 horas após assistir as primeiras aulas.'
  },
  {
    question: 'Nunca vendi nada na minha vida. Vou conseguir?',
    answer: 'Sim, com certeza! O curso foi desenhado especificamente para quem nunca cozinhou profissionalmente e nunca fez uma venda. Você recebe scripts prontos para copiar e colar no WhatsApp, modelos de mensagens para mandar para amigos e vizinhos, técnicas para abordar lojas sem timidez e o passo a passo da produção mais simples da confeitaria.'
  },
  {
    question: 'Quanto eu consigo lucrar por brownie?',
    answer: 'O custo de produção do brownie tradicional da Le Bron fica entre R$ 1,15 e R$ 1,40 por unidade (já considerando embalagem). O preço de venda de mercado varia entre R$ 6,00 e R$ 10,00 dependendo da sua região e canal de venda. Isso significa um lucro líquido de 300% a 500% por pedaço!'
  },
  {
    question: 'Consigo fazer tudo sozinho(a) em casa com forno comum?',
    answer: 'Sim! Você não precisa de forno industrial, batedeira cara ou qualquer utensílio especial. Basta um fogão caseiro comum, uma tigela, uma espátula (fouet ou colher) e uma forma de alumínio. Mais de 90% dos nossos alunos começaram na própria cozinha de casa.'
  },
  {
    question: 'Onde posso vender os brownies?',
    answer: 'Você aprenderá os 5 canais mais lucrativos: 1) Pontos de Venda fixos em consignação ou atacado (restaurantes, cafeterias, conveniências, faculdades, padarias e academias com a receita funcional); 2) iFood e delivery local; 3) Vendas ativas pelo WhatsApp para condomínios, amigos e empresas; 4) Instagram com posts apetitosos; 5) Venda ambulante de alto giro em praças e portas de colégios.'
  },
  {
    question: 'Como faço para ter embalagens personalizadas?',
    answer: 'Você receberá gratuitamente nosso Pack com mais de 30 modelos de embalagens e cintas profissionais 100% editáveis no Canva (versão gratuita). Basta colocar o seu nome ou logo, editar cores e imprimir em qualquer gráfica rápida da sua cidade ou pela internet (ensinamos o passo a passo de como mandar para gráfica com custo de centavos por cinta).'
  },
  {
    question: 'Como funciona a assistência individual no WhatsApp?',
    answer: 'Ao se inscrever, você terá acesso ao WhatsApp de suporte oficial para tirar dúvidas diretamente sobre textura, receitas, ponto do seu forno, envio de fotos da sua fornada para análise da casquinha e orientações de vendas com a equipe da Le Bron.'
  },
  {
    question: 'E se eu não gostar ou achar que não é para mim?',
    answer: 'Você está protegido pela nossa Garantia Super Estendida de 30 Dias! Se por qualquer motivo você achar que o conteúdo não é para você, basta nos enviar um e-mail ou uma mensagem no WhatsApp que reembolsamos 100% do seu dinheiro, centavo por centavo, sem perguntas ou burocracia.'
  },
  {
    question: 'O acesso ao curso é vitalício?',
    answer: 'Sim! Garantindo sua inscrição na promoção de hoje, seu acesso é VITALÍCIO, incluindo todas as atualizações futuras e bônus que forem adicionados sem custo adicional.'
  }
];
