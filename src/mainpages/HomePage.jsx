import React, { useState } from 'react'
import { differenceInDays, format, startOfYesterday } from "date-fns";
import { tr } from 'date-fns/locale/tr';
import { useDispatch, useSelector } from 'react-redux';
import { setTitleActionCreator } from '../store/actions/globalActions';
import { store } from '../store/store';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const developerDays = differenceInDays(new Date(), new Date("2024-02-15"));
const yesterday = startOfYesterday();


const HomePage = () => {
  const [titleSave, setTitleSave] = useState("Merhaba redux")
  const title = useSelector((store) => store.globalReducer.title)
  const dispatch = useDispatch();
  const { userName, setUserName } = useContext(UserContext)

  const { isPending, error, data } = useQuery({
    queryKey: ["motivation"],
    queryFn: () =>
      axios
        .get("https://workintech-ng.onrender.com/motivation")
        .then(res => res.data),

  });

  console.log(data)

  const titleChange = (e) => {
    setTitleSave(e.target.value)
  }

  const setTitle = (e) => {
    dispatch(setTitleActionCreator(titleSave));
  }

  return (
    <div>
      <h2 className='text-xl text-white p-3 font-bold text-center mb-3 bg-teal-900 shadow-black'>ANA SAYFA</h2>
      <h4>{title}</h4>
      <label >
        <input
          type="text"
          onChange={titleChange}
          placeholder='Başlık Gir' />
      </label>
      <button onClick={() => {
        setTitle(titleSave)
      }}>Başılığı değiştir</button>
      <hr />
      <p>{developerDays}</p>
      <p className='text-lg text-sky-600'>
        {format(yesterday, "d MMMM yyyy EEEE", { locale: tr })} dündür, {format(yesterday, "MMM")} bugündür.
      </p>
      <hr />
      <p>{userName}</p>
      <label>
        <input className='border-2 border-black border-solid' placeholder='Kullanıcı adı?' type="text" onChange={(e) => { setUserName(e.target.value) }} />
      </label>
      <hr />
      <div>
        {isPending && (<p>...Loading</p>)}
        {data?.author !== "M. Kemal Atatürk" && (
          <p>{data?.word}</p>
        )}
        {data?.author !== "M. Kemal Atatürk" && (
          <p>{data?.author}</p>
        )}
      </div>
    </div>
  )
}

export default HomePage
