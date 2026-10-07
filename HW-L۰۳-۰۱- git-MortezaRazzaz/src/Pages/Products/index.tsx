import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import type { Comment, Product } from "../../types"
import { CiDiscount1 } from "react-icons/ci";
import CommentCard from "../../components/CommentCard";
import ProductCard from "../../components/ProductCard";
import { tagBackground } from "../../utilitis";



function Products() {
    const id = Number(useParams().id) 
    const [fullList , setFullList] = useState<Product[]>([])
    const [comments , setComments] = useState<Comment[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(()=>{
        fetch("https://fakestoreapi.noksha.dev/api/walmartproducts")
        .then((res)=>res.json())
        .then((res)=>{
            setFullList(res.data)
            setIsLoading(false)
        }).catch(err => {
            console.log(err)
            setIsLoading(false)
        })
        fetch("https://fakestoreapi.noksha.dev/api/comments")
        .then((res)=>res.json())
        .then((res)=>{setComments(res.data)})
    },[])

    const selected : Product = fullList.find(p=>p._id === id)!
    if(isLoading){
        return(
            <div className="w-full h-screen flex justify-center items-center">
                loading...
            </div>
        )
    }
    if(!selected){
        return(
            <div className="w-full h-screen flex justify-center items-center">
                Product Not Found
            </div>
        )
    }
    
    const categoryFiltered : Product[] = fullList.filter(p => p.category === selected.category && p.title !== selected.title)
   
    
    return (
    <>
        <section className=" max-h-none md:max-h-100 flex flex-col md:flex-row justify-evenly items-center shadow-md rounded-md w-full p-3 mt-4 gap-4 md:gap-0 overflow-hidden">
           <div className="w-[70%] md:w-[40%] flex justify-center items-center overflow-hidden p-4">
                <img className=' h-full object-cover rounded-md overflow-hidden'
                src={selected.image} 
                alt={selected.title} 
                loading="lazy"
                />
            </div>
            <div className="max-w-none md:max-w-[58%] flex flex-col justify-around items-baseline p-4">
                <div className="w-full flex flex-col justify-center items-baseline gap-2 text-start">   
                    <h2>
                        {selected.title}
                    </h2>
                    <p>
                        <b>Brand:</b> {selected.brand}
                    </p>
                    <p>
                        <b>Description:</b> {selected.des}
                    </p>
                </div>
                
                <div className="w-full mt-4">
                    <div className={`text-sm text-amber-100 rounded-3xl w-fit ${tagBackground[selected.category as keyof typeof tagBackground]} px-3 py-1`}>
                        {selected.category}
                    </div>
                    <div className="flex items-center gap-1">
                        <CiDiscount1 size={28} className="mr-1"/> 
                        <p><del>{selected.oldPrice}</del></p> 
                        <h3 className="text-3xl">{selected.price}$</h3>
                    </div>
                    <div className="w-full bg-blue-400 p-1.5 rounded-md mt-3">
                        Add To Cart
                    </div>
                </div>

            </div>
            
        </section>
        <section className="max-h-100 flex flex-col  justify-center shadow-md rounded-md w-full p-3">
            <br />
            <h2>
                Comments
            </h2>
            <br />
            <div className="w-full h-80 flex overflow-auto ">
                {
                    comments.map((c)=>(
                        <CommentCard c={c}/>
                    ))
                }
                
            </div>
        </section>
        <section className=" flex flex-col justify-center shadow-md rounded-md w-full p-3">
            <br />
            <h2>
                Similar items
            </h2>
            <br />
            <div className="w-full flex justify-center-safe overflow-auto">
                {
                    categoryFiltered.map((p)=>(
                        <ProductCard product={p}/>
                    ))
                }
            </div>
        </section>
    </>
  )
}

export default Products