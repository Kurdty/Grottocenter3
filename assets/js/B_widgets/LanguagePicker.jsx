"use strict";

var LanguagePickerEntry = React.createClass({

  changeLanguage: function(lang) {
    this.props.onLanguageChange(lang);
  },

  render: function() {
    var flagUrl = "/images/flags/" + this.props.data.flag;
    //TODO alt text
    var lang = "?lang=" + this.props.data.lang;
    return (
      <li>
        <a href="#" data-lang={lang} onClick={this.changeLanguage.bind(this, this.props.data.lang)}><img src={flagUrl} alt=""/><I18n label={this.props.data.name}/></a>
      </li>
    );
  }
});

var LanguagePicker = React.createClass({

  render: function() {
    // TODO To be dynamised with controler + db table
    var data = [
      {
        lang: "fr",
        name: "French",
        flag: "flag-france.png"
      }, {
        lang: "en",
        name: "English",
        flag: "flag-united-kingdom.png"
      }, {
        lang: "de",
        name: "German",
        flag: "flag-germany.png"
      }, {
        lang: "sp",
        name: "Spanish",
        flag: "flag-spain.png"
      }
    ];

    var liRows = [];
    var _this = this;
    data.forEach(function(country) {
      var key = "lanpe-" + country.lang;
      liRows.push(<LanguagePickerEntry data={country} key={key} onLanguageChange={_this.props.onLanguageChange}/>);
    });

    return (
      <div className="btn-group">
        <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <img src="/images/flags/flag-france.png" alt=""/>
          French
          <span className="caret"></span>
        </button>
        <ul className="dropdown-menu">
          {liRows}
        </ul>
      </div>
    );
  }
});
