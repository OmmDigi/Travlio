import Image from 'next/image'
import React from 'react'

function loading() {
  return (
    <section className='w-full min-h-screen flex items-center justify-center flex-col'>
        <Image className='w-36' src="/infinite-spinner.svg" alt='spinner' height={1200} width={1200}/>
        <p>Loading...</p>
    </section>
  )
}

export default loading