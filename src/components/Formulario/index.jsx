import { useState, useEffect } from "react";

const Formulario = () => {
    let [materiaA, setMateriaA] = useState(0); 
    let [materiaB, setMateriaB] = useState(0);
    let [materiaC, setMateriaC] = useState(0);
    let [nome, setNome] = useState('');

    useEffect(() => {
        console.log("O componente iniciou");

        return () => {
            console.log("O componente finalizou");
        }
    }, []);

    useEffect(() => {
        console.log("O estado nome mudou");
    }, [nome]);

    useEffect(() => {
        console.log("Materia A mudou para: " + materiaA);
    }, [materiaA, materiaB, materiaC]);

    const alteraNome = (evento) => {
        
        // setNome(evento.target.value);
        setNome(estadoAnterior => {
            return evento.target.value;
        })
    }

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        if (media >= 7) {
            return (
                <p>{nome} foi aprovado!</p>
            )
        } else {
            return (
                <p>{nome} foi reprovado!</p>
            )
        }
    }

    return (
        <form>
            <ul>
                {[1, 2, 3, 4, 5].map(item => (
                    <li key={item}>{item}</li>
                    ))}
            </ul>

            <input type="text" placeholder="Nome" onChange={alteraNome} />
            <input type="number" placeholder="Nota Matéria A" onChange={evento => setMateriaA(parseFloat(evento.target.value))} />
            <input type="number" placeholder="Nota Matéria B" onChange={evento => setMateriaB(parseFloat(evento.target.value))} />
            <input type="number" placeholder="Nota Matéria C" onChange={evento => setMateriaC(parseFloat(evento.target.value))} />
            {renderizaResultado()}
        </form>
    )
}

export default Formulario;