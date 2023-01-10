import React from 'react'
import useGetApiDataFromEnpoint from '../../../Hooks/useGetApiDataFromEnpoint'
import { NewsStyled } from './News.Styled'

const News = () => {
  // uses the custom hook to fetch news and mappes over them
  const {state: news} = useGetApiDataFromEnpoint("news", "items")
  return (
    <NewsStyled>
      <h2>Vi skaber lækkert brød</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat ipsam esse provident, facilis sint inventore quasi. Nam, rem aut. </p>
      <div>
        {news
        .slice(-3, news.length)
        .map(item =>
          <article key={item.id}>
            <img src={item.image} alt="Billede, der illustrerer nyheden" />
            <h3>{item.title.toUpperCase().substring(0, 50)}</h3>
            <p>{item.teaser.substring(0, 150)}</p>
            </article>)}
      </div>
    </NewsStyled>
  )
}

export default News