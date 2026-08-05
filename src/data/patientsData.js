// CareArc — Patient seed data
// Each patient has a distinct clinical profile for realistic demo scenarios

export const patientColumns = [
  { key: "id", label: "ID" },
  { key: "name", label: "Name" },
  { key: "age", label: "Age" },
  { key: "gender", label: "Gender" },
  { key: "room", label: "Room" },
  { key: "condition", label: "Condition" },
  { key: "admitted", label: "Admitted" },
];

export const patients = [
  {
    id: "PT-001",
    name: "Amina Yusuf",
    age: 54,
    gender: "Female",
    room: "Room 4B",
    condition: "Respiratory symptoms, Fever",
    admitted: "2026-07-20",
    contact: {
      phone: "+234 801 234 5678",
      email: "amina.yusuf@email.com",
      emergencyContact: "Fatima Yusuf — +234 802 345 6789",
    },
  },
  {
    id: "PT-002",
    name: "John Okafor",
    age: 62,
    gender: "Male",
    room: "Room 7A",
    condition: "Cardiac Arrhythmia",
    admitted: "2026-07-18",
    contact: {
      phone: "+234 803 456 7890",
      email: "john.okafor@email.com",
      emergencyContact: "Grace Okafor — +234 804 567 8901",
    },
  },
  {
    id: "PT-003",
    name: "Mary Adebayo",
    age: 47,
    gender: "Female",
    room: "Room 2C",
    condition: "Post-Surgery Recovery",
    admitted: "2026-07-22",
    contact: {
      phone: "+234 805 678 9012",
      email: "mary.adebayo@email.com",
      emergencyContact: "Tunde Adebayo — +234 806 789 0123",
    },
  },
  {
    id: "PT-004",
    name: "Bello Kasim",
    age: 38,
    gender: "Male",
    room: "Room 5D",
    condition: "Observation — Chest Pain",
    admitted: "2026-07-28",
    contact: {
      phone: "+234 807 890 1234",
      email: "bello.kasim@email.com",
      emergencyContact: "Halima Kasim — +234 808 901 2345",
    },
  },
  {
    id: "PT-005",
    name: "Chidinma Eze",
    age: 71,
    gender: "Female",
    room: "Room 1A",
    condition: "Hypertension, Diabetes Management",
    admitted: "2026-07-15",
    contact: {
      phone: "+234 809 012 3456",
      email: "chidinma.eze@email.com",
      emergencyContact: "Emeka Eze — +234 810 123 4567",
    },
  },
];
