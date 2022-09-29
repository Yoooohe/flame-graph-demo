import React, { useState } from 'react'
import FlameChart from './FlameChart'
import AutoSizer from 'react-virtualized-auto-sizer'
import './App.css'

function App() {
  const [data, setData] = useState(null)
  const loadData = () => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => {
        setData(data)
      })
  }
  if (data === null) return <button onClick={loadData}>Load Data</button>
  return (
    <div className="App">
      <AutoSizer>
        {({ height, width }) => (
          <FlameChart data={data} height={height} width={width} />
        )}
      </AutoSizer>
    </div>
  )
}

export default App
