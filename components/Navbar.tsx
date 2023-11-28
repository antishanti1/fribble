import Link from 'next/link'
import Image from 'next/image'
import { NavLinks } from '@/constant'
import { link } from 'fs'
import AuthProviders from './AuthProvider'


const  Navbar = () => {
    const session = {};
  return (
 <nav className='flexBetween navbar'>
    <div className=' flex flex-1 flex-start gap-10 items-center'>
        <Link href='/'>
        <Image 
        src='/logo.png'
        width={115}
        height={15}
        alt='logo'
        />    </Link>
        <ul className='xl:flex hidden text-small gap-7'>
         {
            NavLinks.map((link) => (
                <Link href={link.href} key={link.key}>
                     {link.text}
                </Link>


            ))
         }
        </ul>
    
     </div>

     <div className='flexCenter gap-4'>
        {session ? (
            <>
            UserPhoto
            <Link href='/create-project'>
                Share Work
            </Link>
            </>
        ) : (
            <AuthProviders />
        )
        
        }
     </div>
 </nav>
  )
}

export default Navbar
