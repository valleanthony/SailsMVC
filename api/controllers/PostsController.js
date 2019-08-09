 //dummy DB
const post1= {id:1, 
 			title:'Post title', 
 			body:'Here is my post text.This is cool!'}
const post2= {id:2, 
			title:'Post title Two', 
 			body:'some body text'}
const post3= {id:3, 
			title:'Post title Two', 
 			body:'some body text'}	 				

const allPost = [post1,post2,post3]

 module.exports = {
 	
 	posts: function(req, res){
 		
 		res.send([allPost])
 	},

 	create: function(req, res){
 		 const title = req.param('title')
 		 const body = req.param('body')

 		const newPosts = {id:4, title: title, body:body}
 		console.log(title +' '+ body )
 		allPost.push(newPosts)

 		res.end()
 	},

 	findById: function(req, res){
 		const postID = req.param('postId') 
 		
 		const filteredPosts = allPost.filter(p =>{return p.id == postID})
 		if (filteredPosts.length > 0) {
 			res.send(filteredPosts[0])
 		}else{
 			res.send('Failed to find post by id: ' + postID)
 		}
 	}   


 }