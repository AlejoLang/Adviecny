import GiftItem from 'components/GiftItem'
import { giftsContext } from 'context/giftsContext'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import { useContext } from 'react'
import './styles.css'

function GiftsCleanList() {

  const { giftsList } = useContext(giftsContext)

  const closeCleanList = () => {
    document.querySelector('.giftsCleanList').style.display = 'none'
  }

  const generatePDF = () => {
    const giftsList = document.querySelector('.giftsCleanListItems')

    html2canvas(giftsList, {useCORS: true})
      .then(canv => {
        const imgData = canv.toDataURL('image/png')
        const pdf = new jsPDF()
        pdf.addImage(imgData, 'PNG', 0, 0)
        pdf.save('Lista.pdf')
    })
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
        <button className="giftCleanListCloseBtn" onClick={generatePDF}>Exportar PDF</button>
      </div>
    </div>
  )
}

export default GiftsCleanList