import { useState } from 'react';
import port from './assets/JSON/portJSON.json';
import { json } from 'react-router-dom';




function Projects() {

  var desc = "";

const [idClicked, setID] = useState([]);

const openModal = (idClicked)=>{
  setID(idClicked);
 document.getElementById(idClicked).classList.add('d-block');
fillDescription(idClicked);
}

const fillDescription =(idClicked)=>{

  console.log(idClicked)

  console.log(port)


  port.forEach(element => {

   if(idClicked == element.id - 1){
    desc = element.description

   }


  });

    //console.log(desc)
   // document.getElementById('modal_cont').innerHTML = `${desc}`;

}

const closeModal = (idClicked)=>{
  setID(idClicked);
  document.getElementById(idClicked).classList.remove('d-block');

}


  return (
    port.map((d, i) => (
      <div key={d.id} className='col-lg-3'>
      <div className="card text-center">
          <div className="card-header">
              <img src={d.thumbImage} className='img-fluid'/>
          </div>
          <div className="card-body bg-tertiary">
              <h5 className="card-title">{d.title}</h5>
              <p className="card-text">{d.excerpt}</p>
              <button className="btn btn-dark" onClick={()=>openModal(i)}>Go somewhere</button>
           </div>
          <div className="card-footer text-body-secondary">
            <i className={d.cat_symbol}></i>

          </div>
      </div>
      <div id={i} className="modal modal-sheet bg-dark px-4 py-md-5" tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-xl bg-dark" role="document">
        <div className="modal-content rounded-4 shadow bg-dark">
          <div className="modal-header d-block">
            <h2 className="modal-title text-white">{d.title}</h2>
            <i className={d.cat_symbol}></i>
          </div>
          <div className="modal-body py-3 text-white">
           <img src={d.modal_images} className='img-fluid'></img>
           <h4 className="text-white mt-3 fw-bold">{d.excerpt}</h4>
            </div>
            <div className="modal-body py-3 text-white" id="modal_cont">
              {d.description}

            </div>

          <div className="modal-footer flex-column align-items-stretch w-100 gap-2 pb-3 border-top-0">

            <div className="modal-footer">
              <button type="button" onClick={()=>closeModal(i)} className="btn btn-primary" data-bs-dismiss="modal" aria-label="Close">Close</button>
            </div>
          </div>
      </div>
    </div>
  </div>
     </div>
    )
  ))
}

export {Projects};

