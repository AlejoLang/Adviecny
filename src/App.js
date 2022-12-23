import GiftList from 'components/GiftsList';
import { useContext } from 'react';
import { giftsContext } from 'context/giftsContext';
import './App.css';

function App() {

  const {updateGiftsList} = useContext(giftsContext)

  const clearList = () => {
    updateGiftsList([])
  }

  return (
    <div className="App">
      <div className='giftsDiv'> 
        <h1 className='mainTitle'>Regalos</h1>
        <button className='openFormBtn'>Agregar Regalo</button>
        <GiftList />
        <button className="clearListBtn" onClick={clearList}>Borrar todo</button>
      </div>
    </div>
  );
}

export default App;
