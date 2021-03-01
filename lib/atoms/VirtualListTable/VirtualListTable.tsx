import React from "react"
import { useUi } from "@lib/hooks"
import cx from "classnames"

import { Table, TableProps } from "@lib/atoms/Table"

import "./VirtualListTable.scss"

export type VirtualListTableProps<T> = TableProps<T> & {}

export const VirtualListTable = <T extends unknown>({
  prefixCls,
  className,
  rowClassName,
  style,
  data,
  scroll,
  columns,
  sticky,
  ...props
}: TableProps<T>) => {
  const { getPrefix } = useUi()
  const prefixClass = getPrefix("virtual-list-table")

  const _className = cx(prefixClass, [className])

  return (
    <Table<any>
      columns={columns}
      data={data}
      prefixCls={prefixClass}
      className={_className}
      scroll={scroll}
      {...props}
    />
  )
}
