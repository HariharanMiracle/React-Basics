//Main templates
import Header from './Header';
import Footer from './Footer';

// Pages
// import Home from './pages/Home';
// import About from './pages/About';
import Customer from './pages/Customer';
import ClassEx1 from './pages/ClassEx1';
import ClassEx2 from './pages/ClassEx2';
import PropsHead from './pages/PropsHead';
import PropValidation from './pages/PropValidation';
import ComponentLifeCycleEx from './pages/ComponentLifeCycleEx';
import PropsExample1 from './pages/PropsExample1';
import CommonExamples from './pages/CommonExamples';
import MyHoc from './pages/MyHOC';
import Hoc2 from './pages/HocEx2';

import {  BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function Main(){
    return(
        <Router>
            <Header />
            <br/>
            <div className="container">
                <Switch>
                    {/* <Route exact path="/" component={Home}/> */}

                    <Route path="/customer" component={Customer}/>
                    <Route path="/classEx1" component={ClassEx1}/>
                    <Route path="/classEx2" component={ClassEx2}/>
                    <Route path="/propsExample" component={PropsHead}/>
                    <Route path="/propValidation" component={PropValidation}/>
                    <Route path="/propValidation" component={PropValidation}/>
                    <Route path="/componentLifeCycleExample" component={ComponentLifeCycleEx}/>
                    <Route path="/propsExample1" component={PropsExample1}/>
                    <Route path="/commonExamples" component={CommonExamples}/>
                    <Route path="/myHoc" component={MyHoc}/>
                    <Route path="/hoc2" component={Hoc2}/>

                    {/* <Route path="/about" component={About}/> */}
                </Switch>
            </div>
            <br/>
            <Footer />
        </Router>
    );
}

export default Main;