import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styling/Search.scss";
import {Button, Form} from 'react-bootstrap'

const Search = ()=> {
    const [query, setQuery] = useState('')
    const submitQuery = (e) => {
        e.preventDefault()
        console.log(query)
    }
    return (<Form className='search-bar d-flex flex-row rounded-pill' onSubmit={submitQuery}>
        <Form.Group >
          <Form.Control placeholder="Enter a city here" onChange={(e)=> setQuery(e.target.value) }/>
          
        </Form.Group>
        <Button type='submit'>Search</Button>
      </Form>)
}
export default Search;
