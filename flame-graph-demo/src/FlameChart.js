import React from 'react'
import { FixedSizeList as List } from 'react-window'
import { convertData } from './utils'

export default function FlameChart({ data, height, width }) {
  const ListData = convertData(data)
  return (
    <List
      height={height}
      itemCount={ListData.length}
      itemSize={30}
      width={width}
    >
      {({ index, style }) => {
        const nodes = ListData[index]
        return (
          <div style={style}>
            {nodes.map((node, index) => (
              <div
                key={index}
                className="Node"
                style={{
                  left: node.offset * width,
                  width: node.width * width,
                  backgroundColor: node.color,
                }}
                title={node.name}
              >
                {node.name}
              </div>
            ))}
          </div>
        )
      }}
    </List>
  )
}
