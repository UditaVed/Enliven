import React,{useState} from 'react'
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
        <div className="black_script">NGO'S</div>
      <h1>Reach Your Aid</h1>
      <h4>Find Help Near you!</h4>
      <hr/>
        <section className="py-4 container">
        
            <div className="row justify-content-center">
               
               <div className="col-12 mb-5">
               <div className="mb-3 col-4 mx-auto text-center">
                <label className="form-lable h3"><b>Search</b></label>
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
                        <img src={item.img} className="card-img-top"/>
                        <div className="card-body">
                            <h3 className="card-title"><b>{item.title}</b></h3>
                            <p className="card-text"><b>{item.desc}<br></br>{item.desc2}</b></p>
                             <p className="card-text"><b>{item.contact}</b></p>
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
