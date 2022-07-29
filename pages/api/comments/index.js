import { comment } from "../../../data/comments";

export default function handler(req, res){
    res.status(200).json(comment);
}