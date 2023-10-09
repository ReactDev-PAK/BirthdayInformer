import React from 'react'

const list = ({people}) => {
  return (
    <>
    {
      people.map( (person) => {
          const {id,name,age,image} = person
        return (
          <article key={id} className='person'>
            <div>
               <img src={image} alt={name} className='user_profile'/>
            </div>
            <div>
              <h1><span>Name: </span>{name}</h1>
              <h1><span>Age: </span>{age}</h1>
          </div>
          </article>
        )
      })
    }
    </>
  )
}

export default list
