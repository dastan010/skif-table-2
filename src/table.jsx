import React, {Fragment} from 'react'
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';

const generateThs = (columns) => {
  return (
    <Fragment>
      {
        columns.map((item, index) => {
          console.log('Item: ', item)
          if (item.items) {
            const {items} = item;
            return (
              // <tr>
                <td colSpan={items.length}>{item.label}</td>
              // </tr>
            )
          }
          return (
            <td>{item.label}</td>
          )
        })
      }
    </Fragment>
  )
}

const MyTable = ({columns}) => {
  return (
    <Table striped bordered>
      <thead>
        {generateThs(columns)}
        {/*<tr>*/}
        {/*  <th colSpan={2}>12</th>*/}
        {/*</tr>*/}
        {/*<tr>*/}
        {/*  <th>1</th>*/}
        {/*  <th>2</th>*/}
        {/*  <th>3</th>*/}
        {/*  <th>4</th>*/}
        {/*  <th>5</th>*/}
        {/*</tr>*/}
      </thead>
      <tbody>
        <tr>
          <td>SSS</td>
        </tr>
      </tbody>
    </Table>
  )
}

export default MyTable;

