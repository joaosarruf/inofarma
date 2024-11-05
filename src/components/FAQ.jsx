// FAQ.jsx
import React, { useState } from 'react';

const faqData = [
    {
        question: "Posso confiar em comprar pelo site?",
        answer: "Sim, nosso site é seguro e protegido com certificados SSL."
    },
    {
        question: "Como finalizo um pedido?",
        answer: "Após selecionar os produtos, acesse o carrinho e siga os passos de pagamento."
    },
    // Adicionar mais perguntas conforme necessário
];

const FAQ = () => {
    const [selected, setSelected] = useState(null);

    const toggle = (index) => {
        setSelected(selected === index ? null : index);
    };

    return (
        <div className="faq-section">
            <h2>Perguntas Frequentes</h2>
            {faqData.map((item, index) => (
                <div key={index} className="faq-item">
                    <h3 onClick={() => toggle(index)}>{item.question}</h3>
                    {selected === index && <p>{item.answer}</p>}
                </div>
            ))}
        </div>
    );
};

export default FAQ;
