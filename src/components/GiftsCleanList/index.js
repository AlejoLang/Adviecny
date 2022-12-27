import GiftItem from 'components/GiftItem'
import { giftsContext } from 'context/giftsContext'
import { useContext } from 'react'
import './styles.css'

function GiftsCleanList() {

  const { giftsList } = useContext(giftsContext)

  const closeCleanList = () => {
    document.querySelector('.giftsCleanList').style.display = 'none'
  }

  return (
    <div className='giftsCleanList'>
      <h2 className='giftsCleanListTitle'>Comprar</h2>
      <ul className='giftsCleanListItems'>
        {
          giftsList.map(gift => <GiftItem itemData={gift} listedMode='true' key={giftsContext.id}/>)
        }
      </ul>
      <div className="giftsCleanListButtons">
        <button className="giftCleanListCloseBtn" onClick={closeCleanList}>Cerrar</button>
      </div>
    </div>
  )
}

export default GiftsCleanList