import { useState } from "react";
import { Navbar } from "flowbite-react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from 'next/link'
import { BsTwitter } from "react-icons/bs";

const navs = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'Who We Are',
        link: '/who-we-are'
    },



]

const Header = ({ showDrop, setShowDrop, mobilNav, setMobilNav }) => {

    const router = useRouter();
    const { pathname } = router;

    // const isActive = (link) => link === pathname;



    return <Navbar
        className="darkbg"
        fluid={true}
        style={{ fontFamily: "'Exo 2', ' sans- serif'", backgroundColor: '#2A2A29', borderBottom: '1px solid gray', height: '100px', padding: "1rem 0.3rem" }}
    >
        <Navbar.Brand href="/">
            <div className="hidden md:block tab-nav-logo">

                <Image
                    src="/images/logo.png"
                    height={70}
                    width={70}
                    layout="fixed"
                    alt="Palmverse Logo"
                />
            </div>
            <div className=" md:hidden">

                <Image
                    src="/images/logo.png"
                    height={80}
                    width={80}
                    layout="fixed"
                    alt="Palmverse Logo"
                />
            </div>
            <span className="palm whitespace-nowrap text-[32px] md:text-[40px] font-semibold pl-1  md:pl-2  text-[#ECF7FD]">
                PALMVERSE
            </span>
        </Navbar.Brand>
        <a className="hover:text-[#13D511] text-lg text-[#ECF7FD] transition-all font-semibold cursor-pointer pr-3 absolute z-50 top-7 right-[11%] md:hidden  translate-y-1/2 " href="https://twitter.com/palmverse" target='_blank' rel="noreferrer" >
            <BsTwitter className="text-[#ECF7FD] text-3xl" />

        </a>
        <Navbar.Toggle onClick={() => setMobilNav(!mobilNav)} />
        <Navbar.Collapse>
            {
                navs.map(nav => (
                    <Link
                        key={nav.link}
                        href={nav.link}

                    >
                        <h3 className="hover:text-[#13D511] text-lg text-[#ECF7FD] transition-all font-semibold cursor-pointer ">

                            {nav.name}
                        </h3>
                    </Link>
                ))
            }
            {<div className="relative">



                <h3 onMouseEnter={() => setShowDrop(true)} className="hover:text-[#13D511] text-lg text-[#ECF7FD] transition-all font-semibold cursor-pointer ">
                    What We Build
                </h3>

                {
                    showDrop && (
                        <div className="absolute z-10 top-8 -left-2   bg-dark_bg pr-5 pl-3 pb-3 w-40" onMouseEnter={() => setShowDrop(true)} onMouseLeave={() => setShowDrop(false)}>
                            <Link
                                href={'first-location'}

                            >
                                <h3 className="hover:text-[#13D511] text-center text-lg text-[#ECF7FD] transition-all font-semibold cursor-pointer ">
                                    1st Location
                                </h3>
                            </Link>
                            <Link
                                href={'/roadmap'}

                            >
                                <h3 className="hover:text-[#13D511] text-center text-lg text-[#ECF7FD] transition-all font-semibold cursor-pointer ">
                                    Roadmap
                                </h3>
                            </Link>
                            <a className="hover:text-[#13D511] text-center text-lg text-[#ECF7FD] transition-all font-semibold cursor-pointer " href="https://www.book-palmverse.com/" target='_blank' rel="noreferrer" >
                                <h3 className="text-center">
                                    Whitepaper
                                </h3>

                            </a>
                        </div>
                    )
                }
            </div>
            }


            <Link

                href='/faq'

            >
                <h3 className="hover:text-[#13D511] text-lg text-[#ECF7FD] transition-all font-semibold cursor-pointer ">
                    FAQ
                </h3>


            </Link>

            <a className="hover:text-[#13D511] text-lg text-[#ECF7FD] transition-all font-semibold cursor-pointer " rel="noreferrer" href="https://www.book-palmverse.com/" target='_blank'>
                Book

            </a>
            <a className="hover:text-[#13D511] text-lg text-[#ECF7FD] transition-all font-semibold cursor-pointer pr-3 " href="https://twitter.com/palmverse" target='_blank' rel="noreferrer" >
                <BsTwitter className="text-[#ECF7FD] text-2xl" />

            </a>
        </Navbar.Collapse>

    </Navbar>
}



export default Header