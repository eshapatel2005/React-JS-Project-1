import logo from './logo.svg';
import './App.css';
import Navs from './components/fronted';


function App() {

  let obj={
   
    img1:'https://i.pinimg.com/originals/9c/d1/bf/9cd1bf6c2d1a88e8ac473f62a2898c62.png',
    menu:'MENU',
    location:'LOCATION',
    about:'ABOUT',
    contact:'CONTACT',
    text1:'YOUR FEET DESERVE THE BEST',
    img2:'https://logos-world.net/wp-content/uploads/2020/11/Flipkart-Emblem.png',
    img3:'https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg',
    img4:'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/1752710/2017/3/9/11489041755548-Nike-Men-Red-Solid-Air-Force-1-07-Suede-Sneakers-5411489041755150-1.jpg',
  }
  return (
   <Navs {...obj}></Navs>
  );
}

export default App;
