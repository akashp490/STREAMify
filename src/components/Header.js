import logo from '../media/logo1.png'

const Header = () => {
  return (
    <div className='absolute bg-gradient-to-b from-slate-950 z-10 w-full p-4 ' >   
      <img src={logo} alt='logo'/>
    </div>
  )
}

export default Header