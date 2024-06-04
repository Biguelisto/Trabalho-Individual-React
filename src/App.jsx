import { useEffect, useState } from "react";
import "./App.css";
import StarPlusLogo from "./assets/Star_logo.svg.png";
import StarPlusLogo2 from "./assets/Star_logo2.svg.png";

function App (){

  const [email, setEmail] = useState('');
  const [buttonClicked, setButtonClicked] = useState(false);

  useEffect(() => {
    if (buttonClicked) {
      const loginValido = "fulano@email.com";
      setButtonClicked(false);
      if(email == loginValido) {
      alert(`Email: ${email}`);
      }else {
        alert("Email inválido!")
      }
    }
  }, [buttonClicked, email]);

  const emailInput = (event) => {
    setEmail(event.target.value);
  };

  const buttonClick = () => {
    setButtonClicked(true);
  };

return (
  <>
    <body>
      <div className="logo">
        <div className="logoprincipal">
          <img
            className="imggrande"
            src={StarPlusLogo}
            alt="Logo da StarPlus"
          />
        </div>
      </div>
      <div className="container">
        <div className="container2">
          <div className="containerlogin">
            <div className="title">
              <h3>Use o seu e-mail para entrar</h3>
            </div>
            <div className="spacetitlemail">
              <span>
                <input onChange={emailInput} value={email}
                  type="email"
                  placeholder="E-mail"
                  name="email"
                  required
                />
              </span>
              <div className="botaocontinuar">
                <button onClick={buttonClick} className="continue-buton">CONTINUAR</button>
              </div>
              <div className="assine">
                <div className="naotemstar">
                  <h5>Não tem Star+? Assine</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footerdiv">
        <footer className="footercontainer">
          <div className="logofooter">
            <img
              className="imgfooter"
              src={StarPlusLogo2}
              alt="Logo da StarPlus Pequena"
            />
          </div>
        </footer>
      </div>
    </body>
  </>
);
}

export default App;