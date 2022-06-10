import Link from "next/link"


const Success = () => {

  return (
    <main>
      <section className='success-page'>
        <div className="container">
            <div className="success-page__verify">
                <i className="fa-solid fa-circle-check"></i>
                <div className="success-page__verify__text headline-xs">
                    Thank you, your order has been confirmed!
                </div>
                <p className="success-page__verify__paragraph link-s">We will send a confirmation once your item has shipped, if you would like to check the status of your order(s) please press the link below.</p>
                <Link passHref href='/profile'>
                  <button className="success-page__verify__back link-s">Go to my orders</button>
                </Link>
            </div>
        </div>
      </section>
    </main>
  )
}

export default Success