export function getInterview(state, interview) {
  if (!interview) return null;
  const interviewer = state.interviewers[interview.interviewer];
  return { ...interview, interviewer }
}

export function getAppointmentsForDay(state, day) {
  const match = state.days.find(d => d.name === day);
  const appointments = match ? match.appointments : [];
  return appointments.map(id => state.appointments[id]);
}
