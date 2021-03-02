import React from "react"
import { useUi } from "@lib/hooks"
import cx from "classnames"

import ReactTable from "rc-table"
import { TableProps as RcTableProps } from "rc-table/lib/Table"
import { DefaultRecordType } from "rc-table/lib/interface"

import "./Table.scss"

export type TableProps<T extends DefaultRecordType> = RcTableProps<T> & {}

export const Table = <T extends DefaultRecordType>({
  style,
  prefixCls,
  className,
  ...props
}: TableProps<T>) => {
  const { getPrefix } = useUi()
  const prefixClass = getPrefix("table")

  const _className = cx(prefixClass, [className])

  return (
    <ReactTable<T> prefixCls={prefixClass} className={_className} {...props} />
  )
}
