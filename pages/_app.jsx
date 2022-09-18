import { useState } from 'react';
import Link from 'next/link';
import Header from '../components/Common/Navbar';
import Footer from '../components/Common/Footer';
import { BsTwitter } from 'react-icons/bs';
import Head from "next/head";
import '../styles/index.css';
import '../styles/globals.css';
import 'animate.css';


const navs = [
  {
    name: 'Home',
    link: '/',
  },
  
  {
    name: 'Who We Are',
    link: '/who-we-are'
  },
]

function MyApp({ Component, pageProps }) {
  const [showDrop, setShowDrop] = useState(false);
  const [mobilNav, setMobilNav] = useState(false);
  console.log(showDrop)
  return (
    <>
    <Head >
      <title>
        PALMVERSE
      </title>
    </Head>
      <Header showDrop={showDrop} setShowDrop={setShowDrop} mobilNav={mobilNav} setMobilNav={setMobilNav} className="a"/>
      {
        mobilNav ? (
          <>
            {
              mobilNav && (
                <div className=" nav-item  pb-6 pt-10  flex flex-col  absolute z-50 right-0 w-screen  top-24 bg-dark_bg h-[91vh] ">

                  <div className=" nav-item flex flex-col items-center  justify-center space-y-8 pt-20">
                    {
                      navs.map(nav => (
                        <Link
                          key={nav.link}
                          href={nav.link}

                        >
                          <h3 onClick={() => setMobilNav(false)} className="hover:text-[#13D511] text-2xl py-2 text-[#ECF7FD] transition-all font-semibold cursor-pointer ">

                            {nav.name}
                          </h3>
                        </Link>
                      ))
                    }

                    <div className="relative">



                      <h3 onClick={() => setShowDrop(!showDrop)} onMouseEnter={() => setShowDrop(true)} className="hover:text-[#13D511] text-2xl text-[#ECF7FD] transition-all font-semibold cursor-pointer ">
                        What We Build
                      </h3>

                      {
                        showDrop && (
                          <div className="bg-dark_bg  pl-3 pb-3 w-40" onMouseEnter={() => setShowDrop(true)} onMouseLeave={() => setShowDrop(false)}>
                            <Link
                              href={'first-location'}

                            >
                              <h3 onClick={() => setMobilNav(false)} className="hover:text-[#13D511] text-xl text-center pt-4  text-[#ECF7FD] transition-all font-semibold cursor-pointer ">
                                1st Location
                              </h3>
                            </Link>
                            <Link
                              href={'/roadmap'}

                            >
                              <h3 onClick={() => setMobilNav(false)} className="hover:text-[#13D511] text-xl text-center py-4 text-[#ECF7FD] transition-all font-semibold cursor-pointer ">
                                Roadmap
                              </h3>
                            </Link>
                            <a className="hover:text-[#13D511] text-xl text-center pt-4 text-[#ECF7FD] transition-all font-semibold cursor-pointer " href="https://www.book-palmverse.com/" target='_blank' rel="noreferrer" >

                              <h1 onClick={() => setMobilNav(false)} className="text-center">

                                Whitepaper
                              </h1>
                            </a>
                          </div>
                        )
                      }
                      <Link

                        href='/faq'

                      >
                        <h3 onClick={() => setMobilNav(false)} className="hover:text-[#13D511] text-2xl text-center py-10 text-[#ECF7FD] transition-all font-semibold cursor-pointer ">

                          FAQ
                        </h3>
                      </Link>
                       <a onClick={() => setMobilNav(false)} className="hover:text-[#13D511] text-2xl text-center text-[#ECF7FD] transition-all font-semibold cursor-pointer "  href="https://www.book-palmverse.com/" target='_blank' rel="noreferrer">
                        <h1 className="text-center"> Book</h1>

                      </a> */
                    </div>


                  </div>
                </div>)
            }
          </>
        ) : (
          <Component {...pageProps} />
        )
      }


      <Footer />
    </>
  );
}

export default MyApp;
