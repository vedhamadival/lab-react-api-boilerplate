import { useEffect, useState } from 'react'
import axios from 'axios'

function Api() {

    const [BookData , SetBookData] = useState([])


    const getData = () =>{   
        axios.get("https://reactnd-books-api.udacity.com/books",{ headers: { 'Authorization': 'whatever-you-want' }})
        .then((res)=>{
            SetBookData(res.data.books) 
            console.log(res)})
    }


    useEffect (()=>{
        getData();
    },[])
    
  return (
    <div>
         {BookData.map(book=>(

            <div key={book.id} id="book-items">
                <img src={book.imageLinks.thumbnail} style={{height:'250px', width:'150px' , borderRadius:'5px'}}/>
                <h4>  <b>Topic : </b> {book.title}</h4>

                <div id="subtitle">

                <h5>{(book.subtitle? book.subtitle : null)}
                </h5>
                </div>

                <div id="author">
                <p> <b>Author : </b> {book.authors}</p> 
                </div>

                <div>
                <p>  <b>Description : </b><br/> {book.description}</p> 
                </div>
                <hr/>
            </div>
           
        ))}
    </div>
  )
}

export default Api
