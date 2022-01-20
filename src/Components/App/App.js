import React ,{useEffect, useState} from 'react'
import Footer from '../Footer/footer';
import Header from '../Header/header';
import DraggableList from '../list/list';
import axios from 'axios';
import './App.css';







function App() {

  const[prayerData , setPrayerdata] = useState();
 
 
  const today = new Date();
  const day = (today.getDate() < 10 ? '0' : '') + today.getDate();
  const month = (today.getMonth() < 10 ? '0' : '') +(today.getMonth()+1);
  const year = today.getFullYear();




 
   
  

  useEffect(() => {
    
   
    axios.get(`http://api.aladhan.com/v1/calendarByCity?city=Kozhikode&country=India&method=8&month=${month}&year=${year}`).then(function (response) {
     
    var Length = response.data.data.length;

    for (var i=0 ; i<Length ; i++){

      // console.log(response.data.data[i].date.gregorian.day)
     
            // setPrayerdata(response.data.data[i]);

            if(day === response.data.data[i].date.gregorian.day){
              setPrayerdata(response.data.data[i].timings)
            }
       
    }

    
    
 
      
    }).catch(function (error) {
    
    console.log(error);
  })


  },[])




  
  
 
 
  return (
    <div>
    <Header/>
    <DraggableList items={`duhur${"\xa0\xa0\xa0\xa0"+(prayerData?prayerData.Dhuhr:"").slice(0,5)}/asr${"\xa0\xa0\xa0\xa0\xa0\xa0\xa0"+(prayerData?prayerData.Asr:"").slice(0,5)}/maghrib${"\xa0\xa0"+(prayerData?prayerData.Maghrib:"").slice(0,5)}/isha${"\xa0\xa0\xa0\xa0\xa0\xa0"+(prayerData?prayerData.Isha:"").slice(0,5)}/fajir${"\xa0\xa0\xa0\xa0\xa0"+(prayerData?prayerData.Fajr:"").slice(0,5)}`.split('/')} />
   
    <Footer/>
    </div>
  )
}

export default App

// ${prayerData?prayerData.Fajr:""}
// (prayerData?prayerData.Asr:"").slice(0,5)