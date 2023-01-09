import React from 'react'
import useGetApiDataFromEnpoint from '../../../../Hooks/useGetApiDataFromEnpoint'

const News = () => {
  const {state: news} = useGetApiDataFromEnpoint("news", "items")
  console.log("this is sstate ", news)
  return (
    <ul>
      {news.map(item => <li key={item.id}>{item.title}</li>)}
    </ul>
  )
}

export default News