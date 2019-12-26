import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';


const SocialButton = ({type}) => {
    return (
        <a href="#" className={`fa fa-${type}`}></a>
    )}  
  
const TwitterButton = () => {
return <SocialButton type="twitter" />
}

const FacebookButton = () => {
return <SocialButton type="facebook" />
}

const IconBar = ({orientation}) => {
    return (
        <div className={`${orientation} icon-bar `}>
        <a className="active" href="#"><i className="fa fa-home" /></a>
        <a href="#"><i className="fa fa-search" /></a>
        <a href="#"><i className="fa fa-envelope" /></a>
        <a href="#"><i className="fa fa-globe" /></a>
        <a href="#"><i className="fa fa-trash" /></a>
      </div>
    )
}

  const element =(
    <div>
        <IconBar orientation="horizontal"/>
        <IconBar orientation="vertical"/>
        <TwitterButton />
        <FacebookButton />
    </div>
    );
  ReactDOM.render(
    element,
    document.getElementById('root')
  );

