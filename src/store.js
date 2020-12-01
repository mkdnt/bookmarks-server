const {v4: uuid} = require('uuid')

const bookmarks = [
    {
        id: uuid(),
        title: "Test Bookmark",
        url: 'https://www.test.com/',
        description: 'Yes, this is a test.',
        rating: 5
    },
    {
        id: uuid(),
        title: "Second Example",
        url: 'https://www.example.com/',
        description: 'Here is a second example for the store.',
        rating: 5
    }
]

module.exports = bookmarks;