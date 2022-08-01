import { comment } from "../../../data/comments";

export default function handler(req, res){
    if(req.method=="GET"){
        res.status(200).json(comment);
    }
    else if(req.method=="POST"){
        const commentsss = req.body;
        const newComment ={
            id:Date.now(),
            text:commentsss
        }
        comment.push(newComment);
        res.status(201).json(newComment)
    }
}