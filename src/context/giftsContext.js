const { createContext, useState, useEffect } = require("react");

export const giftsContext = createContext()

export function GiftsContextProvider (props) {

    const [giftsList, updateGiftsList] = useState([]);

    const [totalPrice, updateTotalPrice] = useState(0);

    useEffect(() => {
        updateTotalPrice(
            giftsList.reduce((a, b) => a + (b.precio * b.cant), 0)
        )
    }, [giftsList])

    return (
        <giftsContext.Provider value={{giftsList, updateGiftsList, totalPrice, updateTotalPrice}}>
            {props.children}
        </giftsContext.Provider>
    )
}