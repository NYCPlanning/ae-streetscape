import {
  Table as ChakraTable,
  Thead as ChakraThead,
  Tbody as ChakraTbody,
  Tfoot as ChakraTfoot,
  Tr as ChakraTr,
  Th as ChakraTh,
  Td as ChakraTd,
  TableCaption as ChakraTableCaption,
  TableContainer as ChakraTableContainer,
} from "@chakra-ui/react";
import type {
  TableProps as ChakraTableProps,
  TableHeadProps as ChakraTableHeadProps,
  TableBodyProps as ChakraTableBodyProps,
  TableFooterProps as ChakraTableFooterProps,
  TableRowProps as ChakraTableRowProps,
  TableColumnHeaderProps as ChakraTableColumnHeaderProps,
  TableCellProps as ChakraTableCellProps,
  TableCaptionProps as ChakraTableCaptionProps,
  TableContainerProps as ChakraTableContainerProps,
} from "@chakra-ui/react";

export const Table = ChakraTable;
export interface TableProps extends ChakraTableProps {}

export const Thead = ChakraThead;
export interface TableHeadProps extends ChakraTableHeadProps {}

export const Tbody = ChakraTbody;
export interface TableBodyProps extends ChakraTableBodyProps {}

export const Tfoot = ChakraTfoot;
export interface TableFooterProps extends ChakraTableFooterProps {}

export const Tr = ChakraTr;
export interface TableRowProps extends ChakraTableRowProps {}

export const Th = ChakraTh;
export interface TableColumnHeaderProps extends ChakraTableColumnHeaderProps {}

export const Td = ChakraTd;
export interface TableCellProps extends ChakraTableCellProps {}

export const TableCaption = ChakraTableCaption;
export interface TableCaptionProps extends ChakraTableCaptionProps {}

export const TableContainer = ChakraTableContainer;
export interface TableContainerProps extends ChakraTableContainerProps {}
