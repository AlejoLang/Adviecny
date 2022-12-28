import GiftList from 'components/GiftsList';
import { useContext, useEffect, useState } from 'react';
import { giftsContext } from 'context/giftsContext';
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa'
import './App.css';
import GiftForm from 'components/GiftForm';
import GiftsCleanList from 'components/GiftsCleanList';

function App() {

  const {giftsList, updateGiftsList, totalPrice} = useContext(giftsContext)

  const [isAudioPlaying, updateAudioStatus] = useState(false)

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

  const toggleAudio = (e) => {
    const toggleAudioBtn = document.querySelector('.toggleAudioBtn')
    const audio = document.querySelector('.musicaNavidadAudio')
    console.log(toggleAudioBtn.value)
    if(toggleAudioBtn.value == 'false'){
      audio.play()
      updateAudioStatus(true)
      console.log('a')
    } else {
      audio.pause()
      updateAudioStatus(false)
      console.log('toggleAudi')
    }
    toggleAudioBtn.value = (!audio.paused)
  }

  if(giftsList === 'loading')
  {
    return (
      <div>Cargando...</div>
    )
  }

  return (
    <div className="App">
      <audio src="./media/sounds/musicaNavidad.mp3" className='musicaNavidadAudio'></audio>
      <div className='giftsDiv'>
        <header>  
          <h1 className='mainTitle'>Regalos</h1>
          <button className='toggleAudioBtn' value='false' onClick={toggleAudio}>
            {isAudioPlaying ? <FaVolumeUp /> :  <FaVolumeMute />}
          </button>
        </header>
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
