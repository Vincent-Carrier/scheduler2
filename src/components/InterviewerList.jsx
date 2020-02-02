import React from "react";
import "components/InterviewerList.scss";
import InterviewerListItem from "components/InterviewerListItem";
import PropTypes from "prop-types";

export default function InterviewerList({
  interviewer,
  interviewers,
  onChange
}) {
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {interviewers.map(({ id, avatar, name }) => (
          <InterviewerListItem
            key={id}
            id={id}
            avatar={avatar}
            name={name}
            selected={id === interviewer}
            onChange={onChange}
          />
        ))}
      </ul>
    </section>
  );
}

InterviewerList.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func.isRequired
};
