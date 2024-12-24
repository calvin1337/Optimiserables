import Form from "../Components/Contact/Form";
import Footer from "../Components/Navigation/Footer";
import { faFacebookSquare, faInstagram, faTiktok, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowUp} from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
  return (
    <div className="flex flex-col items-center w-screen h-screen">
      <div className="flex flex-col w-full h-full pt-5 pb-5 justify-center items-center">
        <div className="w-full flex justify-center items-center" style={{ height: "10%" }}>
          <h1 className="text-2xl sm:text-3xl xl:text-5xl">Contact us!</h1>
        </div>
      <div className="flex flex-col md:flex-row-reverse gap-5 h-4/5 items-center justify-center w-5/6">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center h-2/5 md:h-full md-p-10 ">
         {/* Video Container */}
          <div className=" relative w-4/5 h-3/5">
          <div className="backlight absolute top-0 left-0 right-0 bottom-0 z-[-1]"></div>
          <iframe
            src="https://www.youtube.com/embed/"
            title="YouTube video player"
            className="w-full h-full"
          ></iframe>
        </div>
        <div className='p-4 md:p-0 flex flex-col text-center w-full'>
          <h3 className="text-sm sm:text-1xl lg:text-2xl">Check out more videos on our socials!</h3>
        {/* Social Links */}
            <div className="flex flex-wrap justify-center items-center gap-6 mt-5">
            <a
              href="/"
              target="_blank"
              rel="noreferrer"
              className="socialLink w-8 h-8 sm:w-12 sm:h-12 flex justify-center items-center"
            >
              <FontAwesomeIcon icon={faInstagram} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl" color="#ebbc52" />
            </a>
            <a
              href="/"
              target="_blank"
              rel="noreferrer"
              className="socialLink w-8 h-8 sm:w-12 sm:h-12 flex justify-center items-center"
            >
              <FontAwesomeIcon icon={faFacebookSquare} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl" color="#ebbc52" />
            </a>
            <a
              href="/"
              target="_blank"
              rel="noreferrer"
              className="socialLink w-8 h-8 sm:w-12 sm:h-12 flex justify-center items-center"
            >
              <FontAwesomeIcon icon={faTiktok} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl" color="#ebbc52" />
            </a>
            <a
              href="/"
              target="_blank"
              rel="noreferrer"
              className="socialLink w-8 h-8 sm:w-12 sm:h-12 flex justify-center items-center"
            >
              <FontAwesomeIcon icon={faXTwitter} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl" color="#ebbc52" />
            </a>
          </div>  
        </div>
      
      </div>
      <Form />
      </div>
      <div className="w-full flex justify-center items-center flex-col gap-2" style={{ height: "10%" }}>
        <button className="bg-[#6a3276] w-12 h-12 flex items-center justify-center rounded-full text-white hover:bg-[#E4CC5D] transition duration-300">
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
        <h4 className="text-white">Back to top</h4>
      </div>
      </div>
      
      {/* <Footer /> */}
    </div>
  )
}
