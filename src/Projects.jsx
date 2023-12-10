import { useState } from 'react';
import portFolio from './assets/JSON/portJSON.json';

function Projects() {


const [idCLicked, setID] = useState([]);


const openModal = (whatClicked)=>{
  setID(whatClicked);
 document.getElementById(whatClicked).classList.add('d-block');
 hideButton(whatClicked);
}

const closeModal = (whatClicked)=>{
  setID(whatClicked);
  document.getElementById(whatClicked).classList.remove('d-block');

}

const hideButton=(whatHide)=>{
  console.log(portFolio[whatHide].extLink);
  console.log(portFolio[whatHide].GITLink);

  if(portFolio[whatHide].GITLink === "no_git_link"){
    document.getElementById(whatHide+2000).classList.add('d-none');
  }

  if(portFolio[whatHide].extLink === "no_link"){
    document.getElementById(whatHide+1000).classList.add('d-none');
  }


  console.log(whatHide)
}

  return (
    portFolio.map((d, i) => (
      <div key={d.id} className='col-lg-3'>
      <div className="card text-center">
          <div className="card-header">
              <img src={d.thumbImage} className='img-fluid'/>
          </div>
          <div className="card-body bg-tertiary">
              <h5 className="card-title">{d.title}</h5>
              <p className="card-text">{d.excerpt}</p>

              <button className="btn btn-outline-dark d-flex mx-auto align-items-center" onClick={()=>openModal(i)}>
                <i className='fa fa-rocket px-2 fs-5'></i>
                See project</button>
           </div>
          <div className="card-footer text-body-secondary">
          <i dangerouslySetInnerHTML={{__html: d.cat_symbol}}></i>
          </div>
      </div>
      <div id={i} className="modal modal-sheet bg-dark px-4 py-md-5" tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-xl bg-dark" role="document">
        <div className="modal-content rounded-4 shadow bg-dark">
          <div className="modal-header d-block">
            <h2 className="modal-title text-white">{d.title}</h2>
            <i dangerouslySetInnerHTML={{__html: d.cat_symbol}}></i>
          </div>
          <div className="modal-body py-3 text-white">
           <img src={d.modal_images} className='img-fluid'></img>
           <h4 className="text-white mt-3 fw-bold">{d.excerpt}</h4>
            </div>
            <div className="modal-body py-3 text-white" id="modal_cont">
            <p className='fs-5' dangerouslySetInnerHTML={{__html: d.description}}>
            </p>
            <div>
            <a id={i+1000} className="fs-4 btn btn-outline-primary align-items-center mx-2" href={d.extLink} target='_blank'>
                <i className='fa fa-desktop px-2 fs-4'></i>
                See Live</a>
            <a id={i+2000} className="mt-2 fs-4 btn btn-outline-primary align-items-center mx-2" href={d.extLink} target='_blank'>
                <i className='fab fa-github px-2 fs-4'></i>
                GitHUB</a>
            </div>


            </div>

          <div className="modal-footer flex-column align-items-stretch w-100 gap-2 pb-3 border-top-0">

            <div className="modal-footer">
              <button type="button" onClick={()=>closeModal(i)} className="btn btn-danger align-items-center" data-bs-dismiss="modal" aria-label="Close">
              <i className='fa fa-times px-2 fs-4'></i>Close
                </button>
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

