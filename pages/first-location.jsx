import Image from "next/image"

const FirstLocation = () => {
    return (
        <section className="min-h-screen bg-dark_bg text-[#ECF7FD] font-exo flex flex-col   pt-0">

            <div className="bg-[#ECF7FD] py-2 w-full">

                <h1 className="md:text-4xl text-[28px] text-center  font-bold px-3 text-black">What We Build?</h1>
            </div>
            <div className=" mx-auto max-1100">


                <p className="text-[18px] leading-[21px] font-medium py-2 px-3 md:text-left pt-4">We rent and refurbish old properties, converting them into the Palmverse brand model. </p>
                <p className="text-[18px] leading-[21px] font-medium py-2 px-3 md:text-left">With this business plan, we can achieve a quick global expansion, keeping the rent expense of the properties low by refurbishing the buildings to meet the Palmverse standards.</p>
                <p className="text-[18px] leading-[21px] font-medium py-2 px-3 md:text-left">The first Palmverser Hotel & Hostel will have approx. 17 rooms (private and shared) with co-working space, a pool, and a bar.</p>
                <p className="text-[18px] leading-[21px] font-medium py-2 px-3 md:text-left">We aim to bridge the web2 booking experience to web3, by accepting On-chain cryptocurrency payments to book stays in the first NFT Hotel in Costa Rica.</p>
            </div>

            <div className="pt-10">
                <div className="relative  mx-auto bg-[#ECF7FD] text-black w-screen md:w-full md:py-2 px-4">

                    <h1 className="md:text-4xl text-[28px]  font-bold  text-center leading-9 ">1st Location - Tamarindo, Costa Rica</h1>

                </div>

                <div className=" mx-auto " >
                    <p className="text-[18px] leading-[22px] font-bold py-4  px-3 max-985">The first location was rented in the heart of the busiest surf town in Costa Rica. </p>




                    <div className="justify-center hidden md:flex p-5">

                        <Image src='/images/first_hotel.png' alt="first hotel" height={550} width={1000} layout="fixed" />
                    </div>

                    <div className="flex justify-center md:hidden">

                        <Image src='/images/first_hotel.png' alt="first hotel" height={250} width={420} layout="fixed" />
                    </div>
                    <div className="flex justify-center  md:hidden mt-4 ">
                        <Image src='/images/left-nft.png' alt='left-nft' height={230} width={220} layout='fixed' />
                    </div>
                </div>
                <div className="bg-[#ECF7FD] text-black py-2">

                    <h1 className="md:text-4xl text-[28px]  font-bold text-center    ">Why Costa Rica?</h1>
                </div>
                <div className=" mx-auto max-1100 " >

                    <div className="text-[21px] relative     font-medium mt-4  text-[#ECF7FD]  "><div className="absolute z-50 -top-5 left-0 lg:-left-3" >

                    </div><p className="text-[18px] leading-[21px] font-medium py-2 px-3 md:text-left"> Costa Rica was chosen as the first location considering multiple factors such as the year-round season and good market prices for hotel rooms. </p></div>
                    <p className="text-[18px] leading-[21px] font-medium py-2 px-3 md:text-left  ">Secondly, Costa Rica Is considered a  cryptocurrency paradise due to the widespread adoption of cryptocurrencies <br className="md:hidden" /> by its citizens. Many stores accept cryptocurrency as payment</p>
                    <p className="text-[18px] leading-[21px] font-medium py-2 px-3 md:text-left  ">We will implement cryptocurrency payments at the front desk and on our website. </p>
                    <p className="text-[18px] leading-[21px] font-medium py-2 px-3 md:text-left  ">Usual activities in Costa Rica are surfing, rafting, sailing, ATV tours, volcano tours, natural parks visits, hiking, turtle watching, horseriding, and many more. </p>
                    <p className="text-[18px] leading-[21px] font-medium py-2 px-3 md:text-left  ">Possible 2nd and 3rd Palmverse locations, which are also crypto-friendly :</p>
                    <ul className="pl-8 pb-8" >
                        <li className="list-disc py-1 text-[18px] leading-[21px] font-bold">Miami</li>
                        <li className="list-disc py-1 text-[18px] leading-[21px] font-bold">Portugal</li>
                        <li className="list-disc py-1 text-[18px] leading-[21px] font-bold">Panama</li>
                    </ul>
                    <div className=" justify-end -mt-48 hidden md:flex pt-5 pb-2 why-costa-img">
                        <Image src='/images/left-nft.png' alt='left-nft' height={280} width={300} layout='fixed' />
                    </div>


                </div>
            </div>
        </section>
    )

}

export default FirstLocation