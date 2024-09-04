import React from 'react';
import './AboutACM.css'; 
import blueLogo from "../../assets/ituacm-logo-blue.png";

const AboutACM = () => {
  return (
    <div className="about-page">

        
      {/* Top Section */}
      <section className="section top-section">
        <div className="topleft-side">
          <img src="https://images.pexels.com/photos/7551762/pexels-photo-7551762.jpeg" alt="About Image" className="section-image" />
        </div>
        <div className="topright-side">
          <h3> About ITU ACM Student Chapter</h3>
          <p>ITU ACM Student Chapter is a student club founded under the Faculty of Computer and Informatics with the great support of our advisor 
            Associate Professor Berk Canberk.Our mission is to unite the students who are interested in computer science and its fields. 
            Our strategy is to form project and competition teams under special interest topics with the support of the academics for the growth of
             students’ technical skills together with social skills such as collaboration, communication and responsibility.</p>
        </div>
      </section>



      {/* Middle Section */}
      <section className="section middle-section">
        <div className="middle-part left-part">
          <h4 className="header-sideways">About ACM</h4>
        </div>
        <div className="middle-part center-part">
          <p>
          The Association for Computing Machinery (ACM) is the world’s largest computing society, uniting educators, researchers, 
          and professionals to inspire dialogue, share resources, and tackle field challenges. ACM enhances the profession through 
          leadership, high standards, and recognition of technical excellence. It supports members’ growth with opportunities for lifelong 
          learning, career development, and networking. With nearly 100,000 members worldwide, ACM’s influence extends globally, with Councils 
          in Europe, India, and China, fostering connections that highlight computing’s critical technical, educational, and social issues.
          </p>
        </div>
        <div className="middle-part right-part empty-space"></div>
      </section>



      {/* Bottom Section */}
      <section className="section bottom-section">
        <div className="botleft-side">
          <p>
            No matter what your background or major is, we would love to have you at our events and activities!
            To keep up with what’s happening, we recommend checking out our events page.  
            Here’s our social media, where you can see what we’re up to:
          </p>
          <div className='icons'>
            <a href="https://www.instagram.com/ituacmsc/" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-instagram" aria-label="Instagram"></i>
            </a>
            <a href="https://www.youtube.com/channel/UCCjjmsgFh5lRWhwoRH6p3tA" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-youtube" aria-label="YouTube"></i>
            </a>
            <a href="https://github.com/ituacm" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-github" aria-label="GitHub"></i>
            </a>
            <a href="https://www.linkedin.com/company/ituacmsc/" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-linkedin" aria-label="LinkedIn"></i>
            </a>
            <a href="https://twitter.com/ituacmsc" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-twitter" aria-label="Twitter"></i>
            </a>
          </div>
        </div>
        <div className="botright-side">
          <img src="https://skipprichard.com/wp-content/uploads/2017/09/bigstock-people-friendship-and-teenage-193259626.jpg" alt="Mission Image" className="section-image" />
        </div>
      </section>
    </div>
  );
};

export default AboutACM;
