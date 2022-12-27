import { giftsContext } from 'context/giftsContext'
import { useContext } from 'react'
import './styles.css'

function GiftForm() {

    const {giftsList, updateGiftsList} = useContext(giftsContext)

    const handleFormSubmit = (e) => {
        e.preventDefault()

        const newGift = {
            nombre: e.target[0].value,
            precio: e.target[1].value,
            dest: e.target[2].value ?? '',
            img: e.target[3].value ?? '',
            cant: e.target[4].value,
            id: Math.random()
        }

        updateGiftsList([...giftsList, newGift])

        document.querySelector('dialog').open = false
        e.target.reset()
    }

    const handleFormClose = (e) => {
        e.preventDefault()
        document.querySelector('dialog').open = false
        document.querySelector('form').reset()
    }

  return (
    <dialog className='formModal'>
        <form onSubmit={handleFormSubmit} className='addGiftForm'>
            <input type="text" placeholder='Regalo' required className='formInput giftNameInput'/>
            <input type="number" placeholder='Precio' required className='formInput giftPriceInput'/>
            <input type="text" placeholder='Destinatario' className='formInput'/>
            <input type="text" placeholder='Link a imagen' className='formInput'/>
            <input type="number" placeholder='Cantidad' required className='formInput'/>
            <button onClick={handleFormClose} className='closeFormBtn'>Cerrar</button>
            <button className='addGiftBtn'>Guardar</button>
        </form>
    </dialog>
  )
}

export default GiftForm