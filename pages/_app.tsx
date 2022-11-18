import '../styles/globals.css'
import type { AppProps } from 'next/app'
import axios from 'axios';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

export default function App({ Component, pageProps }: AppProps) {
  console.log(process.env.NEXT_PUBLIC_API_URL);
  return <Component {...pageProps} />
}
