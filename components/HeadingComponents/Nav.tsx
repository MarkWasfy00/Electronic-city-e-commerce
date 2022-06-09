import React from 'react'
import { useAppSelector } from '../../redux/Hooks/Hooks'
import Link from 'next/link'
import { Avatar } from '@mui/material'
import { useUser } from '@auth0/nextjs-auth0';

const Nav = () => {
  const [showMenu,setShowMenu] = React.useState<boolean>(false);
  const reduxItems = useAppSelector((state) => state.basket.items);
  const totalPrice = useAppSelector((state) => state.basket.totalPrice);
  const { user, error, isLoading } = useUser();

  return (
    <nav className={'navigation'}>
        <div className="container">
          <ul className='navigation__lists link-s'>
            <li><a href='#'>About company</a></li>
            <li><a href='#'>News</a></li>
            <li><a href='#'>Shops</a></li>
            <li><a href='#'>Stocks</a></li>
            <li><a href='#'>Service</a></li>
            <li><a href='#'>Delivery and Payments</a></li>
            <li><a href='#'>Sales</a></li>
          </ul>
          <div  className={'navigation__social-media link-s'}>
              {/* <i className="fa-brands fa-facebook-square"></i>
              <i className="fa-brands fa-twitter-square"></i>
              <i className="fa-brands fa-blogger"></i> */}
              <Link passHref href='/profile'>
                <Avatar sx={{width:'3rem',height:'3rem','&:hover':{cursor:'pointer'}}} alt={user?.name || 'Guest'} src={ user?.picture ||''} />
              </Link>
          </div>
          <div onClick={() => setShowMenu(old => !old)} className="navigation__mobile-nav">
            <i className="fa-solid fa-bars"></i>
          </div>
          <div onClick={() => setShowMenu(false)} className={`navigation__drop-shadow${showMenu ?  '':' drop-shadow--disactive' }`}></div>
          <div className={`navigation__mobile-menu${showMenu ? ' mobile-menu--active' : ''}`}>
            <ul className={`navigation__mobile-menu__lists link-xs`}>
              <li><a href='#'>About company</a></li>
              <li><a href='#'>News</a></li>
              <li><a href='#'>Shops</a></li>
              <li><a href='#'>Stocks</a></li>
              <li><a href='#'>Service</a></li>
              <li><a href='#'>Delivery and Payments</a></li>
              <li><a href='#'>Sales</a></li>
              <li>
                <Link href='/basket'>
                  <a href='#'>Basket: {reduxItems.length} - Total: {totalPrice}£</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
    </nav>
  )
}

export default Nav