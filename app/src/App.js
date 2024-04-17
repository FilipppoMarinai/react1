import Alunno from './Alunno';
import './App.css';
import { useState, useEffect } from 'react';

function App() {

  useEffect(() => {
    caricaAlunni();
  }, []);

  const [alunni, setAlunni] = useState([]);
  const [loading, setLoading] = useState(true);

  async function caricaAlunni(){
    const response = await fetch("http://localhost:8080/alunni", {method: "GET"});
    const nuovoArray = await response.json();
    setAlunni(nuovoArray);
    setLoading(false);
  }

  return (
    <div>
      {
        loading
        ?
        <div>Loading...</div>
        :
        alunni.map(a => {
          <Alunno key={a.id} alunno={a} caricaAlunni={caricaAlunni} />
        })
      }
    </div>
  );
}

export default App;
