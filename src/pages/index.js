import Home from '@/component/Home/Home'
import Layout from '../component/Layout'
import Season from '@/component/Season/Season'
import Head from 'next/head'
import Register from '@/component/Register/Register'
import Contact from '@/component/Contact/Contact'
import Price from '@/component/Price/Price'

export default function HomePage() {
  return (
    

    <div 
    className=' scroll-smooth'>

    <Head>
      <title>Zeebturney</title>
      <link rel='icon' href='/Brosur logo ML.png'/>
    </Head>
    <Layout>
     <Home/>
     <Season/>
     <Price/>
     <Register/>
     <Contact/>
    </Layout>
    </div>
   
   
  )
}
