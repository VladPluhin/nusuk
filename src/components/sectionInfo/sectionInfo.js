import React, { useState } from 'react';
import './sectionInfo.css';
import qr01 from '../../assets/images/qr01.png'
import qr02 from '../../assets/images/qr02.png'


import image11 from '../../assets/images/image11.png'
import image12 from '../../assets/images/image12.png'
import image13 from '../../assets/images/image13.png'
import image14 from '../../assets/images/image14.png'


const SectionInfo=({formData, activeUmrah, setActiveUmrah, activeNoble , setActiveNoble, })=> {
  const [popupIsActive, setPopupIsActive] = useState(false)

  function random() {
      const min = 10100000;
      const max = 10200000;
      const rand = min + Math.random() * (max - min);
      return rand.toFixed(0);
  }

  function getHome()  {
    setActiveUmrah(false)
    setActiveNoble(false)
  }

  const infoPerson= [
      { info: "Umrah"},
      { info: "Reservation number: " + random()},
      { info: "Permit number: " + random()}
  ]
  const infoPray= [
      { info: "Praying in the Noble Rawdah"},
      { info: "Reservation number: " + random()},
      { info: "Permit number: " + random()}
  ]
  
  return(
      <section   className={activeUmrah || activeNoble ? 'section-info section-info--active'   :'section-info' }>
       
          <div className='section-info__heading'>
            <div className='container'>
            <div  className='section-info__block'>
              {formData.name && <h1 className='section-info--name'>{formData.name}</h1>}
              {activeUmrah && <ul className='section-info__list-info'> 
                      {
                        infoPerson.map((personInfo, id)=> {
                          return(
                            <li key={personInfo.info + id}>{personInfo.info}</li>
                          )
                        })
                      }
                </ul>}
                {activeNoble && <ul className='section-info__list-info'> 
                      {
                        infoPray.map((personInfo, id)=> {
                          return(
                            <li key={personInfo.info + id}>{personInfo.info}</li>
                          )
                        })
                      }
                </ul>
                }
            </div>
            <div className='section-info__qr' onClick={()=>setPopupIsActive(true)}>
                  {activeUmrah && <img src={qr01} alt='qr name ' className=" border-green"/>}
                  {activeNoble && <img src={qr02} alt='qr name ' className=" border-orange"/>}
            </div>
          </div>
          </div>
          <div className='section-info__content'>
            <div className='scrolling-block'>
              <div className='container'>
                    <div className='section-info__content-block'>
                        <h2 className='section-info__content-block--title'>Permit Details</h2>
                        <div className='section-info__content-block--details'>
                            <div className='section-info__content-block--user'>
                                <span className='icon-user icon '> 
                                    <img src={image11}/>
                                </span>
                                <div className='user-info'>
                                    <span className='user-subtitle'>Issued by</span>
                                    <span className='name'>{formData.name}</span>
                                </div>
                            </div>
                            <div className='section-info__content-block--info'>
                                  {activeUmrah && <span className='user-subtitle'>Allowed to access Masjid al-Haram entry in</span>}
                                  {activeNoble && <span className='user-subtitle'>Allowed to access Al Masjid al Nabawi in</span>}
                              <div className='user-info days'>
                                <span className='icon-days icon'>
                                    <img src={image12}/>
                                </span>
                                <div className='info-body'>
                                  <span  className='user-subtitle'> day</span>
                                    {formData.dayGregorian.length > 0 && <span className='day'>{formData.dayGregorian}</span>}
                                    {formData.dayHijri.length > 0 && <span className='day hijri'>{formData.dayHijri}</span>}
                                </div>
                              </div>
                                {formData.timeFromTo.length > 0 &&
                                    <div className='user-info time'>
                                        <div>
                                            <span className='icon-time icon'>
                                              <img src={image13}/>
                                            </span>
                                            <div className='info-body'>
                                              <span  className='user-subtitle'> Time (From-To)</span>
                                              <span className='day'>{formData.timeFromTo}</span>
                                              </div>
                                          </div>
                                          {formData.arrivingTime.length > 0 && activeUmrah && 
                                              <div>
                                                  <span className='icon-time icon'>
                                                    <img src={image13}/>
                                                  </span>
                                                  <div className='info-body'>
                                                    <span  className='user-subtitle'> Arriving Time</span>
                                                    <span className='day hijri'>{formData.arrivingTime}</span>
                                                </div>
                                              </div>
                                            }
                                      </div>
                                }
                               
                            </div>
                        </div>
                    </div>
                    <div className='section-info__content-block'>
                        <h2 className='section-info__content-block--title'>Instruction</h2>
                          <div className='btn-wprapper'>
                            <button className='btn btn-primary'>
                                <span className="btn-icon icon">  <img src={image14} alt="image description"/></span>
                                  {activeUmrah && <span className='text'>Instruction for Masjid al-Haram entry</span>}
                                  {activeNoble && <span className='text'>Instruction in Entering Prophet's Mosque</span>}
                            </button>
                          </div>
                        
                          <div className='btn-wprapper'>
                            <button className='btn btn-primary text-blue'>
                                <span className='text'>Share</span>
                            </button>
                          </div>
                          <div className='btn-wprapper'>
                            <button className='btn -link'>
                                <span className='text'> Cancel Permit</span>
                            </button>
                          </div>
                          <div className='btn-wprapper'>
                            <button className='btn btn-primary text-dark' onClick={getHome}>
                                <span className='text'>Home Page</span>
                            </button>
                          </div>
                </div>
              </div>
          </div>
          <div className={popupIsActive ? 'popup-info popup-info--active' : 'popup-info' }>
            < div className='bg-popup'></div>
              <div className='popup' onClick={()=>setPopupIsActive(false)}>
                     <div className='popup-image'>
                          {activeUmrah && <img src={qr01} alt='qr name'/>}
                          {activeNoble && <img src={qr02} alt='qr name'/>}
                     </div>
                </div>                          
          </div>
        </div>
     </section>
    )
  }

export default SectionInfo;
