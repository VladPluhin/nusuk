import React from 'react';
import './sectionForm.css';

const SectionForm =({formActive, getFilterValue})=> {
    return(
        <section className={formActive ? 'sectionForm sectionForm-active'   :'sectionForm' }>
            <div className='container'>
              <form className='form__info'>
                <div className='form__info-group'>
                    <label htmlFor='name'>Name</label>
                    <input type='text' id='name'  onChange={(event)=>{getFilterValue('name', event.target.value)}}/>
                </div>
                <div className='form__info-group'>
                    <label htmlFor='date-gregorian'>Date(Gregorian)</label>
                    <input type='text' id='date-gregorian'  onChange={(event)=>{getFilterValue('dayGregorian', event.target.value)}}/>
                </div>
                <div className='form__info-group'>
                    <label htmlFor='date-hijri'>Date(Hijri)</label>
                    <input type='text' id='date-hijri'  onChange={(event)=>{getFilterValue('dayHijri', event.target.value)}}/>
                </div>
                <div className='form__info-group'>
                    <label htmlFor='time'>Time(from-to)</label>
                    <input type='text' id='time'  onChange={(event)=>{getFilterValue('timeFromTo', event.target.value)}}/>
                </div>
                <div className='form__info-group'>
                    <label htmlFor='arrival-time'>Arrival Time</label>
                    <input type='text' id='arrival-time' onChange={(event)=>{getFilterValue('arrivingTime', event.target.value)}}/>
                </div>
              </form>
            </div>
        </section>
    )
  }

export default SectionForm;
