import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Col, Row, Spinner } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import News from './components/News/News';


function App() {
  const [news, setNews] = useState([]);
  
  useEffect(() => {
    fetch("https://newsapi.org/v2/everything?q=tesla&from=2023-12-18&sortBy=publishedAt&apiKey=e19659c585ee4f93a0c61fc918ab1716")
      .then(res => res.json())
      .then(data => setNews(data.articles));

  }, []);

  return (
    <div className="App">
      {
        news.length === 0 ? 
        <Spinner animation="border" variant="primary" />
        
        :
         <Row xs={1} md={2} className="g-4">
         {
           news.map(nws => <News news={nws}></News>)
         }
         </Row>
      }

    </div>
  );
}

export default App;
