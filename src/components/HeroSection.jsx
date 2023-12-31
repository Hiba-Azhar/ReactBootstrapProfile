import Carousel from 'react-bootstrap/Carousel'
import image1 from '../images/image1.jpg'
import image2 from '../images/image2.jpg'
import image3 from '../images/image3.jpg'

function HeroSection() {
  return (
    <Carousel data-bs-theme='dark'>
      <Carousel.Item>
        <img
          height={500}
          className='d-block w-100 '
          src={image1}
          alt='First slide'
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          height={500}
          className='d-block w-100 '
          src={image2}
          alt='Second slide'
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          height={500}
          className='d-block w-100 '
          src={image3}
          alt='Third slide'
        />
      </Carousel.Item>
    </Carousel>
  )
}

export default HeroSection
