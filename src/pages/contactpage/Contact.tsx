import Button from '../../components/Buttons/Button'
import Navbar from '../../components/navbar/Navbar'
import './contact.css'

export default function Contact() {
  return (
    <>
    <Navbar/>
      <div className="section font-mainFont  w-full">
        <div className=" bg-[#F47D31] md:p-20 pb-32 xs:px-5  sm:px-10 flex w-full justify-center" id='headerContact'>
          <div className="text-white para font-bold " >
            <p><h1 className="text-3xl">Contact Us</h1></p>
            <p className="font-ligth  xs:text-lg xs:py-3  ms:text-2xl">Do you have any  concerns or questions you would like to address?</p>
            <p className="font-ligth xs:text-lg   md:text-2xl">We are happy to help you</p>
          </div>
          <div className="mx-12 my-2">
            <img src="./src/pages/contactpage/Ellipse 86.png" className='contactImage' alt="" />
          </div>
        </div>
        <div className=" flex justify-center flex-col w-[80%] mx-auto my-10 pb-20 bg-white Border" style={{boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",zIndex:"1", marginTop:"-70px"}}>
          <div className=" m-auto mb-12 xs:pt-5 xs:p-5 sm:pt-28">
            <p className="text-center font-bold mb-10"><span className='xs:text-lg  sm:text-3xl'>Have a question?</span><span className="mx-3 xs:text-xl sm:text-3xl text-primaryOrange">Talk to us.</span></p>
          </div>
          <div className=" flex xs:flex-col lg:flex-row sm:justify-evenly xs:mt-0 sm:mt-10">
            <div className="contact xs:my-5 sm:my-0">
              <img src="./src/pages/contactpage/Mail.svg" className='xs:w-[32px] sm:w-auto' alt="" />
              <p className=" font-bold"style={{color:"coral",fontSize:"1.4rem"}}>EMAIL US AT</p>
              <p className=' font-semibold'>support@mindblowing.com</p>
              <p> we'll get back to you in 24 hours</p>
            </div>
            <div className="contact xs:my-5 sm:my-0">
            <img src="./src/pages/contactpage/Placeholder.svg" className='xs:w-[32px] sm:w-auto' alt="" />
            <p className=" font-bold" style={{color:"coral",fontSize:"1.4rem"}}>VISIT US AT</p>
              <p className='  '>No.11,, HSR Layout, Bommanahalli</p>
                 <span className=' font-semibold'> Bangalore, Karnataka</span>
              <p> between 10 AM - 8 PM on any weekday!</p>
            </div>
            <div className="contact xs:my-5 sm:my-0">
            <img src="./src/pages/contactpage/Viber.svg" className='xs:w-[32px] sm:w-auto' alt="" />
            <p className=" font-bold"style={{color:"coral",fontSize:"1.4rem"}}>CALL US AT</p>
              <p className=' font-semibold'>+91 20 933 71501</p>
              <p>between 10 AM to 10 PM</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center flex-col my-10">
          <div className=" self-center">
            <p className='text-center xs:text-xl sm:text-3xl'><b>We'd love to hear from you!</b></p>
            <p className='my-2 text-gray-600 xs:text-xg text-center sm:text-lg' >Drop us a message by filling this form and we'll get back to you</p>
          </div>
          <div className=" self-center mt-10 mb-3">
            <form >
              <input type='text' placeholder='Name' className='input1 mx-5 xs:h-[55px] md:h-auto'></input><br></br>
              <input type='email' placeholder='Email address' className='input2 mx-5 xs:h-[55px] md:h-auto'></input><br></br>
              <input type='number'placeholder='+91' className='input91 xs:h-[55px] md:h-auto'></input><input type='number'placeholder='Mobile Number'className='inputnum xs:h-[55px] md:h-auto'></input><br/>
              <input type='text' placeholder='Your Message'className='input4 mx-5 xs:h-[55px] md:h-auto' ></input><br/>
              <div className='flex justify-center'>
              <Button className=' button xs:h-[55px] sm:h-auto  xs:my-2 sm:my-4'>SUBMIT</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>)
}
