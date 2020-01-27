import React from 'react';
import classNames from 'classnames';
import 'components/InterviewerListItem.scss';

export default function InterviewListItem({
  id,
  name,
  avatar,
  setInterviewer,
  selected,
}) {
  const itemClass = classNames('interviewers__item', {
    'interviewers__item--selected': selected,
  });
  return (
    <li key={id} className={itemClass} onClick={() => setInterviewer(id)}>
      <img className="interviewers__item-image" src={avatar} alt={name} />
      {selected && name}
    </li>
  );
}
