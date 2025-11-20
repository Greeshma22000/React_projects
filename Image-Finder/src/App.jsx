import React, { useEffect, useState } from 'react'
import 'animate.css';
import axios from "axios";
import {ToastContainer, toast} from 'react-toastify'
import 'remixicon/fonts/remixicon.css'

const API_KEY = "hUpT7iFWrKgPXy2Ys26SrgjzPGm0zWqFzCS40AbgUP3v7QtxPARaMXoH";

const App = () => {
  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setpage] = useState(1)
  const [query, setQuery] = useState("people")

  const fetchImage = async () => {
    try {
      setLoading(true)
      const options = {
        headers: {
          Authorization: API_KEY
        }
      }
      const res = await axios.get(`https://api.pexels.com/v1/search?query=${query}&page=${page}&per_page=12`, options)
      console.log(res.data)
      setPhotos([
        ...photos,
        ...res.data.photos
      ])

    } catch (error) {
      toast.error("Failed to fetch images")
    }finally {
      setLoading(false)
    }
  } 

  const loadMore = () => {
    setpage(page + 1)
  }

  const search = (e) => {
    e.preventDefault()
    const q = e.target[0].value.trim()
    setPhotos([])
    setQuery(q)
  }

  useEffect(()=>{
    fetchImage()
  },[page, query])
  return (
    <div className='bg-gray-100 min-h-screen flex flex-col items-center py-8 gap-12 animate__animated animate__fadeIn'>
      <h1 className="text-4xl font-bold text-indigo-600">📸 Image Gallery</h1>

      <form onSubmit={search}>
        <input 
          className='p-3 bg-white rounded-l-lg w-[400px] focus:outline-indigo-500 focus:outline-2'
          placeholder='Search image here'
          required
        />

        <button className='bg-linear-to-br from-indigo-600 via-blue-500 to-indigo-600 font-bold py-3 px-8 rounded-r-lg text-white hover:scale-105 transition-transform'>Search</button>
      </form>

      <div className='grid lg:grid-cols-4 lg:gap-12 gap-8 w-9/12'>
      {
        photos.length === 0 && 
        <h1 className='text-4xl font-bold text-center '>Search result not found</h1>
      }
        {
          photos.map((item,index) =>(
            <div key={index} className='bg-white rounded-xl'>
              <img src={item.src.medium} alt={item.alt} className='rounded-t-lg h-[180px] object-cover w-full hover:scale-110 transition-transform duration-300' />
              <div className='p-3'>
                <h1 className='text-lg font-medium text-gray-600 capitalize'>{item.photographer}</h1>
                <a target="_blank" href={item.src.original} className='mt-2 block bg-green-400 font-bold py-2 rounded-lg text-center hover:scale-105 transition-transform duration-300'>
                  <i className='ri-download-line mr-1'></i>
                  Download
                </a>
              </div>
            </div>
          ))
        }
      </div>
      {
        loading &&
        <i className='ri-loader-line text-4xl text-gray-400 animate-spin'></i>
      }
      {
        photos.length > 0 &&
        <button onClick={loadMore} className='bg-rose-500 px-16 py-3 rounded-lg font-medium text-white hove:scale-110 transition-transform duration-300'>Load more</button>
      }
      <ToastContainer />
    </div>
  )
}

export default App