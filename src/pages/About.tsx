// import React from 'react'
import './About.css'
import './../index.css'
import Button from '../components/Buttons/Button'

export default function About() {
  return (
    <div className='section w-full flex justify-center items-center'>
      <div className=" container  mt-3">
        <div className="impara flex justify-row ">
          <div className="bg">
            <h4 className="heading">The simple <br/>solution for a <br/>productive <br/>
              day is nothing <br/>but to <span>Start it <br/>early.</span><Button className='Btn'>Start</Button></h4>
          </div>
          <div className="paras ml-7">
            <h4 className="heading1">We are aware, are you?</h4>
            <p className="para">In today’s fast-paced world, the rat race is not normal. We don't even identify ourselves with the damage we do to ourselves.</p>
            <p className="para">To address this cause and the importance of waking up early is our major agenda.</p>
            <p className="para">In a way, it does feel like an accomplishment whenever you’re able to get up early. You can get started what you need to do, and hopefully be done early to enjoy the rest of your day.</p>
            <p className="para">Waking up early is not just a win psychologically in that sense, it’s a win physically as well.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
