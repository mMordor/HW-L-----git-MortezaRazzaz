import { Outlet, ScrollRestoration } from "react-router-dom"

function Layout() {
  return (
    <>
     

        <Outlet/>
        <ScrollRestoration/>
    </>
  )
}

export default Layout