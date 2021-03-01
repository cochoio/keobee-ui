import React, { useState, useMemo } from "react"
import { Story, Meta } from "@storybook/react/types-6-0"
import { Table, TableProps } from "@lib/atoms/Table"

export default {
  title: "@atoms/Table/FixedTable",
  component: Table,
  argTypes: {},
} as Meta

const Template: Story<TableProps<any>> = (args) => {
  const columns = [
    {
      title: "Full Name",
      width: 100,
      dataIndex: "name",
      key: "name",
      fixed: "left",
    },
    {
      title: "Age",
      width: 100,
      dataIndex: "age",
      key: "age",
      fixed: "left",
    },
    { title: "Column 1", dataIndex: "address", key: "1" },
    { title: "Column 2", dataIndex: "address", key: "2" },
    { title: "Column 3", dataIndex: "address", key: "3" },
    { title: "Column 4", dataIndex: "address", key: "4" },
    { title: "Column 5", dataIndex: "address", key: "5" },
    { title: "Column 6", dataIndex: "address", key: "6", fixed: "right" },
    { title: "Column 7", dataIndex: "address", key: "7", fixed: "right" },
    { title: "Column 8", dataIndex: "address", key: "8", fixed: "right" },
  ]

  const data = [
    {
      key: "1",
      name: "Zinna Choi",
      age: 32,
      address: "New York",
    },
    {
      key: "2",
      name: "Keobi Lee",
      age: 40,
      address: "Japan",
    },
    {
      key: "3",
      name: "Amy Green",
      age: 23,
      address: "Singapore",
    },
    {
      key: "4",
      name: "Zinna choi",
      age: 20,
      address: "London",
    },
    {
      key: "5",
      name: "George Kim",
      age: 33,
      address: "Inchoen",
    },
    {
      key: "6",
      name: "Peter Lee",
      age: 50,
      address: "Seoul",
    },
    {
      key: "7",
      name: "Jieun Kim",
      age: 24,
      address: "Jeju-do",
    },
    {
      key: "8",
      name: "Dorothy Lee",
      age: 33,
      address: "Daegu",
    },
    {
      key: "9",
      name: "Grace Choi",
      age: 35,
      address: "Busan",
    },
  ]

  return <Table {...args} columns={columns} data={data} />
}

export const FixedHeader = Template.bind({})

FixedHeader.args = {
  scroll: { x: 1600 },
}

export const FixedColumn = Template.bind({})
FixedColumn.args = {
  scroll: { y: 300 },
}
