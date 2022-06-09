import React from 'react'
import {SparklineComponent, Inject, SparklineTooltip, StockChartIndicatorDirective} from '@syncfusion/ej2-react-charts'
import { Details } from '../fetched'
import { Themes } from '../sources'
import { Button } from '../components'

const Profile = props => {

  return (
    <div className='px-5 pt-12'>
      <div className=' flex md:flex-row flex-col md:justify-between'>
        <div className='flex flex-col md:flex-row items-center md:items-start md:flex w-full md:w-1/2'>
          <div className='w-36 h-36 rounded-full bg-gray-400'></div>
          <div className='flex flex-col items-center md:items-start md:ml-5 md:justify-evenly h-36'>
            <span className='text-xl'> James Alfred Michael </span>
            <span className='text-sm text-gray-400'> mikealjames@gmail.com </span>
            <span className='text-sm text-gray-400'> Sales Manager </span>
          </div>
        </div>
        <div className='my-10 md:my-0 w-auto py-5 md:py-0 flex flex-col justify-between items-center'>
          <span className='mb-10 md'> Productivity Curve </span>
          <SparklineComponent width='300' height='100' dataSource={[1, 4, 5, 11, 60, 7, 90, 20, 4, 60, 10, 4, 3, 48, 6, 8, 90, 4, 6, 12, 3, 4, 78, 3, 21]}>
            <Inject services={[SparklineTooltip]} />
          </SparklineComponent>
        </div>
      </div>
      <div className='flex flex-col lg:flex-row w-full'>
        <div className='mt-5 md:mt-16 w-full lg:w-1/2 md:px-20 lg:pr-20 lg:px-0 flex flex-col align-center'>
          <span className='mb-2 p-3 text-xl'> Details </span>
          <div>
            {Details.map(detail => 
              <div className='flex justify-between border-b-2 border-solid border-gray-400 p-3'>
                <span> {detail.field} </span>
                <span> {detail.value} </span>
              </div>
            )}
          </div>
        </div>
        <div className='mt-16 w-full lg:w-1/2 lg:pl-20 lg:px-0 px-5 flex flex-col md:flex md:flex-col lg:flex lg:flex-col align-center'>
          <div className='flex flex-col w-full md:w-full md:px-20 justify-between'>
            <span className='mb-5 text-xl'> Themes </span>
            <div className='flex flex-wrap w-full'>
              {Themes.map(theme => 
                <div className='flex capitalize flex-col text-gray-400 items-center mr-10 mt-5 cursor-pointer'>
                  <div className={`w-12 h-12 rounded-full ${theme.color[0]}`} onClick={() => props.changeTheme(theme.index)}></div>
                  <span> {theme.name} </span>
                </div>
              )}
            </div>
          </div>
          <div className='flex flex-col w-full items-center my-10'>
            <div className='w-full md:w-1/2 lg:w-full'>
              <Button content={'Log Out'} theme={props.theme} className='w-1/2' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile