import React from 'react';
import s from './Popup.module.scss';
import {projectType} from "../../../pages/portfolio/Portfolio";

type popupType = {
   project: projectType
   closePopup: () => void;
};

export const Popup:React.FC<popupType> = (props) => {
   const {closePopup} = props;
   const {title, type, image, alt, gitHubLink, pageLink, technologies} = props.project;

   return (
       <article className={s.popup} >
          <div className={s.bg} onClick={closePopup}></div>

          <div className={s.body}>
             <hgroup className={s.wrap}>
                <h2 className={s.title}>{title}</h2>
                <h3 className={s.type}>{type}</h3>
             </hgroup>

             <dl className={s.list}>
                <div className={s.item}>
                   <dt className={s.key}>technologies:</dt>
                   <dd className={s.caption}>
                      {technologies.map((technology) => technology)}
                   </dd>
                </div>

                <div className={s.item}>
                   <dt className={s.key}>GitHub:</dt>
                   <dd className={s.caption}>
                      <a className={s.caption} href={gitHubLink} target='_blank' rel='noreferrer'>{gitHubLink ? 'Link' : 'Private Project'}</a>
                   </dd>
                </div>
             </dl>

             <a href={pageLink} target='_blank' rel='noreferrer'>
                <img className={s.image} src={image} alt={alt}/>
             </a>

             <button className={s.button} type='button' onClick={closePopup}></button>
          </div>
       </article>
   );
};
