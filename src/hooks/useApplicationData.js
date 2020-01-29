import { useReducer, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  const SET_DAY = "SET_DAY";
  const SET_APPLICATION_DATA = "SET_APPLICATION_DATA";
  const SET_INTERVIEW = "SET_INTERVIEW";

  function reducer(state, action) {
    switch (action.type) {
      case SET_DAY:
        return { ...state, day: action.day };
      case SET_APPLICATION_DATA:
        return { ...state, ...action.application_data };
      case SET_INTERVIEW: {
        const { id, interview } = action;
        const appointments = { ...state.appointments, [id]: { ...state.appointments[id], interview} };
        const dayIndex = state.days.findIndex(d => d.name === state.day);
        const days = [...state.days];
        days[dayIndex].appointments.push(id);
        return { ...state, appointments, days };
      }
      default:
        throw new Error(
          `Tried to reduce with unsupported action type: ${action.type}`
        );
    }
  }

  const [state, dispatch] = useReducer(reducer, {
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  const setDay = day => {
    dispatch({ type: SET_DAY, day });
  };

  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers")
    ])
      .then(responses => {
        const [days, appointments, interviewers] = responses.map(r => r.data);
        dispatch({
          type: SET_APPLICATION_DATA,
          application_data: { days, appointments, interviewers }
        });
      })
      .catch(err => console.log(err));
  }, []);

  function bookInterview(id, interview) {
    return axios.put(`/api/appointments/${id}`, { interview }).then(() => {
      dispatch({ type: SET_INTERVIEW, id, interview });
    });
  }

  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    return axios.delete(`/api/appointments/${id}`).then(() => {
      dispatch({
        type: SET_INTERVIEW,
        id,
        interview: null
      });
    });
  }

  return {
    state,
    setDay,
    bookInterview,
    cancelInterview
  };
}
