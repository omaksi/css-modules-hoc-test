import React, { Component } from 'react';

import s from './Settings.css';

export default class Settings extends Component {

  handleBackButtonClick = function() {
    const { router } = this.props;
    router.push('/1');
  }

  render() {
    return (
      <div className={s.container}>
        <div className={s.header}>

          <div
            className={s.xButton}
            onClick={this.handleBackButtonClick}
          >
            XXX
          </div>

        </div>

        <div className={s.content}>

          <div className={s.sectionTitleRow}>
            <div className={s.sectionTitle}>
              Sitewide Apps
              <span className={s.questionIcon}>?</span>
            </div>
          </div>

          <div className={s.hrBold} />

          <div className={s.row}>
            <div className={s.rowTitle}>App Name</div>
            <div className={s.rowButtons}>
              <div className={s.editIcon}>E</div>
              <div className={s.deleteIcon}>D</div>
            </div>
          </div>

          <div className={s.hr} />

          <div className={s.row}>
            <div className={s.rowTitle}>App Name</div>
            <div className={s.rowButtons}>
              <div className={s.editIcon}>E</div>
              <div className={s.deleteIcon}>D</div>
            </div>
          </div>

          <div className={s.hr} />


          <div className={s.sectionTitleRow}>
            <div className={s.sectionTitle}>
              Page Apps
              <span className={s.questionIcon}>?</span>
            </div>
          </div>

          <div className={s.hrBold} />

          <div className={s.row}>
            <div className={s.rowTitle}>App Name</div>

            <div className={s.rowButtons}>
              <div className={s.editIcon}>E</div>
              <div className={s.deleteIcon}>D</div>
            </div>
            <div className={s.rowText}>Home</div>
            <div className={s.rowError}>Missing Information</div>
          </div>

          <div className={s.hr} />

          <div className={s.row}>
            <div className={s.rowTitle}>App Name</div>

            <div className={s.rowButtons}>
              <div className={s.editIcon}>E</div>
              <div className={s.deleteIcon}>D</div>
            </div>
            <div className={s.rowText}>Contact</div>
          </div>

          <div className={s.hr} />


          <div className={s.sectionTitleRow}>
            <div className={s.sectionTitle}>
                Widgets
                <span className={s.questionIcon}>?</span>
            </div>
          </div>

          <div className={s.hrBold} />

          <div className={s.row}>
            <div className={s.rowTitle}>Subscribe Form</div>
            <div className={s.rowButtons}>
              <div className={s.editIcon}>E</div>
              <div className={s.deleteIcon}>D</div>
            </div>
          </div>

          <div className={s.hr} />

        </div>
      </div>
    );
  }
}
