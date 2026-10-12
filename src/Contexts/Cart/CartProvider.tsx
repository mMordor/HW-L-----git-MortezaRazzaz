import { useEffect, useState, type ReactNode } from "react";
import type { Product, ProductsCart } from "../../types";
import { CartContext } from "./cartContext";


interface props {
    children : ReactNode | ReactNode[]
}

function CartContextProvider({children} : props) {
    const [cart, setCart] = useState<ProductsCart[]>(() => {
        const storedCart = localStorage.getItem("shopping_cart");
        return storedCart ? JSON.parse(storedCart) : [];
    });
    console.log(cart)
    useEffect(() => {
        try {
            localStorage.setItem("shopping_cart", JSON.stringify(cart));
        } catch (error) {
            console.error('Failed to save cart to localStorage:', error);
        }
    }, [cart]);
    
    const addToCart = (product: Product) => {
        setCart((prevCart) => {
            const existingIndex = prevCart.findIndex((item) => item._id === product._id);

            if (existingIndex > -1) {
                const updatedCart = [...prevCart];
                updatedCart[existingIndex] = {
                    ...updatedCart[existingIndex],
                    count: updatedCart[existingIndex].count + 1,
                };
                return updatedCart;
            } else {
                const newCartItem: ProductsCart = {
                    _id: product._id,
                    title: product.title,
                    price: product.price,
                    count: 1,
                    des: product.des,
                    image: product.image,
                };
                return [...prevCart, newCartItem];
            }
        });
    };

    const removeFromCart = (_id: number) => {
        setCart((prevCart) =>
          prevCart.map((item) =>
                item._id === _id ? { ...item, count: item.count - 1 } : item
            ).filter((item) => item.count > 0)
        );
    };

    const increaseCount = (_id: number) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item._id === _id ? { ...item, count: item.count + 1 } : item
            )
        );
    };

    const totalItems = cart.reduce((sum, item) => sum + item.count, 0);
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.count, 0);
 
    return (
    <CartContext.Provider value={{
        cart,
        addToCart,
        removeFromCart,
        increaseCount,
        totalItems,
        totalPrice
    }}>
        {
            children
        }
    </CartContext.Provider>
  )
}

export default CartContextProvider