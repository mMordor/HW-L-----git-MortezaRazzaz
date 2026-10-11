
import { useCart } from "../../Hooks/useCart"


function Cart() {
  const cart = useCart()

  return (
    <section className="p-4">
      <h1>Cart</h1>
      <div className="flex justify-around">
        <div className="w-[59%]">
          <div className="w-full flex justify-between items-center px-5 mb-2">
            <p className="w-[30%] text-start">
              Product Info
            </p>
            <p >
              Count
            </p>
            <p >
              Fee
            </p>
            <p >
              Final Price
            </p>
            
          </div>
          <div className="w-full flex flex-col overflow-auto p-1 h-150">
            {
              cart.cart.map((p)=>(
                <div className="w-full flex justify-between items-center rounded-md shadow bg-white my-2 px-2">
                  <div className="w-[30%] flex text-start gap-2">
                    <img src={p.image} alt="" className="w-15 h-15 bg-cover rounded p-1"/>
                    <span className="w-full">
                      <p className="text-xl truncate">
                          {p.title}
                      </p>
                      <p className="text-sm truncate">
                          {p.des}
                      </p>
                    </span>
                  </div>
                  <div className="flex justify-baseline items-center gap-1">
                     <button className="w-3.75 h-3.75 p-px flex justify-center items-center bg-cyan-100 rounded cursor-pointer">
                        -
                      </button>
                    <p>count</p>
                      <button className="w-3.75 h-3.75 p-px flex justify-center items-center bg-cyan-100 rounded cursor-pointer">
                        +
                      </button>
                     
                  </div>
                  <div>
                    {p.price} $
                  </div>
                  <div>
                    {p.price * p.count} $
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <div className="w-[39%] h-100 bg-white rounded-md shadow-2xl flex flex-col justify-center items-center-safe">
          <h2>
            Info's
          </h2>
          <div className="">
            <p className="text-xl">
              Total Procuct Count : {cart.totalItems}
            </p>
            
            <p className="text-2xl font-bold">
              Total Price : {cart.totalPrice} $
            </p>
           
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cart