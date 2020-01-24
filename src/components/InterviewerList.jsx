import React from "react";
import classNames from "classnames";
import "components/InterviewerList.scss";
import InterviewerListItem from "components/InterviewerListItem";

export default function InterviewerList({
  interviewer,
  interviewers,
  setInterviewer
}) {
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {interviewers.map(({ id, avatar, name }) => (
          <InterviewerListItem
            id={id}
            avatar={avatar}
            name={name}
            selected={id === interviewer}
            setInterviewer={setInterviewer}
          />
        ))}
      </ul>
    </section>
  );
}
