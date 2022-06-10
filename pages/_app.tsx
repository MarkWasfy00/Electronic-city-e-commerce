// types
import type { AppProps } from 'next/app';

// scss
import '../styles/Global/Fonts.scss';
import '../styles/Global/Container.scss';
import '../styles/Global/Normalize.scss';
import '../styles/HeadingStyles/AllHeadingStyles.scss';
import '../styles/HomeStyles/AllHomeStyles.scss';
import '../styles/SectionStyles/AllSectionStyles.scss';
import '../styles/CardStyles/AllCardStyles.scss';
import '../styles/FooterStyles/Footer.scss';
import '../styles/ErrorStyles/Error.scss';
import '../styles/CheckoutStyles/AllCheckoutStyles.scss';
import '../styles/ProfileStyles/AllProfileStyles.scss';
import 'animate.css';

// components 
import Nav from '../components/HeadingComponents/Nav';
import InfoNav from '../components/HeadingComponents/InfoNav';
import SearchBar from '../components/HeadingComponents/SearchBar';
import Footer from '../components/FooterComponents/Footer';

// redux
import { Provider } from 'react-redux';
import {store} from '../redux/store';

// auth0
import { UserProvider } from '@auth0/nextjs-auth0';
      
function MyApp({ Component, pageProps }: AppProps) {
  return(
    <UserProvider>
      <Provider store={store}>
        <Nav />
        <InfoNav   />
        <SearchBar />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </UserProvider>
  )
}

export default MyApp
