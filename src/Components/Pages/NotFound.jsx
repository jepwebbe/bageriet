import React from 'react'
import { Page } from '../App/Layout/Page'

const NotFound = () => {
  const path = window.location.href;
  const url = path.substring(path.lastIndexOf("/") + 1);

  return (
    <Page title={`siden ${url} blev ikke fundet`} description="denne side ikke fundet">
        <p>side {url} 404 - not found</p></Page>
  )
}

export default NotFound