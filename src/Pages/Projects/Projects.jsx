import React from 'react';
import image_one from './JN1.png'
import image_two from './JN2.png'
import image_three from './JN3.png'
import image_four from './JN4.png'
import image_five from './FR1.png'
import image_six from './FR2.png'
import image_seven from './FR3.png'
import image_eight from './FR4.png'
import image_nine from './FR5.png'
import image_ten from './FR6.png'
import image_eleven from './PF1.png'
import image_twelve from './PF2.png'
import image_thirteen from './PF3.png'
import image_fourteen from './PF4.png'
import image_fifteen from './PF5.png'
import image_sixteen from './PF6.png'
import image_seventeen from './PF7.png'
import image_eighteen from './PF8.png'
import image_nineteen from './PF9.png'
import image_twenty from './PF10.png'
import { Helmet } from 'react-helmet';


const Projects = () => {
    return (
        <>
        <Helmet>
        <title>Wasey-Rahman-Portfolio|Projects</title>
        
      </Helmet>
        <h1 className='font-extrabold text-5xl text-pink-500 text-center mt-8 mb-10'>Projects</h1>
        <div>
            
            <h2 className='font-extrabold text-2xl'>1)Job Network</h2><br />
            <p>Website for searching and applying for jobs.It has many features.These are-Job Category List: Provides a streamlined way to navigate and explore job opportunities based on specific industry or profession preferences.Featured Jobs: Gain priority, appearing prominently at the top of search results to attract job seekers, increase visibility, and foster higher interest and engagement.And Applied Jobs: Simplifies job application tracking, ensuring a streamlined and organized process for users.The technologies React Js and Tailwind have been used.</p><br />
            Live-site: https://calm-kitten-3a19d7.netlify.app/<br />
            Code-Link: https://github.com/Wasey-Rahman/Job-Network <br/>
            <div className="carousel w-1/3">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={image_one} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-ghost">❮</a> 
      <a href="#slide2" className="btn btn-ghost">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={image_two} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-ghost">❮</a> 
      <a href="#slide3" className="btn btn-ghost">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={image_three} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-ghost">❮</a> 
      <a href="#slide4" className="btn btn-ghost">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={image_four}className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-ghost">❮</a> 
      <a href="#slide1" className="btn btn-ghost">❯</a>
    </div>
  </div>
</div>
        </div>
        <div>
        <h2 className='font-extrabold text-2xl mt-8'>2)Flavor-Riot</h2><br />
        <p>Website about Indian cuisine.Some features are described below.Six Chefs: Top six chefs with their exceptional culinary skills and innovative approaches to cooking.Recipe Category: Organized assortment of culinary creations for easy navigation and exploration. And Applied Recipe food: Curated collection of tried-and-tested recipes for practical and enjoyable cooking experiences.React Js, Node Js, Firebase Authentication and React Bootstrap technologies have been used.</p><br/>
        Live-site: https://flavor-riot-client-85197.web.app/ <br/>
        Client-Code:https://github.com/Wasey-Rahman/Flavor-Riot-Client <br />
        Server-Code:https://github.com/Wasey-Rahman/Flavor-Riot-Server
        <br />
        <div className="carousel w-1/3">
  <div id="slide5" className="carousel-item relative w-full">
    <img src={image_five} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide10" className="btn btn-ghost">❮</a> 
      <a href="#slide6" className="btn btn-ghost">❯</a>
    </div>
  </div> 
  <div id="slide6" className="carousel-item relative w-full">
    <img src={image_six} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide5" className="btn btn-ghost">❮</a> 
      <a href="#slide7" className="btn btn-ghost">❯</a>
    </div>
  </div> 
  <div id="slide7" className="carousel-item relative w-full">
    <img src={image_seven} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide6" className="btn btn-ghost">❮</a> 
      <a href="#slide8" className="btn btn-ghost">❯</a>
    </div>
  </div> 
  <div id="slide8" className="carousel-item relative w-full">
    <img src={image_eight}className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide7" className="btn btn-ghost">❮</a> 
      <a href="#slide9" className="btn btn-ghost">❯</a>
    </div>
    </div>
    <div id="slide9" className="carousel-item relative w-full">
    <img src={image_nine}className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide8" className="btn btn-ghost">❮</a> 
      <a href="#slide10" className="btn btn-ghost">❯</a>
    </div>
    </div>
    <div id="slide10" className="carousel-item relative w-full">
    <img src={image_ten}className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide9" className="btn btn-ghost">❮</a> 
      <a href="#slide5" className="btn btn-ghost">❯</a>
    </div>
  </div>
