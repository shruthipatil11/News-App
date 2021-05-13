import React,{useState,useEffect} from 'react';
import {getAllNews,getNewsByPhrase} from './Api.js';
import  DisplayNews from './components/DisplayNews';
import SearchBar from './components/SearchBar';
import Header from './components/Header';
import './App.css';

function App() {
 
const [latestNewsOfUK,setLatestNewsOfUK] = useState("");
const [phrase,setPhrase] = useState(""); 
const [loading,setLoading] = useState(false);
const [apierror,setApiError] = useState("");

const callAPI = async () => {
  try {
    setLoading(true);
        const jsonResponse = await getAllNews();
         setLatestNewsOfUK(jsonResponse.articles);
  }
  catch (error)
  {
    setApiError("Unavailable");
  }
  setLoading(false);
    
}

useEffect( ()=>callAPI(),[]);

const handleChange = event => {
  setPhrase(event.target.value);
};

const handleSubmit = async event => {
  event.preventDefault();
  try {
    setLoading(true);
  const jsonResponse = await getNewsByPhrase(phrase);
   setLatestNewsOfUK(jsonResponse.articles);
  }
  catch (error)
  {
    setApiError("Unavailable");
  }
  setLoading(false);
};

  return (
    <div className="rootElement">
    
    {loading ? <div className="container">
       <div className="loader"></div>
      </div> : null} 

<Header />
<SearchBar handleChange={handleChange} handleSubmit={handleSubmit} />
{latestNewsOfUK.length > 0 && <DisplayNews latestNewsOfUK={latestNewsOfUK}/>}
{apierror && <p>News Unavailable.</p>}

</div>
  );
}

export default App;
