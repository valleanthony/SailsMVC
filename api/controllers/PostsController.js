 module.exports = {
 	
 	posts: function(req, res){
 		const post1= {id:1, 
 			title:'Post title', 
 			body:'Here is my post text.This is cool!'}
 		const post2= {id:2, 
 			title:'Post title Two', 
 			body:'some body text'}	

 		res.send([post1,post2])
 	},

 	findById: function(req, res){
 		const postID = req.param('postId') 
 		res.send(postID)
 	}
 }