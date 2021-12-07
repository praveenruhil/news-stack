import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'normalize.css'
import '@blueprintjs/core/lib/css/blueprint.css'
import '@blueprintjs/icons/lib/css/blueprint-icons.css'

//import { Card } from '@blueprintjs/core'
import { QueryClient, QueryClientProvider } from 'react-query'

import HackerNews from './HackerNews'
import Header from './Header'
import GoogleNews from './Google/GoogleNews'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
})

function App() {
  return (
    <div>
      <Header />
      <Tabs
        defaultActiveKey="hacker"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="hacker" title="Hacker News">
          <QueryClientProvider client={queryClient}>
            <HackerNews />
          </QueryClientProvider>
        </Tab>
        <Tab eventKey="google" title="Google News">
          <GoogleNews />
        </Tab>
      </Tabs>
    </div>
  )
}

export default App
