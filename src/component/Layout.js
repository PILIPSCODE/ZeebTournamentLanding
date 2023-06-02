import Navbar from './navbar/Navbar'


export default function layout({children}) {
  return (

      <div>

      <Navbar/>
      <div>{children}</div>

      </div>
   
  )
}
