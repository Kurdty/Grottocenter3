import React from 'react';
import SearchBar from './../../components/searchBar/Bar';
import Autocomplete from './../../components/searchBar/Autocomplete';
import I18n from './../../components/I18n';

const Header = () => (
  <header className="header fixed-top clearfix">

    <div className="container-fluid">

      <div className="row brand bgwhite">
        <div className="col-xs-12">
          <a href="" className="logo">
            <img src="/images/logo.svg" alt="logo-wikicaves"/>
          </a>
          <h1 className="sitename">Grottocenter</h1>
          <span className="slogan">
            <I18n label="The Wiki database made by cavers for cavers."/>
          </span>
        </div>
      </div>

      <div className="row bgwhite">
        <div className="col-xs-12">
          <img className="logofse" src="/images/FSE.svg" alt="logo-fse"/>
          <span className="gc-fse-info">
            <I18n label="Grottocenter is supported by the FSE"/>
          </span>
        </div>
      </div>

      <div className="row searchbar">
        <div className="col-xs-12">
          <Autocomplete/>
          <SearchBar/>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
