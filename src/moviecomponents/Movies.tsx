import React from 'react'
import './movies.scss'
import { MovieData } from '../moviedata/MovieData'
import { MovieData2 } from '../moviedata/MovieData2'
import {FaStar} from 'react-icons/fa'
import { Movies2 } from './Movies2'
import { Navbar } from './Navbar'

export const Movies: React.FC = () => {

  return (
 <>
   <Navbar moviedata={MovieData} moviedata2={MovieData2} />
 </>
  )
}
