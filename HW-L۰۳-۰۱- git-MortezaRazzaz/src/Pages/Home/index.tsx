import { useEffect, useMemo, useState, type ChangeEvent } from 'react'
import SearchComponent from '../../components/SearchComponent';
import PriceFilterDropdown from '../../components/PriceFilterDropdown';
import ProductCard from '../../components/ProductCard';
import type { Product } from '../../types';



function Home() {
  const [isloading, setIsLoading] = useState<boolean>(true)
  const [isFetchedErr, setIsFetchedErr] = useState<boolean>(false)
  const [products, setProducts] = useState<Product[]>([])
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState<number[]>([0, 1500]);
  const [selected_categoriy, setSelectedCategoriy] = useState('All');

  const filteredProducts = useMemo(() => {
    let result = products;

    if(selected_categoriy === "All"){
      result = products;
    }else{
      result = result.filter((p)=> p.category === selected_categoriy)
    }

    if (searchQuery.trim()) {
      result = result.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase().trim())
      );
    }

    if(priceRange && priceRange.length == 2){
      result = result.filter((p)=> priceRange[0] <= p.price && p.price <= priceRange[1])
    }
    
    return result

  }, [products, searchQuery, priceRange,selected_categoriy]);

  useEffect(()=>{
    fetch("https://fakestoreapi.noksha.dev/api/walmartproducts")
    .then((res) => res.json())
    .then((res) => {
      setProducts(res.data || res)
      setIsLoading(false)
      setIsFetchedErr(false)
    }).catch(err => {
      console.log(err)
      setIsLoading(false)
      setIsFetchedErr(true)
    })
  },[])
  if(isloading){
    return(
      <div className='w-full h-screen flex justify-center items-center'>
        Loading...
      </div>
    )
  }
  else if(!isloading && isFetchedErr){
    return(
      <div className='w-full h-screen flex justify-center items-center'>
        Chek Your Conection Or Mabye Must Use VPN
      </div>
    )
  }else{
    return (
        <>
          <div className='sticky top-0 z-50 w-full h-12.5 flex justify-around items-center px-3 mt-5'>
            <SearchComponent onSearchChange={(query: string) => setSearchQuery(query)}/>
            <PriceFilterDropdown  
              priceRange={priceRange} 
              selected_categoriy={selected_categoriy}
              handleSliderChange={
                (_event: Event, newValue: number | number[]) => {
                    setPriceRange(newValue as number[]);
                  }
              }
              handleRedioChange={
                (event: ChangeEvent<HTMLInputElement, Element>) => {
                  setSelectedCategoriy((event.target as HTMLInputElement).value)
                }
              }
            />
          </div>

          <div className='flex flex-wrap justify-center m-4'>
            {filteredProducts.map((p)=>(
              <ProductCard product={p} key={p._id}/>
            ))}
          </div>
        </>
    )
  }
 
}

export default Home
