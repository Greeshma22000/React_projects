import React, { useEffect, useState } from 'react'
import "animate.css";
import {Badge, Button, Card, DatePicker, Form, Input, Modal, Select, Tag} from 'antd';
import {Plus} from "lucide-react"

const App = () => {
  const [open,setOpen] = useState(false);
  const [timer, setTimer] = useState(new Date().toLocaleTimeString());

  const createTask = (value) => {
    console.log(value);
  }

  const handleClose = () => {
    setOpen(false);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(new Date().toLocaleTimeString())
    }, 1000)

    return () => {
      clearInterval(interval);
    }
  },[])

  return (
    <div className='bg-gray-200 h-screen overflow-hidden'>
      <nav className='bg-white h-[60px] fixed top-0 left-0 w-full flex justify-between items-center px-8'>
        <div className='flex items-center gap-2'>
          <button className='w-10 h-10 bg-violet-600 rounded-full font-bold text-white'>TP</button>
          <h1 className='text-2xl font-bold ml-px'>Task Planner</h1>
        </div>
        <div className='flex gap-5 items-center'>
          <DatePicker className='py-1.5' />
          <h1 className='text-2xl font-bold'>{timer}</h1>
           <button onClick={() => setOpen(true)} className='focus:shadow-lg hover:scale-105 transition-translate duration-300 item-center py-2 px-3 rounded-2xl text-m bg-gradient-to-tr from-violet-600 via-violet-500 to-violet-600 text-white flex gap-1 font-medium'>
              <Plus />
              Add task
            </button>
        </div>
      </nav>
      
      <section className='fixed top-[60px] left-0 h-[calc(100%-120px)] w-full over-x-auto overflow-y-visible grid lg:grid-cols-3 gap-8 p-8'>
        <div className='lg:h-full lg:min-h-0 h-[300px]'>
          <Badge.Ribbon 
            text="High"
            className='!bg-gradient-to-br !from-rose-500 !via-pink-500 !to-rose-500 !font-medium !z-[20000]' 
          />
          <div className='bg-white rounded-lg h-full min-h-0 overflow-auto p-6 space-y-8'>
            <div className='flex flex-col gap-8'>
              {
                Array(10).fill(0).map((item, index) => (
                  <Card hoverable key={index}>
                    <Card.Meta
                    title="Upload new video on youtube"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto velit quaerat quasi obcaecati corrupti exercitationem minus. Ut, optio?"
                    />
                    <div className='mt-4 flex justify-between items-center'>
                      <div>
                        <Tag>Pending</Tag>
                        <Tag className='!bg-rose-500 !border-rose-500 !text-white'>Delete</Tag>
                      </div>
                      <Select size="small" placeholder="Change status">
                        <Select.Option value="pending">Pending</Select.Option>
                        <Select.Option value="inProgress">Inprogress</Select.Option>
                        <Select.Option value="completed">Completed</Select.Option>
                      </Select>
                    </div>
                  </Card>
                ))
              }
            </div>
          </div>
        </div>

        <div className='lg:h-full lg:min-h-0 h-[300px]'>
          <Badge.Ribbon 
            text="Medium"
            className='!bg-gradient-to-br !from-indigo-500 !via-blue-500 !to-indigo-500 !font-medium !z-[20000]' 
          />
          <div className='bg-white rounded-lg h-full min-h-0 overflow-auto p-6 space-y-8'>
            <div className='flex flex-col gap-8'>
              {
                Array(10).fill(0).map((item, index) => (
                  <Card hoverable key={index}>
                    <Card.Meta
                    title="Upload new video on youtube"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto velit quaerat quasi obcaecati corrupti exercitationem minus. Ut, optio?"
                    />
                    <div className='mt-4 flex justify-between items-center'>
                      <div>
                        <Tag>Pending</Tag>
                        <Tag className='!bg-rose-500 !border-rose-500 !text-white'>Delete</Tag>
                      </div>
                      <Select size="small" placeholder="Change status">
                        <Select.Option value="pending">Pending</Select.Option>
                        <Select.Option value="inProgress">Inprogress</Select.Option>
                        <Select.Option value="completed">Completed</Select.Option>
                      </Select>
                    </div>
                  </Card>
                ))
              }
            </div>
          </div>
        </div>

        <div className='lg:h-full lg:min-h-0 h-[300px]'>
          <Badge.Ribbon 
            text="Low"
            className='!bg-gradient-to-br !from-amber-500 !via-orange-500 !to-amber-500 !font-medium !z-[20000]' 
          />
          <div className='bg-white rounded-lg h-full min-h-0 overflow-auto p-6 space-y-8'>
            <div className='flex flex-col gap-8'>
              {
                Array(10).fill(0).map((item, index) => (
                  <Card hoverable key={index}>
                    <Card.Meta
                    title="Upload new video on youtube"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto velit quaerat quasi obcaecati corrupti exercitationem minus. Ut, optio?"
                    />
                    <div className='mt-4 flex justify-between items-center'>
                      <div>
                        <Tag>Pending</Tag>
                        <Tag className='!bg-rose-500 !border-rose-500 !text-white'>Delete</Tag>
                      </div>
                      <Select size="small" placeholder="Change status">
                        <Select.Option value="pending">Pending</Select.Option>
                        <Select.Option value="inProgress">Inprogress</Select.Option>
                        <Select.Option value="completed">Completed</Select.Option>
                      </Select>
                    </div>
                  </Card>
                ))
              }
            </div>
          </div>
        </div>
      </section>

      <footer className='bg-white h-[60px] fixed bottom-0 left-0 w-full flex items-center justify-between px- 8'>
        <h1 className='text-2xl font-bold ml-10'>Total tasks - 22</h1>
        <a href="#" className='text-gray-400 hover:underline mr-10'>https://tp.com</a>
      </footer>
      <Modal open={open} footer={null} onCancel={handleClose} maskClosable={false}>
        <h1 className='text-lg font-medium mb-4'>New task</h1>
        <Form onFinish={createTask}>
          <Form.Item
            name="title"
            rules={[{required: true}]}
          >
            <Input 
                placeholder='Task name'
            />
          </Form.Item>

           <Form.Item
            name="description"
            rules={[{required: true}]}
          >
            <Input.TextArea 
                placeholder='Task description goes here'
                rows={5}
            />
          </Form.Item>

          <Form.Item
            name="priority"
            rules={[{required: true}]}
          >
            <Select size='large' placeholder="Choose priority">
              <Select.Option value="high">High</Select.Option>
              <Select.Option value="medium">Medium</Select.Option>
              <Select.Option value="low">Low</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item>
            <Button htmlType='submit' type='primary' size='large'>Submit</Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

export default App