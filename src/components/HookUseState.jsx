import React, { useState } from 'react'

const HookUseState = () => {

    let userName = "João";

    // 1 - useState
    const [name, setName] = useState("Matheus");

    const changeNames = () => {
        userName = "João Rios"
        setName("Matheus Lima");
    }

    // 2 0 useState e input
    const [age, setAge] = useState(18);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(age);
    }

  return (
    <div>
        {/* 1 - useState */}
        <h2>useState</h2>
        <p>variavel: {userName}</p>
        <p>useState: {name}</p>
        <button onClick={() => changeNames()}>Alterar nome</button>

        {/* 2 - useState e input */}
        <form onSubmit={handleSubmit}>
            <input type="text" value={age} onChange={(e) => setAge(e.target.value)}/>
            <input type="submit" value="Enviar" />
        </form>
        <p>Você tem {age} anos.</p>
        <hr />

    </div>
  )
}

export default HookUseState