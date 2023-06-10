// import "./App.css";
import './Work.css'
import Frame156 from "../../assets/Frame156.png";
import Frame157 from "../../assets/Frame157.png";
import Frame159 from "../../assets/Frame159.png";
//Contatc us Image:
import Frame1181 from "../../assets/Frame 1181.png";

function Work() {
  return (
    <div className="App">

      <div className="contact">
        <img src={Frame1181} alt="contact-us" className='contactIMG'/>
      </div>

      <div className="img">
        <div className='content'>
         <h2>We are invested in your sucess!</h2>
          <p>To make it easier and more interactive, our sessions 
            are designed in such a way that you can opt how you want to wake up.</p>
        </div>
        <img src={Frame159} alt="images" className='imgImage'/>
      </div>

      <div className="img">
      <img src={Frame156} alt="images" className='imgImage'/>
        <div className='content'>
         <h2>Engage all aspects of the human body in 1 hour!</h2>
          <p className='p2'>•Body alignment movements</p>
            <p className='p2'>  •Physical exercise involve</p>
            <p className='p2'> •Dynamic warm up </p>
            <p className='p2'> •Asanas </p>
        </div>
       
      </div>

      <div className="img2">
        <div className='content2'>
         <h2>The secret to mind blowing mornings</h2>
          <p>Start the day with engaging your body physically, mentally and spiritually.</p>
        </div>
        <img src={Frame157} alt="images" className='imgImage'/>
      </div>


    
</div>
  );
}

export default Work;
