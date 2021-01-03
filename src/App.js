import React,{Component} from 'react';
import './App.scss';
import Navbar from "./Components/Navbar/Navbar";
import {Switch,Route} from "react-router-dom";
import Home from "./Pages/Home/Home"
import Bikes from "./Pages/Bikes/Bikes"
import Trail from "./Pages/Trail/Trail"
import DownHill from "./Pages/DownHill/DownHill"
import SWorks from "./Pages/SWorks/SWorks"
import InsideSpecialized from "./Pages/InsideSpecialized/InsideSpecialized"
import StumpJumperPro29 from "./Components/ItemPages/TrailItem/StumpJumperPro29/StumpJumperPro29"
import StumpJumperExpert29 from "../src/Components/ItemPages/TrailItem/StumpJumperExpert29/StumpJumperExpert29";
import StumpJumperExpert27 from "../src/Components/ItemPages/TrailItem/StumpJumperExpert27/StumpJumperExpert27"
import FuseExpert27 from "../src/Components/ItemPages/TrailItem/FuseExpert27/FuseExpert27"
import DemoRacer29 from "../src/Components/ItemPages/DownHillItem/DemoRacer29/DemoRacer29";
import DemoExpert29 from "../src/Components/ItemPages/DownHillItem/DemoExpert29/DemoExpert29";
import DemoAlloy27 from "../src/Components/ItemPages/DownHillItem/DemoAlloy27/DemoAlloy27";
import Demo8 from "../src/Components/ItemPages/SWorks/Demo8/Demo8";
import EpicEvo from "../src/Components/ItemPages/SWorks/EpicEvo/EpicEvo";
import StumpJumper29 from "../src/Components/ItemPages/SWorks/StumpJumper29/StumpJumper29";
import AccountCreation from "./Pages/AccountCreation/AccountCreation"
import SignIn from "../src/Components/SignIn/SignIn"
import Cart from "../src/Components/Cart/Cart"
import Footer from "./Components/Footer/Footer";
import Retailer from "./Pages/Retailer/Retailer";

import CardStumpJumperExpert29 from './Components/Cards/CardStumpJumperExpert29/CardStumpJumperExpert29';


class App extends Component {
 


  render(){
    return (
      <div className="App">
        <Navbar />
       
        <Switch>
          <Route exact path="/" component={Home} /> 
          <Route exact path="/bikes" component={Bikes} />
          <Route exact path="/trail" component={Trail} />
          <Route exact path="/downhill" component={DownHill} />
          <Route exact path="/sworks" component={SWorks} />
          <Route exact path="/insidespecialized" component={InsideSpecialized} />
          <Route path='/stumpjumperpro' exact component={StumpJumperPro29}/>
          <Route path='/stumpjumperexpert29' exact component={StumpJumperExpert29}/>
          <Route path='/stumpjumperexpert27' exact component={StumpJumperExpert27}/>
          <Route path='/fuseexpert27' exact component={FuseExpert27}/>
          <Route path='/demoracer29' exact component={DemoRacer29}/>
          <Route path='/demoexpert29' exact component={DemoExpert29}/>
          <Route path='/demoalloy27' exact component={DemoAlloy27}/>
          <Route path='/demo8' exact component={Demo8}/>
          <Route path='/epicevo' exact component={EpicEvo}/>
          <Route path='/stumpjumper29' exact component={StumpJumper29}/>
          <Route path='/signin' exact component={SignIn}/>
          <Route path='/accountcreation' exact component={AccountCreation}/>
          <Route path='/retailers' exact component={Retailer} />
          <Route path='/cart' exact component={Cart}/>
        </Switch>
        <Footer />
       
      </div>
    );
  }
  }


export default App;
