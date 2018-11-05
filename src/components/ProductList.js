import React from 'react'
import PropTyes from 'prop-types'
import {Table,Popconfirm,Button} from 'antd'

const ProductList = ({onDelete,products}) => {
  const columns = [{
    title: 'Name',
    dataIndex: 'name'
  },{
    title: 'Actions',
    render: (text,record) => {
      return (
        <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
          <Button>Delete</Button>
        </Popconfirm>
      )
    }
  }]

  return (
    <Table
      dataSource={products}
      columns={columns}
    />
  )
}

ProductList.propTypes = {
  onDelete: PropTyes.func.isRequired,
  products: PropTyes.array.isRequired
}

export default ProductList
