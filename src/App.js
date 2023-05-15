import logo from './logo.svg';
import Container from 'react-bootstrap/Container';
import Layout from './component/layoutannotation';
import './App.css';
//require('dotenv').config();

function App() {
  return (
    <Container className="p-3">
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <h1 className="header">Annotation Tool Component</h1>
        <Layout>
       
        </Layout>
    </Container>
  );
}

export default App;
