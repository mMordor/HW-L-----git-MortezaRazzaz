import { NavLink, Outlet, ScrollRestoration } from "react-router-dom"
import { BsFillCartFill } from "react-icons/bs";
import { IoHome } from "react-icons/io5";
import { useCart } from "./Hooks/useCart";

function Layout() {
  const cart = useCart()
  
  return (
    <>
        <nav className="sticky top-0 left-0 h-13.75 w-full flex justify-around items-center bg-cyan-50 shadow p-3">
          <h2>Shop</h2>
          <div className="w-62.5 flex justify-around items-center ">
            <NavLink to={"/"} className={({isActive}) => isActive ? "flex items-center gap-1 underline" : "flex items-center gap-1" }>
              <IoHome/>  Home
            </NavLink>
            <NavLink to={"cart"} className={({isActive}) => isActive ? "flex items-center gap-1 underline" : "flex items-center gap-1" }>
                <span className="flex justify-start items-center mr-7">
                  <BsFillCartFill size={20} className="absolute " />
                  <span className="absolute text-sm w-4 h-4 mt-2 ml-3 rounded-full bg-green-300 flex justify-center items-center">
                    {cart.totalItems}
                  </span>
                  
                </span>
                 Cart
            </NavLink>
          </div>
        </nav>
        <Outlet/>
        <ScrollRestoration/>
    </>
  )
}

export default Layout