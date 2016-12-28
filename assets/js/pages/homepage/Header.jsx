import React from 'react';
import SearchBar from './../../components/searchBar/Bar';
import Autocomplete from './../../components/searchBar/Autocomplete';
import I18n from 'react-ghost-i18n';
import GrottoAppBar from './GrottoAppBar';

const Header = () => (
  <header className="header">
    <div className="container">

      <GrottoAppBar/>

      <div className="row brand bgwhite">
        <div className="twelve columns">
          <a href="" className="logo">
            <img src="/images/logo.svg" alt="logo-wikicaves"/>
          </a>
          <h1 className="sitename">Grottocenter</h1>
          <span className="slogan">
              <I18n>The Wiki database made by cavers for cavers.</I18n>
          </span>
        </div>
      </div>

      <div className="row bgwhite">
        <div className="twelve columns">
          <img className="logofse" src="/images/FSE.svg" alt="logo-fse"/>
          <span className="gc-fse-info">
            <I18n>Grottocenter is supported by the FSE</I18n>
          </span>
        </div>
      </div>

      <div className="row searchbar">
        <div className="twelve columns">
          <Autocomplete/>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
