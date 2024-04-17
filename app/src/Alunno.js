import { useState } from 'react';

export default function Alunno({ alunno, caricaAlunni }){

    const [eliminazione, setEliminazione] = useState(false);
    const [inConferma, setInConferma] = useState(false);

    async function eliminaAlunno(){
        setEliminazione(true);
        const response = await fetch(`http://localhost:8080/alunni/${alunno.id}`, {method: "DELETE"});
        caricaAlunni();
        setEliminazione(false);
    }

    return(
        <div>
            {
                eliminazione
                ?
                <span> Loading...</span>
                :
                <div>
                    Sono l'alunno : {alunno.id} {alunno.nome} {alunno.cognome}
                    
                    {
                        inConferma
                        ?
                            <span>----Sei sicuro? 
                                <button onClick={eliminaAlunno}>SI</button>
                                <button onClick={setInConferma(false)}>NO</button>
                            </span>
                        :
                        <button onClick={setInConferma(true)}>
                            Elimina
                        </button>
                    }
                </div>
            }
        </div>
    )
}