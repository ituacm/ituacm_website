import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AboutHomePage.css';

const AboutHomePage = () => {
    const navigate = useNavigate();

    const handleLearnMore = () => {
        navigate('/about'); 
  };


  const [isBetween, setIsBetween] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const viewHeight = window.innerHeight;


        let startRange;
        let endRange;
        if(viewHeight<=630){
           startRange = viewHeight * 0.6; 
           endRange = viewHeight * 1.2;
        } 
        else if(viewHeight<=750){
            startRange = viewHeight * 0.9; 
            endRange = viewHeight * 1.3;
        }
        else{
            startRange = viewHeight * 0.7; 
            endRange = viewHeight * 1.1;
        }

        
        if (scrollPosition >= startRange && scrollPosition <= endRange) {
        setIsBetween(true); 
      } else {
        setIsBetween(false);
      }
    };
        
        window.addEventListener('scroll', handleScroll);

        
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
      
      const combinedClasses = `image-card ${isBetween ? 'scrolled' : ''}`;
  
  return (
    <div className={combinedClasses}>
      <img
        src="https://images.pexels.com/photos/7551762/pexels-photo-7551762.jpeg"
        alt="ReplaceImage"
        className="image"
      />
      <div className="overlay">
        <h2 className="header">Who are we?</h2>
        <p className="paragraph">Lorem ipsum odor amet, consectetuer adipiscing elit. Enim morbi nunc turpis hendrerit accumsan, 
            ultricies magna finibus. Eleifend molestie efficitur vulputate porttitor natoque quisque adipiscing. 
            Erat condimentum aenean tempor sagittis sem pharetra pellentesque. Etiam proin metus nisl maecenas inceptos metus. 
            Nostra dui iaculis hendrerit nisi nam netus. 
            </p>
        <button className="learn-more" onClick={handleLearnMore}> Learn More</button>
      </div>
    </div>
  );
};

export default AboutHomePage;
