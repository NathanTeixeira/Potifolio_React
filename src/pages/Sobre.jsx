import "./Sobre.css";

function Sobre() {
  return (
    <main>
        <article className="languages-logo">
            <h1>Linguagens <br></br> Conhecidas</h1>
            <img className="imagem" src="src\img\CSS3_and_HTML5_logos_and_wordmarks.svg" alt="logos da linguas de programação" />
            <img className="imagem" src="src\img\java-logo-1.png" alt="logos da linguas de programação" />
        </article>

        <aside>
            <h2>Sobre mim</h2>
            <p> Meu nome é Nathan Teixeira Alves, tenho 21 anos moro eu Coronel Fabriciano MG gosto de jogar e ler.</p>
            
            <h3>Formação Acadêmica</h3>
            <p>Estou cursando Engenharia da Computação no CEFET-MG.</p>
            
            <h3>Experiências Profissionais</h3>
            <p>Atualmente trabalho na Commit Jr, empresa júnior do CEFET-MG, na diretoria de gestão e gente como gerente de gestão e na diretoria de Projetos.</p>
        </aside>
    </main>
  )
}

export default Sobre