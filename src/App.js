import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
function App() {
  const [show,setshow] = useState(false)
  const[city,setcity] =useState('')
  return (
    <div className="App">
      <div className='navbar'>
        <img className='navbar-logo' src='/logo.png' />
        <p className='phone'>080-68065001</p>
        <button className='freequotebtn' onClick={()=>setshow(!show)}>Get Free Quote</button>
      </div>
      <img className='banner-image' src='/banner-image-desktop.jpg'/>
      <div className='offer'>Up to 15% OFF on your Home Interiors. Limited Period Offer. <span className='underline'>GET OFFER</span> 〉</div>
      {show &&<div className='popup'>
        <div className='interior-flex'>
            <div>
            <img src='/home-interior-offer-may-d.jpg' width={400}/>
            </div>
            <div style={{marginLeft:'20px'}}>
              <div className='btn-flex'>
                <h1>Get A Free Consultation</h1>
                <button className='cross-btn' onClick={()=>setshow(!show)}>X</button>
              </div>
              <p>Tell Us About Your Home</p>
              <button className='popup-btn'>1 BHK</button>
              <button className='popup-btn'>2 BHK</button>
              <button className='popup-btn'>3 BHK</button>
              <button className='popup-btn'>4+ BHK/Duplex</button>
              <button className='popup-btn'>Independent Home/Villa</button>
              <p><img src='/home-icon.png'/>We can design all spaces of your sprawling home</p>
              <p>Which city is this home In</p>
              <p>
              <button className={city==='banglore'?'active-popup-btn':'popup-btn'} onClick={()=>setcity('banglore')}>Banglore</button>
              <button className={city==='hyderabad'?'active-popup-btn':'popup-btn'} onClick={()=>setcity('hyderabad')}>Hyderabad</button>
              <button className={city==='chennai'?'active-popup-btn':'popup-btn'} onClick={()=>setcity('chennai')}>Chennai</button>
              <button className={city==='mumbai'?'active-popup-btn':'popup-btn'} onClick={()=>setcity('mumbai')}>Mumbai</button>
              <button className={city==='navi mumbai'?'active-popup-btn':'popup-btn'} onClick={()=>setcity('navi mumbai')}>Navi Mumbai</button>
              </p>
              <p><img src='ic_mumbai.png'/>Mumbaikars love the extra space we create</p>
              <p>What is your Name?</p>
              <select>
                <option>option 1</option>
                <option>option 2</option>
                <option>option 3</option>
              </select>
              <input style={{marginLeft:'10px'}} type="number"/>
            </div>
            
        </div>
        
      </div>}
    </div>
  );
}

export default App;
