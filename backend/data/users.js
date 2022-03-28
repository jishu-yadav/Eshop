import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'john@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Jane Doe',
    email: 'jane@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Aditi',
    email: 'aditiroy.21.ar@gmail.com',
    password: bcrypt.hashSync('8520', 10),
  },
  {
    name: 'Jishu',
    email: 'jishuyadavcute88@gmail.com',
    password: bcrypt.hashSync('8520', 10),
  },
]

export default users
