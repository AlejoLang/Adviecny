import { useContext } from 'react'
import { giftsContext } from 'context/giftsContext'
import './styles.css'

function GiftItem({itemData}) {
  console.log(itemData)
  return (
    <li className="giftItem">
      <img src={itemData.img} alt={itemData.nombre} className='giftImg'/>
      <div className="giftMainInfo">
        <p className="giftName">{itemData.nombre} ({itemData.cant})</p>
        <p className="giftDest">{itemData.dest}</p>
      </div>
      <p className="giftPrice">
        {itemData.precio * itemData.cant}
      </p>
      <button className="editGiftBtn">E</button>
      <button className="deleteGiftBtn">X</button>
    </li>
  )
}

export default GiftItem