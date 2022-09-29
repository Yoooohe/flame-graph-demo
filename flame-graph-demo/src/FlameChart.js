import React, { memo } from 'react'
import { FixedSizeList as List } from 'react-window'
import { convertData } from './utils'

const ListItem = memo(props => {
  const { data, index, style } = props
  const { ListData, width } = data
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
})

export default function FlameChart({ data, height, width }) {
  const ListData = convertData(data)
  return (
    <List
      height={height}
      itemCount={ListData.length}
      itemData={{ ListData, width }}
      itemSize={30}
      width={width}
    >
      {/* 每次父元素的渲染都会导致子元素的渲染，因此我们抽离出来作为一个pureComponent */}
      {/* {({ index, style }) => {
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
      }} */}
      {ListItem}
    </List>
  )
}
