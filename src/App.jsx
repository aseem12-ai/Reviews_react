import people from './data'
import './App.css'
import { useState } from 'react'
import {FaChevronLeft,FaChevronRight,FaQuoteRight} from  'react-icons/fa'

function App() {
  

const [index,setIndex]=useState(0)
const {name,job,image,text}=people[index]


// const checkNumber=(number)=>{
//   if(number>people.length-1){
//     return 0
//   }
//   if(number<0){
//     return people.length-1
//   }
//   return number
// }


const nextPerson=()=>{
  setIndex((currentIndex)=>{
    const newIndex=(currentIndex+1)%people.length
    // if(newIndex>people.length-1){
    //   return 0
    // }
    // return newIndex
      // !!!or
    //  return  checkNumber(newIndex)
    return newIndex
  })
}

const prevPerson=()=>{
  setIndex((currentIndex)=>{
    const newIndex=(currentIndex-1+people.length)% people.length
    // if(newIndex<0){
    //   return people.length-1
    // }
    // return newIndex
       // !!!or
      // return  checkNumber(newIndex)
      return newIndex
  })
}


const randomPerson=()=>{
  let randomNumber=Math.floor(Math.random()*people.length)
  console.log(randomNumber);
  if(randomNumber==index){
    randomNumber=index+1
  }
  // setIndex(checkNumber(randomNumber))
  const newIndex=randomNumber%people.length
  setIndex(newIndex)
}




  return (
    <main>
      <article className='review'>
        <div className="img-container">
        <img src={image} alt={name} className='person-img' />
        <span className="quote-icon">
          <FaQuoteRight/>
        </span>
        </div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
        <div className='btn-container'>
          <button className='prev-btn' onClick={prevPerson}>
            <FaChevronLeft/>
          </button>
          <button className='next-btn' onClick={nextPerson}>
            <FaChevronRight/>
          </button>

        </div>
        <button className='btn btn-hipster' onClick={randomPerson}>
          Surprise me
        </button>
      </article>
      
    </main>
  )
}

export default App
