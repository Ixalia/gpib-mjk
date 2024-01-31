import { Footer, FooterLink } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsWhatsapp, BsInstagram, BsYoutube, BsTiktok } from 'react-icons/bs'

export default function FooterCom() {
    return (
        <Footer container className='border border-t-8 border-teal-500'>
            <div className='w-full max-w-7xl mx-auto'>
                <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
                    <div className='mt-5'>
                        <Link to="/" className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'>
                            <span className='px-2 py-1 bg-gradient-to-r from-green-500 to-lime-500 rounded-lg text-white'>GPIB</span>
                            Immanuel Mojokerto
                        </Link>
                    </div>
                    <div className='grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6'>
                        <div>
                            <Footer.Title title='Tentang' />
                            <Footer.LinkGroup col>
                                <Footer.Link
                                    href='#'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    Konten 1
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title='Ikuti Kami' />
                            <Footer.LinkGroup col>
                                <Footer.Link
                                    href='#'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    Konten 2
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title='Lainnya' />
                            <Footer.LinkGroup col>
                                <Footer.Link
                                    href='#'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    Konten 3
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                <Footer.Divider />
                <div className='w-full sm:flex sm:items-center sm:justify-between'>
                    <Footer.Copyright href='' by='Multimedia GPIB Immanuel Mojokerto' year={new Date().getFullYear()}/>
                    <div className='flex gap-4 mt-4 sm:mt-0 sm:justify-center'>
                        <Footer.Icon href='#' icon={BsFacebook} />
                        <Footer.Icon href='#' icon={BsWhatsapp} />
                        <Footer.Icon href='#' icon={BsInstagram} />
                        <Footer.Icon href='#' icon={BsYoutube} />
                        <Footer.Icon href='#' icon={BsTiktok} />
                    </div>
                </div>
            </div>
        </Footer>
    )
}