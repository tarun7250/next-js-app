import React from 'react'
import Header from './Header'


const Layout = ({children, headers}) => {
  return (
    <>
        <Header headers={headers}/>
        {children};
    </>
  )
}

export default Layout