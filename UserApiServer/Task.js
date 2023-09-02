class Task {
  constructor({
    name,
    createdOn = new Date(),
    gender,
    dob,
    city,
    state,
    pincode,
    modifiedOn,
  }) {
    this.name = name;
    this.createdOn = createdOn;
    this.gender = gender;
    this.dob = dob;
    this.city = city;
    this.state = state;
    this.pincode = pincode;
    this.modifiedOn = modifiedOn;
  }
}

export default Task;
