import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styling/Search.scss";
import {Button, Form} from 'react-bootstrap'
import { connect } from "react-redux";
const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
    get_city: (query) =>
      dispatch({
        type: "GET_CITY",
        payload: query,
      })
  });


const Search = (props)=> {
    
    const [query, setQuery] = useState('')
    const submitQuery = async(e) => {
        e.preventDefault()
        props.get_city(query)
    }

    

    return (<Form className='search-bar d-flex flex-row rounded-pill' onSubmit={submitQuery}>
        <Form.Group >
          <Form.Control placeholder="Enter a city here" onChange={(e)=> setQuery(e.target.value) }/>
          
        </Form.Group>
        <Button type='submit'>Search</Button>
      </Form>)
}
export default connect(mapStateToProps, mapDispatchToProps)(Search);
