import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Button, Card, CardContent, Grid, makeStyles } from '@material-ui/core'
import noImage from './images/noimage.jpeg'

function GoogleNewsApi() {
  const [result, setResult] = useState([])
  const [keyword, setKeyword] = useState('Hoboken')

  const useStyles = makeStyles({
    card: {
      maxWidth: 250,
      height: 'auto',
      marginLeft: 'auto',
      marginRight: 'auto',
      borderRadius: 5,
      border: '1px solid #1e8678',
      boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);',
    },
    titleHead: {
      borderBottom: '1px solid #1e8678',
      fontWeight: 'bold',
      color: 'black',
    },
    grid: {
      flexGrow: 1,
      flexDirection: 'row',
    },
    media: {
      height: '300px',
      width: '300px',
    },
    button: {
      color: '#1e8678',
      fontWeight: 'bold',
      fontSize: 12,
    },
  })

  const classes = useStyles()

  useEffect(() => {
    async function fetchData() {
      //  let keyword='Stevens Institute Of Technology';
      try {
        console.log('hi')
        const { data } = await axios.get(
          `https://newsapi.org/v2/everything?q=+${keyword}+&apiKey=5aa1805d7d0742469916d9c601a1ba49`,
        )
        setResult(data.articles)
        console.log(result)
      } catch (e) {
        //   setLoading(true);
        console.log(e)
      }
    }

    fetchData()
  }, [keyword])

  const buildCard = article => {
    return (
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={article.content}>
        <Card className={classes.card}>
          <a target="_blank" href={article.url} rel="noreferrer">
            <img
              className={classes.media}
              src={article.urlToImage ? article.urlToImage : noImage}
              title="show image"
              alt="No Image"
            />

            <CardContent>
              <p className={classes.titleHead}>{article.title}</p>
              <p>
                {article.description ? article.description : 'No Description'}
              </p>
            </CardContent>
          </a>
        </Card>
      </Grid>
    )
  }

  let card =
    result.length &&
    result.map(article => {
      return buildCard(article)
    })

  if (result.length > 0) {
    return (
      <div>
        <h1>Top Headlines about {keyword}</h1>
        <form
          method="POST"
          onSubmit={e => {
            console.log('test')
            e.preventDefault()

            setKeyword(e.target.term.value)
            e.target.term.value = ''
          }}
          name="formName"
          className="center"
        >
          <label>
            <input autoComplete="off" type="text" name="term" />
            <Button type="submit">Search</Button>
          </label>
        </form>

        <Grid container className={classes.grid} spacing={5}>
          {card}
        </Grid>
      </div>
    )
  } else {
    return (
      <div>
        <p>Loading...</p>
      </div>
    )
  }
}

export default GoogleNewsApi
