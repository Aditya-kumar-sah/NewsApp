import React, { useState } from 'react'
import Card from './Card'

const Newsapp = () => {
    const apikey = import.meta.env.VITE_API_KEY;

    const [articles,setArticles] = useState("india");
    const [newsData,setNewsData] = useState(null);

    const getData = async () =>{
           const response = await fetch(`https://gnews.io/api/v4/search?q=${articles}&lang=en&country=in&apikey=${apikey}`);
           const jsonData = await response.json();
           setNewsData(jsonData.articles);
    }

    const getInput = (e) =>{
        setArticles(e.target.value);
    }
    

  return (
    <div className='flex flex-col items-center h-full w-auto '>
        <nav className='w-full h-auto flex flex-col md:flex-row items-center gap-4 md:justify-around px-6 py-4 bg-green-200'>
            <div className='text-3xl'>
                <h1>Trend Waves</h1>
            </div>
            <ul className='flex items-center gap-2 text-xl text-gray-500'>
                <a>All News</a>
                <a>Trending</a>
            </ul>
            <div className='flex flex-col sm:flex-row items-center gap-2'>
                <input className='border border-gray-500 px-3 py-2 rounded-md outline-none text-gray-600' onChange={(e)=>setArticles(e.target.value)} value={articles} type='text' placeholder='Search News'/>
                <button onClick={getData} className='bg-blue-400 px-3 py-2 text-xl text-white cursor-pointer'>Search</button>
            </div>
        </nav>

        <div className='hidden md:block w-full'>
          <div className='categoryButton py-6 flex items-center justify-center gap-4 w-full'>
             <button onClick={getInput} value="sports" className='bg-yellow-400 text-white px-2 py-1 text-3xl hover:bg-green-400 cursor-pointer rounded-sm'>Sports</button>
             <button onClick={getInput} value="politics" className='bg-yellow-400 text-white px-2 py-1 text-3xl hover:bg-green-400 cursor-pointer rounded-sm'>Politics</button>
             <button onClick={getInput} value="entertainment" className='bg-yellow-400 text-white px-2 py-1 text-3xl hover:bg-green-400 cursor-pointer rounded-sm'>Entertainment</button>
             <button onClick={getInput} value="health" className='bg-yellow-400 text-white px-2 py-1 text-3xl hover:bg-green-400 cursor-pointer rounded-sm'>Health</button>
             <button onClick={getInput} value="fitness" className='bg-yellow-400 text-white px-2 py-1 text-3xl hover:bg-green-400 cursor-pointer rounded-sm'>Fitness</button>
          </div>
        </div>

        

        <div className='w-full py-4 px-3'>
            {
                newsData ? <Card data={newsData} /> :
               <div className='w-full flex flex-col items-center gap-6 mt-8'>
                  <div className='w-full flex md:flex-row flex-col items-center gap-8'>
                    <img className='w-[50%] rounded-sm' src='https://t3.ftcdn.net/jpg/01/93/09/80/360_F_193098015_zswMB1ZxRmGsLqTTc69gXeRd6Px2T11J.jpg'/>
                    <div className='w-[50%] text-green-600 sm:text-4xl text-center sm:animate-bounce font-mono'>Click on search button to Get Latest NEWS!</div>
                 </div>
               </div>
            }
        </div>


    </div>
  )
}

export default Newsapp
