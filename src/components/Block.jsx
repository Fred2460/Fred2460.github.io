import { useState } from 'react'
import "../styles/main.scss"


function Block ({ title, tech, icone, text1, text2 }) {

  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

    return (
      <div className={`services__block ${isActive ? 'active' : ''}`}
      onClick={toggleActive} role="article">
        <div className="services__block--icone">{icone}</div>
        <h3 className="services__block--title" aria-labelledby="service-title">{title}</h3>
        <h4 className="services__block--texth4">{tech}</h4>
        <p className="services__block--text" aria-describedby="service-description">{text1}</p>
        <p className="services__block--text--B">-</p>
        <p className="services__block--text--B">{text2}</p>
      </div>
       
       
      
    );
  };
  
  export default Block;
