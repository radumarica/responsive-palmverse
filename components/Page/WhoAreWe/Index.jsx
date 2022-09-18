import Image from "next/image";
import { useState } from "react";
const WhoWeAre = () => (
  <>
    <div className=" relative" >
      <h2 className="absolute hidden md:block text-white z-20 left-10 text-4xl font-exo font-bold top-1/2 -translate-y-1/2" >{"OUR STORY".split("").map((x => <span key={x} className={`block ${x === " " ? "my-6" : "my-2"}`}>{x}</span>))}</h2>
      <iframe allowFullScreen src="https://www.youtube.com/embed/f2ECpxB2CE8" className="w-full h-[390px] md:h-[600px] md:px-36 bg-black " />
    </div>

    <section className="pb-10  bg-dark_bg text-white flex flex-col justify-center  font-exo">
      <div className="w-full bg-[#ECF7FD]">

        <h1 className="md:text-4xl text-[24px] leading-7 font-bold text-black py-2  text-center mx-auto px-3 max-985">
          Shaping Palmverse: Building an NFT Community-Based Hotel & Hostel Chain
          From Scratch{" "}
        </h1>
      </div>
      <li className="text-[21px] md:text-3xl font-bold leading-[28px] mt-4  flex justify-center mr-4   ">
        <h1 className="text-left px-4">
          Why don’t we make an NFT project with real-life utilities?
        </h1>
      </li>
      <ul className="pb-10 pt-2 px-4 flex flex-col justify-start space-y-2 max-1100 ">
        <div className="relative">
          <li className="text-[18px] leading-[19px]">
            <h1 className="text-left   pt-4">
              That was the beginning of the Palmverse project.
            </h1>
          </li>
        </div>
        <li className="text-[18px] leading-8">
          <h1 className="text-left font-light ">
            It all started with a simple question.
          </h1>
        </li>
        <li className="text-[18px] ">
          <h1 className="text-left font-light  leading-[22px]  ">
            Sorin, my best friend, and I were discussing NFT projects over dinner in
            February 2022. We felt like something was lacking,  something that could
            be changed to benefit other NFT enthusiasts, including ourselves.
          </h1>
        </li>
        <li className="text-[18px]  ">
          <h1 className="text-left font-light  md:leading-8 leading-6 ">
            Let’s build an NFT hotel chain where holders can come and enjoy
            discounts. — Sorin suggested
          </h1>
        </li>
        <li className="text-[18px] md:leading-8 leading-6  ">
          <h1 className="text-left font-light  ">
            We did manage multiple businesses, from e-commerce brands to Airbnb
            vacation houses.
          </h1>
        </li>
        <li className="text-[18px] md:leading-8 leading-6  ">
          <h1 className="text-left font-light ">
            But could we build something even greater?
          </h1>
        </li>
        <li className="text-[18px] md:leading-8 leading-6  ">
          <h1 className="text-left font-light ">
            Continue reading the full story here at medium:{" "}
            <a
              className="underline underline-offset-4"
              href="https://medium.com/@palmverse/shaping-palmverse-building-an-nft-community-based-hotel-hostel-chain-from-scratch-ecbb05501630"
              target="_black"
            >
              Medium{" "}
            </a>
          </h1>
        </li>
      </ul>
      <div className="hidden md:block team-sec">


        <h1 className="text-4xl text-center font-bold ">TEAM</h1>
        <div className="flex flex-wrap   mx-auto justify-evenly pt-10 ">
          <Profile />
          <Sorin />
        </div>

        <div className="flex flex-wrap  mx-auto  justify-evenly pt-16">
          <BOB />
          <Radu />
          <Razwan />
        </div>
        <div className="flex flex-wrap  mx-auto justify-evenly pt-16">
          <Rizwan />
          <Jack />
        </div>

        <h1 className="text-4xl text-center font-bold pt-10 ">Legal Advisor</h1>
        <div className="flex flex-wrap  mx-auto justify-evenly pt-10">
          <Daniel />
        </div>
      </div>
      <div className="md:hidden team-sec">


        <h1 className="text-4xl text-center font-bold ">TEAM</h1>
        <div className="grid grid-cols-2 gap-2 px-1  pt-10">
          <Profile />
          <Sorin />
        </div>

        <div className="grid grid-cols-2 gap-2 px-1  pt-10 place-content-center ">
          <BOB />
          <Radu />
          <Razwan />
        </div>
        <div className="grid grid-cols-2 gap-2 px-1  pt-10">
          <Rizwan />
          <Jack />
        </div>

        <h1 className="text-4xl text-center font-bold pt-10 ">Legal Advisor</h1>
        <div className="flex flex-wrap mx-auto justify-evenly pt-10">
          <Daniel />
        </div>
      </div>
    </section>
  </>
);

