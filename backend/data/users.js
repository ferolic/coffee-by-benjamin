import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Ferolic',
    email: 'ferolic@gmail.com',
    password: bcrypt.hashSync('123123', 10),
  },
  {
    name: 'Junfun',
    email: 'junfun@gmail.com',
    password: bcrypt.hashSync('123123', 10),
  },
];

export default users;
