export interface CourseModule {
  id: number;
  title: string;
  buttonText: string;
  items: string[];
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export const CLONE_MODULES: CourseModule[] = [
  {
    "id": 1,
    "title": "COMBO DE RECEITAS PREMIUM: CARDÁPIO LUCRATIVO COM PRODUÇÃO ÁGIL E ECONÔMICA",
    "buttonText": "Clique para ver as receitas",
    "items": [
      "- RECEITA BROWNIE TRADICIONAL",
      "- RECEITA BROWNIE NUTELLA",
      "- RECEITA BROOKIE (BROWNIE + COOKIE)",
      "-  RECEITA BROWNIE CHOCOLATES (TRIO, BRANCO, AO LEITE, MEIO AMARGO, BLEND)",
      "- RECEITA BROWNIE RED VELVET",
      "- RECEITA BLONDIE DE NINHO + DUO",
      "- RECEITA NESQUIK",
      "- RECHEADOS",
      "- COPOS DA FELICIDADE",
      "- RECEITA SAUDÁVEL/FUNCIONAL",
      "E mais: você aprenderá o que faz um cardápio LUCRATIVO (comprovado cientificamente e que traz o máximo de vendas) e a grande armadilha que muitos caem da escolha dos itens do cardápio.",
      "Lembrando que nossa massa base é livre de leite e derivados,",
      "podendo ser incluído para o público tão crescente de intolerantes à lactose."
    ]
  },
  {
    "id": 2,
    "title": "RECEITA EXCLUSIVA DE BROWNIE SAUDÁVEL/FUNCIONAL",
    "buttonText": "Clique para ver as aulas",
    "items": [
      "Aula 1: Ebook Receitas Premium, com absolutamente tudo detalhado desde processos, utensílios, produção, congelamento e armazenamento, técnicas para fazer os ajustes na fornada e muito mais",
      "Aula 2: Utensílios Necessários + Links de compra",
      "Aula 3: Receita Tradicional + Fundamentos Essenciais",
      "Aula 4: Receita Tradicional com Manteiga",
      "Aula 5: Receita Nutella",
      "Aula 6: Receita Brookie (brownie + cookie)",
      "Aula 7: Receita Chocolate Picado (Ao leite, branco meio amargo, blend, trio)",
      "Aula 8: Receita Red Velvet",
      "Aula 9: Receita Blondie de Ninho + DUO",
      "Aula 10: Receita Nesquik",
      "Aula 11: Recheados",
      "Aula 12: Embalando os brownies com as cintas",
      "Aula 13: Validade, Congelamento e Descongelamento",
      "Aula 14: Copos da felicidade: reaproveitando bordinhas e brownies",
      "Aula 15: Receita Saudável/Funcional",
      "Aula 16: Fazendo a massa na batedeira"
    ]
  },
  {
    "id": 3,
    "title": "A MINA DE OURO DA REVENDA: INTENSIVÃO DECOLANDO PONTOS DE VENDA",
    "buttonText": "Clique para ver as aulas",
    "items": [
      "Aula 1: Vídeo Boas vindas e introdução à revenda!",
      "Aula 2: Vídeo Noções Básicas sobre Comportamento Humano",
      "Aula 3: Preciso ser MEI?",
      "Aula 4: Organização da produção",
      "Aula 5: Expositores",
      "Aula 6: Abordando o ponto pela primeira vez",
      "Aula 7: Folder para Ponto de Venda Editável no Canva Formato A5",
      "Aula 8: Folder para Ponto de Venda Editável no Canva Formato WhatsApp",
      "Aula 9 Pós primeira abordagem",
      "Aula 10: Como são feitos os pagamentos",
      "Aula 11: Entregas e controle",
      "Aula 12: Rotas e entregas",
      "Aula 13: Fique atento aos sinais",
      "Aula 14: Agora é com Você!"
    ]
  },
  {
    "id": 4,
    "title": "KIT ACELERADOR DE VENDAS",
    "buttonText": "Clique para ver as aulas",
    "items": [
      "Aula 1: A base para VENDER MUITO!",
      "Aula 2: Vendas no Instagram + Scripts prontos para vendas no Instagram",
      "Aula 3: Vendas no WhatsApp + Scripts prontos para vendas no WhatsApp",
      "Aula 4: Vendas no iFood",
      "Aula 5: Venda ambulante",
      "Aula 6: Pontos de Venda",
      "Aula 7: Código de Barras",
      "Ebook: Instagram que vende TODOS OS DIAS! 2026",
      "Ebook: Como tirar fotos profissionais em casa com o seu celular 2026",
      "Ebook: Guia Definitivo de Vendas de Brownies 2026",
      "Planilha de Gestão de Pedidos e Planejamento da Produção"
    ]
  },
  {
    "id": 5,
    "title": "KIT TABELA NUTRICIONAL DE ACORDO COM A NOVA REGULAMENTAÇÃO",
    "buttonText": "Clique para ver as aulas",
    "items": [
      "Aula 1: Vídeo Tutorial Planilha Tabela Nutricional: Inserção de Dados",
      "Aula 2: Vídeo Tutorial Planilha Tabela Nutricional: Regras de Arredondamento",
      "Aula 3: Vídeo Tutorial Planilha Tabela Nutricional: Inserção no Canva",
      "Aula 4: Texto Informações sobre a Nova Legislação de Rotulagem de Alimentos"
    ]
  },
  {
    "id": 6,
    "title": "PACK IDENTIDADE VISUAL E MARCA",
    "buttonText": "Clique para ver as aulas",
    "items": [
      "Aula 1: Pack de Embalagens Editáveis no Canva 2026 + Tutorial em Vídeo",
      "Aula 2: Ebook Como Tirar Fotos Profissionais em Casa com o Celular",
      "Aula 3: Vídeo Tutorial Imprimindo as Embalagens na Printi (online)"
    ]
  },
  {
    "id": 7,
    "title": "KIT DE GESTÃO FINANCEIRA",
    "buttonText": "Clique para ver as aulas",
    "items": [
      "Aula 1: Preço, Salário e Dicas Essenciais",
      "Aula 2: Vídeo Controle de Fornecedores",
      "Aula 3: Planilha de Fluxo de Caixa + Vídeo Tutorial",
      "Aula 4: Planilha de Precificação dos Brownies + Vídeo Tutorial",
      "Aula 5: Planilha de Precificação Geral + Vídeo Tutorial (para encomendas, outros produtos)",
      "Aula 6: Texto Como Calcular o Gasto do Forno Elétrico",
      "Aula 7: Vídeo Tutorial Utilizando a Planilha de Precificação para Encomendas"
    ]
  },
  {
    "id": 8,
    "title": "GESTÃO ESTRATÉGICA",
    "buttonText": "Clique para ver as aulas",
    "items": [
      "Aula 1: Texto os 7 Principais Motores da Confeitaria Lucrativa",
      "Aula 2: Texto 6 Maneiras de Deixar seu Cliente Apaixonado pela sua Marca!",
      "Aula 3: Ebook Planejamento Estratégico: você precisa fazer agora mesmo!"
    ]
  },
  {
    "id": 9,
    "title": "PLANILHA DE PROGRAMAÇÃO DE COMPRAS",
    "buttonText": "Clique para ver as aulas",
    "items": [
      "Aula 1: Planilha Programação de Compras + Vídeo Tutorial"
    ]
  },
  {
    "id": 10,
    "title": "CURSO BARRAS RECHEADAS (BÔNUS!)",
    "buttonText": "Clique para ver as aulas",
    "items": [
      "- Passo a passo da produção dos recheios",
      "- Passo a passo da producão das Barras Recheadas Grandes",
      "- Passo a passo da produção de Barras Recheadas Médias",
      "- Ebook Recheios Irresistíveis com os 13 melhores sabores para vender",
      "- Planilha exclusiva e de fácil manipulação de Gestão de Pedidos",
      "- Planilha exclusiva e de fácil manipulação de Precificação das Barras Recheadas, em que você consegue incluir cada item utilizado",
      "- Pack de Embalagens Editáveis no Canva exclusivo para as Barras Recheadas",
      "- Tabela Nutricional já de acordo com a nova regulamentação",
      "- Ebook de Paleta de Cores",
      "- Cardápio \"Monte a Sua Barra\" pronto no Canva, para Feed, Stories e WhatsApp"
    ]
  },
  {
    "id": 11,
    "title": "DICAS PARA DATAS COMEMORATIVAS LUCRATIVAS! (BÔNUS!)",
    "buttonText": "Clique para ver as aulas",
    "items": [
      "Aula 1: A Fórmula para Datas Comemorativas Lucrativas",
      "Aula 2: Dicas de fornecedores de embalagens para datas comemorativas",
      "Aula 3: Como precificar produtos nas datas comemorativas",
      "Aula 4: Como se organizar para as datas comemorativas"
    ]
  },
  {
    "id": 12,
    "title": "A ESTRATÉGIA COMPLETA PARA FATURAR R$5.000 POR MÊS!",
    "buttonText": "Clique para ver as aulas",
    "items": [
      "Aula 1: Os Pilares para o Crescimento de um Negócio Lucrativo e de Alto Valor para os Clientes",
      "Aula 2: Os 5 Cenários para Faturar R$5000 ou mais!",
      "Aula 3: Planilha Simuladora de Cenários de Faturamento + Vídeo Tutorial"
    ]
  }
];

export const CLONE_FAQS: FAQItem[] = [
  {
    "id": 1,
    "question": "Por que óleo ao invés de manteiga?",
    "answer": "O resultado é uma massa leve, extremamente saborosa, com um custo mais baixo que as receitas tradicionais, versátil para intolerantes à lactose e muito mais fácil e rápida de executar! Mas se desejar, pode usar manteiga, instruímos tudo no curso."
  },
  {
    "id": 2,
    "question": "Quanto tempo até meu investimento retornar?",
    "answer": "Com apenas 1 fornada você já consegue ter 100% do seu dinheiro retornado e já estar lucrando, e pode fazer isso no mesmo dia! (Considerando vender a fornada de 24 brownies)"
  },
  {
    "id": 3,
    "question": "Quanto tempo demora até eu começar a vender?",
    "answer": "Você já consegue fazer, vender e lucrar no mesmo dia! Só depende de você!"
  },
  {
    "id": 4,
    "question": "Nunca vendi nada na minha vida. Vou conseguir?",
    "answer": "Com certeza. Com nossos conteúdos e assistência individual, você se sentirá capaz e com o conhecimento necessário para começar do zero!"
  },
  {
    "id": 5,
    "question": "Não tenho experiência com cozinha. Enfrentarei dificuldades?",
    "answer": "De nenhuma forma. Nossa receita é extremamente fácil de fazer, não requer nenhuma habilidade especial nem utensílios especiais - apenas uma vasilha para mexer, uma colher de sopa, peneira e balança comum de cozinha."
  },
  {
    "id": 6,
    "question": "Quanto eu lucro por brownie?",
    "answer": "Os custos por unidade giram em torno de R$1,90 - R$2,30.  Você pode lucrar de R$2.587,50 a R$2.887,50 por mês com apenas 25 brownies por dia — o equivalente a UMA fornada e meia horinha de forno !"
  },
  {
    "id": 7,
    "question": "Consigo fazer tudo sozinho(a)?",
    "answer": "Sim! Você consegue tranquilamente ter o seu negócio trabalhando 100% sozinho(a)."
  },
  {
    "id": 8,
    "question": "Onde posso vender os brownies?",
    "answer": "Em qualquer lugar que tenha pessoas, temos grandes oportunidades: desde cantinas, cafeterias, restaurantes, até mesmo salões de beleza, coworkings, lojas diversas, salões de estética, além do potencial das mídias sociais, com venda direta e de personalizados (chás de bebê, casamentos, aniversários, eventos corporativos). Detalhamos cada tipo de venda nos nossos materiais!"
  },
  {
    "id": 9,
    "question": "Como faço para ter embalagens personalizadas?",
    "answer": "Nossos alunos tem acesso ao Pack de Embalagens Editáveis no Canva, com tutorial para que você possa facilmente personalizar as suas embalagens e profissionalizar o seu negócio, abrindo ainda mais oportunidades de vendas!"
  },
  {
    "id": 10,
    "question": "O que vou aprender nas aulas?",
    "answer": "Conteúdos práticos, aprofundados e semanais, com linguagem fácil e acessível e envolvendo todos os temas que envolvem o negócio, desde o básico até avançado. Nosso formatos se diversificam em guias completos, planilhas, pack de embalagens editáveis no Canva, vídeo aulas, textos – tudo para você ser um vendedor de brownies de sucesso!"
  },
  {
    "id": 11,
    "question": "Como funciona a assistência individual?",
    "answer": "Tire quaisquer dúvidas que possam surgir sobre todos os assuntos que envolvem o negócio desde o início, diretamente pelo WhatsApp de segunda a sexta das 10 às 18 horas."
  },
  {
    "id": 12,
    "question": "E se eu não gostar da receita?",
    "answer": "Olha, isso é muito difícil – 100% dos nossos clientes que realizaram os ajustes na fornada de tempo e temperatura para chegar no ponto perfeito amaram a receita! Mas caso você não goste e não vá utilizá-la, você pode solicitar reembolso em até 30 dias depois do recebimento do produto diretamente com nosso suporte oficial."
  }
];
