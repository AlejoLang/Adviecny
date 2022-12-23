const { createContext, useState } = require("react");

export const giftsContext = createContext()

export function GiftsContextProvider (props) {

    const [giftsList, updateGiftsList] = useState(['asdasd', 'asdasdsa', 'asda']);

    return (
        <giftsContext.Provider value={{giftsList, updateGiftsList}}>
            {props.children}
        </giftsContext.Provider>
    )
}