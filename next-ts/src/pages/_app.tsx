import { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Component {...pageProps} />
      <style global jsx>{`
        :root {
          --link-color: #1A0DAB;
        }
        a {
          color: var(--link-color);
        }
        a:hover {
          border-bottom: 0.2rem solid var(--link-color);
        }
      `}</style>
    </>
  )
}

export default App