import GiftItem from "components/GiftItem"
import { giftsContext } from "context/giftsContext"
import { useContext } from "react"
import './styles.css'

function GiftsList() {

  const {giftsList} = useContext(giftsContext)

  if(giftsList.length === 0){
    return (
      <p className="noGiftsP">Aun no hay regalos</p>
      ) 
  }
  console.log(giftsList)

  return (
    <div className="giftsListDiv">
        <ul className="giftsList">
          {
            giftsList.map(gift => 
              <GiftItem itemData={gift} listedMode={false} key={gift.id}/>
            )
          }
        </ul>
        
    </div>
  )
}

export default GiftsList