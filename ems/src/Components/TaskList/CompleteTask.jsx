import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div>
      <div className="flex-shrink-0 h-[250px] w-[280px] p-5 bg-yellow-400 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 px-3 py-1 rounded-lg text-sm">{data.category}</h3>
          <h4 className="text-md">{data.date}</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold"> {data.title}</h2>
        <p className="mt-4">{data.description}</p>
        <div className="flex justify-between mt-6">
              <button className='text-sm p-2 bg-green-500 rounded w-full'>Completed</button>
        </div>
      </div>
    </div>
  )
}

export default CompleteTask
