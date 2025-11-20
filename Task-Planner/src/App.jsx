import React from 'react'
import "animate.css";
import {Badge, Card} from 'antd';
import {Plus} from "lucide-react"

const App = () => {
  return (
    <div className='bg-gray-200 h-screen overflow-hidden'>
      <nav className='bg-white h-[60px] fixed top-0 left-0 w-full'>

      </nav>
      
      <section className='fixed top-[60px] left-0 h-[calc(100%-120px)] w-full over-x-auto overflow-y-visible grid grid-cols-3 gap-8 p-8'>
        <div className='h-full min-h-0'>
          <Badge.Ribbon 
            text="High"
            className='!bg-gradient-to-br !from-rose-500 !via-pink-500 !to-rose-500 !font-medium' 
          />
          <div className='bg-white rounded-lg h-full min-h-0 overflow-auto p-6 space-y-8'>
            <button className='focus:shadow-lg hover:scale-105 transition-translate duration-300 item-center py-2 px-3 rounded-2xl text-m bg-gradient-to-tr from-blue-600 via-blue-500 to-blue-600 text-white flex gap-1 font-medium'>
              <Plus />
              Add task
            </button>
            <div className='flex flex-col gap-8'>
              {
                Array(10).fill(0).map((item, index) => {
                  <Card>
                    <Card.Meta
                    title="Upload new video on youtube"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto velit quaerat quasi obcaecati corrupti exercitationem minus. Ut, optio?"
                    />
                  </Card>
                })
              }
            </div>
          </div>
        </div>

        <div className='h-full min-h-0'>
          <Badge.Ribbon 
            text="Medium"
            className='!bg-gradient-to-br !from-indigo-500 !via-blue-500 !to-indigo-500 !font-medium' 
          />
          <div className='bg-white rounded-lg h-full min-h-0 overflow-auto'>

          </div>
        </div>

        <div className='h-full min-h-0'>
          <Badge.Ribbon 
            text="Low"
            className='!bg-gradient-to-br !from-amber-500 !via-orange-500 !to-amber-500 !font-medium' 
          />
          <div className='bg-white rounded-lg h-full min-h-0 overflow-auto'>
            
          </div>
        </div>
      </section>

      <footer className='bg-white h-[60px] fixed bottom-0 left-0 w-full'>

      </footer>
    </div>
  )
}

export default App