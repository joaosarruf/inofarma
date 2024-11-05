import React from 'react';
import '../Categories.css';

const Categories = () => (
    <section className="categorias">
        <div className="categoria">
            <img src="/images/categorias/medicamentos.jpg" alt="Medicamentos" />
            <p>Medicamentos</p>
        </div>
        <div className="categoria">
            <img src="/images/categorias/suplementos.jpg" alt="Suplementos" />
            <p>Suplementos</p>
        </div>
        <div className="categoria">
            <img src="/images/categorias/vitaminas.jpg" alt="Vitaminas" />
            <p>Vitaminas</p>
        </div>
        <div className="categoria">
            <img src="/images/categorias/Beleza.jpg" alt="Beleza" />
            <p>Beleza e Higiene</p>
        </div>
        <div className="categoria">
            <img src="/images/categorias/infantil.jpg" alt="Infantil" />
            <p>Infantil</p>
        </div>
        <div className="categoria">
            <img src="/images/categorias/CuidadosPessoais.jpg" alt="CuidadosPessoais" />
            <p>Cuidados Pessoais</p>
        </div>
        <div className="categoria">
            <img src="/images/categorias/equipamentos.jpg" alt="Equipamentos" />
            <p>Equipamentos</p>
        </div>
        <div className="categoria">
            <img src="/images/categorias/SaúdeBemEstar.jpg" alt="SaúdeBemEstar" />
            <p>Saúde e Bem-Estar</p>
        </div>
    </section>
);

export default Categories;
