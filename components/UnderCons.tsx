import React from 'react'
import Image from 'next/image'

const UnderC= () => {
  return (
    <div>
       <div className="">
                <Image
                  src="/images/Under-construction.jpg"
                  alt="Under-construction"
                  layout="fill"
                  style={{ objectFit: "cover" }}
                  className=""
                />
              </div>
    </div>
  )
}

export default UnderC
