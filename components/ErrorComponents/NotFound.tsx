import Link from 'next/link';

//checked

const NotFound = () => {
  return (
    <section className='error-page'>
        <div className="container">
            <div className="error-page__title headline-l">
                <div className="error-page__title__one">4</div>
                <div className="error-page__title__two">
                    <i className="fa-solid fa-gears"></i>
                </div>
                <div className="error-page__title__three">4</div>
            </div>
            <div className="error-page__sub-title link-l-bold">We dont have such a page anymore She was. And now its not.</div>
            <div className="error-page__sub-paragraph link-s">But its not scary! You can still find the right products in our catalog.</div>
            <Link href='/'>
                <a className="error-page__btn link-l">Back home</a>
            </Link>
        </div>
    </section>
  )
}

export default NotFound