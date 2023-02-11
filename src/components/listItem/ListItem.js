import React from 'react';
import './listItem.css';
import image01 from '../../assets/images/image01.png'

const ListItem=(data)=> {
    return(
      <li>
          <a href='#'>
              <span className='list-icons--icon'>
                  <img src={image01}  alt={data.data.subtitle}/>
              </span>
              <span className='list-icons--subtitle'>{data.data.subtitle}</span>
          </a>
      </li>
    )
  }



export default ListItem;
