import React from 'react'

import {GridComponent, ColumnsDirective, ColumnDirective, Resize, Group, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject} from '@syncfusion/ej2-react-grids'

import { CustomersHeaders } from '../sources'
import {CustomersData} from '../fetched'

const Customers = () => {
  return (
    <div className='w-full flex flex-col px-2 lg:px-5'>
      <h2 className='text-left text-2xl my-5 w-full'> Customers </h2>
      <GridComponent id='gridcomp' dataSource={CustomersData} allowPaging={true} pageSettings={{pageSize: 10}} allowGrouping={true} allowFiltering={true}>
        <ColumnsDirective>
          {CustomersHeaders.map((item, index) => 
            <ColumnDirective key={index} {...item} />
          )}
        </ColumnsDirective>
        <Inject services={[Page, Filter, Group]} />
      </GridComponent>
    </div>
  )
}

export default Customers