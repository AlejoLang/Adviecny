import { useContext } from 'react'
import { giftsContext } from 'context/giftsContext'
import './styles.css'

function GiftItem({itemData}) {
  
  const {giftsList, updateGiftsList} = useContext(giftsContext)

  const handleItemDelete = () => {
    updateGiftsList(
      giftsList.filter(item => item.id !== itemData.id)
    )
  }

  const handleItemEdit = () => {
    const modal = document.querySelector('.formModal')
    const form = document.querySelector('.addGiftForm')
    modal.classList.add('editMode', itemData.id.toString())
    modal.open = true;
    form[0].value = itemData.nombre
    form[2].value = itemData.precio
    form[3].value = itemData.cant
    form[4].value = itemData.dest
    form[5].value = itemData.img
  }

  return (
    <li className="giftItem">
      {
        itemData.img ? <img src={itemData.img} alt={itemData.nombre} className='giftImg'/> : ''
      }
      <div className="giftMainInfo">
        <p className="giftName">{itemData.nombre}</p> 
        <p className='giftCant'>({itemData.cant})</p>
        <p className="giftDest">{itemData.dest}</p>
      </div>
      <p className="giftPrice">
        $ {itemData.precio * itemData.cant}
      </p>
      <div className="giftButtons">
        <button className="editGiftBtn" onClick={handleItemEdit}>E</button>
        <button className="deleteGiftBtn" onClick={handleItemDelete}>X</button>
      </div>
    </li>
  )
}

export default GiftItem