import { useContext } from "react";
import { CartContext, type CartContextType } from "../Contexts/Cart/cartContext";


export const useCart = (): CartContextType => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('Cart is undefined');
    }
    return context;
};