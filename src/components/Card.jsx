import React from 'react'

const Card = ({data}) => {

    const readMore = (url) =>{
        window.open(url);
    }
  
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-4'>
           {
            data?.map((currItem,index)=>{
                console.log(currItem)
                return(
                    <div className='flex flex-col items-center w-full border border-gray-400 hover:border-gray-600 p-2 rounded-sm'>
                       <img className='md:h-[240px] h-[190px] w-[100%] rounded-sm' src={currItem.image}/>
                       <div className='flex flex-col items-start gap-4 p-2'>
                          <a className='text-xl text-gray-800 cursor-pointer hover:underline'  onClick={()=>readMore(currItem.url)}>{currItem.title}</a>
                          <p className='text-gray-600'>{currItem.description}</p>
                          <button onClick={()=>readMore(currItem.url)} className='bg-blue-400 cursor-pointer text-xl text-white rounded-sm px-3 py-2'>Read More</button>
                       </div>
                    </div>
                )
            })
           }
    </div>
  )
}

export default Card
