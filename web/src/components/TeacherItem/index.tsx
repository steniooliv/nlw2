import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars0.githubusercontent.com/u/21336806?s=460&u=e62c6c92cd990a15a2c46213bf6868f58401b685&v=4" alt="Stenio Oliveira"/>
        <div>
          <strong>Stenio Oliveira</strong>
          <span>Matemática</span>
        </div>
      </header>
      <p>
        Entusiasta das melhores tenologias de matemática avançada.
        <br/> <br/>
        Apaixonado por cálculos, expressões e soluções de problemas complexos. Já ajudou mais de 200 pessoas a resolver problemas.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="WhatsApp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
