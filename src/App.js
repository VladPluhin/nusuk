import React, { useState } from 'react';

import './App.css';
import Footer from './components/footer/Footer';
import SectionMain from './components/sectionMain/SectionMain';
import SectionForm from './components/sectionForm/SectionForm';
import SectionInfo from './components/sectionInfo/sectionInfo'

function App ({data}) {
  const [formActive, setFormActive] = useState(false);
  const [activeUmrah, setActiveUmrah]= useState(false)
  const [activeNoble, setActiveNoble]= useState(false)
 
  const [formData, setFormData]= useState({
    name: 'ABU BAKR',
    dayGregorian: '18 Feb 2023',
    dayHijri: '27 Raj. 1544',
    timeFromTo: '02:01-04:00',
    arrivingTime: '02:00'
  })
    
  const getFilterValue =( key, value) => {
    const newfilterValue = formData;
    Object.keys(newfilterValue).map((item)=> {
        if(item === key ) {
          newfilterValue[item] = value;
        }
      }
    )
   return setFormData(newfilterValue);
  } 
  return (
    <div className="wrapper">
        <SectionMain formData={formData}
            activeUmrah={activeUmrah} setActiveUmrah={setActiveUmrah}
            activeNoble={activeNoble} setActiveNoble={setActiveNoble}
         />
        <SectionForm formActive={formActive} formData={formData} setFormData={setFormData} getFilterValue={getFilterValue}/>
        <Footer isFormActive ={formActive} setForm={setFormActive} />
        <SectionInfo formData={formData} data={data} activeUmrah={activeUmrah} setActiveUmrah={setActiveUmrah}
            activeNoble={activeNoble} setActiveNoble={setActiveNoble}/>
    </div>  
  )
}


export default App;
