module.exports = {
    posts: [
        { id: 1, title: "Lorem Ipsum", author: 'abc', content:'first post from here', status: 'published', created_at:'2020-2-2', updated_at: '2022-2-4'},
        { id: 2, title: "Sic Dolor amet",  author: 'anhc', content:'second post for testing', status: 'pending_review', created_at:'2020-4-2', updated_at: '2022-2-4' },
    ],
    users: [
        { id: 123, name: "John Doe" },
        { id: 456, name: "Jane Doe" }
    ],
    comments: [
        { id: 987, post_id: 1, body: "Consectetur adipiscing elit", date: new Date('2017-07-03') },
        { id: 995, post_id: 1, body: "Nam molestie pellentesque dui", date: new Date('2017-08-17') }
    ]
}