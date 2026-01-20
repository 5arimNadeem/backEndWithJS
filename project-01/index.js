const express = require("express")
const fs = require('fs')
const users = require("./MOCK_DATA.json")

const app = express()
const port = 8000

// middleware plugin
app.use(express.urlencoded({ extended: false }))

// routes of mine 

// for HTML data 
app.get("/users", (req, res) => {
    // return res.json(users)

    const html = `
    <ul> 
        ${users.map((user) => `<li>${user.name}</li>`).join("")}
    </ul>
    `
    res.send(html)
})


// REST API'S 
// for mobile users 
app.get("/api/users", (req, res) => {
    return res.json(users)
})


app.route('/api/users/:id').get(
    (req, res) => {
        const id = Number(req.params.id);
        const user = users.find((user) => user.id === id)
        return res.json(user)
    }
)
    .patch((req, res) => {
        // edit user with id
        const id = Number(req.params.id)
        // Find the user by ID
        const user = users.find((user) => user.id === id)

        if (!user) {
            // If the user doesn't exist, return a 404 error
            return res.status(404).json({ message: 'User not found' });
        }
        // return res.json({ status: "pending" })

        const mock_Data = req.body;
        for (let id in mock_Data) {
            if (user[id] !== undefined) {
                user[id] = mock_Data[id];
            }
        }
        // Respond with the updated user object
        res.json(user);
    })
    .delete((req, res) => {
        // delete user with id
        const id = Number(req.params.id)
        // Find the user by ID
        const user = users.find((user) => user.id === id)

        users.splice(user, 1);

        res.json({ message: "Data deleted successfully" });
    })

// post route in order to create the new user 

app.post('/api/users', (req, res) => {
    const body = req.body;
    users.push({ id: users.length + 1, ...body })
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {

        return res.json({ status: "success", id: users.length + 1 })
    })
})

app.listen(port, () => console.log(`server started at port 8000`))


