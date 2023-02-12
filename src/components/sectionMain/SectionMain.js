import React from 'react';
import './sectionMain.css';
import image01 from '../../assets/images/image01.png'
import image02 from '../../assets/images/image02.png'
import image03 from '../../assets/images/image03.png'
import image04 from '../../assets/images/image04.png'
import image05 from '../../assets/images/image05.png'
import image06 from '../../assets/images/image06.png'
import bgIcon from '../../assets/images/bg-icon.png'
import bgimage02 from '../../assets/images/bg-icon02.png'
const SectionMain=({formData,activeUmrah, setActiveUmrah, activeNoble, setActiveNoble  })=> {
    
    function getUmrah(activeUmrah, setActiveUmrah)  {
        if(!activeUmrah) {
         return setActiveUmrah(true)
        } else {
          return setActiveUmrah(false)
        }
      }
      
      function getNoble(activeNoble, setActiveNoble)  {
        if(!activeNoble) {
         return setActiveNoble(true)
        } else {
          return setActiveNoble(false)
        }
      }


    return(
        <section className='section-main'>
            <div className='section-main__heading'>
                <div className='bg-image'> <img src={bgIcon}  alt='image description'/></div>
                <div className='container'>
                    <h1>Welcome</h1>
                    <h3>{formData.name}</h3>
                </div>
            </div>
            <div className='section-main__content'>
                <div className='bg-image'> <img src={bgimage02}  alt='image description'/></div>
                <div className='scrolling-block'>
                    <div className='container'>
                        <div className='section-main__content-block'>
                                <h5 className='section-main__subtitle'>Local Hajj services</h5>
                                <ul className='bg-icons list-icons' >
                                    <li>
                                        <span className='list-icons--icon'>
                                            <img src={image01}  alt="reservation"/>
                                        </span>
                                        <span className='list-icons--subtitle'>Reservation</span>
                                    </li>
                                    <li>
                                        <span className='list-icons--icon'>
                                            <img src={image02}  alt="reservation Management"/>
                                        </span>
                                        <span className='list-icons--subtitle'>Reservation Management</span>
                                    </li>
                                    <li>
                                        <span className='list-icons--icon'>
                                            <img src={image03}  alt='refund'/>
                                        </span>
                                        <span className='list-icons--subtitle'>Refund</span>
                                    </li>
                                </ul>
                        </div>
                        <div className='section-main__content-block'>
                                <h5 className='section-main__subtitle'>Holy Mosque Services</h5>
                                <ul className='list-icons' >
                                    <li  onClick={()=> getUmrah(activeUmrah, setActiveUmrah)}>
                                        <span className='list-icons--icon'>
                                            <img src={image04}  alt="reservation"/>
                                        </span>
                                        <span className='list-icons--subtitle'>Umrah</span>
                                    </li>
                                </ul>
                        </div>
                        <div className='section-main__content-block'>
                                <h5 className='section-main__subtitle'>Prophet's Mosque Services</h5>
                                <ul className='list-icons' >
                                    <li  onClick={()=> getNoble(activeNoble, setActiveNoble)}>
                                        <span className='list-icons--icon'>
                                            <img src={image05}  alt="reservation"/>
                                        </span>
                                        <span className='list-icons--subtitle'>Praying in the Nobel Rawdah- Men</span>
                                    </li>
                                    <li  onClick={()=> getNoble(activeNoble, setActiveNoble)}>
                                        <span className='list-icons--icon'>
                                            <img src={image06}  alt="reservation Management"/>
                                        </span>
                                        <span className='list-icons--subtitle'>Praying in the Nobel Rawdah- Women</span>
                                    </li>
                                </ul>
                        </div>
                    </div>
                </div>
              
            </div>
        </section>
    )
  }



export default SectionMain;