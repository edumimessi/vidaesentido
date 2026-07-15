"use client";

import { useMemo, useState } from "react";

type Meditation = {
  title: string;
  theme: string;
  quote: string;
  reflection: string[];
  practice: string;
  prayer: string;
  meditation?: string;
  question?: string;
};

const meditations: Meditation[] = [
  {
    title: "Heranças que atravessam o tempo",
    theme: "Memória e continuidade",
    quote: "Não começamos em nós mesmos: somos continuidade, memória e responsabilidade.",
    reflection: [
      "Nossa história não se limita à lembrança do passado. Ela forma uma corrente de experiências que liga os que vieram antes, os que vivem agora e aqueles que ainda virão.",
      "A Logoterapia reconhece que a vida ganha sentido quando percebemos nossa responsabilidade diante da história. Recebemos nomes, saberes, gestos e caminhos; não para repeti-los mecanicamente, mas para fazê-los florescer de modo singular.",
      "Honrar os ancestrais é reconhecer que nossa existência participa de algo maior que o próprio instante. Cada escolha digna de hoje pode tornar-se força e orientação para outra geração.",
    ],
    practice: "Recorde uma pessoa de sua família ou comunidade cuja vida lhe ensinou coragem. Escreva o ensinamento recebido e escolha uma forma concreta de transmiti-lo adiante.",
    prayer: "Que a memória dos que vieram antes fortaleça meus passos. Que eu honre minhas raízes sem ficar preso ao passado e transforme a herança recebida em cuidado para os que virão.",
    meditation: "Respire lentamente e recorde uma presença que ajudou a formar quem você é. Sem idealizar o passado, reconheça o valor recebido e pergunte como ele pode ganhar uma forma nova em suas escolhas de hoje.",
    question: "Qual herança humana desejo transformar em atitude concreta?",
  },
  {
    title: "A força que põe a vida em movimento",
    theme: "Vitalidade e vontade de sentido",
    quote: "A vida pede circulação: receber, cultivar e repartir a força que nos anima.",
    reflection: [
      "A vitalidade que nos move não é uma posse individual e imóvel: ela se renova nos encontros, nos gestos, na palavra, no cuidado com a natureza e na vida comunitária.",
      "Na Logoterapia, a vontade de sentido nos orienta para algo ou alguém além de nós mesmos. Quando encontramos um para quê, a energia deixa de girar em vazio e passa a servir a uma direção.",
      "Cultivar essa força também exige discernimento. Algumas relações, ambientes e hábitos fortalecem nossa capacidade de responder à vida; outros a enfraquecem. Reconhecer essa diferença é um ato de responsabilidade.",
    ],
    practice: "Faça um pequeno mapa de sua vitalidade: anote três pessoas, lugares ou atividades que renovam sua força e uma situação que a drena. Escolha hoje uma ação para nutrir o que lhe dá vida.",
    prayer: "Que eu reconheça, preserve e compartilhe a força que sustenta a vida. Que ela encontre direção no serviço, na verdade e no bem que posso realizar.",
    meditation: "Perceba o movimento da respiração e observe, sem julgamento, onde sua energia está sendo investida. Imagine essa força se organizando ao redor de um propósito possível para este dia.",
    question: "O que merece receber o melhor da minha energia hoje?",
  },
  {
    title: "Pertencimento: eu sou porque nós somos",
    theme: "Comunidade e autotranscendência",
    quote: "A força individual amadurece quando encontra lugar no coletivo.",
    reflection: [
      "Uma comunidade é mais que um agrupamento de pessoas. É espaço vivo de pertencimento, responsabilidade e apoio mútuo. Cada pessoa possui um lugar, um dom e uma tarefa diante do conjunto.",
      "A autotranscendência, conceito central de Viktor Frankl, recorda que o ser humano se realiza quando se dirige a uma causa, a uma obra ou a alguém que ama. A plenitude não nasce do fechamento em si, mas da relação.",
      "Pertencer não significa perder a singularidade. Ao contrário: é oferecer ao coletivo aquilo que somente você pode realizar e permitir que a força da comunidade também sustente sua caminhada.",
    ],
    practice: "Nomeie suas comunidades de pertencimento. Pergunte-se: o que recebo delas e qual contribuição somente eu posso oferecer neste momento? Realize um gesto concreto de reciprocidade.",
    prayer: "Que eu encontre meu lugar sem me colocar acima de ninguém. Ensina-me a receber com humildade, repartir com generosidade e fortalecer o chão comum.",
    meditation: "Traga à mente três pessoas ou grupos aos quais você pertence. A cada respiração, reconheça algo que recebe e algo que pode oferecer, sem cobrança e sem apagar sua singularidade.",
    question: "De que modo posso participar sem deixar de ser quem sou?",
  },
  {
    title: "A palavra que guarda e transmite",
    theme: "Oralidade, verdade e responsabilidade",
    quote: "A palavra carrega memória: pode ferir o caminho ou abrir passagem.",
    reflection: [
      "A palavra preserva histórias, ensinamentos e modos de viver. Ela liga gerações. Por isso, falar e escutar não são atos banais: são formas de cuidar da memória e da comunidade.",
      "A Logoterapia compreende a responsabilidade como capacidade de responder às perguntas concretas que a vida apresenta. A palavra é uma dessas respostas; revela a atitude que escolhemos diante do outro.",
      "A verdade não necessita de crueldade para ser firme. Quando nasce do respeito, ela corrige sem humilhar, orienta sem dominar e preserva a dignidade de quem escuta.",
    ],
    practice: "Escolha uma conversa importante e prepare-se para ela com três compromissos: ouvir até o fim, falar com clareza e preservar o respeito.",
    prayer: "Que minha voz seja firme sem ser áspera. Que eu saiba calar quando o silêncio protege e falar quando a verdade liberta.",
    meditation: "Permaneça alguns instantes em silêncio e escute os sons ao redor. Depois, perceba a palavra que precisa ser dita e a palavra que precisa ser evitada para que o encontro preserve a dignidade de todos.",
    question: "Minha próxima palavra servirá à verdade e ao cuidado?",
  },
  {
    title: "O corpo também conhece caminhos",
    theme: "Corporeidade e presença",
    quote: "Há sentidos que a palavra explica; outros, o corpo primeiro reconhece.",
    reflection: [
      "O corpo canta, dança, trabalha, celebra e guarda memórias. Ele não é um obstáculo à busca de sentido, mas a forma concreta de nossa presença no mundo.",
      "Também a busca de sentido precisa encarnar-se. Um valor apenas pensado permanece promessa; torna-se vida quando alcança as mãos, a postura, o ritmo dos dias e a maneira concreta de tratar as pessoas.",
      "Escutar o corpo não significa obedecer a cada impulso. Significa reconhecer cansaços, forças, limites e possibilidades, para responder à existência com maior inteireza.",
    ],
    practice: "Faça alguns minutos de respiração e movimento consciente. Observe onde há tensão e vitalidade. Depois, escolha um valor importante e pergunte: que gesto do meu corpo pode expressá-lo hoje?",
    prayer: "Que meu corpo seja presença, instrumento de cuidado e morada de dignidade. Ensina-me a respeitar seus limites e a colocá-lo a serviço do que tem sentido.",
    meditation: "Faça uma varredura tranquila do corpo, dos pés à cabeça. Observe tensão, cansaço e vitalidade sem tentar corrigir tudo. Escolha um gesto corporal simples que expresse respeito por sua vida.",
    question: "Que limite ou necessidade meu corpo está tentando comunicar?",
  },
  {
    title: "Circularidade: o tempo que retorna e ensina",
    theme: "Tempo, memória e renovação",
    quote: "Voltar não é repetir: é reencontrar o caminho com novos olhos.",
    reflection: [
      "Nossa experiência do tempo integra passado, presente e futuro. A vida não avança como uma linha que abandona tudo para trás; ela retorna à memória para renovar o caminho.",
      "Na busca de sentido, revisitar a própria história não precisa ser aprisionamento. Pode ser autodistanciamento: olhar o vivido de outra perspectiva, reconhecer o que permanece valioso e escolher uma nova atitude.",
      "Há experiências que voltam porque ainda pedem elaboração. Quando acolhidas com consciência, deixam de ser repetição automática e tornam-se oportunidade de amadurecimento.",
    ],
    practice: "Recorde uma situação que parece repetir-se em sua vida. Pergunte: o que ela ainda tenta me ensinar? Que resposta diferente e responsável posso oferecer desta vez?",
    prayer: "Que eu acolha os ciclos sem me tornar prisioneiro deles. Dá-me memória para aprender, liberdade para escolher e coragem para renovar o caminho.",
    meditation: "Observe uma situação recorrente como se a enxergasse de alguns passos de distância. Separe o que aconteceu da resposta que você ainda pode escolher e visualize uma atitude nova, pequena e responsável.",
    question: "O que posso fazer diferente quando essa situação voltar?",
  },
  {
    title: "Natureza: presença e sentido",
    theme: "Natureza e valores vivenciais",
    quote: "Cuidar da natureza é reconhecer a vida como relação, presença e dádiva.",
    reflection: [
      "A água, a mata, o fogo, o vento e a terra não são simples cenário. A natureza sustenta nossa existência e nos recorda que a vida acontece em relação.",
      "Frankl chamou de valores vivenciais os sentidos realizados quando nos abrimos ao mundo — à beleza, ao encontro, ao amor e ao transcendente. Contemplar a natureza pode retirar-nos da hiperreflexão e devolver-nos ao pertencimento.",
      "A admiração precisa alcançar o cuidado. Reconhecer a beleza da vida e destruir o ambiente que a sustenta é uma contradição. Preservar a vida ao redor é também responder pelo sentido da própria existência.",
    ],
    practice: "Aproxime-se hoje de um elemento da natureza com atenção: uma árvore, água, terra, vento ou luz. Contemple sem pressa e realize um pequeno gesto concreto de preservação.",
    prayer: "Que eu não trate como objeto aquilo que sustenta a vida. Ensina-me a transformar admiração em cuidado e responsabilidade.",
    meditation: "Contemple por alguns minutos um elemento natural próximo — luz, vento, água, planta ou céu. Deixe de analisá-lo e apenas receba sua presença, percebendo que você também participa dessa realidade viva.",
    question: "Que forma de cuidado pode nascer daquilo que hoje admiro?",
  },
  {
    title: "A liberdade que permanece",
    theme: "Liberdade de atitude",
    quote: "Nem tudo depende de mim; minha resposta, porém, ainda pode carregar sentido.",
    reflection: [
      "A liberdade humana não significa controlar todas as circunstâncias. Há perdas, limites, imprevistos e decisões alheias que não se submetem à nossa vontade.",
      "A Logoterapia destaca uma liberdade interior: a possibilidade de tomar posição diante do que acontece. Essa margem pode ser pequena, mas nela vivem a dignidade, a responsabilidade e a direção que damos ao próximo passo.",
      "Escolher uma atitude não é negar a dor nem fingir otimismo. É reconhecer honestamente a realidade e procurar a resposta mais humana que ainda está ao nosso alcance.",
    ],
    practice: "Divida uma folha em duas partes: o que não depende de mim e o que ainda posso escolher. Concentre sua energia somente na segunda parte e realize uma ação possível.",
    prayer: "Que eu reconheça os limites sem entregar a eles toda a minha liberdade. Que minha resposta de hoje preserve dignidade, verdade e coragem.",
    meditation: "Nomeie mentalmente aquilo que você não controla e solte o ar devagar. Ao inspirar, volte-se para sua margem de escolha. Repita: qual é a resposta mais responsável que posso oferecer agora?",
    question: "Qual escolha continua sendo minha, mesmo nesta circunstância?",
  },
  {
    title: "A vida pergunta, eu respondo",
    theme: "Responsabilidade",
    quote: "O sentido se revela quando deixamos de exigir respostas e começamos a responder à vida.",
    reflection: [
      "Em momentos de incerteza, é comum perguntar repetidamente o que a vida deveria nos oferecer. Frankl propõe uma inversão fecunda: perceber que, em cada situação, é a vida que nos dirige uma pergunta concreta.",
      "Responder não exige uma solução grandiosa. Muitas vezes, a resposta está em cumprir uma tarefa, cuidar de alguém, reparar um erro, suportar um intervalo ou dizer a verdade com respeito.",
      "A responsabilidade torna o sentido cotidiano. Ela nos retira da espera passiva e devolve importância ao gesto que somente nós podemos realizar neste momento.",
    ],
    practice: "Complete a frase: “Hoje a vida me pede...”. Em seguida, transforme a resposta em uma ação específica, pequena e verificável.",
    prayer: "Que eu escute a pergunta presente neste dia e responda com o melhor de minha consciência, sem adiar o bem que já posso realizar.",
    meditation: "Acalme a respiração e imagine o dia diante de você. Sem procurar respostas perfeitas, permita que uma tarefa essencial apareça. Observe-a com seriedade e simplicidade.",
    question: "Que resposta concreta este dia espera de mim?",
  },
  {
    title: "Sair de si para encontrar-se",
    theme: "Autotranscendência",
    quote: "A realização amadurece quando a vida se dirige a uma causa ou a alguém além de nós mesmos.",
    reflection: [
      "Quanto mais a pessoa transforma a própria felicidade em obrigação, mais pode se sentir presa à vigilância de si mesma. A existência se amplia quando a atenção encontra algo valioso fora desse círculo.",
      "Autotranscendência é a capacidade humana de orientar-se para uma pessoa amada, uma tarefa, uma obra, uma causa ou um valor. Não é abandono de si, mas uma maneira de não reduzir a vida às próprias sensações.",
      "Quando servimos ao que importa, a identidade deixa de ser um projeto fechado e se torna relação, contribuição e presença.",
    ],
    practice: "Escolha alguém ou uma causa que mereça sua atenção. Faça um gesto útil sem esperar reconhecimento imediato e observe como muda sua relação com o próprio dia.",
    prayer: "Que eu não fique encerrado em mim. Que minha presença alcance alguém, uma tarefa ou um valor que mereça cuidado.",
    meditation: "Por alguns minutos, deixe de medir como você está se sentindo. Visualize uma pessoa ou causa importante e pergunte silenciosamente: de que presença ela necessita de mim?",
    question: "Para quem ou para quê vale a pena dirigir minha atenção?",
  },
  {
    title: "Criar, encontrar, posicionar-se",
    theme: "Três caminhos de sentido",
    quote: "O sentido pode ser realizado pelo que oferecemos, pelo que recebemos e pela atitude que escolhemos.",
    reflection: [
      "A Logoterapia descreve caminhos concretos para realizar sentido. Os valores criativos aparecem no que fazemos e oferecemos: trabalho, cuidado, criação e contribuição.",
      "Os valores vivenciais surgem no que recebemos do encontro com alguém, da beleza, da natureza, da arte e do amor. Há momentos em que o essencial não é produzir, mas estar verdadeiramente presente.",
      "Quando uma situação inevitável não pode ser modificada, permanecem os valores de atitude: a forma digna de posicionar-se diante do limite. Nenhum desses caminhos é superior; cada momento pede discernimento.",
    ],
    practice: "Escolha um caminho para hoje: criar algo útil, receber plenamente uma experiência valiosa ou adotar uma atitude digna diante de um limite inevitável.",
    prayer: "Que eu reconheça o caminho de sentido aberto neste momento e tenha presença para percorrê-lo.",
    meditation: "Respire três vezes com calma. Na primeira, pergunte o que pode oferecer. Na segunda, o que precisa receber com presença. Na terceira, qual atitude pode escolher diante do que não muda.",
    question: "Hoje o sentido me chama a criar, encontrar ou posicionar-me?",
  },
  {
    title: "Olhar-se de uma distância saudável",
    theme: "Autodistanciamento",
    quote: "Eu tenho pensamentos e emoções, mas não sou reduzido a nenhum deles.",
    reflection: [
      "Uma emoção intensa pode ocupar todo o campo da consciência e parecer definir quem somos. O autodistanciamento cria espaço entre a pessoa e aquilo que ela experimenta.",
      "Esse espaço não elimina sentimentos. Ele permite observá-los, nomeá-los e reconhecer que são estados presentes, não sentenças definitivas sobre a identidade ou o futuro.",
      "Ao dizer “estou percebendo ansiedade” em vez de “sou a ansiedade”, recuperamos a possibilidade de agir segundo valores, mesmo enquanto a emoção ainda está presente.",
    ],
    practice: "Quando uma emoção surgir, descreva-a com a frase: “Eu percebo em mim...”. Depois acrescente: “E, mesmo assim, posso escolher...”.",
    prayer: "Que eu acolha o que sinto sem me confundir inteiramente com isso. Que entre a emoção e a ação exista um espaço de liberdade.",
    meditation: "Observe pensamentos como acontecimentos que chegam e passam. Nomeie cada um brevemente — preocupação, lembrança, planejamento — e volte à respiração sem discutir com ele.",
    question: "Que valor pode orientar minha ação, mesmo com esta emoção presente?",
  },
  {
    title: "O futuro que me chama",
    theme: "Esperança e tarefa futura",
    quote: "Ter um para quê não apaga a dificuldade, mas oferece direção para atravessá-la.",
    reflection: [
      "A esperança madura não é garantia de que tudo acontecerá como desejamos. Ela nasce da percepção de que ainda existem tarefas, encontros e possibilidades que solicitam nossa presença.",
      "Uma meta futura pode organizar forças dispersas. Não precisa ser grandiosa: uma conversa a realizar, alguém a acompanhar, um trabalho a concluir ou uma capacidade a desenvolver já pode abrir horizonte.",
      "O futuro ganha consistência quando deixa de ser fantasia e começa a orientar o próximo passo possível no presente.",
    ],
    practice: "Escreva uma razão concreta para chegar ao fim desta semana. Embaixo, anote a menor ação que aproxima você dela nas próximas 24 horas.",
    prayer: "Que eu reconheça o futuro que ainda solicita minha presença e caminhe até ele com paciência e fidelidade ao próximo passo.",
    meditation: "Visualize um encontro, tarefa ou possibilidade futura que tenha valor real. Não imagine o resultado perfeito; apenas perceba a direção e o primeiro passo que pode ser dado.",
    question: "Que possibilidade futura merece minha fidelidade hoje?",
  },
  {
    title: "Dignidade diante do inevitável",
    theme: "Valores de atitude",
    quote: "Quando não posso mudar a situação, ainda posso cuidar da maneira como a atravesso.",
    reflection: [
      "Nem todo sofrimento pode ser evitado, mas nenhum sofrimento deve ser procurado ou romantizado. Quando há possibilidade de tratamento, proteção ou mudança, agir sobre a causa é parte da responsabilidade.",
      "Somente diante do inevitável surge a pergunta sobre a atitude. Nesse território, coragem pode significar pedir ajuda, aceitar um limite, conservar gentileza, suportar um processo ou recusar que a dor destrua todos os valores.",
      "A dignidade não exige heroísmo permanente. Ela pode aparecer na fidelidade humilde ao cuidado possível, um dia de cada vez.",
    ],
    practice: "Pergunte primeiro: isto pode ser mudado ou tratado? Se puder, busque ajuda e ação. Se não puder agora, escolha uma atitude que proteja sua dignidade durante a travessia.",
    prayer: "Que eu tenha lucidez para mudar o que pode ser mudado, buscar ajuda quando necessário e preservar minha humanidade diante do inevitável.",
    meditation: "Coloque os pés no chão e reconheça a realidade sem diminuí-la nem ampliá-la. Respire e escolha uma qualidade — coragem, paciência, firmeza ou gentileza — para acompanhar seu próximo passo.",
    question: "Que atitude protege minha dignidade nesta travessia?",
  },
];

