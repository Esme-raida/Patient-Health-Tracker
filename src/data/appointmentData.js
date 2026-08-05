const today = new Date();
const formatDate = (date) => date.toISOString().split("T")[0];

export const appointmentsData = [
  {
    id: 1,
    name: "John Smith",
    type: "Follow-up",
    time: "09:00:00",
    duration: 30,
    isCompleted: true, //meaning it was completed today
    date: formatDate(today),
  },
  {
    id: 2,
    name: "Mary Johnson",
    type: "Consultation",
    time: "10:30:00",
    duration: 45,
    isCompleted: true,
    date: formatDate(today),
  },
  {
    id: 3,
    name: "David Alee",
    type: "Follow-up",
    time: "12:00:00",
    duration: 30,
    isCompleted: true,
    date: formatDate(today),
  },
  {
    id: 4,
    name: "MaryAnn Azenda",
    type: "Consultation",
    time: "14:00:00",
    duration: 45,
    isCompleted: false,
    date: formatDate(today),
  },
  {
    id: 5,
    name: "Robert Brown",
    type: "Check-up",
    time: "14:40:00",
    duration: 30,
    isCompleted: false, //may become ongoing/missed
    date: formatDate(today),
  },
  {
    id: 6,
    name: "Emily Davis",
    type: "Follow-up",
    time: "15:30:00",
    duration: 30,
    isCompleted: false,
    date: formatDate(new Date(today.getTime() + 86400000)), //calculates against tomorrow 
  },
  {
    id: 7,
    name: "Michael Wilson",
    type: "Consultation",
    time: "16:30:00",
    duration: 45,
    isCompleted: false,
    date: formatDate(new Date(today.getTime() + 86400000)), //calculates against tomorrow 
  },
  {
    id: 8,
    name: "Asher Thompson",
    type: "Check-up",
    time: "17:30:00",
    duration: 30,
    isCompleted: false,
    date: formatDate(new Date(today.getTime() - 86400000)), //calculates yesterday 
  }
];
