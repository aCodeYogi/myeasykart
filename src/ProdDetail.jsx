//product detail page

import React from 'react';
import { Link, useParams} from 'react-router-dom'
import allData from './DummyData'
import { IoArrowBackCircleOutline } from "react-icons/io5";

function ProdDetail(){
  const {id} = useParams()

  let product;
  let i = id;
  for(i = 0; i < allData.length; i++){
    const p = allData[i]
    if(id == p.id){
      product = p;
      break;
    }
  }



  
  return(
    <div>

      <Link to= "/"> <IoArrowBackCircleOutline className="w-8 h-8 m-2" /> </Link>
    
    <div className="md:flex-row flex flex-col text-center items-center p-2 my-5 bg-slate-400/50 m-2 rounded-md md:space-x-6">
        <div className="md:w-80 w-64 md:h-80 h-64">
          <img className="w-full h-full object-cover rounded" src={product.imgUrl}/>
        </div>
        <div className="flex flex-col md:space-y-4">
          <h2 className="text-xl text-black font-semibold font-mono">
            {product.title}
          </h2>

          <h3 className="text-lg text-black font-semibold font-sans">
            ₹ {product.price}
          </h3>

          <p className="md:font-normal text-sm font-serif italic my-2">
            {product.desc}
          </p>
          
          <div className="justify-center space-x-2 flex ">
            <input type="number" Value={1} className="border-2 border-orange-600 rounded text-center w-8"/>
            <button className="bg-rose-400 px-2 py-1 rounded border-2 border-orange-500 hover:bg-red-600 ">
              ADD TO CART
            </button>
          </div>
          
        </div>
      </div>

    </div>
  )
}

export default ProdDetail;