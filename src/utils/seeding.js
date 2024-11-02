const { createPost, findManyPosts, findOnePost } = require("./crud/PostCrud");
const { dbConnect, dbDisconnect } = require

async function seed() {
    await createPost("Example title", "Example content blah bla h");


}

dbConnect().then(()=> {
    console.log("Connected to DB, seeding now!")
    seed();
})
seed();