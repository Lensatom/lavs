import {GiCash, GiProfit} from 'react-icons/gi'
import {AiOutlineWarning} from 'react-icons/ai'
import {RiRefund2Fill} from 'react-icons/ri'
import {BiLoaderCircle} from 'react-icons/bi'

export const Statistics = [
  {
    icon: <GiCash style={{fontSize: '30px', color: 'blue'}}/>,
    account: 'capital',
    statistics: 500
  },
  {
    icon: <GiProfit style={{fontSize: '30px', color: 'green'}}/>,
    account: 'profit',
    statistics: 1002
  },
  {
    icon: <RiRefund2Fill style={{fontSize: '30px', color: 'purple'}}/>,
    account: 'refunds',
    statistics: 1200
  },
  {
    icon: <AiOutlineWarning style={{fontSize: '30px', color: 'red'}}/>,
    account: 'unavailables',
    statistics: 30000,
  },
  {
    icon: <BiLoaderCircle style={{fontSize: '30px', color: 'orange'}}/>,
    account: 'Processing',
    statistics: 2000
  }
]