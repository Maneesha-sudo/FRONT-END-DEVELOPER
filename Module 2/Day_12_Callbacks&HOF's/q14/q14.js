function Employee(data) {

  const filtered = data.filter(emp => emp.tasksCompleted > 5);

  const performance = filtered.map(emp => {
    let level = "";

    if (emp.rating > 4.5) {
      level = "Excellent";
    } else if (emp.rating >= 3 && emp.rating <= 4.5) {
      level = "Good";
    } else {
      level = "Needs Improvement";
    }

    return {
      name: emp.name,
      performance: level
    };
  });

  const priority = {
    "Excellent": 3,
    "Good": 2,
    "Needs Improvement": 1
  };

  const sorted = performance.sort((a, b) => {
    return priority[b.performance] - priority[a.performance];
  });
  return sorted;
}

const EmpPerformance = [
  { name: "Alice", tasksCompleted: 8, rating: 4.7 },
  { name: "Bob", tasksCompleted: 4, rating: 4.0 },
  { name: "Charlie", tasksCompleted: 6, rating: 3.5 },
  { name: "David", tasksCompleted: 10, rating: 4.9 },
  { name: "Eve", tasksCompleted: 7, rating: 2.8 }
];

console.log(Employee(EmpPerformance));
