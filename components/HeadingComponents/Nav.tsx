import Link from 'next/link';
import { useState } from 'react';
import { useAppSelector } from '../../redux/Hooks/Hooks';
import { useUser } from '@auth0/nextjs-auth0';
//------------
import { Avatar } from '@mui/material';
import { useRouter } from 'next/router';

//checked

const Nav = () => {
  const [showMenu,setShowMenu] = useState<boolean>(false);
  const reduxItems = useAppSelector((state) => state.basket.items);
  const totalPrice = useAppSelector((state) => state.basket.totalPrice);
  const router = useRouter();
  const { user, error, isLoading } = useUser();
  

  return (
    <nav className={'navigation'}>
        <div className="container">
          <ul className='navigation__lists link-s'>
            <Link passHref href='/'><li className={`navigation__lists__item${router.pathname === '/' ? ' navigation__lists__item--active':''}`}><a>Home</a></li></Link>
            <Link passHref href='/profile'><li className={`navigation__lists__item${router.pathname === '/profile' ? ' navigation__lists__item--active':''}`}><a>Profile</a></li></Link>
            <Link passHref href='#'><li className={`navigation__lists__item${router.pathname === '/news' ? ' navigation__lists__item--active':''}`}><a>News</a></li></Link>
            <Link passHref href='/basket'><li className={`navigation__lists__item${router.pathname === '/basket' ? ' navigation__lists__item--active':''}`}><a>Basket</a></li></Link>
            <Link passHref href='/catalog'><li className={`navigation__lists__item${router.pathname === '/catalog' ? ' navigation__lists__item--active':''}`}><a>Catalog</a></li></Link>
          </ul>
          <div  className={'navigation__social-media link-s'}>
              <Link passHref href='/profile'>
                <Avatar sx={{width:'3rem',height:'3rem','&:hover':{cursor:'pointer'}}} alt={user?.name || 'Guest'} src={ user?.picture ||''} />
              </Link>
          </div>
          <div className="navigation__mobile-nav" onClick={() => setShowMenu(old => !old)}>
            <i className={`fa-solid ${showMenu ?  "fa-x":"fa-bars"}`}></i>
            
          </div>
          <div className={`navigation__drop-shadow${showMenu ?  '':' navigation__drop-shadow--disactive' }`} onClick={() => setShowMenu(false)}></div>
          <div className={`navigation__mobile-menu${showMenu ? ' navigation__mobile-menu--active': ''}`}>
            <ul className={`navigation__mobile-menu__lists link-xs`}>
              <li className={`navigation__mobile-menu__lists__item`}>
                <Link href='/'>
                  <a>Home</a>
                </Link>
              </li>
              <li className={`navigation__mobile-menu__lists__item`}>
                <Link href='/profile'>
                  <a>Profile</a>
                </Link>
              </li>
              <li className={`navigation__mobile-menu__lists__item`}>
                <Link href='#'>
                  <a>News</a>
                </Link>
              </li>
              <li className={`navigation__mobile-menu__lists__item`}>
                <Link href='/basket'>
                  <a>Basket</a>
                </Link>
              </li>
              <li className={`navigation__mobile-menu__lists__item`}>
                <Link href='/catalog'>
                  <a>Catalog</a>
                </Link>
              </li>
              <li className='navigation__mobile-menu__lists__item'>
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