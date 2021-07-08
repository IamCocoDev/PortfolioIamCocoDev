import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './Projects.css'
import Project from '../Project/Project.jsx'

function Projects() {
  const [data, setData] = useState([])

  useEffect(() => {
    async function getData() {
      const result = await axios.get('/metadata');
      setData(result.data);
    }
    getData()
  }, [])

  console.log(data)

  return (
    <div id='projects' className='projects'>
      {
        (data.map((c) => (
        <Project
          url={c.url}
          title={c.title}
          description={c.description}
          image={c.image}
          author={c.author}
          className='projectsCards'
        >
        </Project>)))}
    </div>
  )
}


export default Projects

