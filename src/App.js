import { useState } from "react";

export default function Planilla() {
  const [ValorM1, setValorM1] = useState(2);
  const [ValorM2, setValorM2] = useState(2);
  const [valorN, setValorN] = useState(2);
  const [Instruccion1, setInstruccion1] = useState("");
  const [Instruccion2, setInstruccion2] = useState("");
  const [Mensaje, setMensaje] = useState("");
  const [MensajeDesifrado, setMensajeDesifrado] = useState("");
  const [Respuesta1, setRespuesta1] = useState("");
  const [Respuesta2, setRespuesta2] = useState("");

  const handleClick = () => {
    let mensajeArreglado = "";
    let caracter = "";
    //console.log(caracter);

    for (let i = 0; i < Mensaje.length; i++){
      if(caracter != Mensaje[i]){
        caracter = Mensaje[i]
        mensajeArreglado = mensajeArreglado + Mensaje[i]
      }
    }
    setMensajeDesifrado(mensajeArreglado)

    MensajeDesifrado.includes(Instruccion1) ? setRespuesta1("SI") : setRespuesta1("NO")
    MensajeDesifrado.includes(Instruccion2) ? setRespuesta2("SI") : setRespuesta2("NO")

    //console.log(caracter, MensajeDesifrado);
  };

  return (
    <div>
      <h1 style={{ maxWidth: 850, margin: "30px auto"}}>Ejercicio 1</h1>
      <div style={{ maxWidth: 500, margin: "40px auto", display: "grid", gap: 12 }}>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
          <input
            type="number"
            min={2}
            max={50}
            value={ValorM1}
            onChange={(e) => setValorM1(e.target.value)}
            style={{ border: "1px solid black", padding: 8, minWidth: 0 }}
          />
          <input
            type="number"
            min={2}
            max={50}
            value={ValorM2}
            onChange={(e) => setValorM2(e.target.value)}
            style={{ border: "1px solid black", padding: 8, minWidth: 0 }}
          />
          <input
            type="number"
            min={2}
            max={5000}
            value={valorN}
            onChange={(e) => setValorN(e.target.value)}
            style={{ border: "1px solid black", padding: 8, minWidth: 0 }}
          />
        </div>
        <input
          value={Instruccion1}
          onChange={(e) => setInstruccion1(e.target.value.replace(/[^a-zA-Z0-9]/g, ''))}
          maxLength={ValorM1}
          style={{ border: "1px solid black", padding: 8 }}
        />
        <input
          value={Instruccion2}
          onChange={(e) => setInstruccion2(e.target.value.replace(/[^a-zA-Z0-9]/g, ''))}
          maxLength={ValorM2}
          style={{ border: "1px solid black", padding: 8 }}
        /> 
        <input
          value={Mensaje}
          onChange={(e) => setMensaje(e.target.value.replace(/[^a-zA-Z0-9]/g, ''))}
          maxLength={valorN}
          style={{ border: "1px solid black", padding: 8 }}
        />
        <button onClick={handleClick}>Desifrar</button>
        <div></div>
        <div> {Respuesta1 != "" ? "El mensaje contiene la instruccion 1: " + Respuesta1 : ""} </div>
        <div> {Respuesta2 != "" ? "El mensaje contiene la instruccion 2: " + Respuesta2 : ""} </div>
        
      </div>
    </div>
  );
}
