import React from 'react'
import response from './DataGallery'

export default function Gallery() {
  return (
    <div className="w-full h-auto m-auto flex bg-gradient-to-b from-fuchsia-900 via-purple-900 to-fuchsia-900">
      <div className='w-full h-full px-10 lg:px-20 flex items-center m-auto max-w-screen-2xl flex-row gap-10 my-10'>
        <div className='w-full h-full flex flex-col items-center gap-5'>
        <div className='text-sm lg:text-3xl font-bold text-white'>Gallery</div>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 w-full max-w-screen-xl'>
            {response.results.map((response, index) => (
              <div key={index} className="bg-gradient-to-t from-fuchsia-700 rounded-lg shadow-md hover:shadow-xl transition-all h-auto flex flex-col shadow-black/20 overflow-hidden">
    <img src={`https://picsum.photos/500/300?random=${index}`} className="mb-1" />
<div className='h-auto p-5'>
    <h3 className="text-sm lg:text-xl font-bold text-white mb-2 ">{response.title}</h3>
                <p className="text-white text-xs lg:text-sm">{response.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
