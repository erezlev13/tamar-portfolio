import React, { useRef } from 'react';
import '../styles/Projects/ProjectInfo.css';
import { CSSTransition } from 'react-transition-group';
import '../styles/transitions/transitions.css';

const ProjectInfo = ({ projectName, sqm, location, architect, show }) => {

  return (
    <CSSTransition in={show} classNames="slide-fade" timeout={1000} unmountOnExit>
      <div className="side-panel">
          <div className="project-name">{projectName}</div>
          <div className="property-info">
            <div className="info-item">
              <div className="label">Sqm</div>
              <div className="value">{sqm}</div>
            </div>
            <div className="info-item">
              <div className="label">Location</div>
              <div className="value">{location}</div>
            </div>
            <div className="info-item">
              <div className="label">Architect</div>
              <div className="value">{architect}</div>
            </div>
          </div>
      </div>
    </CSSTransition>
  );
};

export default ProjectInfo;
