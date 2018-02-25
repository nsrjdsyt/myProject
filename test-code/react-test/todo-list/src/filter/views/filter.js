import React from 'react'
import Link from './link'
import {FilterTypes} from './../../constant'

export default () => (
  <div>
    <Link filter={FilterTypes.ALL}>{FilterTypes.ALL}</Link>,
    <Link filter={FilterTypes.COMPLETED}>{FilterTypes.COMPLETED}</Link>,
    <Link filter={FilterTypes.UNCOMPLETED}>{FilterTypes.UNCOMPLETED}</Link>
  </div>
)
