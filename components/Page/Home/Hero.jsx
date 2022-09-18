import Image from "next/dist/client/image"
import { HiArrowNarrowRight } from 'react-icons/hi'
import Link from 'next/link'
// const firstSetIcons = [
//     '/icons/hotel.png',
//     '/icons/pay.png',
//     '/icons/group.png',

// ]

const firstSetIcons = [
    {
        link: '/icons/hotel.png',
        title: 'PHYSICAL NFT HOTEL & HOSTEL'
    },
    {
        link: '/icons/pay.png',
        title: 'CRYPTO BOOKING PLATFORM'
    },
    {
        link: '/icons/hotel.png',
        title: 'NFTS AS MEMBERSHIP DAO ACCESS'
    },
]

const Hero = () => {
    return <section className="w-full flex flex-col items-center bg-dark_bg text-white px-5 pt-5 pb-16 font-exo">
        <div className="hidden md:block wp-home-content">
            <div className=" items-center">
                <h1 className="md:text-[46px] text-[28px] font-bold text-center text-[#ECF7FD] ">THE 1ST NFT HOTEL & HOSTEL CHAIN </h1>
                <p className=" hidden md:flex justify-center text-[28px]  md:text-[30px] leading-9 text-center pb-10 pt-5 px-4 text-[#ECF7FD]  ">Palmverse builds technologies that help people connect IRL, <br className="md:hidden" /> join communities,<br className="hidden md:block" /> and bridge the web2 travel experience to web3.</p>

                <div className="w-screen overflow-x-auto md:hidden">
                    <p className="md:text-[32px]  text-[22px] text-center py-10 font-bold  text-[#ECF7FD]  ">{
                        "Palmverse builds technologies that help people connect IRL join communities, and bridge the web2 travel experience to web4.".split(" ").map((word, index) => (<span key={index}>{`${word} `}.</span>))
                    }</p>
                </div>
                <div className="flex  space-y-10 md:space-y-0 items-center md:py-5 py-10  wp-flex-boxes" >

                    <div className="flex flex-col items-center">
                        <Image src='/icons/hotel.png' alt='PHYSICAL NFT HOTEL & HOSTEL' height={156} width={156} layout={"fixed"} />
                        <h1 className="text-2xl text-[#ECF7FD] font-bold  md:w-full text-center py-2">PHYSICAL NFT <br /> HOTEL & HOSTEL</h1>
                    </div>
                        <div className="flex flex-col items-center">
                            <Image src='/icons/pay.png' alt='PHYSICAL NFTHOTEL & HOSTEL' height={156} width={156} layout={"fixed"} />
                            <h1 className="text-2xl text-[#ECF7FD] font-bold md:w-full text-center py-2">CRYPTO <br /> BOOKING PLATFORM</h1>
                        </div>
                        <div className="flex flex-col items-center">
                            <Image src='/icons/group.png' alt='PHYSICAL NFTHOTEL & HOSTEL' height={156} width={156} layout={"fixed"} />
                            <h1 className="text-2xl text-[#ECF7FD] font-bold md:w-full text-center py-2">NFTS AS MEMBERSHIP <br /> DAO ACCESS</h1>
                        </div>
                   

                </div>
            </div>
            <div className="flex flex-col md:flex-row space-y-10  md:space-y-0 justify-evenly items-center mx-auto pt-10 img-content">
                <div className="   scale-75 md:scale-100 img-col">
                    <Image src='/icons/groot.png' alt='palmverse-groot' height={400} width={400} layout="fixed" />
                </div>
                <div className="flex flex-col pt-32 text-col  ">

                    <h1 className="md:text-3xl text-2xl text-center pb-4  text-[#ECF7FD]">The first PALMVERSE NFT Hotel was rented in Tamarindo, <br /> a beach town in Costa Rica.
                    </h1>
                    <h1 className="md:text-3xl text-2xl text-center  text-[#ECF7FD]">Whether you’re a travel addict, digital nomad, <span className="text-green_text">an NFT wanderer</span>,<br className="hidden md:block" /> or a surfer looking for paradise, <span className="underline underline-offset-4" >you’ve come to the right place.</span></h1>
                </div>
            </div>
            <div className="flex gap-4 py-5 md:mx-auto wp-wrap " >
                <div className="flex flex-col wp-col-50">
                    <h1 className="text-3xl font-bold text-[#ECF7FD]  text-center py-10">
                        NFT UTILITIES - TRAVEL 2 EARN</h1>
                    <div className="grid grid-cols-2 gap-4 py-4 utility-items ">

                        <div className="flex flex-col items-center">
                            <Image src='/icons/3d/discount2.png' alt='tag' height={130} width={130} layout={"fixed"} />
                            <h1 className="md:text-[26px] text-[20px leading-9 text-[#ECF7FD] md:font-medium  text-center py-2">Up to 30% Discounts for Rooms </h1>
                        </div>
                        <div className="flex flex-col items-center">
                            <Image src='/icons/3d/save_money3.png' alt='tag' height={130} width={130} layout={"fixed"} />
                            <h1 className="md:text-[26px] text-[20px]  leading-9 text-[#ECF7FD] md:font-medium  text-center py-2">Profits Added to DAO treasury. Holders Rewarded</h1>
                        </div>
                        <div className="flex flex-col items-center">
                            <Image src='/icons/3d/coin_stack2.png' alt='tag' height={130} width={130} layout={"fixed"} />
                            <h1 className="md:text-[26px] text-[20px]  leading-9 text-[#ECF7FD] md:font-medium  text-center py-2">Seed Tokens Allocation </h1>
                        </div>
                        <div className="flex flex-col items-center">
                            <Image src='/icons/3d/money_bag2.png' alt='tag' height={130} width={130} layout={"fixed"} />
                            <h1 className="md:text-[26px] text-[20px]  leading-9 text-[#ECF7FD] md:font-medium  text-center py-2">Cashback Travel Rewards</h1>
                        </div>

                    </div>
                </div>
                <div className="flex flex-col items-center py-4 md:py-0 img-col-pc wp-col-50 laptop-sec" >
                    <div className=" mt-16 md:mt-0 items-center ">
                        <Image src='/images/laptop.png' alt='laptop palverse' width={550} height={370} />
                    </div>
                    <h1 className="text-[26px] font-bold text-center py-4  text-[#ECF7FD]">
                        BETA BOOKING PLATFORM
                    </h1>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center pb-10 pt-4  space-y-10 md:space-y-0" >
                <div className="text-3xl relative  mx-auto text-center text-[#ECF7FD] pb-4 full-img-text "><div className="absolute z-50 -top-3 -left-2 lg:left-0" >
                    <Image src='/images/palm.png' alt="palm" height="45" width="35" />
                </div><p>We refurbish old buildings and leverage our unique property conversion model to turn them into the Palmverse brand. </p></div>
                <div className="pt-10 full-width-img">

                    <Image src='/images/less-height.png' alt='palmverse hotel' width={1000} height='560' />
                </div>
                <div className="flex justify-center items-center md:pt-8" >
                    <Link href='/first-location' >
                        <button className="rounded-full px-12 py-4 font-semibold btn tracking-widest hover:btn-rev transition-all duration-500 ease-in-out flex items-center  " >Learn More                 <HiArrowNarrowRight className="text-2xl ml-2 " /></button>
                    </Link>

                </div>
            </div>
            <div className="flex flex-col items-center justify-center pt-14 pb-8" >
                <h1 className="text-3xl text-[#ECF7FD] font-bold w-[70%] mx-auto text-center pb-10">
                    HOW IT WORKS </h1>
                <Image src='/images/utili.png' alt='palmverse hotel' width={1100} height='600' />

            </div>
        </div>
        <div className="md:hidden">
            <div className=" flex flex-col items-center">

                <h1 className="md:text-[40px] text-[28px] font-bold text-center leading-7 text-[#ECF7FD] ">THE 1ST NFT HOTEL &   <br /> HOSTEL CHAIN </h1>
                <p className="md:text-[32px] hidden md:flex text-[18px] text-center pb-5 mt-6 px-4 font-extralight md:w-9/12 text-[#ECF7FD]  ">Palmverse builds technologies that help people connect IRL <br className="md:hidden" /> join communities, and bridge the web2 travel experience to web3.</p>

                <div className="w-[90%] overflow-x-auto md:hidden">
                    <p className="md:text-[32px]  text-[22px] text-center pb-10 pt-4  leading-7 font-light md:w-9/12 text-[#ECF7FD]  ">Palmverse builds technologies that help people connect IRL, join communities, and bridge the web2 travel experience to web3.</p>
                </div>
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 justify-evenly items-center md:py-5" >

                    <div className="flex flex-col justify-center items-center">
                        <Image src='/icons/hotel.png' alt='PHYSICAL NFT HOTEL & HOSTEL' height={130} width={130} layout={"fixed"} />
                        <h1 className="text-[18px] pl-1 leading-5 text-[#ECF7FD] font-bold  md:w-full text-center py-">PHYSICAL NFT <br /> HOTEL & HOSTEL</h1>
                    </div>
                    <div className="flex justify-evenly w-screen md:w-auto md:space-x-20 items-start  ">

                        <div className="flex flex-col justify-center items-center">
                            <Image src='/icons/pay.png' alt='PHYSICAL NFTHOTEL & HOSTEL' height={130} width={130} layout={"fixed"} />
                            <h1 className="text-[18px] pl-1 leading-5 text-[#ECF7FD] font-bold md:w-full text-center py-">CRYPTO <br /> BOOKING <br /> PLATFORM</h1>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <Image src='/icons/group.png' alt='PHYSICAL NFTHOTEL & HOSTEL' height={130} width={130} layout={"fixed"} />
                            <h1 className="text-[18px] pl-1 leading-5 text-[#ECF7FD] font-bold md:w-full text-center py-">NFTS AS <br /> MEMBERSHIP <br /> DAO ACCESS</h1>
                        </div>
                    </div>

                </div>
            </div>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 justify-evenly items-center w-[90%] mx-auto py-10 ">
                <div className="md:w-[50%] md:mx-auto md:px-4 scale-100 md:scale-100">
                    <div className="">

                        <Image src='/icons/groot.png' alt='palmverse-groot' height={280} width={280} layout="fixed" />
                    </div>

                </div>
                <h1 className="md:text-3xl text-[22px] text-center font-light leading-7 text-[#ECF7FD]">The 1st PALMVERSE NFT Hotel was rented in Tamarindo, a beach town  in  Costa Rica.
                </h1>
                <h1 className="md:text-3xl text-[22px] text-center font-light leading-7 text-[#ECF7FD]">Whether you’re a travel addict, digital nomad, <span className="text-green_text">an NFT wanderer</span>, or a surfer looking for paradise, <span className="underline underline-offset-4" >you’ve come to the right place.</span></h1>
            </div>
            <div className=" md:mt-0 md:scale-80 text-center">

                <Image src='/images/laptop.png' alt='laptop palverse' width={550} height={370} />
            </div>
            <div className="bg-[#ECF7FD] text-black py-2 my-2">

                <h1 className="text-[28px] leading-7 font-bold  text-center ">
                    BETA BOOKING PLATFORM
                </h1>
            </div>
            <div className="grid md:grid-cols-2 gap-4 py-5 " >
                <div className="flex flex-col">
                    <h1 className="text-[24px] font-bold text-[#ECF7FD]  text-center pt-6">
                        NFT UTILITIES - TRAVEL 2 EARN</h1>
                    <div className="grid grid-cols-1  gap-4 pt-4">

                        <div className={`flex flex-row-reverse justify-between items-center px-2  `}>
                            <Image src='/icons/3d/discount2.png' alt='tag' height={140} width={180} layout={"fixed"} />
                            <h1 className="text-[24px] font-light leading-[24px] text-[#ECF7FD]   w-[90%] text-center py-2  ">Up to 30% Discounts <br /> for   Rooms </h1>
                        </div>
                        <div className={`flex  justify-between items-center px-2  `}>
                            <Image src='/icons/3d/save_money3.png' alt='tag' height={140} width={180} layout={"fixed"} />
                            <h1 className="text-[24px] font-light leading-[24px] text-[#ECF7FD]  w-[90%] text-center py-2 -ml-4">Profits Added to <br /> DAO treasury. <br /> Holders Rewarded</h1>
                        </div>
                        <div className={`flex flex-row-reverse justify-between items-center px-2  `}>
                            <Image src='/icons/3d/coin_stack2.png' alt='tag' height={140} width={165} layout={"fixed"} />
                            <h1 className="text-[24px] font-light leading-[24px] text-[#ECF7FD]  w-[90%] text-center py-2 -mr-14">Seed Tokens  <br /> Allocation</h1>
                        </div>
                        <div className={`flex  justify-between items-center px-2  `}>
                            <Image src='/icons/3d/money_bag2.png' alt='tag' height={140} width={180} layout={"fixed"} />
                            <h1 className="text-[24px] font-light leading-[24px] text-[#ECF7FD]  w-[90%] text-center pt-2 -ml-8">Cashback Travel  <br /> Rewards</h1>
                        </div>


                    </div>
                </div>

            </div>
            <div className="flex w-screen pt-4  flex-col items-center justify-center   space-y-6 md:space-y-0" >
                <h1 className="text-[22px] leading-7 font-light md:w-[70%]  mx-auto text-center text-[#ECF7FD] relative px-5 "> <div className="absolute z-50 -top-4 left-2 lg:left-0" >

                </div>We refurbish old buildings and leverage our unique property conversion model to turn them <br /> into the Palmverse brand. </h1>
                <div className=" py-4 px-3 ">
                    <Image src='/images/hotel1.png' alt='palmverse hotel' width={1000} height={640} />
                </div>
            </div>
            <div className="flex justify-center items-center" >
                <Link href='/first-location' >
                    <button className="rounded-full px-12 py-4 font-semibold btn tracking-widest hover:btn-rev transition-all duration-500 ease-in-out flex items-center  " >Learn More                 <HiArrowNarrowRight className="text-2xl ml-2 " /></button>
                </Link>
            </div>
            <div className="flex flex-col items-center justify-center pt-8" >
                <h1 className="text-3xl text-[#ECF7FD] font-bold w-[70%] mx-auto pb-4 text-center ">
                    HOW IT WORKS </h1>
                <div className="hidden md:block">
                    <Image src='/images/hotel.png' alt='palmverse hotel' width={1100} height={750} />
                </div>
                <div className=" md:hidden px-3" >

                    <Image src='/images/map-mobile.png' alt='palmverse hotel' width={1100} height={750} />
                </div>

            </div>
        </div>

    </section>
}

export default Hero