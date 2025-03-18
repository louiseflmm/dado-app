import React, {useState} from "react";
import Dado  from "./components/Dado/Dado";
 
function App() {
  const [rodada, setRodada] = useState(1);
  const [pontosJogador1, setPontosJogador1] = useState(0);
  const [pontosJogador2, setPontosJogador2] = useState(0);
  const [dadoJogador1, setDadoJogador1] = useState(1);
  const [dadoJogador2, setDadoJogador2] = useState(1);
  const [mensagem, setMensagem] = useState("Clique em 'Jogar' para começar!");
 
  const jogarRodada = () =>{
    if(rodada > 5) return;
 
    const novoDado1 = Math.floor(Math.random()* 6) + 1;
    const novoDado2 = Math.floor(Math.random()* 6) + 1;
 
    setDadoJogador1(novoDado1);
    setDadoJogador2(novoDado2);
 
    if(novoDado1 > novoDado2) {
      setPontosJogador1(pontosJogador1 + 1);
      setMensagem("Jogador 1 venceu a rodada!");
    } else if(novoDado2 > novoDado1){
      setPontosJogador2(pontosJogador2 + 1);
      setMensagem("Jogador 2 venceu a rodada!");
    } else{
      setMensagem("Empate!");
    }
 
    setRodada(rodada +1);
  };
 
  const reiniciarJogo = () =>{
    setRodada(1);
    setPontosJogador1(0);
    setPontosJogador2(0);
    setDadoJogador1(1);
    setDadoJogador2(1);
    setMensagem("Clique em 'Jogar' para começar!");
  };
 
  return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
          <h1>Jogo de Dados</h1>
          <h2>Rodada {rodada > 5 ? "Finalizada" : rodada} de 5</h2>
 
          <div style={{ display: "flex", justifyContent: "center", gap: "50px", marginTop: "20px" }}>
              <div>
                  <h3>Jogador 1</h3>
                  <Dado valor={dadoJogador1} />
                  <p>Pontos: {pontosJogador1}</p>
              </div>
 
              <div>
                  <h3>Jogador 2</h3>
                  <Dado valor={dadoJogador2} />
                  <p>Pontos: {pontosJogador2}</p>
              </div>
          </div>
 
          <h2>{mensagem}</h2>
 
          {rodada <= 5 ? (
              <button onClick={jogarRodada} style={{ padding: "10px", fontSize: "16px", marginTop: "20px" }}>
                  Jogar
              </button>
          ) : (
              <button onClick={reiniciarJogo} style={{ padding: "10px", fontSize: "16px", marginTop: "20px" }}>
                  Reiniciar Jogo
              </button>
          )}
      </div>
  );
}
 
export default App;
 