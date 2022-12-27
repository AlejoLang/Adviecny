const { createContext, useState, useEffect } = require("react");

export const giftsContext = createContext()

export function GiftsContextProvider (props) {

    const [giftsList, updateGiftsList] = useState(JSON.parse(localStorage.getItem('giftsList')) || []);

    /*
    const [giftsList, updateGiftsList] = useState('loading')
    useEffect(() => {
        api.gifts.list().then(gifts => updateGiftsList(gifts))
    },[])
    */ 

    const [totalPrice, updateTotalPrice] = useState(0);

    useEffect(() => {
        updateTotalPrice(
            giftsList.reduce((a, b) => a + (b.precio * b.cant), 0)
        )
        localStorage.setItem('giftsList', JSON.stringify(giftsList))
    }, [giftsList])

    return (
        <giftsContext.Provider value={{giftsList, updateGiftsList, totalPrice, updateTotalPrice}}>
            {props.children}
        </giftsContext.Provider>
    )
}