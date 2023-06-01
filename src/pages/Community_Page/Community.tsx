import { Link } from "react-router-dom";
import Button from "../../components/Buttons/Button";

export default function Community() {
  return (<>

    <div className='section w-full flex justify-center items-center my-10'>
      <div className="container">
        <div className="flex">
          <div className="links">
            <div className="link w-[100%]">
              <h4 className="Cheading font-bold" style={{fontSize:"2.4rem",color:"#F47D31"}}>Popular reads !</h4>
              <div className="Links border-b mr-10">
                <Link to={"/"} className="flex justify-between w-[401px] my-7"><span className="para">13 Reasons why ?<br />
                  Morning person lifestyle</span><img src="./src/pages/Community_Page/Group 4.svg" alt="" /></Link>
              </div>
              <div className="Links border-b mr-10">
                <Link to={"/"} className="flex justify-between w-[401px] my-7"><span className="para">13 Reasons why ?<br />
                  Morning person lifestyle</span><img src="./src/pages/Community_Page/Group 4.svg" alt="" /></Link>
              </div>
              <div className="Links border-b mr-10">
                <Link to={"/"} className="flex justify-between w-[401px] my-7"><span className="para">13 Reasons why ?<br />
                  Morning person lifestyle</span><img src="./src/pages/Community_Page/Group 4.svg" alt="" /></Link>
              </div>
              <Button className="mt-4 self-center" style={{ padding: "1rem 5.5rem",margin:"1rem 0" }}>Tranform your life like this →</Button>
            </div>
          </div>
          <div className="img"><img src="./src/pages/Community_Page/Post 4.png"/></div>
        </div>
        <div className="vi flex ">
          <div className="video"><img src="./src/pages/Community_Page/Video Card.png" alt="" /></div>
          <div className="BuddyP">
            <div className="bheading flex justify-between">
              <span className="back"><img src="./src/pages/Community_Page/Arrow.svg" alt="" /></span>
              <h4 className="Cheading">Buddy program</h4>
              <span className="option"><img src="./src/pages/Community_Page/More.svg" alt="" /></span>
            </div>
            <div className="spiralimg"><img src="./src/pages/Community_Page/spiral.png" alt="" /></div>
            <div className="Action">
              <h3>Get help from your friend during the transformation</h3>
              <Button style={{ backgroundColor: "white", color: "orange", border: "2px solid orange" }} className="BPbtn">Get connected to your Buddy now</Button>
            </div>
          </div>
          <div className="Postimg"><img src="./src/pages/Community_Page/Buddies.png" alt="" /></div>
        </div>
      </div>
    </div>
  </>
  );
}
