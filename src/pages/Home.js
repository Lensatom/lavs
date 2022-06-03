import React from 'react'
import {SparklineComponent, Inject, SparklineTooltip, StockChartIndicatorDirective} from '@syncfusion/ej2-react-charts'

import { Statistics } from '../fetched'

const Home = () => {

  return (
    <div className='w-full px-5 lg:px-10'>
      <div className='w-full block md:flex justify-between pt-12'>
        <div className='w-full'>
          <span className='text-gray-500'> Sales Today </span>
          <h2 className='text-xl mb-4 mt-1'> 500,000 Naira </h2>
          <span className='text-gray-500'> Expenses Today </span>
          <h2 className='text-xl mt-1'> 20,000 Naira </h2>
        </div>
        <div className='my-10 md:my-0 w-auto py-5 md:py-0'>
          <SparklineComponent width='300' height='100' dataSource={[1, 4, 5, 11, 60, 7, 90, 20, 4, 60, 10, 4, 3, 48, 6, 8, 90, 4, 6, 12, 3, 4, 78, 3, 21]}>
            <Inject services={[SparklineTooltip]} />
          </SparklineComponent>
        </div>
      </div>
      <div className='md:flex md:flex-row flex-col justify-evenly mt-20 capitalize px-5 md:px-0'>
        {Statistics.map(statistic => 
          <div className='md:hover:bg-gray-50 border-b-2 md:border-b-0 boder-gray-400 border-solid px-5 h-28 md:px-0 my-5 w-full md:w-44 md:text-center flex justify-between md:flex-col' style={{alignItems: 'center'}}>
            {statistic.icon}
            <div className='flex-col justify-between h-16 text-right md:text-center'>
              <span className='text-gray-500'> {statistic.account} </span>
              <h2 className='text-xl'> {statistic.statistics} </h2>
            </div>
          </div>
        )}
      </div>
      <div className='flex-col flex md:flex-row h-auto mt-20 w-full md:justify-evenly lg:justify-around md:px-20 lg:px-0 lg:w-1/2 text-center md:text-left items-center md:mx-auto lg:mx-0'>
        <div className='w-64 h-64 rounded-full bg-gray-300 mx-auto md:mx-0'></div>
        <div className='flex-col ml mt-10 md:mt-0'>
          <span className='text-gray-500'> Cummulative Capital </span>
          <h2 className='text-xl mb-4 mt-1'> 500,000 Naira </h2>
          <span className='text-gray-500'> Cummulative Profit </span>
          <h2 className='text-xl mt-1 mb-4'> 20,000 Naira </h2>
          <span className='text-gray-500'> Cummulative Expenses </span>
          <h2 className='text-xl mt-1'> 20,000 Naira </h2>
        </div>
      </div>
    </div>
  )
}

export default Home