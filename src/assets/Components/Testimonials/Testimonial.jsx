import './Testimonial.css'
import Testimonial1 from '../../../assets/Images/Testimonial1.png'
import Testimonial2 from '../../../assets/Images/Testimonial2.jpg'
import Testimonial3 from '../../../assets/Images/Testimonial3.jpg'


export default function Testimonials() {



    return (
      <>
      <div className='Testimonials'>
      <div className="Testimonial">
        <img src={Testimonial1} alt="" />
        <div className='context'>
            <img src="" alt="" />
            <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      <div className="Testimonial">
        <img src={Testimonial2} alt="" />
        <div className='context'>
            <img src="" alt="" />
            <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      <div className="Testimonial">
        <img src={Testimonial3} alt="" />
        <div className='context'>
            <img src="" alt="" />
            <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      </div>
      </>
    )
  }