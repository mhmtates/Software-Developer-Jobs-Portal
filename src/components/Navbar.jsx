
import logo from '../assets/images/logo.png';

const Navbar = () => {
    return (
        <nav className='bg-indigo-700 border-b border-indigo-500'>
          <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
            <div className='flex h-20 items-center justify-between'>
              <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-start'>
                <a className='flex flex-shrink-0 items-center mr-4' href='/'>
                  <img className='h-10 w-auto' src={logo} alt='React Jobs' />
                  <span className='hidden md:block text-white text-2xl font-bold ml-2'>
                     DevJobsPlatform
                  </span>
                </a>
                <div className='md:ml-auto'>
                  <div className='flex space-x-6 justify-items-end'>
                    <a href='/' className='font-bold text-2xl text-white'>AnaSayfa</a>
                    <a href='/jobs.html' className='font-bold text-2xl text-white '>İşler</a>
                    <a href='add-job.html' className='font-bold text-2xl text-white'>Yeni Bir İş Ekle</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      );
}

export default Navbar