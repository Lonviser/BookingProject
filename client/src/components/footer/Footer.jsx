import "./footer.css";
import Translate from "../translate/Translate"; 
const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContent">
      <Translate/>

      <div className="fText">Все права защищены © 2023 ByWeekend</div>
      </div>
    </div>
  );
};

export default Footer;
