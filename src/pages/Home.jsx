import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <main>        
        <aside className="apresentacao">
            <h2 className="h2_color">Olá, eu sou o Nathan!</h2>
            <h3>
                Estudante de graduação em Engenharia da Computação, <br /> e esse é o meu portifólio.
            </h3>

        </aside>
        <article>
            <img className="foto" src="src\img\firmware-animate.svg" alt="programming" />
            <footer className="foot">

                <div className="box">
                    <Link className="Link_color" to={"https://github.com/NathanTeixeira"} target="blank">
                        <div className= "icon github">
                            <ion-icon name="logo-github"></ion-icon>
                        </div>
                        <p>GitHub</p>
                    </Link>
                </div>

                <div className= "box">
                    <Link className="Link_color" to={"https://www.linkedin.com/in/nathan-teixeira-07aa82239/"} target="blank">
                        <div className= "icon linkedin">
                            <ion-icon name="logo-linkedin"></ion-icon>
                        </div>
                        <p>LinkedIn</p>
                    </Link>
                </div>

            </footer>
        </article>

    </main>
  )
}

export default Home