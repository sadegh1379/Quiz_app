import React from "react";
import QuizForm from './QuizForm';
import Quiz from './Quiz';
// import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router , Switch , Route , Link , Redirect} from 'react-router-dom';
import "./App.css";

function App() {
  return(
  <div className="App" >
     <Router>
      <div id="nav">
              <span><Link to="/quiz">Quiz</Link> <Link to="/form">Add Questions</Link></span><span><a href="http://sadeghakbari.gigfa.com">About Me</a></span>
      </div><hr/>
     
        <Switch>
            <Route exact path="/" render={()=><Redirect path="/form"/>}/>
            <Route exact path="/form" component={QuizForm}/>
            <Route exact path="/quiz" component={Quiz}/>
         </Switch>
     </Router>
  </div>
  );
}

export default App;
