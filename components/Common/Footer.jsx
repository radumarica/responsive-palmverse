import { AiFillFacebook, AiFillTwitterSquare } from 'react-icons/ai'

const Footer = () => (
    <footer className='w-full border-t-2 border-gray-700 py-5 bg-dark_bg '>
        <div className='w-[80%] mx-auto flex justify-between items-center'>
            <h1 className=" font-semibold text-white ">© 2022 by Palmverse.</h1>
            <div className='flex items-center justify-center space-x-4 opacity-0  '>
                <AiFillFacebook className='text-white text-2xl ' />
                <AiFillTwitterSquare className='text-white text-2xl ' />
            </div>
        </div>
    </footer>
)

export default Footer