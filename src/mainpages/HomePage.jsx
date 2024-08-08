import React, { useState } from 'react'
import { differenceInDays, format, startOfYesterday } from "date-fns";
import { tr } from 'date-fns/locale/tr';
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../store/store';
import { GlobalActions } from '../store/globalReducer';
import { setTitleActionCreator } from '../store/actions/globalActions';

const developerDays = differenceInDays(new Date(), new Date("2024-02-15"));
const yesterday = startOfYesterday();

const HomePage = () => {
  const [titleSave, setTitleSave] = useState("Merhaba redux")
  const title = useSelector((store) => store.title)
  const dispatch = useDispatch();

  const setTitle = (e) => {
    dispatch(setTitleActionCreator(e.target.value));
  }
  return (
    <div>
      <h2 className='text-xl text-white p-3 font-bold text-center mb-3 bg-teal-900 shadow-black'>ANA SAYFA</h2>
      <h4>{titleSave}</h4>
      <label >
        <input
          type="text"
          onChange={setTitle}
          placeholder='Başlık Gir' />
      </label>
      <button onClick={() => {
        setTitleSave(title)
      }}>Başılığı değiştir!</button>
      <hr />
      <p>{developerDays}</p>
      <p className='text-lg text-sky-600'>
        {format(yesterday, "d MMMM yyyy EEEE", { locale: tr })} dündür, {format(yesterday, "MMM")} bugündür.
      </p>

    </div>
  )
}

export default HomePage
