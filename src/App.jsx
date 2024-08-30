
import { FaMessage, FaShare } from 'react-icons/fa6';
import './App.css'
import { FaFacebookF, FaHeart, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function App() {
  

  return (
    <>
        <div className="max-w-96 w-full bg-slate-100 shadow-md flex items-center flex-col relative p-6 rounded-lg">
          <div className='absolute h-1/3 w-full bg-blue-400 top-0 left-0'>
          </div>
            <div className="h-40 w-40 relative bg-blue-400 p-1 rounded-full mb-3">
                <img className='h-full w-full object-cover rounded-full border-2' src="../public/profile.jpg" alt="" />
            </div>
              <div className='flex flex-col items-center text-slate-500'>
                <span className='text-xl font-bold'>CodingLab</span>
                <span className='text-sm font-medium'>YouTuber & Blogger</span>
              </div>
              <div className='flex mt-4 items-center'>
                 <div className='mr-2 bg-blue-600 text-white rounded-full p-2'>
                 <a href="#">
                  <FaFacebookF></FaFacebookF>
                 </a>
                 </div>
                 <div className='mr-2 bg-pink-400 text-white rounded-full p-2'>
                 <a href="#">
                  <FaInstagram></FaInstagram>
                 </a>
                 </div>
                 <div className='mr-2 bg-blue-500 rounded-full text-white p-2'>
                 <a href="#">
                  <FaTwitter></FaTwitter>
                 </a>
                 </div>
                 <div className='mr-2 bg-red-500 text-white p-2 rounded-full'>
                 <a href="#">
                  <FaYoutube></FaYoutube>
                 </a>
                 </div>
            </div>
          <div className='flex mt-6 gap-3'>
             <button className='bg-blue-500 px-4 py-2 text-white font-semibold rounded-3xl hover:bg-blue-700'>Subscribe</button>
             <button className='bg-blue-500 px-4 py-2 text-white font-semibold rounded-3xl hover:bg-blue-700'>Message</button>
          </div>

        <div className='flex items-center justify-center gap-5 mt-4 '>
           <div className='flex items-center justify-center gap-1'>
            <FaHeart className='text-red-500'></FaHeart>
            <span>50k</span>
           </div>
           <div className='flex items-center justify-center gap-1'>
            <FaMessage className='text-blue-400'></FaMessage>
            <span>60k</span>
           </div>
           <div className='flex items-center justify-center gap-1'>
            <FaShare className='text-blue-600'></FaShare>
            <span>30k</span>
           </div>
        </div>
      </div>
      
    </>
  )
}

export default App
