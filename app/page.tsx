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
    title: "A força de permanecer inteiro",
    theme: "Ancestralidade e presença",
    quote: "Quem conhece suas raízes não se perde quando o caminho muda.",
    reflection: [
      "Há dias em que a vida nos pede velocidade. A sabedoria ancestral, porém, recorda que nem todo avanço acontece depressa. A árvore cresce porque aprofunda primeiro as raízes — em silêncio, sem aplausos, sustentada pela terra.",
      "Permanecer inteiro não significa resistir a toda mudança. Significa atravessá-la sem abandonar aquilo que dá sentido à nossa história: os valores recebidos, a dignidade construída e a responsabilidade por aqueles que caminham ao nosso lado.",
      "Hoje, antes de buscar respostas distantes, volte-se por um instante para a sua origem. Talvez a orientação de que você precisa já esteja guardada na memória de quem veio antes.",
    ],
    practice: "Reserve cinco minutos de silêncio. Recorde uma pessoa de sua família ou comunidade cuja vida lhe ensinou coragem. Escreva uma frase que resuma esse ensinamento e leve-a consigo durante o dia.",
    prayer: "Que eu honre minhas raízes sem ficar preso ao passado. Que a memória dos que vieram antes fortaleça meus passos, e que minhas escolhas de hoje se tornem boa herança para os que virão.",
  },
  {
    title: "O tempo também trabalha",
    theme: "Paciência e confiança",
    quote: "A semente não se apressa, mas conhece o caminho da luz.",
    reflection: [
      "Nem tudo o que parece parado está sem vida. Sob a terra, longe dos olhos, a semente rompe sua própria casca e começa a transformar-se. Há processos humanos que obedecem à mesma lei: primeiro amadurecem por dentro.",
      "A impaciência costuma chamar de atraso aquilo que ainda está em formação. Quando respeitamos o tempo necessário, deixamos de violentar os ciclos e aprendemos a colaborar com eles.",
      "Faça hoje o que lhe cabe, com cuidado e firmeza. Depois, permita que o tempo complete a parte que não está em suas mãos.",
    ],
    practice: "Escolha uma preocupação que você tem tentado resolver à força. Anote qual é o seu próximo passo possível e qual parte precisa apenas de tempo.",
    prayer: "Que eu reconheça o tempo certo das coisas. Dá-me serenidade para esperar, coragem para agir e sabedoria para não confundir pressa com caminho.",
  },
  {
    title: "Cuidar do chão comum",
    theme: "Comunidade e responsabilidade",
    quote: "Ninguém atravessa a vida verdadeiramente sozinho.",
    reflection: [
      "A comunidade não é apenas o lugar onde recebemos amparo; é também o espaço onde aprendemos a oferecê-lo. Cada gesto de respeito fortalece o chão comum sobre o qual muitas vidas se apoiam.",
      "Quando o individualismo estreita o olhar, o cuidado o alarga. Passamos a perceber a fome silenciosa, o cansaço não dito e a solidão escondida atrás das rotinas.",
      "O sentido cresce quando a vida deixa de girar somente em torno de si mesma. Servir, escutar e partilhar são formas antigas — e sempre novas — de restaurar o mundo.",
    ],
    practice: "Procure alguém que possa estar precisando de presença. Envie uma mensagem sincera, ofereça ajuda concreta ou simplesmente escute sem interromper.",
    prayer: "Que minhas mãos não se fechem diante da necessidade alheia. Ensina-me a receber com humildade e a repartir com generosidade.",
  },
  {
    title: "A palavra que levanta",
    theme: "Verdade e cuidado",
    quote: "A palavra tem peso: pode ferir o caminho ou abrir passagem.",
    reflection: [
      "Falar é um ato de responsabilidade. Depois de pronunciada, a palavra já habita o mundo e passa a tocar vidas que talvez nunca conheçamos por inteiro.",
      "A verdade não precisa da crueldade para ser firme. Quando nasce do respeito, ela corrige sem humilhar, orienta sem dominar e preserva a dignidade de quem escuta.",
      "Antes de responder hoje, faça uma pequena pausa. Pergunte se aquilo que dirá é verdadeiro, necessário e capaz de produzir algum bem.",
    ],
    practice: "Escolha uma conversa importante e prepare-se para ela com três compromissos: ouvir até o fim, falar com clareza e preservar o respeito.",
    prayer: "Que minha voz seja firme sem ser áspera. Que eu saiba calar quando o silêncio protege e falar quando a verdade liberta.",
  },
  {
    title: "Coragem para recomeçar",
    theme: "Renovação e esperança",
    quote: "Recomeçar não apaga a história; dá a ela uma nova direção.",
    reflection: [
      "Todo recomeço carrega algo do caminho anterior. Levamos cicatrizes, aprendizados e nomes que não desejamos esquecer. Por isso, começar de novo não é voltar ao ponto zero.",
      "A esperança madura não nega a dor. Ela olha para o que aconteceu e, ainda assim, escolhe não entregar o futuro ao passado.",
      "Talvez você não possa mudar toda a paisagem hoje. Mas pode mudar a direção do próximo passo — e, às vezes, é assim que uma vida inteira se reorganiza.",
    ],
    practice: "Identifique algo que precisa de um novo começo. Dê hoje um passo pequeno e observável, mesmo que ainda não se sinta completamente pronto.",
    prayer: "Que eu não seja prisioneiro dos meus tropeços. Concede-me humildade para aprender e força para começar novamente.",
  },
  {
    title: "O valor do silêncio",
    theme: "Interioridade e escuta",
    quote: "No silêncio, o coração deixa de competir com o ruído.",
    reflection: [
      "O excesso de barulho não vem apenas de fora. Há pensamentos, cobranças e temores que falam ao mesmo tempo e nos afastam daquilo que é essencial.",
      "Silenciar não é fugir do mundo, mas reencontrar o centro a partir do qual podemos habitá-lo com mais verdade. É abrir espaço para que a consciência seja ouvida.",
      "Algumas respostas não chegam como explicação. Chegam como clareza, serenidade e disposição para cumprir o dever que já conhecemos.",
    ],
    practice: "Fique dez minutos sem telas, música ou conversa. Respire com calma e observe os pensamentos sem lutar contra eles. Ao final, anote apenas o que parece essencial.",
    prayer: "Aquieta em mim o que é excesso. Que o silêncio devolva clareza ao meu olhar e mansidão às minhas escolhas.",
  },
  {
    title: "Gratidão que se transforma em gesto",
    theme: "Memória e generosidade",
    quote: "A gratidão amadurece quando deixa o sentimento e alcança as mãos.",
    reflection: [
      "Agradecer é reconhecer que nenhuma vida se constrói apenas com recursos próprios. Somos também feitos do cuidado recebido, das portas abertas e das presenças que nos sustentaram.",
      "Mas a gratidão não termina na lembrança. Sua forma mais fecunda é fazer circular o bem. Aquilo que um dia nos alcançou pode, por nosso intermédio, alcançar outra pessoa.",
      "Hoje, transforme uma lembrança agradecida em ação. A vida devolve sentido ao que recebemos quando escolhemos repartir.",
    ],
    practice: "Agradeça diretamente a alguém por um bem específico que essa pessoa lhe fez. Depois, realize um gesto de generosidade sem esperar reconhecimento.",
    prayer: "Que eu não trate como comum aquilo que é dádiva. Faz da minha gratidão uma presença concreta na vida de alguém.",
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
          <p className="hero-copy">Uma pausa diária para cultivar presença, reverenciar a ancestralidade e encontrar propósito nas escolhas de cada dia.</p>
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
          <p>Estas meditações aproximam sabedoria ancestral, interioridade e responsabilidade cotidiana. Não oferecem respostas prontas: abrem espaço para uma vida mais consciente.</p>
        </div>
        <div className="pillars">
          <article><span>01</span><h3>Reconhecer as raízes</h3><p>Honrar a história, a memória e aqueles que prepararam o caminho antes de nós.</p></article>
          <article><span>02</span><h3>Habitar o presente</h3><p>Escutar a vida como ela se apresenta e responder com consciência às suas exigências.</p></article>
          <article><span>03</span><h3>Servir à comunidade</h3><p>Transformar sentido em cuidado, responsabilidade e compromisso com o bem comum.</p></article>
        </div>
      </section>

      <section className="archive" id="arquivo">
        <div className="archive-heading">
          <div><p className="eyebrow dark">ARQUIVO DE MEDITAÇÕES</p><h2>Um ano para caminhar por dentro.</h2></div>
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
