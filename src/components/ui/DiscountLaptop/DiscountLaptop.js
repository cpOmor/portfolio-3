import Container from '../../shared/Container/Container'
import Image from 'next/image'
import watch from '../../../assets/watch.png'

const DiscountLaptop = () => {
  return (
    
        <Container>
            <div className='lg:h-[350px] bg-[#E6EBEF] rounded-lg lg:flex justify-between items-center px-12 py-10 md:py-10 lg:py-0 mt-24'>
              <div>
                 <p className=' font-medium lg:text-[18px] md:text-[24px] text-[15px] mb-1 text-red-500'>EXCLUSIVE HEADPHONE</p>

                  <h1 className=' font-bold lg:text-[45px] md:text-[55px] text-[20px] lg:leading-[50px] md:leading-[90px] leading-9'>Discounts 20% On All</h1>
                  <h1 className=' font-bold lg:text-[45px] md:text-[55px] text-[20px] lg:leading-[50px] md:leading-[70px] leading-9'>Watch</h1>

                      <div className="w-[170px] mt-8">
                      <button className="w-[170px] h-[48px] text-[16px] text-white bg-[#0088FF] font-bold rounded-md uppercase">Shop Now</button>
                      </div>
              </div>

              <div className="lg:w-[450px] w-full h-full mt-5 md:mt-16 lg:mt-5">
                    <Image className="w-full lg:h-[300px] h-full object-contain" src={watch} alt="watch image" placeholder='blur'/>
                </div>
            </div>
        </Container>
    
  )
}

export default DiscountLaptop