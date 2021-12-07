import React from 'react'

import { useQuery } from 'react-query'
import { Spinner } from '@blueprintjs/core'

import { Grid } from './styled'
import { hnAxios } from './hnAxios'
import NewsCard from './HNewsCard'

const topNews = () => hnAxios.get('topstories.json')

export default function HackerNews() {
  const { data = [], isLoading } = useQuery(['hn-topstories'], topNews, {})

  if (isLoading) {
    return <Spinner size={40} />
  }

  const topData = data.data.slice(0, 50)

  return (
    <div>
      <Grid>
        {topData.map(id => (
          <NewsCard key={id} id={id} />
        ))}
      </Grid>
    </div>
  )
}