</div>
</div>
        <div>
        <h2 className='font-extrabold text-2xl mt-8'>3)Poly-Fusion</h2><br />
        <p>Website dedicated to a foreign language school.It has many features given below.Instructor and Classes: Connecting learners with skilled instructors for enriching educational experiences.Dashboard: Different dashboard for admin, instructor and student.And How we work: Working is based on listening, teaching and solving problems.The technologies which have been used are-React Js, Node Js, Firebase Authentication, Mongo DB, Tailwind and Daisy UI.
       </p><br />
        Live-site: https://poly-fusion.web.app/ <br/>
        Client-Code:https://github.com/Wasey-Rahman/Poly-Fusion-Client <br/>
        Server-Code:https://github.com/Wasey-Rahman/Poly-Fusion-Server <br/>
        <div className="carousel w-1/3 mb-10">
  <div id="slide11" className="carousel-item relative w-full">
    <img src={image_eleven} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide20" className="btn btn-ghost">❮</a> 
      <a href="#slide12" className="btn btn-ghost">❯</a>
    </div>
  </div> 
  <div id="slide12" className="carousel-item relative w-full">
    <img src={image_twelve} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide11" className="btn btn-ghost">❮</a> 
      <a href="#slide13" className="btn btn-ghost">❯</a>
    </div>
  </div> 
  <div id="slide13" className="carousel-item relative w-full">
    <img src={image_thirteen} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide12" className="btn btn-ghost">❮</a> 
      <a href="#slide14" className="btn btn-ghost">❯</a>
    </div>
  </div> 
  <div id="slide14" className="carousel-item relative w-full">
    <img src={image_fourteen}className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide13" className="btn btn-ghost">❮</a> 
      <a href="#slide15" className="btn btn-ghost">❯</a>
    </div>
    </div>
    <div id="slide15" className="carousel-item relative w-full">
    <img src={image_fifteen}className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide14" className="btn btn-ghost">❮</a> 
      <a href="#slide16" className="btn btn-ghost">❯</a>
    </div>
    </div>
    <div id="slide16" className="carousel-item relative w-full">
    <img src={image_sixteen}className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide15" className="btn btn-ghost">❮</a> 
      <a href="#slide17" className="btn btn-ghost">❯</a>
    </div>
  </div>
  <div id="slide17" className="carousel-item relative w-full">
    <img src={image_seventeen}className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide16" className="btn btn-ghost">❮</a> 
      <a href="#slide18" className="btn btn-ghost">❯</a>
    </div>
  </div>
  <div id="slide18" className="carousel-item relative w-full">
    <img src={image_eighteen}className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide17" className="btn btn-ghost">❮</a> 
      <a href="#slide19" className="btn btn-ghost">❯</a>
    </div>
  </div>
  <div id="slide19" className="carousel-item relative w-full">
    <img src={image_nineteen}className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide18" className="btn btn-ghost">❮</a> 
      <a href="#slide20" className="btn btn-ghost">❯</a>
    </div>
  </div>
  <div id="slide20" className="carousel-item relative w-full">
    <img src={image_twenty}className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide19" className="btn btn-ghost">❮</a> 
      <a href="#slide11" className="btn btn-ghost">❯</a>
    </div>
  </div>
</div>
        </div>
       

        
        </>
    );
};

export default Projects;