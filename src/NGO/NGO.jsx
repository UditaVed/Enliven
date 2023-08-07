import React,{useState} from 'react'
import Head from '../components/Head';
import data from './data';
import './Search.css'
const NGO = () => {
    const [filter,setFilter]= useState('');
    const searchText = (event)=>{
         setFilter(event.target.value);
    }
   let dataSearch =data.cardData.filter(item=>{
    return Object.keys(item).some(key=>
        item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
        )
   });

  return (
   <div className="all">
       <Head 
       topic="NGO"
       title="Reach Your Aid"
       about="Find Help Near you!"
       />
      <div className="bg-black w-[90vw] h-[1.4px] ml-5"></div>
        <section className="py-5 container">
        
            <div className="row justify-content-center">
               
               <div className="col-12 mb-5">
               <div className="mb-3 col-4 mx-auto text-center">
                <label className="form-lable h3"><b>Search NGO's Near You!</b></label>
                 <input className="form-control"
                        type="text"
                        value={filter}
                            onChange={searchText.bind(this)}>
                        </input>
               </div>

               </div>
                {dataSearch.map((item,index)=>{
                    return(
               <div className="  col-11 col-md-6 col-lg-4 mx-0 mk mb-5 ">
                    <a href={item.link}><div className="card car p-2 overflow-hidden h-100 shadow">
                        <img className="ngo_image card-img-top" src={item.img} />
                        <div className="card-body description">
                            <h3 className="card-title text-black"><b>{item.title}</b></h3>
                            <p className="card-text">{item.desc}<br></br>{item.desc2}</p>
                             <p className="card-text">{item.contact}</p>
                        </div>

                    </div></a>
                </div>
                    )
                })}
 
            </div>
        </section>
  </div>
  )
}


export default NGO
