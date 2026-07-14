"use client";

import { useMemo, useState } from "react";

type Meditation = {
  title: string;
  theme: string;
  quote: string;
  reflection: string[];
  practice: string;
  prayer: string;
};

const meditations: Meditation[] = [
  {
    title: "Ancestralidade: sentido que atravessa o tempo",
    theme: "Ancestralidade e continuidade",
    quote: "Não começamos em nós mesmos: somos continuidade, memória e responsabilidade.",
    reflection: [
      "Nas tradições afro-brasileiras, a ancestralidade não se limita à lembrança do passado. Ela é presença ética e espiritual: uma corrente que liga os que vieram antes, os que vivem agora e aqueles que ainda virão.",
      "A Logoterapia reconhece que a vida ganha sentido quando percebemos nossa responsabilidade diante da história. Recebemos nomes, saberes, gestos e caminhos; não para repeti-los mecanicamente, mas para fazê-los florescer de modo singular.",
      "Honrar os ancestrais é reconhecer que nossa existência participa de algo maior que o próprio instante. Cada escolha digna de hoje pode tornar-se força e orientação para outra geração.",
    ],
    practice: "Recorde uma pessoa de sua família, comunidade ou linhagem espiritual cuja vida lhe ensinou coragem. Escreva o ensinamento recebido e escolha uma forma concreta de transmiti-lo adiante.",
    prayer: "Que a memória dos que vieram antes fortaleça meus passos. Que eu honre minhas raízes sem ficar preso ao passado e transforme a herança recebida em cuidado para os que virão.",
  },
  {
    title: "Axé: a força que põe a vida em movimento",
    theme: "Axé e vontade de sentido",
    quote: "A vida pede circulação: receber, cultivar e repartir a força que nos anima.",
    reflection: [
      "Axé é força vital, princípio de movimento e possibilidade. Ele não é uma posse individual e imóvel: circula nos encontros, nos gestos, na palavra, no cuidado com a natureza e na vida comunitária.",
      "Na Logoterapia, a vontade de sentido nos orienta para algo ou alguém além de nós mesmos. Quando encontramos um para quê, a energia deixa de girar em vazio e passa a servir a uma direção.",
      "Cultivar o axé também exige discernimento. Algumas relações, ambientes e hábitos fortalecem nossa capacidade de responder à vida; outros a enfraquecem. Reconhecer essa diferença é um ato de responsabilidade.",
    ],
    practice: "Faça um pequeno mapa do seu axé: anote três pessoas, lugares ou atividades que renovam sua força e uma situação que a drena. Escolha hoje uma ação para nutrir o que lhe dá vida.",
    prayer: "Que eu reconheça, preserve e compartilhe a força que sustenta a vida. Que meu axé encontre direção no serviço, na verdade e no bem que posso realizar.",
  },
  {
    title: "Egbé: eu sou porque nós somos",
    theme: "Comunidade e autotranscendência",
    quote: "A força individual amadurece quando encontra lugar no coletivo.",
    reflection: [
      "Egbé é mais que um agrupamento de pessoas. É comunidade viva, espaço de pertencimento, responsabilidade e circulação do axé. Cada pessoa possui um lugar, um dom e uma tarefa diante do conjunto.",
      "A autotranscendência, conceito central de Viktor Frankl, recorda que o ser humano se realiza quando se dirige a uma causa, a uma obra ou a alguém que ama. A plenitude não nasce do fechamento em si, mas da relação.",
      "Pertencer não significa perder a singularidade. Ao contrário: é oferecer ao coletivo aquilo que somente você pode realizar e permitir que a força da comunidade também sustente sua caminhada.",
    ],
    practice: "Nomeie suas comunidades de pertencimento. Pergunte-se: o que recebo delas e qual contribuição somente eu posso oferecer neste momento? Realize um gesto concreto de reciprocidade.",
    prayer: "Que eu encontre meu lugar sem me colocar acima de ninguém. Ensina-me a receber com humildade, repartir com generosidade e fortalecer o chão comum.",
  },
  {
    title: "A palavra que guarda e transmite",
    theme: "Oralidade, verdade e responsabilidade",
    quote: "A palavra carrega memória: pode ferir o caminho ou abrir passagem.",
    reflection: [
      "Nas tradições de matriz africana, a oralidade preserva histórias, ensinamentos e modos de viver. A palavra liga gerações. Por isso, falar e escutar não são atos banais: são formas de cuidar da memória e da comunidade.",
      "A Logoterapia compreende a responsabilidade como capacidade de responder às perguntas concretas que a vida apresenta. A palavra é uma dessas respostas; revela a atitude que escolhemos diante do outro.",
      "A verdade não necessita de crueldade para ser firme. Quando nasce do respeito, ela corrige sem humilhar, orienta sem dominar e preserva a dignidade de quem escuta.",
    ],
    practice: "Escolha uma conversa importante e prepare-se para ela com três compromissos: ouvir até o fim, falar com clareza e preservar o respeito.",
    prayer: "Que minha voz seja firme sem ser áspera. Que eu saiba calar quando o silêncio protege e falar quando a verdade liberta.",
  },
  {
    title: "O corpo também conhece caminhos",
    theme: "Corporeidade e presença",
    quote: "Há sentidos que a palavra explica; outros, o corpo primeiro reconhece.",
    reflection: [
      "A corporeidade ocupa lugar central nas tradições afro-brasileiras. O corpo canta, dança, ajoelha, trabalha, celebra e guarda memórias. Ele não é um obstáculo ao espírito, mas uma de suas formas de presença no mundo.",
      "Também a busca de sentido precisa encarnar-se. Um valor apenas pensado permanece promessa; torna-se vida quando alcança as mãos, a postura, o ritmo dos dias e a maneira concreta de tratar as pessoas.",
      "Escutar o corpo não significa obedecer a cada impulso. Significa reconhecer cansaços, forças, limites e possibilidades, para responder à existência com maior inteireza.",
    ],
    practice: "Faça alguns minutos de respiração e movimento consciente. Observe onde há tensão e vitalidade. Depois, escolha um valor importante e pergunte: que gesto do meu corpo pode expressá-lo hoje?",
    prayer: "Que meu corpo seja presença, instrumento de cuidado e morada de dignidade. Ensina-me a respeitar seus limites e a colocá-lo a serviço do que tem sentido.",
  },
  {
    title: "Circularidade: o tempo que retorna e ensina",
    theme: "Tempo, memória e renovação",
    quote: "Voltar não é repetir: é reencontrar o caminho com novos olhos.",
    reflection: [
      "A circularidade do tempo, presente em muitas cosmovisões africanas e afro-brasileiras, integra passado, presente e futuro. A vida não avança como linha que abandona tudo para trás; ela retorna à memória para renovar o caminho.",
      "Na busca de sentido, revisitar a própria história não precisa ser aprisionamento. Pode ser autodistanciamento: olhar o vivido de outra perspectiva, reconhecer o que permanece valioso e escolher uma nova atitude.",
      "Há experiências que voltam porque ainda pedem elaboração. Quando acolhidas com consciência, deixam de ser repetição automática e tornam-se oportunidade de amadurecimento.",
    ],
    practice: "Recorde uma situação que parece repetir-se em sua vida. Pergunte: o que ela ainda tenta me ensinar? Que resposta diferente e responsável posso oferecer desta vez?",
    prayer: "Que eu acolha os ciclos sem me tornar prisioneiro deles. Dá-me memória para aprender, liberdade para escolher e coragem para renovar o caminho.",
  },
  {
    title: "Natureza: morada do sagrado e do sentido",
    theme: "Orixás, natureza e valores vivenciais",
    quote: "Cuidar da natureza é reconhecer a vida como relação, presença e dádiva.",
    reflection: [
      "Nas tradições afro-brasileiras, orixás, voduns e inquices expressam forças da natureza e dimensões da existência. A água, a mata, o fogo, o vento e a terra não são simples cenário: participam de uma realidade viva e sagrada.",
      "Frankl chamou de valores vivenciais os sentidos realizados quando nos abrimos ao mundo — à beleza, ao encontro, ao amor e ao transcendente. Contemplar a natureza pode retirar-nos da hiperreflexão e devolver-nos ao pertencimento.",
      "A reverência precisa alcançar o cuidado. Não há verdadeira espiritualidade quando se celebra o sagrado e se destrói sua casa. Preservar a vida ao redor é também responder pelo sentido da própria existência.",
    ],
    practice: "Aproxime-se hoje de um elemento da natureza com atenção: uma árvore, água, terra, vento ou luz. Contemple sem pressa e realize um pequeno gesto concreto de preservação.",
    prayer: "Que eu não trate como objeto aquilo que sustenta a vida. Ensina-me a reconhecer o sagrado na criação e a transformar reverência em cuidado.",
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
          <a href="#caminho" onClick={() => setMenuOpen(false)}>O caminho</a>
          <a href="#arquivo" onClick={() => setMenuOpen(false)}>Arquivo</a>
          <a href="#autor" onClick={() => setMenuOpen(false)}>Sobre o autor</a>
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
          <p className="hero-copy">Uma pausa diária inspirada nas tradições afro-brasileiras e na Logoterapia para cultivar axé, honrar a ancestralidade e encontrar sentido nas escolhas de cada dia.</p>
          <a className="primary-button" href="#meditacao">Ler a reflexão de hoje <span aria-hidden="true">↓</span></a>
        </div>
        <p className="hero-side-note">Memória • Presença • Comunidade</p>
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
            <blockquote>“{meditation.quote}”</blockquote>
            <div className="reflection-text">
              {meditation.reflection.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <div className="practice-box">
              <span>PARA VIVER HOJE</span>
              <p>{meditation.practice}</p>
            </div>
            <div className="prayer">
              <span>PRECE</span>
              <p>{meditation.prayer}</p>
            </div>
            <button className="share-button" onClick={shareMeditation}>{copied ? "Link copiado" : "Compartilhar esta reflexão"}</button>
          </div>
        </article>
      </section>

      <section className="path-section" id="caminho">
        <div className="section-intro">
          <p className="eyebrow gold">UM CAMINHO DE SENTIDO</p>
          <h2>Espiritualidade que<br />se torna presença.</h2>
          <p>Estas meditações nascem do diálogo respeitoso entre Logoterapia e tradições afro-brasileiras. Ancestralidade, axé, egbé, corporeidade e natureza tornam-se caminhos de responsabilidade e sentido.</p>
        </div>
        <div className="pillars">
          <article><span>01</span><h3>Honrar a ancestralidade</h3><p>Reconhecer a continuidade entre passado, presente e futuro como fonte de responsabilidade.</p></article>
          <article><span>02</span><h3>Cultivar e repartir o axé</h3><p>Identificar o que fortalece a vida e orientar essa força para valores e propósitos.</p></article>
          <article><span>03</span><h3>Pertencer ao egbé</h3><p>Realizar a própria singularidade no cuidado, na reciprocidade e no serviço à comunidade.</p></article>
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
          <p>Médico psiquiatra, professor e autor. Dedica-se ao encontro entre saúde mental, espiritualidade e busca de sentido, valorizando o diálogo respeitoso entre conhecimento, tradição e experiência humana.</p>
          <p className="author-note">Vida e Sentido nasce como um espaço de pausa, reflexão e cuidado — para que a sabedoria recebida se transforme em presença no mundo.</p>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#inicio"><span className="brand-mark">VS</span><span><strong>Vida e Sentido</strong><small>Sabedoria para o caminho</small></span></a>
        <p>Devocional diário • Reflexões para uma vida com propósito</p>
        <p>© {new Date().getFullYear()} Eduardo D’Angelo Mimessi</p>
      </footer>
    </main>
  );
}
