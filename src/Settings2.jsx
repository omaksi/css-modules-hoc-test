import React, { Component } from 'react';

import s from './Settings.css';

import CSSModules from 'react-css-modules';

class Settings extends Component {

  handleBackButtonClick = function() {
    const { router } = this.props;
    router.push('/1');
  }

  render() {
    return (
      <div styleName="container">
        <div styleName="header">

          <div
            styleName="xButton"
            onClick={this.handleBackButtonClick}
          >
            XXX
          </div>

        </div>

        <div styleName="content">

          <div styleName="sectionTitleRow">
            <div styleName="sectionTitle">
              Sitewide Apps
              <span styleName="questionIcon">?</span>
            </div>
          </div>

          <div styleName="hrBold" />

          <div styleName="row">
            <div styleName="rowTitle">App Name</div>
            <div styleName="rowButtons">
              <div styleName="editIcon">E</div>
              <div styleName="deleteIcon">D</div>
            </div>
          </div>

          <div styleName="hr" />

          <div styleName="row">
            <div styleName="rowTitle">App Name</div>
            <div styleName="rowButtons">
              <div styleName="editIcon">E</div>
              <div styleName="deleteIcon">D</div>
            </div>
          </div>

          <div styleName="hr" />


          <div styleName="sectionTitleRow">
            <div styleName="sectionTitle">
              Page Apps
              <span styleName="questionIcon">?</span>
            </div>
          </div>

          <div styleName="hrBold" />

          <div styleName="row">
            <div styleName="rowTitle">App Name</div>

            <div styleName="rowButtons">
              <div styleName="editIcon">E</div>
              <div styleName="deleteIcon">D</div>
            </div>
            <div styleName="rowText">Home</div>
            <div styleName="rowError">Missing Information</div>
          </div>

          <div styleName="hr" />

          <div styleName="row">
            <div styleName="rowTitle">App Name</div>

            <div styleName="rowButtons">
              <div styleName="editIcon">E</div>
              <div styleName="deleteIcon">D</div>
            </div>
            <div styleName="rowText">Contact</div>
          </div>

          <div styleName="hr" />


          <div styleName="sectionTitleRow">
            <div styleName="sectionTitle">
                Widgets
                <span styleName="questionIcon">?</span>
            </div>
          </div>

          <div styleName="hrBold" />

          <div styleName="row">
            <div styleName="rowTitle">Subscribe Form</div>
            <div styleName="rowButtons">
              <div styleName="editIcon">E</div>
              <div styleName="deleteIcon">D</div>
            </div>
          </div>

          <div styleName="hr" />

        </div>
      </div>
    );
  }
}

export default CSSModules(Settings, s);