export default WhoWeAre;

const Profile = () => {
  const [show, setShow] = useState(true)
  return (
    <div className="md:px-4">
      {
        show ? (<div onMouseEnter={() => setShow(false)} onMouseLeave={() => setShow(true)} onClick={() => setShow(!show)} className="p-3 bg-dark_bg border-[1px] border-gray-600 cursor-pointer rounded  ">
          <div className="md:h-64 h-44 md:w-64  mx-auto ">
            <div className="h-full w-full relative ">
              <Image src="/images/dragos.webp" layout="fill" alt="Profile" className="object-cover" />
            </div>
          </div>
          <div className="py-2 h-[76px] flex justify-center flex-col">
            <h1 className="font-bold text-sm md:text-lg md:text-center " >DRAGOS OVIDIU OLTEANU</h1>
            <p className="font-bold text-sm md:text-base md:text-center ">Co-Founder, CEO</p>
          </div>
        </div>) : (<div onMouseEnter={() => setShow(false)} onMouseLeave={() => setShow(true)} className="p-3 bg-dark_bg border-[1px] h-[278px] md:h-[358px] w-[191px] md:w-[282px] border-gray-600 cursor-pointer rounded duration-300 flex flex-col space-y-2 overflow-y-scroll">
          <p className="text-left text-[8px] md:text-sm md:text-sm">
            Dragos finished his MSc degree in Sustainable Energy Engineering with a focus on sustainable energy building from Aalborg University Denmark and TU Delft Netherland.
          </p>

          <p className="text-left text-[8px] md:text-sm md:text-sm">
            Founder and CEO of E-commerce companies, involved in the development of several product design projects.
          </p>

          <p className="text-left text-[8px] md:text-sm md:text-sm">
            Speaker at E-commerce Conference in Miami, invited by the Romanian American Chamber of Commerce.
          </p>
          <p className="text-left text-[8px] md:text-sm md:text-sm">
            More than 7 years experience in project management and more than 5 years of entrepreneurial expertise, including several projects of building Sustainable Energy Buildings.
          </p>
          <p className="text-left text-[8px] md:text-sm md:text-sm">
            2 Years of part-time Cryptocurrency trading experience and NFT expertise.
          </p>

        </div>)
      }
    </div>
  );
};
const Sorin = () => {
  const [show, setShow] = useState(true)
  return (
    <div className="md:px-4">
      {
        show ? (<div onMouseEnter={() => setShow(false)} onMouseLeave={() => setShow(true)} onClick={() => setShow(!show)} className="p-3 bg-dark_bg border-[1px] border-gray-600 cursor-pointer rounded  ">
          <div className="md:h-64 h-44 md:w-64  mx-auto ">
            <div className="h-full w-full relative ">
              <Image src="/images/team/sorin.JPG" layout="fill" alt="Profile" className="object-cover" />
            </div>
          </div>
          <div className="py-2 h-[76px] flex justify-center flex-col">
            <h1 className="font-bold text-sm md:text-lg md:text-center " >SORIN HALIT</h1>
            <p className="font-bold text-sm md:text-base md:text-center ">Co-Founder, CTO</p>
          </div>
        </div>) : (<div onMouseEnter={() => setShow(false)} onMouseLeave={() => setShow(true)} className="p-3 bg-dark_bg border-[1px] h-[278px] md:h-[358px] w-[191px] md:w-[282px] border-gray-600 cursor-pointer rounded duration-300 flex flex-col space-y-2 overflow-auto ">
          <p className="text-left text-[8px] md:text-sm">
            Sorin finished his BA in Business Management at Coventry University, in the UK.
          </p>

          <p className="text-left text-[8px] md:text-sm">
            More than 7 years of business experience, handling the general management and supply chain of a tire warehouse in Europe, working closely with suppliers such as Michelin and Continental.
          </p>

          <p className="text-left text-[8px] md:text-sm">
            Built and managed small vacation homes on the Black Sea Coast. Over 1 year of boat driving experience.
          </p>
          <p className="text-left text-[8px] md:text-sm">
            More than 4 years of experience in product development/e-com business. First contact with crypto in 2017, and full time since the beginning of 2021. Deep knowledge of the Solana ecosystem.
          </p>
        </div>)
      }
    </div>
  );
};
const BOB = () => {
  const [show, setShow] = useState(true)
  return (
    <div className="md:px-4">
      {
        show ? (<div onMouseEnter={() => setShow(false)} onMouseLeave={() => setShow(true)} onClick={() => setShow(!show)} className="p-3 bg-dark_bg border-[1px] border-gray-600 cursor-pointer rounded  ">
          <div className="md:h-64 h-44 md:w-64  mx-auto ">
            <div className="h-full w-full relative ">
              <Image src="/images/team/boundless.png" layout="fill" alt="Profile" className="object-cover" />
            </div>
          </div>
          <div className="py-2 h-[76px] flex justify-center flex-col">
            <h1 className="font-bold text-sm md:text-lg md:text-center " >BOB</h1>
            <p className="font-bold text-sm md:text-base md:text-center ">Marketing Manager</p>
          </div>
        </div>) : (<div onMouseEnter={() => setShow(false)} onMouseLeave={() => setShow(true)} className="p-3 bg-dark_bg border-[1px] h-[278px] md:h-[358px] w-[191px] md:w-[282px] border-gray-600 cursor-pointer rounded duration-300 flex flex-col space-y-2 ">
          <p className="text-left text-[8px] md:text-sm">
            Web3 native Crypto/NFT Investor & Collector.
          </p>

          <p className="text-left text-[8px] md:text-sm">
            Setting and implementing social media/communication and relationship campaigns to align with marketing strategies.
          </p>

          <p className="text-left text-[8px] md:text-sm">
            Built and managed small vacation homes on the Black Sea Coast. Over 1 year of boat driving experience.
          </p>
        </div>)
      }
    </div>
  );
};
const Radu = () => {
  const [show, setShow] = useState(true)
  return (
    <div className="md:px-4">
      {
        show ? (<div onMouseEnter={() => setShow(false)} onMouseLeave={() => setShow(true)} onClick={() => setShow(!show)} className="p-3 bg-dark_bg border-[1px] border-gray-600 cursor-pointer rounded  ">
          <div className="md:h-64 h-44 md:w-64  mx-auto ">
            <div className="h-full w-full relative ">
              <Image src="/images/team/radu.jpg" layout="fill" alt="Profile" className="object-cover" />
            </div>
          </div>
          <div className="py-2 h-[76px] flex justify-center flex-col">
            <h1 className="font-bold text-sm md:text-lg md:text-center " >RADU MARICA</h1>
            <p className="font-bold text-sm md:text-base md:text-center ">Technical Lead</p>
          </div>
        </div>) : (<div onMouseEnter={() => setShow(false)} onMouseLeave={() => setShow(true)} className="p-3 bg-dark_bg border-[1px] h-[278px] md:h-[358px] w-[191px] md:w-[282px] border-gray-600 cursor-pointer rounded duration-300  flex flex-col space-y-2 ">
          <p className="text-left text-[8px] md:text-sm">
            Radu finished his bachelors in Electronics and Computer Engineering, at Aalborg University Denmark.
          </p>

          <p className="text-left text-[8px] md:text-sm">
            More than 5 years of experience working in multiple projects, becoming an expert in Java Web Development, Complex Mathematical Modelling, Robotics, Cryptography in Kali Linux, Applied Machine Learning, Swarm Intelligence, Blockchain Technology.
          </p>
        </div>)
      }
    </div>
  );
};
const Razwan = () => {
  const [show, setShow] = useState(true)
  return (
    <div className="md:px-4">
      {
        show ? (<div onMouseEnter={() => setShow(false)} onMouseLeave={() => setShow(true)} onClick={() => setShow(!show)} className="p-3 bg-dark_bg border-[1px] border-gray-600 cursor-pointer rounded  ">
          <div className="md:h-64 h-44 md:w-64  mx-auto ">
            <div className="h-full w-full relative ">
              <Image src="/images/team/razwan.jpg" layout="fill" alt="Profile" className="object-cover" />
            </div>
          </div>
          <div className="py-2 h-[76px] flex justify-center flex-col">
            <h1 className="font-bold text-sm md:text-lg md:text-center " >RAZVAN GRIGORESCU</h1>
            <p className="font-bold text-sm md:text-base md:text-center ">Senior Architect</p>
          </div>
        </div>) : (<div onMouseEnter={() => setShow(false)} onMouseLeave={() => setShow(true)} className="p-3 bg-dark_bg border-[1px] h-[278px] md:h-[358px] w-[191px] md:w-[282px] border-gray-600 cursor-pointer rounded duration-300  flex flex-col space-y-2 ">
          <p className="text-left text-[8px] md:text-sm">
            AutoCAD and 3ds Max expertise.
          </p>

          <p className="text-left text-[8px] md:text-sm">
            BIM 350 and Archicad expert.
          </p>

          <p className="text-left text-[8px] md:text-sm">
            Designed the initial structures of 30+ residential and commercial Buildings.
          </p>

          <p className="text-left text-[8px] md:text-sm">
            Worked closely with developers and project managers in order to deliver optimal building solutions.
          </p>
        </div>)
      }
    </div>
  );
};
const Daniel = () => {
  const [show, setShow] = useState(true)
  return (
    <div className="md:px-4">
      {
        show ? (<div onMouseEnter={() => setShow(false)} onMouseLeave={() => setShow(true)} onClick={() => setShow(!show)} className="p-3 bg-dark_bg border-[1px] border-gray-600 cursor-pointer rounded  ">
          <div className="md:h-64 h-44 md:w-64  mx-auto ">
            <div className="h-full w-full relative ">
              <Image src="/images/team/daniel.png" layout="fill" alt="Profile" className="object-cover" />
            </div>
          </div>
          <div className="py-2 h-[76px] flex justify-center flex-col">
            <h1 className="font-bold text-sm md:text-lg md:text-center " >DANIEL RODRIGUEZ MAFFIOLI</h1>
            <p className="font-bold text-sm md:text-base md:text-center ">Legal Advisor</p>
            <a href="https://www.ecija.com" target='_blank' rel="noreferrer">
              <p className="font-bold text-base text-center ">https://www.ecija.com</p>
            </a>
          </div>
        </div>) : (<div onMouseEnter={() => setShow(false)} onMouseLeave={() => setShow(true)} className="p-3 bg-dark_bg border-[1px] h-[278px] md:h-[358px] w-[191px] md:w-[282px] border-gray-600 cursor-pointer rounded duration-300  flex flex-col space-y-2 overflow-auto ">
          <p className="text-left text-[8px] md:text-sm">
            Lawyer specializing in IT law, digital policy and data protection at ÉCIJA Centroamérica where he advises companies and organizations in all technology related matters and transactions. Daniel runs  the Privacy and Data Foundation PRIDAT, an NGO that promotes digital privacy and literacy and has been a consultant to the Inter-American Development Bank (IDB) and the government of Costa Rica in the design of a framework for the ethical and responsible use of AI in Costa Rica.
          </p>

          <p className="text-left text-[8px] md:text-sm">
            Currently an LLM candidate in Technology & IP Law at Duke University, and a Fulbright Scholar.  Daniel holds a Masters degree in Regulated Industries Law from Universidad Carlos III de Madrid (UC3M), and a professional course in Regulation and Data Policy from the London School of Economics (LSE).
          </p>
        </div>)
      }
    </div>
  );
};
const Rizwan = () => {
  const [show, setShow] = useState(true)
  return (
    <div className="md:px-4">
      {
        show ? (<div className="p-3 bg-dark_bg border-[1px] border-gray-600 cursor-pointer rounded  ">
          <div className="md:h-64 h-44 md:w-64  mx-auto ">
            <div className="h-full w-full relative ">
              <Image src="/images/team/Riz.png" layout="fill" alt="Profile" className="object-cover" />
            </div>
          </div>
          <div className="py-2 h-[76px] flex justify-center flex-col">
            <h1 className="font-bold text-sm md:text-lg md:text-center " >RIZ</h1>
            <p className="font-bold text-sm md:text-base md:text-center ">Full - Stack Developer</p>
          </div>
        </div>) : (<div onMouseEnter={() => setShow(false)} onMouseLeave={() => setShow(true)} className="p-3 bg-dark_bg border-[1px] h-[278px] md:h-[358px] w-[191px] md:w-[282px] border-gray-600 cursor-pointer rounded duration-300 ">
        </div>)
      }
    </div>
  );
};
const Jack = () => {
  const [show, setShow] = useState(true)
  return (
    <div className="md:px-4">
      {
        show ? (<div className="p-3 bg-dark_bg border-[1px] border-gray-600 cursor-pointer rounded  ">
          <div className="md:h-64 h-44 md:w-64  mx-auto ">
            <div className="h-full w-full relative ">
              <Image src="/images/team/Jack.png" layout="fill" alt="Profile" className="object-cover" />
            </div>
          </div>
          <div className="py-2 h-[76px] flex justify-center flex-col">
            <h1 className="font-bold text-sm md:text-lg md:text-center " >Jack</h1>
            <p className="font-bold text-sm md:text-base md:text-center ">Full - Stack Developer</p>
          </div>
        </div>) : (<div onMouseEnter={() => setShow(false)} onMouseLeave={() => setShow(true)} className="p-3 bg-dark_bg border-[1px] h-[278px] md:h-[358px] w-[191px] md:w-[282px] border-gray-600 cursor-pointer rounded duration-300 ">
        </div>)
      }
    </div>
  );
};



