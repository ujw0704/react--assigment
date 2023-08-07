import React, { useEffect, useState } from "react";
import "../components/styles/App.css"
import Loader from "./Loader"
import PhotoFrame from "./PhotoFrame"
import axios from "axios"


const App = () => {

  let [id ,setId] = useState("")
  let [data ,setData] =useState({})
  let[checked ,setChecked] =useState(false)

  
    useEffect(()=>{ 

        axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then((response)=>{

        // console.log(response.data)

        setChecked(true)
        setData({})

        setTimeout(() => {
          setChecked(false)
        setData(response.data) 
         },1000);
         
      })
       
       
    },[id])

return(

<>
  <input type="number"onChange={(e)=>setId(e.target.value)} /> 

  {
  (checked) ? <Loader /> : ""
 }
 
 {
  (data.id) ? <PhotoFrame url={data.url} title={data.title} /> : ""
 }

  
   
 
</>
)
}

export default App;
