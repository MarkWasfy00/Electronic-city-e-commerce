import Image from "next/image"
// checked


const NewsCard = () => {
  return (
    <article className="news-card">
      <div className="news-card__head">
        <Image src="/3.jpg" alt='news'  layout='fill'  />
      </div>
      <div className="news-card__info">
        <div className="news-card__info__history link-xxs">28.12.2022</div>
        <div className="news-card__info__title link-l-bold">Huawei Sound X speaker received a powerful speaker system</div>
        <div className="news-card__info__description link-s">Huawei today introduced not only laptop and a TV, but also a smart speaker</div>
        <a href="#" className="news-card__info__read-more link-s">Read more {'>'}</a>
      </div>
    </article>
  )
}

export default NewsCard