import GiftItem from "components/GiftItem"
import { giftsContext } from "context/giftsContext"
import { useContext } from "react"

function GiftsList() {

  const {giftsList, updateGiftsList} = useContext(giftsContext)

  const clearList = () => {
    updateGiftsList([])
  }

  return (
    <div className="giftsList">
        <ul>
          {
            giftsList.map(gift => 
              <GiftItem itemData={gift} />
            )
          }
        </ul>
        <button className="clearListBtn" onClick={clearList}>Borrar todo</button>
    </div>
  )
}

export default GiftsList