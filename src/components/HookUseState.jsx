import React, { useState } from 'react'

const HookUseState = () => {

    let userName = "João";

    // 1 - useState
    const [name, setName] = useState("Matheus");

    const changeNames = () => {
        userName = "João Rios"
        setName("Matheus Lima");
    }

  return (
    <div>
        {/* 1 - useState */}
        <h2>useState</h2>
        <p>variavel: {userName}</p>
        <p>useState: {name}</p>
        <button onClick={() => changeNames()}>Alterar nome</button>
    </div>
  )
}

export default HookUseState