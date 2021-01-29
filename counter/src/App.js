import React from 'react'

const App = () => {
   const [value,setValue] = React.useState(0);
   return (
      <>
         <h1 className="title">React Counter</h1>
         <h2 className="counter">{value}</h2>
         <div class="btnArea">
            <button className="btn">Decrease</button>
            <button className="btn">Reset</button>
            <button className="btn">Increase</button>
         </div>
      </>
   )
}

export default App
