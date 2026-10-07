import { BsCartPlus } from "react-icons/bs";
import { CgDetailsMore } from "react-icons/cg";
import { Link } from 'react-router-dom';
import type { Product } from "../../types";

interface prop {
  product : Product
}

function ProductCard({product}:prop) {
  return (
    <div className='relative min-w-62.5 w-62.5 h-112.5  rounded-md  m-1 shadow-2xl '>
 
          <img className='w-full h-[60%] object-cover rounded-t-md '
            src={product.image} 
            alt={product.title} 
            loading="lazy"
          />
        <div className='p-1.5'>
          <h4 className='line-clamp-2' >
            {product.title}
          </h4>
          <div className=' h-14 ' >
            <p className='text-stone-500 text-sm line-clamp-2'>
              {product.des}
            </p>
          </div>
          <div className='flex justify-between items-center' >
            <div className='m-2'>
              {product.price} $
            </div>
            <div>
              {product.category}
            </div>
          </div>
        </div>
        <div className='absolute bottom-0 h-8 flex justify-center items-center w-full rounded-b-md '>
          
            
          <Link to={`/products/${product._id}`} className="group relative w-[50%] h-full rounded-bl-md cursor-pointer overflow-hidden  flex justify-center items-center border-r text-cyan-950 hover:text-white  border-gray-400">
            <div className="absolute inset-0 pointer-events-none ring-1 ring-orange-500 z-20 "></div>
            <div className="absolute inset-0 rounded-bl-md bg-orange-500 -translate-x-full transition-transform duration-500 ease-in-out group-hover:translate-x-0 z-10"></div>
            <div className="relative z-30 transition-colors duration-200">
                <CgDetailsMore size={20} />
            </div>
          </Link>
              

            <div className="group relative w-[50%] h-full cursor-pointer overflow-hidden  flex justify-center items-center text-cyan-950 hover:text-white transition-all duration-300">
              <div className="absolute inset-0 rounded-br-md transition-all duration-500 group-hover:bg-green-500"></div>
              <div className="relative z-10  transition-all duration-300">
                <BsCartPlus size={20} />
              </div>
            </div>

        </div>
    </div>
  )
}

export default ProductCard