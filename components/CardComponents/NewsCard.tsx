import React from 'react'




const NewsCard = () => {
  return (
    <article className="news-card">
      <div className="news-card__head">
        <img src="/3.jpg" width={'100%'} height={200} />
      </div>
      <div className="news-card__history link-xxs">28.12.2022</div>
      <div className="news-card__title link-l-bold">Huawei Sound X speaker received a powerful speaker system</div>
      <div className="news-card__description link-s">Huawei today introduced not only laptop and a TV, but also a smart speaker</div>
      <a href="#" className="news-card__read-more link-s">Read more {'>'}</a>
    </article>
  )
}

export default NewsCard