const months = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro",
];

function getDayOfYear(date: Date) {
  const start = new Date(date.getFullYear(), 0, 0);
  return Math.floor((date.getTime() - start.getTime()) / 86400000);
}

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("pt-BR", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(date);
}

export default function Home() {
  const today = useMemo(() => new Date(), []);
  const [offset, setOffset] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const selectedDate = useMemo(() => {
    const date = new Date(today);
    date.setDate(today.getDate() + offset);
    return date;
  }, [today, offset]);
  const meditation = meditations[(getDayOfYear(selectedDate) - 1) % meditations.length];

  async function shareMeditation() {
    const text = `${meditation.title}\n\n${meditation.quote}\n\nVida e Sentido — Devocional diário`;
    if (navigator.share) {
      await navigator.share({ title: meditation.title, text, url: window.location.href });
      return;
    }
    await navigator.clipboard.writeText(`${text}\n${window.location.href}`);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2200);
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Vida e Sentido — início">
          <span className="brand-mark" aria-hidden="true">VS</span>
          <span><strong>Vida e Sentido</strong><small>Sabedoria para o caminho</small></span>
        </a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="main-nav">
          Menu
        </button>
        <nav id="main-nav" className={menuOpen ? "nav open" : "nav"} aria-label="Navegação principal">
          <a href="#meditacao" onClick={() => setMenuOpen(false)}>Meditação do dia</a>
          <a href="#como-usar" onClick={() => setMenuOpen(false)}>Como meditar</a>
          <a href="#leituras" onClick={() => setMenuOpen(false)}>Leituras</a>
          <a href="#caminho" onClick={() => setMenuOpen(false)}>O caminho</a>
          <a href="#autor" onClick={() => setMenuOpen(false)}>Sobre o autor</a>
          <a href="#contato" onClick={() => setMenuOpen(false)}>Clínica Mimessi</a>
        </nav>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-symbol" aria-hidden="true">
          <span className="orbit orbit-one" />
          <span className="orbit orbit-two" />
          <span className="sun" />
        </div>
        <div className="hero-content">
          <p className="eyebrow">DEVOCIONAL DIÁRIO</p>
          <h1>Raízes que sustentam.<br /><em>Sentido que conduz.</em></h1>
          <p className="hero-copy">Uma pausa diária inspirada na Logoterapia e na experiência humana para cultivar presença, reconhecer valores e encontrar sentido nas escolhas de cada dia.</p>
          <a className="primary-button" href="#meditacao">Ler a reflexão de hoje <span aria-hidden="true">↓</span></a>
        </div>
        <p className="hero-side-note">Memória • Presença • Comunidade</p>
      </section>

      <section className="how-to" id="como-usar">
        <div className="how-to-heading">
          <p className="eyebrow dark">UMA PAUSA COM SENTIDO</p>
          <h2>Dez minutos para ler,<br />silenciar e escolher.</h2>
          <p>Não é necessário esvaziar a mente. A proposta é criar espaço interior para compreender a experiência e responder ao dia com mais consciência.</p>
        </div>
        <div className="how-to-steps">
          <article><span>01</span><h3>Chegue</h3><p>Sente-se de forma confortável, apoie os pés e faça três respirações lentas.</p></article>
          <article><span>02</span><h3>Leia</h3><p>Percorra a reflexão sem pressa e observe qual ideia encontra sua vida hoje.</p></article>
          <article><span>03</span><h3>Medite</h3><p>Siga a pausa guiada por cerca de cinco minutos, sem exigir uma sensação especial.</p></article>
          <article><span>04</span><h3>Responda</h3><p>Registre a pergunta e escolha uma atitude pequena, concreta e possível.</p></article>
        </div>
      </section>

      <section className="daily" id="meditacao">
        <div className="daily-heading">
          <div>
            <p className="eyebrow dark">PALAVRA DO DIA</p>
            <p className="date">{formatDate(selectedDate)}</p>
          </div>
          <div className="date-controls" aria-label="Navegar pelas meditações">
            <button onClick={() => setOffset(offset - 1)} aria-label="Dia anterior">←</button>
            <button className="today-button" onClick={() => setOffset(0)} disabled={offset === 0}>Hoje</button>
            <button onClick={() => setOffset(offset + 1)} aria-label="Próximo dia">→</button>
          </div>
        </div>

        <article className="meditation-card">
          <aside>
            <span className="number">{String(getDayOfYear(selectedDate)).padStart(3, "0")}</span>
            <span className="vertical-rule" />
            <span className="theme-label">{meditation.theme}</span>
          </aside>
          <div className="meditation-content">
            <h2>{meditation.title}</h2>
            <span className="reflection-label">FRASE PARA MEDITAR</span>
            <blockquote>“{meditation.quote}”</blockquote>
            <div className="reflection-text">
              {meditation.reflection.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <div className="practice-box">
              <span>PARA VIVER HOJE</span>
              <p>{meditation.practice}</p>
            </div>
            <div className="guided-box">
              <div className="guided-heading">
                <span>PAUSA GUIADA</span>
                <small>APROXIMADAMENTE 5 MINUTOS</small>
              </div>
              <ol>
                <li>Apoie os pés, relaxe os ombros e faça três respirações lentas.</li>
                <li>{meditation.meditation ?? "Permaneça alguns instantes com o tema da leitura e observe o que ele desperta, sem julgar ou apressar uma resposta."}</li>
                <li>Quando a atenção se dispersar, reconheça isso com gentileza e volte ao movimento da respiração.</li>
                <li>Antes de encerrar, escolha uma palavra ou atitude para acompanhar seu dia.</li>
              </ol>
            </div>
            <div className="journal-box">
              <span>PARA ESCREVER E APROFUNDAR</span>
              <p>{meditation.question ?? "Que resposta mais consciente posso oferecer à vida neste momento?"}</p>
            </div>
            <div className="prayer">
              <span>PALAVRA DE ENCERRAMENTO</span>
              <p>{meditation.prayer}</p>
            </div>
            <button className="share-button" onClick={shareMeditation}>{copied ? "Link copiado" : "Compartilhar esta reflexão"}</button>
          </div>
        </article>
      </section>

      <section className="reading-library" id="leituras">
        <div className="library-heading">
          <div>
            <p className="eyebrow dark">BIBLIOTECA DE SENTIDO</p>
            <h2>Escolha a leitura<br />que o seu dia pede.</h2>
          </div>
          <p>Quatorze caminhos inspirados na Logoterapia para momentos de decisão, cansaço, incerteza, relacionamento e renovação.</p>
        </div>
        <div className="reading-grid">
          {meditations.map((item, index) => (
            <button key={item.title} onClick={() => {
              const currentIndex = (getDayOfYear(today) - 1) % meditations.length;
              setOffset(index - currentIndex);
              window.setTimeout(() => document.getElementById("meditacao")?.scrollIntoView({ behavior: "smooth" }), 0);
            }}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <small>{item.theme}</small>
              <strong>{item.title}</strong>
              <b aria-hidden="true">Ler →</b>
            </button>
          ))}
        </div>
        <div className="source-quotes">
          <p className="eyebrow dark">PALAVRAS DE REFERÊNCIA</p>
          <div>
            <blockquote>
              “O que importa não é o que esperamos da vida, mas o que a vida espera de nós.”
              <cite>Viktor E. Frankl, citado em <em>Logoterapia e Tradições Espirituais</em>, de Eduardo D’Angelo Mimessi.</cite>
            </blockquote>
            <blockquote>
              “O ser humano aponta para além de si mesmo.”
              <cite>Viktor E. Frankl, citado em <em>Logoterapia e Tradições Espirituais</em>, de Eduardo D’Angelo Mimessi.</cite>
            </blockquote>
            <blockquote>
              “Um convite a uma vida mais consciente, mais responsável e mais significativa.”
              <cite>Eduardo D’Angelo Mimessi, <em>Logoterapia e Tradições Espirituais</em>.</cite>
            </blockquote>
          </div>
        </div>
        <p className="library-note">As reflexões são conteúdos autorais inspirados em conceitos da Logoterapia de Viktor Frankl. Destinam-se à educação e ao cuidado cotidiano e não substituem avaliação ou tratamento profissional.</p>
        <div className="references">
          <strong>Referências essenciais</strong>
          <p>FRANKL, Viktor E. <em>Em Busca de Sentido</em>. Sinodal/Vozes, 2019. • FRANKL, Viktor E. <em>Psicoterapia e Sentido da Vida</em>. Quadrante, 2016. • MIMESSI, Eduardo D’Angelo. <em>Logoterapia e Tradições Espirituais</em>.</p>
        </div>
      </section>

      <section className="path-section" id="caminho">
        <div className="section-intro">
          <p className="eyebrow gold">UM CAMINHO DE SENTIDO</p>
          <h2>Reflexão que<br />se torna presença.</h2>
          <p>Estas meditações nascem do diálogo entre Logoterapia e experiência humana. Memória, vitalidade, pertencimento, corporeidade e natureza tornam-se caminhos de responsabilidade e sentido.</p>
        </div>
        <div className="pillars">
          <article><span>01</span><h3>Honrar a própria história</h3><p>Reconhecer a continuidade entre passado, presente e futuro como fonte de responsabilidade.</p></article>
          <article><span>02</span><h3>Cultivar a vitalidade</h3><p>Identificar o que fortalece a vida e orientar essa força para valores e propósitos.</p></article>
          <article><span>03</span><h3>Viver o pertencimento</h3><p>Realizar a própria singularidade no cuidado, na reciprocidade e no serviço à comunidade.</p></article>
        </div>
      </section>

      <section className="archive" id="arquivo">
        <div className="archive-heading">
          <div><p className="eyebrow dark">ARQUIVO DE MEDITAÇÕES</p><h2>Reflexões para caminhar por dentro.</h2></div>
          <p>Encontre a reflexão de uma data especial ou retome uma palavra que falou ao seu coração.</p>
        </div>
        <div className="months">
          {months.map((month, index) => (
            <button key={month} onClick={() => {
              const target = new Date(today.getFullYear(), index, 1);
              setOffset(Math.round((target.getTime() - today.getTime()) / 86400000));
              document.getElementById("meditacao")?.scrollIntoView({ behavior: "smooth" });
            }}>
              <span>{String(index + 1).padStart(2, "0")}</span>{month}<b aria-hidden="true">↗</b>
            </button>
          ))}
        </div>
      </section>

      <section className="author" id="autor">
        <div className="author-monogram" aria-hidden="true">EDM</div>
        <div>
          <p className="eyebrow gold">SOBRE O AUTOR</p>
          <h2>Dr. Eduardo D’Angelo Mimessi</h2>
          <p>Médico, professor e autor. Dedica-se ao encontro entre saúde mental e busca de sentido, valorizando o diálogo respeitoso entre conhecimento e experiência humana.</p>
          <p className="author-note">Vida e Sentido nasce como um espaço de pausa, reflexão e cuidado — para que a sabedoria recebida se transforme em presença no mundo.</p>
          <p className="created-by">Idealizado e criado por <strong>Dr. Eduardo D’Angelo Mimessi</strong> — CRM-SP 121.217.</p>
        </div>
      </section>

      <section className="clinic-contact" id="contato">
        <div className="clinic-intro">
          <p className="eyebrow gold">CLÍNICA MIMESSI</p>
          <h2>Quer saber mais?</h2>
          <p>Para conhecer o trabalho do Dr. Eduardo e os atendimentos em saúde mental, entre em contato com a Clínica Mimessi.</p>
          <p className="clinic-signature">Ciência • Cuidado • Sentido</p>
        </div>
        <div className="clinic-details">
          <div className="clinic-links">
            <a className="contact-primary" href="https://wa.me/551234244999" target="_blank" rel="noreferrer">Falar pelo WhatsApp <span aria-hidden="true">↗</span></a>
            <a href="https://clinicamimessi.com.br" target="_blank" rel="noreferrer">Site oficial <span aria-hidden="true">↗</span></a>
            <a href="https://www.instagram.com/clinicamimessi/" target="_blank" rel="noreferrer">Instagram @clinicamimessi <span aria-hidden="true">↗</span></a>
            <a href="mailto:clinicamimessi@gmail.com">Enviar e-mail <span aria-hidden="true">↗</span></a>
          </div>
          <div className="clinic-address">
            <p><strong>Atendimento presencial</strong><br />Av. Tiradentes, 101 — Sala 23<br />Jardim das Nações, Taubaté — SP</p>
            <p><strong>Atendimento online</strong><br />Para todo o Brasil</p>
            <p><strong>Telefone</strong><br />(12) 3424-4999</p>
          </div>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#inicio"><span className="brand-mark">VS</span><span><strong>Vida e Sentido</strong><small>Sabedoria para o caminho</small></span></a>
        <p>Uma criação do Dr. Eduardo D’Angelo Mimessi</p>
        <p>© {new Date().getFullYear()} Vida e Sentido • Todos os direitos reservados</p>
      </footer>
    </main>
  );
}
