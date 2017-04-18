import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import { HarveyBall, ListItemNoLink } from '../../../common';
import { ActivityListItem } from '../all-components';

import style from '../student-view.css';

const { number, string, func, shape, bool } = PropTypes;

class StudentAccordianItem extends Component {
  static propTypes = {
    courseId: number,
    topicId: number,
    studentId: number,
    object: shape({}),
    testScoreToDisplay: string,
    completionLevel: number,
    completionStatus: shape({}),
    isActive: bool,
    onActivate: func,
    index: number,
  }
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    const { courseId, topicId, studentId, object, testScoreToDisplay,
      completionLevel, completionStatus, isActive,
      onActivate, index } = this.props;
    return (
      <div key={`module${object.id}`}>
        <div>
          <ListItemNoLink
            linkOut={`/instructor/${courseId}/${topicId}/student/${studentId}`}
            id={object.id}
            name={object.name}
            preTestNumberCorrect={object.results.preTest.questionsCorrect}
            postTestNumberCorrect={object.results.postTest.questionsCorrect}
            totalQustions={object.questionsAsked}
            preTestMastery={object.results.preTest.mastery}
            postTestMastery={object.results.postTest.mastery}
            viewType={testScoreToDisplay}
            activities={object.activities}
            key={`studentView-${object.id}`}
            completionLevel={completionLevel}
            completionStatus={completionStatus}
          />
        </div>
        <div
          onClick={() => onActivate(index)}
          className={style.activitiesToggle}
        >
          {isActive ? <p>hide activities</p> : <p>show activities</p>}
        </div>
        {isActive &&
          <div className={classnames(style.activitiesContainer)}>
            {object.activities.map(a => (
              <div
                className={style.activityListItemContainer}
                key={a.id}
              >
                <HarveyBall
                  status={a.completionStatus.harvey}
                  key={`harvey${a.id}`}
                />
                <ActivityListItem
                  activity={a}
                  key={`activity${a.id}`}
                />
              </div>)
            )}
          </div>
        }
      </div>
    );
  }
}

export default StudentAccordianItem;
