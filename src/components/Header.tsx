import Link from 'next/link';
import React from 'react'

const Header = ({headers}) => {
    console.log(headers);
  return (
    <>
        <div className='flex gap-4 pl-4'>
            {headers.map((item) => {
                return (
                    <Link href={item.path??"/"} key={item.name} style={{color: item.isActive?"blue":"black"}}>
                        {item.name}
                    </Link>
                )
            })}
        </div>
    </>
  )
}

export default Header