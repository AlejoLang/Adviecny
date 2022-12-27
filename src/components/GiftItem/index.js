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

  return (
    <li className="giftItem">
      {
        itemData.img ? <img src={itemData.img} alt={itemData.nombre} className='giftImg'/> : ''
      }
      <div className="giftMainInfo">
        <p className="giftName">{itemData.nombre} ({itemData.cant})</p>
        <p className="giftDest">{itemData.dest}</p>
      </div>
      <p className="giftPrice">
        $ {itemData.precio * itemData.cant}
      </p>
      <div className="giftButtons">
        <button className="editGiftBtn">E</button>
        <button className="deleteGiftBtn" onClick={handleItemDelete}>X</button>
      </div>
    </li>
  )
}

export default GiftItem