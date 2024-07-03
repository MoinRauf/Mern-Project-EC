import React from "react"
import { ImQuotesRight } from "react-icons/im"
import { customer } from "../../assets/data/data"
import { Heading } from "../../common/Heading"

export const Testimonial = () => {
  return (
    <>
      <section className='customer'>
        <Heading title='Choose The Plans' desc='Meet our newbies! The latest templates uploaded to the marketplace.' />

        <div className='content'>
          {customer.map((items) => (
            <div className='card' key={items.id}>
              <button>
                <ImQuotesRight />
              </button>
              <p style={{fontSize:"30px", color:"#EEF0E5"}}> "{items.desc}"</p>
              <h3>{items.name}</h3>
              <span>{items.post}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
