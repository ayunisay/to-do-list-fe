// import { useState } from 'react'
import './App.css'
import '@radix-ui/themes/styles.css'
import { Theme, Container, Grid, Flex, Box, Text } from '@radix-ui/themes'
import LeftMenu from './LeftMenu'
import Overview from './Overview'

function App() {

  return (
    <>
      <Theme>
        <Container>
          <Grid columns='6' gap='2'>
            <LeftMenu />
            <Overview />
          </Grid>
        </Container>
      </Theme>
    </>
  )
}

export default App
