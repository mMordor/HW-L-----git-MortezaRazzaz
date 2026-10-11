import {createContext} from 'react'
import type { Product, ProductsCart } from '../../types';


export interface CartContextType {
    cart: ProductsCart[];
    addToCart: (product: Product) => void;
    removeFromCart: (_id: number) => void;
    increaseCount: (_id: number) => void;
    totalItems: number;
    totalPrice: number;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);


