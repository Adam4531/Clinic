import styles from "./Visits.module.css";
import { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
function VisitsPage() {
  const [visitUncomingFetch, setVisitUncoming] = useState([]);
  const [visitPastFetch, setVisitPast] = useState([]);
  // const [nameFetch, setName] = useState('');
 
  useEffect(() => {
    const currentDate = new Date();
    fetch(
      `http://127.0.0.1:8000/visits/visits?date=&patient=${localStorage.getItem(
        "owner"
      )}&doctor=&recommendation=`,
      {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          SameSite: "none",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        data.forEach((element) => {
          const fetchedDate = new Date(element.date);
          if (fetchedDate > currentDate) {
              setVisitUncoming((current) => [...current, element]);
          } else {
              setVisitPast((current) => [...current, element]);
          }
        });
      });
  }, []);
  
  //To wgl blokuje pod stronę wizyty jakby internetu się nie miało
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const updatedData = await Promise.all(
  //         visitUncomingFetch.map(async (item) => {
  //           const doktorPromise = fetch(item.doctor,
  //             {
  //               method: "GET",
  //               credentials: "include",
  //               headers: {
  //                 "Content-Type": "application/json",
  //                 SameSite: "none",
  //               },
  //             });
  
  //           const [doktorResponse] = await Promise.all([
  //             doktorPromise,
  //           ]);
  
  //           const doktorData = await doktorResponse;
  //           console.log(doktorData)
  //           return {
  //             ...item,
  //             doctor: doktorData.first_name,
  //           };
  //         })
  //       );
  
  //       setVisitUncoming(updatedData);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };
  
  //   fetchData();
  // }, [visitUncomingFetch]);

//To powoduje ze sie nie renderuje ale to poczatek (czegos)
  // useEffect(()=>{
  //   const names = visitUncomingFetch.map((datas) => {
  //     console.log(datas.doctor)
  //     fetch(datas.doctor,
  //       {
  //         method: "GET",
  //         credentials: "include",
  //         headers: {
  //           "Content-Type": "application/json",
  //           SameSite: "none",
  //         },
  //       }
  //     ).then((res) => res.json()).then(data =>{
  //       setName(data.first_name + ' ' + data.last_name)
  //     })
  //     return {...datas, doctor: nameFetch}
  //   });
  //   const names2 = visitUncomingFetch.map((datas) => {
  //     console.log(datas.doctor)
  //     fetch(datas.doctor,
  //       {
  //         method: "GET",
  //         credentials: "include",
  //         headers: {
  //           "Content-Type": "application/json",
  //           SameSite: "none",
  //         },
  //       }
  //     ).then((res) => res.json()).then(data =>{
  //       setName(data.first_name + ' ' + data.last_name)
  //     })
  //     return {...datas, doctor: nameFetch}
  //   });
  //   setVisitUncoming(names)
  //   setVisitPast(names2)
  // },[nameFetch, visitUncomingFetch])

  
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.h1_}>Lista wizyt</h1>
      </div>
      <div className={styles.body}>
        <div className={styles.upcoming}>
          <h2 className={styles.h2_}>Nadchodzące</h2>
          {visitUncomingFetch.map((visit) => (
            <NavLink
            to={`${visit.id}`} ><div className={styles.upcoming_visit} key={visit.url}>
              <span className={styles.date}>Data: {visit.date}</span>
              <span className={styles.doctor}>Lekarz: {visit.doctor}</span>
            </div>
            </NavLink>
          ))}
        </div>
        <div className={styles.past}>
          <h2 className={styles.h2_}>Przeszłe</h2>
          {visitPastFetch.map((visit) => (
             <NavLink
             to={`past/${visit.id}`} ><div className={styles.past_visit} key={visit.url}>
              <span className={styles.date}>Data: {visit.date}</span>
              <span className={styles.doctor}>Lekarz: {visit.doctor}</span>
            </div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default VisitsPage;
