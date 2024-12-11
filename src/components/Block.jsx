import { useState } from 'react'
import "../styles/main.scss"


function Block ({ title, tech, icone, text1, text2 }) {

  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

    return (
      <div className={`services__block ${isActive ? 'active' : ''}`}
      onClick={toggleActive}>
        <div className="services__block--icone">{icone}</div>
        <h3 className="services__block--title">{title}</h3>
        <h4 className="services__block--texth4">{tech}</h4>
        <p className="services__block--text">{text1}</p>
        <p className="services__block--text--B">-</p>
        <p className="services__block--text--B">{text2}</p>
      </div>
    );
  };
  
  export default Block;
