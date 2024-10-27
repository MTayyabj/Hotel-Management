import {useState , useEffect} from 'react'
import './Hero.css'
import Car1 from '../../../assets/Images/Car1.jpg'
import Car2 from '../../../assets/Images/Car2.jpg'
import Car3 from '../../../assets/Images/Car3.jpg'

export default function Hero () {
    const [count , setCount] = useState (0);
    const strings = ['Drive Your Dreams with Us', 'Where Excellence Meets the Road', 'Your Journey Starts Here'];
    
    let backgroundImage;

    useEffect(() => {
        const interval = setInterval(() => {
          setCount((prevCount) => (prevCount < 2 ? prevCount + 1 : 0));
        }, 3000);
    
        // Cleanup the interval on component unmount
        return () => clearInterval(interval);
      }, []);

      if (count === 0) {
        backgroundImage = Car1;
      } else if (count === 1) {
        backgroundImage = Car2;
      } else if (count === 2) {
        backgroundImage = Car3;
      } else {
        backgroundImage = 'none';
      }

    return (
        <>
        <div className="Hero">
        <img src={backgroundImage} alt="You are an idiot" className='Background' />
        <h2 className='Hero-text'>{strings[count]}</h2>
        </div>
        </>
    )
}