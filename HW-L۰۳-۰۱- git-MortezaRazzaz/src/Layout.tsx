import { NavLink, Outlet, ScrollRestoration } from "react-router-dom"
import { BsFillCartFill } from "react-icons/bs";
import { IoHome } from "react-icons/io5";

function Layout() {
  return (
    <>
        <nav className="sticky top-0 left-0 h-[55px] w-full flex justify-around items-center bg-cyan-50 shadow p-3">
          <h2>Shop</h2>
          <div className="w-[250px] flex justify-around items-center ">
            <NavLink to={"/"} className={({isActive}) => isActive ? "flex items-center gap-1 underline" : "flex items-center gap-1" }>
              <IoHome/>  Home
            </NavLink>
            <NavLink to={"cart"} className={({isActive}) => isActive ? "flex items-center gap-1 underline" : "flex items-center gap-1" }>
                <BsFillCartFill/> Cart
            </NavLink>
          </div>
        </nav>
        <Outlet/>
        <ScrollRestoration/>
    </>
  )
}

export default Layout