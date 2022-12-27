import { useContext } from 'react'
import { giftsContext } from 'context/giftsContext'
import './styles.css'

function GiftItem({itemData, listedMode}) {

  
  const {giftsList, updateGiftsList} = useContext(giftsContext)

  const handleItemDelete = () => {
    updateGiftsList(
      giftsList.filter(item => item.id !== itemData.id)
    )
  }

  const handleItemEdit = (e) => {
    const form = document.querySelector('.addGiftForm')
    const modal = document.querySelector('.formModal')
    if(e.target.value !== 'dup'){
      modal.classList.add('editMode', itemData.id.toString())
    }
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
        itemData?.img ? <img src={itemData.img} alt={itemData.nombre} className='giftImg'/> : ''
      }
      <div className="giftMainInfo">
        <p className="giftName">{itemData?.nombre}</p> 
        {itemData?.cant > 1 ? <p className='giftCant'>({itemData?.cant})</p> : ''}
        <p className="giftDest">{itemData?.dest}</p>
      </div>
      <p className="giftPrice">
        $ {itemData?.precio * itemData?.cant}
      </p>
      <div className="giftButtons" style={listedMode ? {display: 'none'} : {}}>
        <button className="editGiftBtn" value='dup' onClick={handleItemEdit}>D</button>
        <button className="editGiftBtn" value='edit' onClick={handleItemEdit}>E</button>
        <button className="deleteGiftBtn" onClick={handleItemDelete}>X</button>
      </div>
    </li>
  )
}

export default GiftItem