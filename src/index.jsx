import React from 'react'
import {render} from 'react-dom'
import MyTable from './table.jsx'

const arr = [
  {
    field: 'test1',
    label: 'Test1',
    sort: true,
    filter: 'like'
  },
  {
    field: 'test2',
    label: 'Test2',
    sort: true,
    filter: 'like'
  },
  {
    field: 'test3',
    label: 'Test3',
    items: [
      {
        field: 'subtest2',
        label: 'Subtest2'
      },
      {
        field: 'subtest2',
        label: 'Subtest2',
      }
    ]
  }
]

render(<MyTable columns={arr}/>, document.getElementById('app'))