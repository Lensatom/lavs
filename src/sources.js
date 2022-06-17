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

export const Themes = [
  {
    name: 'aqua',
    color: ['bg-blue-700', 'text-blue-700'],
    index: 0
  },
  {
    name: 'wood',
    color: ['bg-orange-700', 'text-orange-700'],
    index: 1
  },
  {
    name: 'forest',
    color: ['bg-green-700', 'text-green-700'],
    index: 2
  },
  {
    name: 'sunlight',
    color: ['bg-yellow-700', 'text-yellow-700'],
    index: 3
  },
  {
    name: 'royal',
    color: ['bg-purple-700', 'text-purple-700'],
    index: 4
  },
]

export const OrdersHeaders = [
  {
    field: 'Product',
    headerText: 'Product',
    width: 150,
    editType: 'dropdownedit',
    textAlign: 'left'
  },
  {
    field: 'Customer',
    headerText: 'Customer',
    width: 100,
    editType: 'dropdownedit',
    textAlign: 'left'
  },
  {
    field: 'Price',
    headerText: 'Price',
    width: 70,
    editType: 'dropdownedit',
    textAlign: 'left',
    format: 'c2'
  },
  {
    field: 'Quantity',
    headerText: 'Quantity',
    width: 70,
    editType: 'dropdownedit',
    textAlign: 'center'
  },
  {
    field: 'Discount',
    headerText: 'Discount',
    width: 70,
    editType: 'dropdownedit',
    textAlign: 'center'
  },
  {
    field: 'Charged',
    headerText: 'Charged',
    width: 70,
    editType: 'dropdownedit',
    textAlign: 'left',
    format: 'c2'
  }, 
  {
    field: 'DeliveryAddress',
    headerText: 'Delivery Address',
    width: 150,
    editType: 'dropdownedit',
    textAlign: 'left',
    format: 'c2'
  },
  {
    field: 'Status',
    headerText: 'Status',
    width: 100,
    editType: 'dropdownedit',
    textAlign: 'left',
    format: 'c2'
  },
]

export const CustomersHeaders = [
  {
    field: 'Name',
    headerText: 'Name',
    width: 150,
    editType: 'dropdownedit',
    textAlign: 'left'
  },
  {
    field: 'Email',
    headerText: 'Email',
    width: 150,
    editType: 'dropdownedit',
    textAlign: 'left'
  },
  {
    field: 'Gender',
    headerText: 'Gender',
    width: 150,
    editType: 'dropdownedit',
    textAlign: 'left',
  },
  {
    field: 'BoughtWorth',
    headerText: 'Bought Worth',
    width: 150,
    editType: 'dropdownedit',
    textAlign: 'left',
    format: 'c2'
  },
  {
    field: 'Status',
    headerText: 'Status',
    width: 150,
    editType: 'dropdownedit',
    textAlign: 'left',
  },
]

export const EmployeesHeaders = [
  {
    field: 'Surname',
    headerText: 'Surname',
    width: 150,
    editType: 'dropdownedit',
    textAlign: 'left'
  },
  {
    field: 'OtherNames',
    headerText: 'Other Names',
    width: 150,
    editType: 'dropdownedit',
    textAlign: 'left'
  },
  {
    field: 'Email',
    headerText: 'Email',
    width: 150,
    editType: 'dropdownedit',
    textAlign: 'left'
  },
  {
    field: 'Gender',
    headerText: 'Gender',
    width: 100,
    editType: 'dropdownedit',
    textAlign: 'left',
  },
  {
    field: 'Rating',
    headerText: 'Rating',
    width: 50,
    editType: 'dropdownedit',
    textAlign: 'left',
  },
  {
    field: 'Status',
    headerText: 'Status',
    width: 100,
    editType: 'dropdownedit',
    textAlign: 'left',
  },
  {
    field: 'Department',
    headerText: 'Department',
    width: 150,
    editType: 'dropdownedit',
    textAlign: 'left'
  },
  {
    field: 'Position',
    headerText: 'Position',
    width: 150,
    editType: 'dropdownedit',
    textAlign: 'left'
  },
]

export const StockHeaders = [
  {
    field: 'Product',
    headerText: 'Product',
    width: 150,
    editType: 'dropdownedit',
    textAlign: 'left'
  },
  {
    field: 'Price',
    headerText: 'Price',
    width: 150,
    editType: 'dropdownedit',
    textAlign: 'left'
  },
  {
    field: 'Sold',
    headerText: 'Sold',
    width: 150,
    editType: 'dropdownedit',
    textAlign: 'left'
  },
  {
    field: 'Left',
    headerText: 'Left',
    width: 100,
    editType: 'dropdownedit',
    textAlign: 'left',
  },
  {
    field: 'TotalQuantity',
    headerText: 'Total Quantity',
    width: 50,
    editType: 'dropdownedit',
    textAlign: 'left',
  },
  {
    field: 'Capital',
    headerText: 'Capital',
    width: 100,
    editType: 'dropdownedit',
    textAlign: 'left',
  }
]