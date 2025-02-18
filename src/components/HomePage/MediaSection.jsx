import React from 'react'
import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/core/styles'

import { Grid, Container } from '@material-ui/core'
import Button from '../Button'

const useStyles = makeStyles(theme => ({
  blogMediaSection: {
    padding: '10rem 0 12rem',
    [theme.breakpoints.down('xs')]: {
      padding: '8rem 0'
    }
  },
  titleList: {
    display: 'flex',
    justifyContent: 'center'
  },
  title: {
    ...theme.custom.title2,
    margin: '0 3rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '3.4rem',
      marginBottom: '2rem'
    }
  },
  activeTitle: {
    color: theme.palette.primary.main,
    textDecoration: 'underline'
  },
  mediaSection: {},
  itemDate: {
    color: theme.palette.primary.main,
    marginBottom: '1.2rem'
  },
  button: {
    margin: '3rem auto'
  },
  mediaItem: {
    padding: '3rem 4rem 3rem',
    [theme.breakpoints.down('xs')]: {
      padding: '3rem 1rem 4rem'
    }
  },
  videoContainer: {
    position: 'relative',
    width: '100%',
    paddingTop: '56.25%', // for youtube embeds,
    marginBottom: '1.6rem'
  },
  iframeYT: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: '100%',
    height: '100%'
  },
  mediaItemTitle: {
    ...theme.custom.title5,
    color: theme.palette.secondary.dark,
    letterSpacing: '0.2px',
    marginTop: '-0.75rem'
  }
}))

const BlogMediaSection = props => {
  const theme = useTheme()
  const classes = useStyles()

  return (
    <section className={classes.blogMediaSection}>
      <Container>
        <h2 className={classes.title}>In the Media</h2>
        <div className={classes.mediaSection}>
          <Grid container>
            <Grid
              item
              xs={12}
              md={6}
              className={clsx(classes.mediaItem, classes.leftMediaItem)}
            >
              <div className={classes.videoContainer}>
                <iframe
                  title=''
                  src='https://www.youtube.com/embed/Bva8ARJrCog'
                  frameborder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowfullscreen
                  className={classes.iframeYT}
                />
              </div>
              <p className={classes.itemDate}>
                <time>11.07.19</time>
              </p>
              <h5 className={classes.mediaItemTitle}>
                DOMENIC ROMANO ON FOX BUSINESS NEWS – TRUMP ORDERS US COMPANIES
                OUT OF CHINA – 8/23/2019
              </h5>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              className={clsx(classes.mediaItem, classes.rightMediaItem)}
            >
              <div className={classes.videoContainer}>
                <iframe
                  title=''
                  src='https://www.youtube.com/embed/oiUsGImX4uY'
                  frameborder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowfullscreen
                  className={classes.iframeYT}
                />
              </div>
              <p className={classes.itemDate}>
                <time>11.07.19</time>
              </p>
              <h5 className={classes.mediaItemTitle}>
                DOMENIC ROMANO ON FOX BUSINESS NEWS – TRUMP ORDERS US COMPANIES
                OUT OF CHINA – 8/23/2019
              </h5>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              className={clsx(classes.mediaItem, classes.leftMediaItem)}
            >
              <div className={classes.videoContainer}>
                <iframe
                  title=''
                  src='https://www.youtube.com/embed/NJELMaBtUFY'
                  frameborder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowfullscreen
                  className={classes.iframeYT}
                />
              </div>
              <p className={classes.itemDate}>
                <time>11.07.19</time>
              </p>
              <h5 className={classes.mediaItemTitle}>
                DOMENIC ROMANO ON FOX BUSINESS NEWS – TRUMP ORDERS US COMPANIES
                OUT OF CHINA – 8/23/2019
              </h5>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              className={clsx(classes.mediaItem, classes.rightMediaItem)}
            >
              <div className={classes.videoContainer}>
                <iframe
                  title=''
                  src='https://www.youtube.com/embed/W4HDYa9kk_g'
                  frameborder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowfullscreen
                  className={classes.iframeYT}
                />
              </div>
              <p className={classes.itemDate}>
                <time>11.07.19</time>
              </p>
              <h5 className={classes.mediaItemTitle}>
                DOMENIC ROMANO ON FOX BUSINESS NEWS – TRUMP ORDERS US COMPANIES
                OUT OF CHINA – 8/23/2019
              </h5>
            </Grid>
          </Grid>
          {/* <Button
            isLink
            text='Visit our Media Page'
            extraClassName={classes.button}
          /> */}
        </div>
      </Container>
    </section>
  )
}

export default BlogMediaSection
