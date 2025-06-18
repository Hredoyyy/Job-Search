import React from 'react'

const name = 'Rakibul'

const list = ['abc','bdc','ccd'] 

const log = false

const App = () => {
  return (<>
    <div className='text-5xl'>App</div>
    <p>hello {name}</p>
    <ul>
      {list.map((n,i) => (
        <li key={i}>{n}</li>
      ))}
    </ul>
    { log ? <h1>hello {name}</h1> : <h1>hello guest</h1> }
    </>

  )
}

export default App