import React from "react";
const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: () => {},
    removeItem: (id) => {},
    removeWholeItem: (id) => {},
    clearCart: () => {},
    addToLocalStorage: () => {},
});
export default CartContext;
