import { comment } from "../../../data/comments";

export default function handler(req, res){
    const {commentid}= req.query;
    if(req.method=="GET"){
        // console.log("=====",req)
        const findElement = comment.find((element)=> element.id === parseInt(commentid));
        // res.status(200).json(comment);
        res.status(200).json(findElement);
    }
    else if(req.method=="DELETE"){
        const findElement = comment.find((element)=> element.id === parseInt(commentid));
        const index = comment.findIndex((copmmentss)=> copmmentss.id === commentid)
        comment.splice(index, 1);
        res.status(200).json(findElement);
    }
}