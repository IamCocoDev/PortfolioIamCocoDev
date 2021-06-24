import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { ROUTE } from '../../scripts/route.js'
import './Projects.css'

function Projects(props) {
  const [data, setData] = useState([])

  useEffect(() => {
    async function getData() {
      const result = await axios(
        ROUTE,
      );
      setData(result.data);
    }
    getData()
  }, [])

  console.log(data)

  return (
    <div id='projects' className='projects'>
      
    </div>
  )
}


export default Projects

