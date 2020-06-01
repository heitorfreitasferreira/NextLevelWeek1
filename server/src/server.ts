import express from 'express'

const app = express()
const port = 3333
app.get('/users', (req, res) => {
  // console.log("Listagem de users");
  const user = {
    name: 'Heitor',
    email: 'heitor.ff@hotmail.com',
    birth: '04/08/2000',
    password: 'sjfiudfahbatr&Tyvbsdjhgav*o29837'
  }
  res.json(user)
})

app.listen(port, () => {
  console.log("Server up and running on port " + port);
})