import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title,discription,author,imgsrc,readmoreUrl,newsDate,source} = this.props
    return (
      <div className=' w-[350px] h-[580px] p-5 rounded-md m-2 shadow-lg bg-white text-black dark:text-black drop-shadow-lg'>
        <h1>Publish By-<span className='text-red-900 font-bold underline'>{source}</span></h1>
        <div className=' p-1 border-2 rounded-lg h-[500px]'>
      <img className="h-[200px] w-[300px]  rounded-md mb-2" src={imgsrc} alt="{title}" />
     
      <h1 className="text-blue-800 font-bold pl-2 border-b-4 pb-2 ">{title}</h1>
      <h2 className='px-3 py-2 overflow-hidden w-55 h-[110px]'>{discription}</h2>
      <a href={readmoreUrl} target='-blank'> <button className=' border-2 w-44 h-10 rounded-md mt-2 bg-green-700 text-white hover:bg-green-900 delay-150 '>Read More...</button></a>
     
      </div>
      <div className=' text-center overflow-hidden w-[320px] text-gray-500'>
      <span className='mr-2'>{newsDate}</span>
      <span className='relative text-right'>Author- <span className='text-blue-700'>{author}</span></span>
      </div>
      </div>
    )
  }
}
