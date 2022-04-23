const express = require('express')
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())

const users = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "email": "Sincere@april.biz",
        "phone": "1-770-736-8031 x56442"

    },
    {
        "id": 2,
        "name": "Leophie Lenon",
        "email": "Sophie@april.biz",
        "phone": "1-770-736-8031 x56442"

    },
    {
        "id": 3,
        "name": "Lesandro Graham",
        "email": "Lesandro@april.biz",
        "phone": "1-770-736-8031 x56442"

    },
    {
        "id": 4,
        "name": "Leo Graham",
        "email": "Leo@april.biz",
        "phone": "1-770-736-8031 x56442"

    }
]

app.get('/', (req, res) => {
    res.send('Hello my World!');
})
app.get('/users', (req, res) => {
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched)
    } else {
        res.send(users)
    }
})

app.post('/user', (req, res) => {
    console.log(req.body);
    const user = req.body;
    const id = users.length + 1;
    user.id = id;
    users.push(user);
    res.send(user)
})

app.get('/users/:id', (req, res) => {
    console.log(req.params);
    const id = req.params.id;
    const user = users[id]
    res.send(user)
})

app.listen(port, () => {
    console.log(`Express port is ${port}`,);
})