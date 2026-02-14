const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
    .then(() => {
        console.log("connection successful")
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
    {
        from: "neha",
        to: "priya",
        msg: "Send me Your exam sheets",
        created_at: new Date()
    },
    {
        from: "rohit",
        to: "mohit",
        msg: "Teach me js callback",
        created_at: new Date()
    },
    {
        from: "amit",
        to: "sumit",
        msg: "all the best!",
        created_at: new Date()
    },
    {
        from: "anita",
        to: "ramesh",
        msg: "bring some fruits",
        created_at: new Date()
    },
    {
        from: "tony",
        to: "peter",
        msg: "love you 3000",
        created_at: new Date()
    },
];

Chat.insertMany(allChats);