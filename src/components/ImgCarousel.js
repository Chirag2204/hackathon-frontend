import { Carousel, Image } from 'react-bootstrap';

function ImgCarousel(){
    const images=["../images/image1.png","../images/image2.png","../images/image3.png"]
    return (
        <div className='carousel'>
           
                <Carousel  pause='hover'>
                {images?.map((image) => (
                        
                    <Carousel.Item interval={1000}>
                        <Image src="../image/image2.png" alt="Hackathon Image" fluid></Image>
                        </Carousel.Item>
                    ))}
                </Carousel>
            
        </div>
    )
}

export default ImgCarousel;