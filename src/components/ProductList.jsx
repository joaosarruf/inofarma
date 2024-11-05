// FAQ.jsx
import React, { useState } from 'react';

function FAQ() {
    const [expanded, setExpanded] = useState(null);

    const toggleQuestion = (index) => {
        setExpanded(expanded === index ? null : index);
    };

    const questions = [
        { question: "Posso confiar em comprar pelo site?", answer: "Sim, sua compra é 100% segura conosco!" },
        { question: "Como finalizo um pedido?", answer: "Adicione os produtos ao carrinho e siga para o checkout." },
        // Adicione mais perguntas e respostas conforme necessário
    ];

    return (
        <section className="faq-section">
            <h2>Perguntas Frequentes</h2>
            {questions.map((item, index) => (
                <div key={index}>
                    <div className="faq-question" onClick={() => toggleQuestion(index)}>
                        {item.question}
                    </div>
                    {expanded === index && <div className="faq-answer">{item.answer}</div>}
                </div>
            ))}
        </section>
    );
}

export default FAQ;
