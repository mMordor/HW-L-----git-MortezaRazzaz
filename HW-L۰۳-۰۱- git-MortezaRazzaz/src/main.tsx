import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { routs } from './routs.tsx'
import CartContextProvider from './Contexts/Cart/CartProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CartContextProvider>
      <RouterProvider router={routs}/>
    </CartContextProvider>
  </StrictMode>,
)
