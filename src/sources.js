import {AiOutlineHome, AiFillHome, AiOutlineBook, AiFillBook, AiOutlineCalendar, AiFillCalendar, AiOutlineCheckCircle, AiFillCheckCircle} from 'react-icons/ai'
import {BsCartCheck, BsCartCheckFill, BsPeople, BsPeopleFill, BsChatDots, BsChatDotsFill} from 'react-icons/bs'
import {RiStockLine, RiStockFill} from 'react-icons/ri'
import {HiOutlineSpeakerphone, HiSpeakerphone, HiOutlinePresentationChartLine, HiPresentationChartLine} from 'react-icons/hi'

export const Homes = [
  {
    name: 'home',
    to: '/',
    icons: [<AiOutlineHome />, <AiFillHome />]
  },
  {
    name: 'About',
    to: '/about',
    icons: [<AiOutlineBook />, <AiFillBook />]
  }
]

export const  Commercials = [
  {
    name: 'orders',
    to: '/orders',
    icons: [<BsCartCheck />, <BsCartCheckFill />]
  },
  {
    name: 'customers',
    to: '/customers',
    icons: [<BsPeople />, <BsPeopleFill />]
  },
  {
    name: 'chat',
    to: '/chat',
    icons: [<BsChatDots />, <BsChatDotsFill />]
  },
  {
    name: 'stock',
    to: '/stock',
    icons: [<RiStockLine />, <RiStockFill />]
  },
  {
    name: 'employees',
    to: '/employees',
    icons: [<BsPeople />, <BsPeopleFill />]
  },
  {
    name: 'Awareness',
    to: '/awareness',
    icons: [<HiOutlineSpeakerphone />, <HiSpeakerphone />]
  }
]

export const Plans = [
  {
    name: 'Calendar',
    to: '/calendar',
    icons: [<AiOutlineCalendar />, <AiFillCalendar />]
  },
  {
    name: 'todos',
    to: '/todos',
    icons: [<AiOutlineCheckCircle />, <AiFillCheckCircle />]
  },
  {
    name: 'Discussion',
    to: '/discussion',
    icons: [<HiOutlinePresentationChartLine />, <HiPresentationChartLine />]
  }
]

export const Analyses = [
  {
    name: 'sales',
    to: '/slaes'
  },
  {
    name: 'Monthly',
    to: '/monthly'
  },
  {
    name: 'ranking',
    to: 'cranking'
  }
]