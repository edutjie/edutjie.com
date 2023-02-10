import { type AppType } from 'next/app'

import { api } from '../utils/api'

import '../styles/globals.css'
import { Navbar } from '@elements'
import { ConfigProvider } from 'antd'

// eslint-disable-next-line react/prop-types
const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            fontFamily: 'Inter',
          },
        }}
      >
        <Navbar />
        <Component {...pageProps} />
      </ConfigProvider>
    </>
  )
}

export default api.withTRPC(MyApp)
