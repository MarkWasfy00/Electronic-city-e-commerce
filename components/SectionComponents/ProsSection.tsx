import React from 'react'

const ProsSection = () => {
  return (
    <section className='pros-section'>
        <div className="container">
            <div className="pros-section__pricing">
                <i className="fa-solid fa-money-check"></i>
                <h2 className="pros-section__pricing__title headline-xs">Flexible pricing policy</h2>
                <div className="pros-section__pricing__paragraph link-l">Always competitive prices and an extensive loyalty program for our customers</div>
            </div>
            <div className="pros-section__team">
                <i className="fa-solid fa-people-group"></i>
                <h2 className="pros-section__team__title headline-xs">A team of professionals</h2>
                <div className="pros-section__team__paragraph link-l">Experienced specialists who have been certified by world vendors</div>
            </div>
            <div className="pros-section__experince">
                <i className="fa-solid fa-thumbs-up"></i>
                <h2 className="pros-section__experince__title headline-xs">Extensive work experince</h2>
                <div className="pros-section__experince__paragraph link-l">And we continue to develop successfully, as well as our customers</div>
            </div>
            <div className="pros-section__shipping">
                <i className="fa-solid fa-truck-fast"></i>
                <h2 className="pros-section__shipping__title headline-xs">Free shipping</h2>
                <div className="pros-section__shipping__paragraph link-l">Operational logistics at the expense of the supplier</div>
            </div>
        </div>
    </section>
  )
}

export default ProsSection