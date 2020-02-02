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
        output += `<li>${post.title}</li>` //string literals
    })

    document.body.innerHTML = output
    }, 1000)
}

function createPosts(){
    
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            posts.push({id:3,title:'three'})

            const error = false;
            if(!error){
                resolve('hello world');
            }else{
                reject('error in getpost');
            }
        }, 2000)
    })

    
}

// getPosts();
createPosts().then(
    (success)=>{
        getPosts();
        console.log(success)
    })
    .catch(
        (err)=>{
        console.log(err)
        })