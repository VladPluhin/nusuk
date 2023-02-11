import './footer.css';
import image07 from '../../assets/images/image07.png'
import image08 from '../../assets/images/image08.png'
import image09 from '../../assets/images/image09.png'
import image10 from '../../assets/images/image10.png'

function Footer ({ isFormActive, setForm}) {
  function getForm(isFormActive, setForm)  {
    if(!isFormActive) {
     return setForm(true)
    } else {
      return setForm(false)
    }
  }

  return (
    <footer className='footer'>
      <div className='container'>
        <ul className='footer__navlist'>
              <li>
                <span  onClick={()=> setForm(false)}>
                    <span className='list-icons--icon'>
                        <img src={image07}  alt='Main'/>
                    </span>
                    <span className='list-icons--subtitle'>Main</span>
                </span>
              </li>
              <li>
                <span>
                      <span className='list-icons--icon'>
                          <img src={image08}  alt='Permints'/>
                      </span>
                      <span className='list-icons--subtitle'>Permints</span>
                  </span>
              </li>
              <li>
                  <span>
                        <span className='list-icons--icon'>
                            <img src={image09}  alt='Other services'/>
                        </span>
                        <span className='list-icons--subtitle'>Other services</span>
                    </span>
              </li>
              <li>
                  <span onClick={()=> getForm(isFormActive, setForm)}>
                        <span className='list-icons--icon'>
                            <img src={image10}  alt="more"/>
                        </span>
                        <span className='list-icons--subtitle'>more</span>
                    </span>
              </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;
