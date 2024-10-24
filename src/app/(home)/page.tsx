import BlogListing from '@/components/BlogListing/BlogListing'
import CarouselWrapper from '@/components/CarouselWrapper/CarouselWrapper'
import React from 'react'

type Props = {}

const HomePage = (props: Props) => {
  return (
    <div>

      <CarouselWrapper  />
      <BlogListing />
    </div>
    
  )
}

export default HomePage