import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const activeLink = ({isActive}) => isActive ? 'bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2': 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2';

    return (
        <nav className='bg-cyan-700 border-b border-cyan-500'>
          <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
            <div className='flex h-20 items-center justify-between'>
              <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-start'>
                <NavLink className='flex flex-shrink-0 items-center mr-4' to='/'>
                  <img className='h-10 w-auto' src={logo} alt='React Jobs' />
                  <span className='hidden md:block text-white text-2xl font-bold ml-2'>
                     DevJobsPlatform
                  </span>
                </NavLink>
                <div className='md:ml-auto'>
                  <div className='flex space-x-6 justify-items-end'>
                    <NavLink to='/' className={activeLink}>
                    AnaSayfa
                    </NavLink>
                    <NavLink to='is-ilanlari' className={activeLink}>
                    İş İlanları
                    </NavLink>
                    <NavLink to='is-ilani-ekle' className={activeLink}>
                    Yeni Bir İş İlanı Ekle
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      );
}

export default Navbar