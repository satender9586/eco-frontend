import React from 'react'
import Layout from './Layout'
import ContactPage from './ContactPage'
import { Box } from '@chakra-ui/react'

const Contact = () => {
  return (
<>
    <Layout>
        <Box >
            <ContactPage/>
        </Box>
    </Layout>
</>
  )
}

export default Contact