import React, { useState } from "react"
import { useUi } from "@lib/hooks"
import cx from "classnames"

import ReactTable from "rc-table"
import { TableProps as RcTableProps } from "rc-table/lib/Table"

import "./Table.scss"

export type TableProps<T> = RcTableProps<T> & {
  data?: T[]
  //   columns?: T[]
  //   fixed?: "left" | "right"
}

export const Table = <T extends unknown>({
  style,
  prefixCls,
  className,
  data,
  scroll,
  columns,
  ...props
}: TableProps<T>) => {
  const { getPrefix } = useUi()
  const prefixClass = getPrefix("table")

  const _className = cx(prefixClass, [className])

  return (
    <ReactTable<any>
      columns={columns}
      data={data}
      prefixCls={prefixClass}
      className={_className}
      scroll={scroll}
      {...props}
    />
  )
}
