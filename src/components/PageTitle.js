import React from 'react'
import style from '../styles/modules/title.scss'

function PageTitle({children, ...rest}) {
  return (
    <h1 className={style.title} {...rest}>
        {children}
    </h1>
  )
}

export default PageTitle;