import React, {useEffect,useState} from 'react'
import './jokes.css'
import axios from 'axios'



const Jokes = () => {
    const url= import.meta.env.VITE_URL
    const handleSubmit= function() {

        
    }
    const [joke, setJoke] = useState([])
    const [isLoading, setisLoading]=useState(false)

    const HandleGenerate =  () => { 
        setisLoading(true)
        axios.get(url)
        .then((response)=>{
            
            console.log(response.data);
            setJoke(response.data)
            setisLoading(false)
        })

        
    }
    useEffect(()=>{
        HandleGenerate( )
    }, [])
    
  return (
    <div className='joke'>
        <div><h2 className='joke-gen'>Jokes Generator</h2></div>
        {
            isLoading ? (<h1>...loading</h1>): (<><h4>Joke ID:  {joke.id}</h4>
        <h4>Joke Value:  {joke.value}</h4>
            </>)
        }
      <div>
        <button className='btn' onClick={HandleGenerate}>Generate Joke</button>
      </div>
       
    </div>
    
  )
}

export default Jokes