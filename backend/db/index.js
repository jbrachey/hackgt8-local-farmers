const Database = {
    unique: 0,
    
    users: [],
    farms: [],
    posts: [],
    chats: [],

    next() {
        this.unique++
        return this.unique
    },

    print() {
        console.log('USERS = ', this.users)
        console.log('FARMS = ', this.farms)
        console.log('POSTS = ', this.posts)
        console.log('CHATS = ', this.chats)
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
    username,
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