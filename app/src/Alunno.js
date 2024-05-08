import {useState} from 'react';

export default function Alunno({alunno, gestisciClick}){

    const [inConferma, setInConferma] = useState(false);
    const [eliminazione, setEliminazione] = useState(false);
    const [aggiorna, setAggiorna] = useState(false);
    const [inAggiornamento, setInAggiornamento] = useState(false);
    const [nome, setNome] = useState(alunno.nome);
    const [cognome, setCognome] = useState(alunno.cognome);

    async function eliminaAlunno(){
        setEliminazione(true);
        const response = await fetch(`http://localhost:8080/alunni/${alunno.id}`, {method: "DELETE"});
        setEliminazione(true);
        gestisciClick();
    }

    function richiedeConferma(){
        setInConferma(true);
    }
    function annullaConferma(){
        setInConferma(false);
    }

    function aggiornamento(){
        setInAggiornamento(true);
    }

    return(
        <tr>
            <td>{alunno.id}</td>
        
            {inAggiornamento ?
                <>
                <td>{alunno.nome}</td>
                <td>{alunno.cognome}</td>
                </>
                :
                <>
                <td>
                    <input type='text' value={nome} onInput={(e) => setNome(e.target.value)}/>
                    <input type='text' value={cognome} onInput={(e) => setCognome(e.target.value)}/>
                </td>
                <td>{alunno.cognome}</td>
                </>
            }

            <td>
            {eliminazione ?
                <span> - Eliminazione in corso...</span>
            :
            (
                inConferma ?
                    <> - sei sicuro?
                        <button onClick={eliminaAlunno}>Si</button>
                        <button onClick={annullaConferma}>No</button>
                    </>
                :
                    <button onClick={richiedeConferma}>
                        Elimina
                    </button>

            )    
            }
            </td>
            
            <td>
            {aggiorna ?
                <span> - Aggiornamento in corso...</span>
            :
            <button onClick={aggiornamento}>
                Aggiorna
            </button>   
            }
            </td>

        </tr>
    )
}