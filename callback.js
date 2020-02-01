// async
const posts = [
    {
        id:1,
        title:"one"
    },{
        id:2,
        title:"two"
    }
];

function getPosts(){
    setTimeout(()=>{
    let output = "";

    posts.forEach((post, index)=>{
        output += `${post.title}\n` //string literals
    })

    // document.body.innerHTML = output
    console.log(output)
    }, 1000)
}

function createPosts(cb){
    setTimeout(()=>{
        posts.push({id:3,title:'three'})
        cb();
    }, 2000)
}

// getPosts();
createPosts(getPosts);