import PageIntroBanner from '@/app/components/PageIntroBanner'
import React from 'react'

function page({ params }: { params: { catname: string } }) {
  return (
    <section className='h-full w-full'>
        <PageIntroBanner src='http://travlio.in/wp-content/uploads/2019/04/page-title.jpg' text={params.catname.toUpperCase().replaceAll("-", " ")}/>
    </section>
  )
}

export default page