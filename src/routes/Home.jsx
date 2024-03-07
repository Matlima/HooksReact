// 3 - alterando valor do contexto
// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext";

import HookUseState from "../components/HookUseState";
import HookUseReducer from "../components/HookUseReducer"


const Home = () => {


  return (
    <div>
      <h1>Home</h1>
      <HookUseState />
      <HookUseReducer />
    </div>
  );
}

export default Home