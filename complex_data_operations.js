/*
Title: Complex Data Operations
Description: This code performs complex data operations on a JSON dataset.
Filename: complex_data_operations.js
*/

// Define a dataset
var dataset = [
  {
    id: 1,
    name: "John",
    age: 25,
    city: "New York",
    hobbies: ["programming", "reading"],
    isActive: true
  },
  {
    id: 2,
    name: "Sarah",
    age: 28,
    city: "London",
    hobbies: ["painting", "travelling"],
    isActive: true
  },
  {
    id: 3,
    name: "Mike",
    age: 32,
    city: "Tokyo",
    hobbies: ["gardening", "photography"],
    isActive: false
  },
  // Add more data objects here...
];

// Function to filter active users
function filterActiveUsers(data) {
  return data.filter(function(user) {
    return user.isActive === true;
  });
}

// Function to calculate average age
function calculateAverageAge(data) {
  var totalAge = 0;
  data.forEach(function(user) {
    totalAge += user.age;
  });
  return totalAge / data.length;
}

// Function to find users with a specific hobby
function findUsersByHobby(data, hobby) {
  return data.filter(function(user) {
    return user.hobbies.includes(hobby);
  });
}

// Function to sort users by age in ascending order
function sortByAge(data) {
  return data.sort(function(a, b) {
    return a.age - b.age;
  });
}

// Function to convert dataset to CSV format
function convertToCSV(data) {
  var csv = "id,name,age,city,hobbies,isActive\n";
  data.forEach(function(user) {
    csv += `${user.id},${user.name},${user.age},${user.city},"${user.hobbies.join(",")}",${user.isActive}\n`;
  });
  return csv;
}

// Perform complex data operations
var activeUsers = filterActiveUsers(dataset);
console.log("Active Users:", activeUsers);

var averageAge = calculateAverageAge(dataset);
console.log("Average Age:", averageAge);

var usersWithHobby = findUsersByHobby(dataset, "reading");
console.log("Users with 'reading' hobby:", usersWithHobby);

var sortedUsers = sortByAge(dataset);
console.log("Sorted Users:", sortedUsers);

var csvData = convertToCSV(dataset);
console.log("CSV Data:", csvData);

// Add more complex data operations here...

// Output:
// Active Users: [{id: 1, name: "John", age: 25, city: "New York", hobbies: ["programming", "reading"], isActive: true}, {id: 2, name: "Sarah", age: 28, city: "London", hobbies: ["painting", "travelling"], isActive: true}]
// Average Age: 28.333333333333332
// Users with 'reading' hobby: [{id: 1, name: "John", age: 25, city: "New York", hobbies: ["programming", "reading"], isActive: true}]
// Sorted Users: [{id: 1, name: "John", age: 25, city: "New York", hobbies: ["programming", "reading"], isActive: true}, {id: 2, name: "Sarah", age: 28, city: "London", hobbies: ["painting", "travelling"], isActive: true}, {id: 3, name: "Mike", age: 32, city: "Tokyo", hobbies: ["gardening", "photography"], isActive: false}]
// CSV Data: "id,name,age,city,hobbies,isActive\n1,John,25,New York,"programming,reading",true\n2,Sarah,28,London,"painting,travelling",true\n3,Mike,32,Tokyo,"gardening,photography",false\n"