import React from 'react'
import {SparklineComponent, Inject, SparklineTooltip} from '@syncfusion/ej2-react-charts'

import { Statistics } from '../fetched'

const Home = () => {

  return (
    <div classsName='w-full bg-black'>
      <div className='w-full block md:flex justify-between px-5 lg:px-10 pt-12'>
        <div className='w-full'>
          <span className='text-gray-500'> Sales Today </span>
          <h2 className='text-xl mb-4 mt-1'> 500,000 Naira </h2>
          <span className='text-gray-500'> Expenses Today </span>
          <h2 className='text-xl mt-1'> 20,000 Naira </h2>
        </div>
        <div className='my-10 md:my-0 w-auto'>
          <SparklineComponent width='300' height='100' dataSource={[1, 4, 5, 11, 60, 7, 90, 20, 4, 60, 10, 4, 3, 48, 6, 8, 90, 4, 6, 12, 3, 4, 78, 3, 21]}>
            <Inject services={[SparklineTooltip]} />
          </SparklineComponent>
        </div>
      </div>
      <div className='sm:block md:flex justify-evenly mt-10 capitalize'>
        {Statistics.map(statistic => 
          <div className='hover:bg-gray-50 px-5 md:px-0 py-5 md:py-10 w-full md:w-44 md:text-center'>
            <span className='text-gray-500'> {statistic.account} </span>
            <h2 className='text-xl mt-1 md:mt-5'> {statistic.statistics} </h2>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home