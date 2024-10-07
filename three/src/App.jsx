import { useState } from 'react'

// import './App.css'
function App() {
  const [color, setColor] = useState("white");

  return (
      // <div className=" w-screen h-screen  "
      // style={{backgroundColor : color}}
      // >
      //   <div className="fixed flex flex-wrap justify-center insect-x-0 bottom-12  px-2">
      //     <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
      //       <button  onClick={()=> setColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg " 
      //         style={{backgroundColor : "red"}}
      //       >Red</button>
      //       <button  onClick={()=> setColor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg " 
      //         style={{backgroundColor : "green"}}
      //       >green</button>
      //       <button  onClick={()=> setColor("white")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg " 
      //         style={{backgroundColor : "white"}}
      //       >white</button>
      //       <button  onClick={()=> setColor("black")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg " 
      //         style={{backgroundColor : "dark"}}
      //       >dark</button>



      //     </div>
      //   </div>
      // </div>
      <div style={{backgroundColor: color}} className=' w-screen h-screen'>
        <div>
          <button onClick={() => setColor("red")}  style={{backgroundColor: "red"}}>
            red
          </button>
          <button onClick={() => setColor("green")}  style={{backgroundColor: "green"}}>
            green
          </button>
        </div>
      </div>
     
  )
}

export default App
