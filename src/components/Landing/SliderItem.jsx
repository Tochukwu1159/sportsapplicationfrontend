import React from 'react'
import Carousel from 'react-elastic-carousel'
import { TestimonialCard } from '../../styles/LandingStyles'


const SliderItem = ({slideData}) => { 
  const breakPoints = [
    {width:1, itemsToShow:1, showArrows:false},
    {width:550, itemsToShow:2, showArrows:false},
    {width:768, itemsToShow:3, pagination:false},
    {width:1200, itemsToShow:4, pagination:false},
]

  return ( 
    <Carousel showArrows={true}  breakPoints={breakPoints} >
      {slideData.map((item, index) => (
        <TestimonialCard key={index}>
        <h3>{item.name}</h3>
        <p>{item.message}</p>
       </TestimonialCard>
      ))}
    </Carousel>
  )
}

export default SliderItem
