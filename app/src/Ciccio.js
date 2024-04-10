import "./Ciccio.css";
import { useState } from "react";

function Ciccio({nome, cognome}){
    const [contatore, setContatore] = useState(0);

    function gestisciContatore(){
        setContatore(contatore + 1);
    }

    return(
        <div className="rosso">
            Ciao a tutti sono {nome} {cognome}
            <button onClick={gestisciContatore}>{contatore}</button>
        </div>
    )
}

export default Ciccio;