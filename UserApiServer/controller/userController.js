import Task from '../Task.js';

const users = [];

export const createUser = (req, res) => {
  const { id, name, createdOn, gender, dob, city, state, pincode, modifiedOn } =
    req.body;
  const newUser = {
    id,
    name,
    createdOn,
    gender,
    dob,
    city,
    state,
    pincode,
    modifiedOn,
  };
  users.push(newUser);

  res.status(201).json({ success: true, msg: 'User created successfully' });
};

export const getAllUsers = (req, res) => {
  res.status(200).json({ users });
};

export const getUser = (req, res) => {
  const { id: userID } = req.params;
  const user = users.find((u) => u.id === userID);

  if (!user) {
    res.status(404).json({ success: false, error: 'User not found' });
  } else {
    res.status(200).json({ user });
  }
};

export const updateUser = (req, res) => {
  const { id: postID } = req.params;
  const userIndex = users.findIndex((u) => u.id === postID);

  if (userIndex === -1) {
    res.status(404).json({ success: false, error: 'User not found' });
  } else {
    const updatedUser = {
      ...users[userIndex],
      name: req.body.name,
      createdOn: req.body.createdOn,
      gender: req.body.gender,
      dob: req.body.dob,
      city: req.body.city,
      state: req.body.state,
      pincode: req.body.pincode,
      modifiedOn: req.body.modifiedOn,
    };

    users[userIndex] = updatedUser;

    res.status(201).json({ success: true, msg: 'User updated successfully' });
  }
};

export const deleteUser = (req, res) => {
  const { id: userID } = req.params;
  const userIndex = users.findIndex((u) => u.id === userID);

  if (userIndex === -1) {
    res.status(404).json({ success: false, error: 'User not found' });
  } else {
    users.splice(userIndex, 1);
    res.status(200).json({ success: true, msg: 'User deleted successfully' });
  }
};
