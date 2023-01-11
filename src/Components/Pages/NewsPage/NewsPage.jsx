import React from 'react'
import { Link } from 'react-router-dom'
import useGetApiDataFromEnpoint from '../../../Hooks/useGetApiDataFromEnpoint'
import { NewsStyled } from '../Home/News.Styled'

const NewsPage = () => {
  // uses the custom hook to fetch news and mappes over them
  const {state: allNews} = useGetApiDataFromEnpoint("news", "items")
  return (
    <NewsStyled>
      <h2>Vi skaber lækkert brød</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat ipsam esse provident, facilis sint inventore quasi. Nam, rem aut. </p>
      <div>
        {allNews
        .map(item =>
          <article key={item.id}>
            <img src={item.image} alt="Billede, der illustrerer nyheden" />
            <Link to={item.id}>
                <h3>{item.title.toUpperCase().substring(0, 50)}</h3>
            </Link>
            <p>{item.teaser.substring(0, 150)}</p>
            </article>)}
      </div>
    </NewsStyled>
  )
}

export default NewsPage