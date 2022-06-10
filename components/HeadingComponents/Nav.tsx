import Link from 'next/link';
import { useState } from 'react';
import { useAppSelector } from '../../redux/Hooks/Hooks';
import { useUser } from '@auth0/nextjs-auth0';
//------------
import { Avatar } from '@mui/material';

//checked

const Nav = () => {
  const [showMenu,setShowMenu] = useState<boolean>(false);
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
              <Link passHref href='/profile'>
                <Avatar sx={{width:'3rem',height:'3rem','&:hover':{cursor:'pointer'}}} alt={user?.name || 'Guest'} src={ user?.picture ||''} />
              </Link>
          </div>
          <div className="navigation__mobile-nav" onClick={() => setShowMenu(old => !old)}>
            <i className="fa-solid fa-bars"></i>
          </div>
          <div className={`navigation__drop-shadow${showMenu ?  '':' navigation__drop-shadow--disactive' }`} onClick={() => setShowMenu(false)}></div>
          <div className={`navigation__mobile-menu${showMenu ? ' navigation__mobile-menu--active': ''}`}>
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