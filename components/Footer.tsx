import React from 'react'
import Image from 'next/image'
import { footerLinks } from '@/constant';

type ColumnProps = {
    title: string;
    links: Array<string>;
}

const FooterColumn = ({title, links}:
    ColumnProps) => {
    return (
        <div className='footer_column'>
            <h4 className='font-semibold'>Title</h4>
            <ul className='flex flex-xol gap-2 font-normal'>
                Links
            </ul>
        </div>
    );
}

const Footer = () => {
  return (
<footer className='flexStart footer'>
    <div className='flex flex-col gap-12 w-full'>
        <div className='flex items-start flex-col'>
            <Image 
            src='/logo.png'
            width={115}
            height={15}
            alt='logo'
            />

        </div>
        <p className='text-start text-sm font-normal mt-5 max-w-xs'>
       Fribble is the world&apos;s leading community for creatives to share, grow, and get hired.
       </p>
    </div>
    <div className='flex flex-wrap gap-12'>
        <FooterColumn title={footerLinks[0].title} links={footerLinks[0].links}/>

    </div>
</footer>

  )
}

export default Footer
