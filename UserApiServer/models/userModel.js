import Task from '../Task.js';
const newTask = new Task({
  name: 'Simple Task',
  gender: 'Male',
  dob: new Date('1990-01-01'),
  city: 'City',
  state: 'State',
  pincode: 12345,
});

console.log(newTask.name);

newTask.city = 'Updated City';
export default Task;
