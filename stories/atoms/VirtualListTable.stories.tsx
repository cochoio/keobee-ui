import React, { useState, useEffect, useRef } from "react"
import { Story, Meta } from "@storybook/react/types-6-0"
import {
  VirtualListTable,
  VirtualListTableProps,
} from "@lib/atoms/VirtualListTable"
import { VariableSizeGrid as Grid } from "react-window"
import classNames from "classnames"

export default {
  title: "@atoms/Table/VirtualListTable",
  component: VirtualListTable,
  argTypes: {},
} as Meta

const Template: Story<VirtualListTableProps<any>> = (args) => {
  const Cell = ({ columnIndex, rowIndex, style }: any) => (
    <div
      className={classNames("virtual-cell", {
        "virtual-cell-last": columnIndex === columns.length - 1,
      })}
      style={style}>
      r{rowIndex}, c{columnIndex}
    </div>
  )
  const gridRef = React.useRef<any>()

  React.useEffect(() => {
    gridRef.current.resetAfterIndices({
      columnIndex: 0,
      shouldForceUpdate: false,
    })
  }, [])

  const renderVirtualList = (rawData: object[], { scrollbarSize }: any) => (
    <Grid
      ref={gridRef}
      className="virtual-grid"
      columnCount={columns.length}
      columnWidth={(index) => {
        const { width } = columns[index]
        return index === columns.length - 1 ? width - scrollbarSize - 1 : width
      }}
      height={300}
      rowCount={rawData.length}
      rowHeight={() => 49}
      width={301}>
      {Cell}
    </Grid>
  )
  const columns = [
    { title: "A", dataIndex: "a", width: 100 },
    { title: "B", dataIndex: "b", width: 100 },
    { title: "C", dataIndex: "c", width: 100 },
  ]

  const data = []
  for (let i = 0; i < 200000; i += 1) {
    data.push({
      key: i,
      a: `a${i}`,
      b: `b${i}`,
      c: `c${i}`,
    })
  }

  return (
    <VirtualListTable
      {...args}
      style={{ width: 301 }}
      tableLayout="fixed"
      columns={columns}
      data={data}
      scroll={{ y: 300 }}
      components={{
        body: renderVirtualList,
      }}
    />
  )
}

export const Basic = Template.bind({})

Basic.args = {
  scroll: { x: 1600 },
}
