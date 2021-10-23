const Database = {
    unique: 0,
    users: [],
    farms: [],
    posts: [],
    chats: [],

    active_users: [],

    next() {
        this.unique++
        return this.unique
    }
}

/*
Schemas:

User {
    id,
    name,
    email,
    password,
    type (consumer, producer)
    follows: [Farms]
}

Farms {
    id,
    name,
    location (zipcode),
    user id (producer)
    posts: [Posts]
}

Chat {
    socketid,
    user id 1 (producer),
    user id 2 (consumer)
    messages: [Message]

    Message {
        date/time
        poster id
    }
}

Post {
    id
    user id (producer)
    content
}

*/

module.exports = Database