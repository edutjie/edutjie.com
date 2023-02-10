import { AppProps, type AppType } from 'next/app'

import { api } from '../utils/api'

import '../styles/globals.css'
import { Footer, Navbar } from '@elements'
import { ConfigProvider } from 'antd'

const MyApp: AppType = ({ Component, pageProps }: AppProps) => {
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
        <Footer />
      </ConfigProvider>
    </>
  )
}

export default api.withTRPC(MyApp)
