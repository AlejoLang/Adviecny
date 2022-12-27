import GiftList from 'components/GiftsList';
import { useContext } from 'react';
import { giftsContext } from 'context/giftsContext';
import './App.css';
import GiftForm from 'components/GiftForm';
import GiftsCleanList from 'components/GiftsCleanList';

function App() {

  const {giftsList, updateGiftsList, totalPrice} = useContext(giftsContext)

  const openForm = () => {
    const dialog = document.querySelector('dialog')
    if(dialog){dialog.open = true}
  }

  const clearList = (e) => {
    e.preventDefault()
    updateGiftsList([])
  }

  const openCleanList = () => {
    document.querySelector('.giftsCleanList').style.display = 'flex';
  }

  if(giftsList === 'loading')
  {
    return (
      <div>Cargando...</div>
    )
  }

  return (
    <div className="App">
      <div className='giftsDiv'>
        <h1 className='mainTitle'>Regalos</h1>
        <button className='openFormBtn' onClick={openForm}>Agregar Regalo</button>
        <GiftList />
        <div className="giftsTotalPrice">
          <p>Total a pagar</p>
          $ {totalPrice}
        </div>
        <button className="openCleanListBtn" onClick={openCleanList}>Mostrar resumen</button>
        <button className="clearListBtn" onClick={clearList}>Borrar todo</button>
      </div>
      <GiftForm />
      <GiftsCleanList />
    </div>
  );
}

export default App;
