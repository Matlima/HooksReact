import { useEffect, useState } from "react";

const HookUseEffect = () => {

    // 1 - useEffect sem dependecias
    useEffect(() => {
        console.log("Estou sendo executado");
    });

    const [number, setNumber] = useState(1);

    const changeSomething = () => {
        setNumber(number + 1);
    };

    // 2 - useEffect com array de dependencia vazio
    useEffect(() => {
        console.log("Serei executado apenas uma vez.");
    }, []);

    // 3 - useEffect com arrey de dependencia com valores
    const [anotherNumber, setAnotherNumber] = useState(0);

    useEffect(() => {
        if(anotherNumber > 0) {
            console.log("Sou executado penas quando mudar onotherNumber");
        }
    }, [anotherNumber]);

  return (
    <div>
        <h2>UseEffect</h2>
        <p>Number: {number}</p>
        <button onClick={changeSomething}>Executor</button>
        <p>Another Number: {anotherNumber}</p>
        <button onClick={() => setAnotherNumber(anotherNumber + 1)}>Mudar o another</button>
    </div>
  )
}

export default HookUseEffect