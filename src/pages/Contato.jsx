import { Link } from "react-router-dom"
import "./Contato.css"

function Contato() {
    return (
        <article>
            <img className="image" src="src\img\mobile-marketing-animate.svg" alt="redes sociais" />
            <footer className="redes">
                
                <div className="box">
                    <Link className="Link_color" to={"https://github.com/NathanTeixeira"} target="blank">
                        <div className="icon github">
                            <ion-icon name="logo-github"></ion-icon>
                        </div>
                        <p>GitHub</p>
                    </Link>
                </div>
                

                <div className="box">
                    <Link className="Link_color" to={"https://www.linkedin.com/in/nathan-teixeira-07aa82239/"} target="blank">
                        <div className="icon linkedin">
                            <ion-icon name="logo-linkedin"></ion-icon>
                        </div>
                        <p>LinkedIn</p>
                    </Link>
                </div>

                <div className="box">
                    <Link className="Link_color" to={"https://web.whatsapp.com/send?phone=5531994039230"} target="blank">

                        <div className="icon whatsapp">
                            <ion-icon name="logo-whatsapp"></ion-icon>
                        </div>
                        <p>Whatsapp</p>
                    </Link>
                </div>
            </footer>
        </article>
    )
}

export default Contato