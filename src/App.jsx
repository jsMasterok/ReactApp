import './App.scss'
// import Footer from './components/Footer';
import Header from './components/Header';
import Main from './Pages/Main';
import Todo from './Pages/Todo';

import { Routes, Route,Link} from 'react-router-dom'
import Auth from './components/Auth'
import Notfound from './Pages/Notfound'
import GitHubAPI from './Pages/GitHubAPI.tsx';


function App() {
  return (
    <div className="App bg-secondary bg-gradient">
      <Header Link={Link} />
      <Routes>
              <Route path='/' element={<Main/>}/>
              <Route path='*' element={<Notfound/>}/>
              <Route path='/auth' element={<Auth/>} />
              <Route path ='/todo' element={<Todo/>}/>
              {/* <Route path='/Git' element={<GitHubAPI/>}/> */}
              <Route path='/Git' element={<GitHubAPI/>}/>
      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
