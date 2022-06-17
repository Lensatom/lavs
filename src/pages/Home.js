import React from 'react'
import {SparklineComponent, Inject, SparklineTooltip, AccumulationChartComponent, AccumulationTooltip, AccumulationLegend, StockChartIndicatorDirective, PieSeries, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective} from '@syncfusion/ej2-react-charts'

import { Statistics, TopProducts } from '../fetched'

const Home = () => {

  const pieData = [
    {name: 'Capital', value: 300000, text: '37%'},
    {name: 'Profit', value: 120000, text: '63%'},
    {name: 'Expenses', value: 20000, text: '37%'},
  ]

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
          <div className='cursor-pointer border-b-2 md:border-b-0 boder-gray-400 border-solid px-5 h-28 md:px-0 my-5 w-full md:w-44 md:text-center flex justify-between md:flex-col' style={{alignItems: 'center'}}>
            {statistic.icon}
            <div className='flex-col justify-between h-16 text-right md:text-center'>
              <span className='text-gray-500'> {statistic.account} </span>
              <h2 className='text-xl'> {statistic.statistics} </h2>
            </div>
          </div>
        )}
      </div>
      <div className='flex flex-col lg:flex-row md:px-20 lg:px-0 mt-20 w-full'>
        <div className='flex-col flex md:flex-row h-auto w-full md:justify-evenly lg:justify-around lg:w-1/2 text-center md:text-left items-center md:mx-auto lg:mx-0'>
          <AccumulationChartComponent width='300' height='300' background='transparent' tooltip={{enable:true}}>
            <Inject services={[PieSeries, AccumulationTooltip]} ></Inject>
            <AccumulationSeriesCollectionDirective>
              <AccumulationSeriesDirective type='pie' dataSource={pieData} innerRadius="40%" xName="name" yName="value" dataLabel={{name:'text', position:'Inside'}}></AccumulationSeriesDirective>
            </AccumulationSeriesCollectionDirective>
          </AccumulationChartComponent>
          <div className='flex flex-col items-center'>
            <div className='flex-col mt-5'>
              <span className='pt-2 text-gray-500'> Cummulative Capital </span>
              <h2 className='text-xl pb-2 border-b-1 border-solid border-gray-400'> 300,000 Naira </h2>
              <span className='pt-2 text-gray-500'> Cummulative Profit </span>
              <h2 className='text-xl pb-2 border-b-1 border-solid border-gray-400'> 120,000 Naira </h2>
              <span className='pt-2 text-gray-500'> Cummulative Expenses </span>
              <h2 className='text-xl pb-2 border-b-1 border-solid border-gray-400'> 20,000 Naira </h2>
            </div>
          </div>
        </div>
        <div className='w-full lg:w-1/2 flex justify-center mt-16 lg:mt-0'>
          <div className='w-full lg:w-1/2 flex flex-col items-center'>
            <span className='text-2xl'> Top Products </span>
            <div className='w-full mt-5'>
              {TopProducts.map(topproduct =>
                <div className='w-full flex justify-between py-2 border-b-1 border-gray-400 border-solid'>
                  <span> {topproduct.product} </span>
                  <span> {topproduct.bought} </span> 
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home