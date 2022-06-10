
//checked
const Footer = () => {
  return (
    <footer className='footer'>
        <div className="container">
            <div className="footer__upper">
                <div className="footer__upper__slogan">
                    <i className="fa-solid fa-city"></i>
                    <div className="footer__upper__slogan__title">
                        <div className="footer__upper__slogan__title__one headline-xs">Electronic City</div>
                        <div className="footer__upper__slogan__title__two link-xs">Electrical equipment Store</div>
                    </div>
                </div>
                <div className="footer__upper__information">
                    <div className="footer__upper__information__title link-l-bold">Information</div>
                    <div className="footer__upper__information__links link-s">
                        <a href="#" className="footer__upper__information__links__link">Stocks</a>
                        <a href="#" className="footer__upper__information__links__link">Shops</a>
                        <a href="#" className="footer__upper__information__links__link">News</a>
                    </div>
                </div>
                <div className="footer__upper__upper__clients">
                    <div className="footer__upper__clients__title link-l-bold">Clients</div>
                    <div className="footer__upper__clients__links link-s">
                        <a href="#" className="footer__upper__clients__links__link">Corporate sales</a>
                        <a href="#" className="footer__upper__clients__links__link">Whole sale</a>
                        <a href="#" className="footer__upper__clients__links__link">Delivery and payment</a>
                        <a href="#" className="footer__upper__clients__links__link">About company</a>
                    </div>
                </div>
                <div className="footer__upper__upper__additionally">
                    <div className="footer__upper__additionally__title link-l-bold">Additionally</div>
                    <div className="footer__upper__additionally__links link-s">
                        <a href="#" className="footer__upper__additionally__links__link">Service Center</a>
                        <a href="#" className="footer__upper__additionally__links__link">Terms of use</a>
                    </div>
                </div>
                <div className="footer__upper__upper__social">
                    <div className="footer__upper__social__title link-l-bold">Follow us</div>
                    <div className="footer__upper__social__media">
                        <i className="fa-brands fa-facebook-square"></i>
                        <i className="fa-brands fa-twitter-square"></i>
                        <i className="fa-brands fa-blogger"></i>
                    </div>
                </div>
            </div>
            
        </div>
        <div className="lower">
                <div className="footer__made-by link-s">&copy; 2001-2022. Site is developed: Mark Wasfy</div>
                <div className="footer__rights link-s">All rights reserved</div>
            </div>
    </footer>
  )
}

export default Footer