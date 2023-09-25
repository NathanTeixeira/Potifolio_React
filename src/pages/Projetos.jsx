import "./Projetos.css";

function Projetos() {
  return (
    <main>
        <article className="languages-logo">
            <h1>Meus projetos</h1>
            <img className="img" src="src\img\Construction worker-rafiki.svg" alt="trabalhadores de construção" />
        </article>

        <aside>
            <h3>WireFrame</h3>
            <p> O desafio final do traninee que eu fiz na commit jr que foi fazer um site em react usando a api do tmdb</p>
            
            <h3>Blog de programação</h3>
            <p>Este blog é feito para desenvolvedores que querem compartilhar seus conhecimentos e experiências com outros desenvolvedores. O blog pode incluir artigos, tutoriais, dicas, etc.</p>
            
            <h3>Jogo web</h3>
            <p>Um pequeno jogo feita para navegadores utilizando o basico de programação web.</p>
        </aside>
    </main>
  )
}

export default Projetos