import { useNavigate } from "react-router-dom";
import "./MyFooter.css"

export default function MyFooter() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("https://www3.gobiernodecanarias.org/medusa/edublog/ieselrincon/");
  }

  return (
    <>
      <footer className="container-footer">
        <img src="/img/San-Cristobal-CIFP.logo_.png" alt="CIFP San Cristóbal" />
        <div>
          <h2>Contactanos</h2>
          <a href="https://www3.gobiernodecanarias.org/medusa/edublog/ieselrincon/"><span>IES El Rincón</span></a><span>: 928 22 72 83</span>
          <p></p>
          <a href="https://cifpsancristobal.org/"><span>CIFP San Cristóbal</span></a><span>: 928 33 60 83</span>
          <p></p>
          <a href="https://www.sabiosguiasinterpretes.com/"><span>Sabios Guías Intérpretes</span></a><span>: 828 70 46 83</span>
        </div>
        <img src="/img/LogoIESElRincon-transparent.png" alt="IES El Rincón" className="footer-4" />
      </footer>
    </>
  );
}