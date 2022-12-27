import { giftsContext } from 'context/giftsContext'
import { useContext } from 'react'
import { randomGiftsList } from 'services/randomGiftsList'
import './styles.css'

function GiftForm() {

    const {giftsList, updateGiftsList} = useContext(giftsContext)

    const handleFormSubmit = (e) => {
        e.preventDefault()

        const newGift = {
            nombre: e.target[0].value,
            precio: e.target[2].value,
            cant: e.target[3].value,
            dest: e.target[4].value ?? '',
            img: e.target[5].value ?? '',
            id: Math.random()
        }

        const classes = document.querySelector('.formModal').classList
        
        if(classes[1] === 'editMode'){
            updateGiftsList(
                giftsList.map(gift => {
                    if(gift.id == classes[2]){
                        gift = newGift
                    }
                    return gift
                })
            )
            document.querySelector('.formModal').classList.remove(classes[1], classes[2])
            document.querySelector('dialog').open = false
            e.target.reset()
            return;
        }

        updateGiftsList([...giftsList, newGift])

        document.querySelector('dialog').open = false
        e.target.reset()
    }

    const handleFormClose = (e) => {
        e.preventDefault()
        document.querySelector('dialog').open = false
        document.querySelector('.formModal').classList = 'formModal'
        document.querySelector('form').reset()
    }

    const getRandomItem = (e) => {
        e.preventDefault()

        const form = document.querySelector('.addGiftForm')

        let selectedGift = {}
        selectedGift.nombre = form[0].value

        while(selectedGift.nombre === form[0].value){
            console.log(selectedGift)
            selectedGift = randomGiftsList[Math.floor(Math.random() * randomGiftsList.length)]
        }

        form[0].value = selectedGift.nombre
        form[2].value = selectedGift.precio
        form[3].value = selectedGift.cant
        form[5].value = selectedGift.img
    }

  return (
    <dialog className='formModal'>
        <form onSubmit={handleFormSubmit} className='addGiftForm'>
            <input type="text" placeholder='Regalo' maxLength={30} required className='formInput giftNameInput'/>
            <button className="getRandomItemBtn" onClick={getRandomItem}>Sorprendeme</button>
            <input type="number" placeholder='Precio' required className='formInput giftPriceInput'/>
            <input type="number" placeholder='Cantidad' required className='formInput giftAmmInput'/>
            <input type="text" placeholder='Destinatario' className='formInput'/>
            <input type="text" placeholder='Link a imagen' className='formInput'/>
            <button onClick={handleFormClose} className='closeFormBtn'>Cerrar</button>
            <button className='addGiftBtn'>Guardar</button>
        </form>
    </dialog>
  )
}

export default GiftForm