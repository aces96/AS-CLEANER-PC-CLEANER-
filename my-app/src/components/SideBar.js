import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import bootstrap from 'bootstrap/dist/css/bootstrap.css'

export default function SideBar() {
  return (
    <>
          <div className="container">
                  <ul className="sidebar">
                  <div className='head'>
                  <div className='hello'><span>AS</span></div>
                  <div className='Pc'><span>PC-Cleaner</span></div></div>
                   <li><span><i className="fa fa-tv"></i></span><span>Vue d'ensemble</span></li>
                   <li><span><i className="fa fa-dashboard"></i></span><span>Analyser</span></li>
                   <li><span><i className="fa fa-clock"></i></span><span>Historique</span></li>
                   <li><span><i className="fa fa-gear"></i></span><span>Options</span></li>
                   
                   <a href='https://sftsft.netlify.app/'><button className='button'>Site Web</button></a>
                  </ul>
                  
                  <div className="content">
                     <div className='header'>
                       <h1 className='title'>Analyse de PC nécessaire</h1>
                       <div className='subtitle'>
                        <h3 className='subtitle'>Espace à nettoyer : 250 GB</h3>
                        <h3 className='subtitle'>Dernière analyse  : 21/05/2022</h3>
                        <h3 className='subtitle'>Espace à nettoyer : 250 GB</h3>
                       </div>
                       <button className='button2'>Analyser</button>
                       </div>
                  </div>
                  <div className='buttons'>
                    <button className='contenu'><i className='icon' class="fa-solid fa-broom"></i>Nettoyer</button>
                    <button className='contenu'><i className='icon' class="fa-solid fa-box-archive"></i>Historique</button>
                    <button className='contenu'><i className='icon' class="fa-solid fa-arrow-rotate-right"></i>Mettre à jour</button>
                  </div>
          </div>
        </>
  )
}
