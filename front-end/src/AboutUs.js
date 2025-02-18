import { useState, useEffect } from 'react'
import axios from 'axios'
import './Messages.css'

/**
 * A React component that shows a form the user can use to create a new message, as well as a list of any pre-existing messages.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const AboutUs = props => {
  const [content, setContent] = useState([])

  /**
   * A nested function that fetches messages from the back-end server.
   */
  const fetchContent = () => {
    // setMessages([])
    // setLoaded(false)
    axios
      .get(`${process.env.REACT_APP_SERVER_HOSTNAME}/about`)
      .then(response => {
        // axios bundles up all response data in response.data property
        const aboutContent = response.data
        setContent(aboutContent)
      })
  }

  useEffect(() => {
    fetchContent()
  }, []) 

  return (
    <>
      <p>{content.name}</p><br/>
      <p>{content.paragraph}</p>
      <img width='150'src={process.env.REACT_APP_SERVER_HOSTNAME + content.imageUrl}></img>

    </>
  )
}

// make this component available to be imported into any other file
export default AboutUs
