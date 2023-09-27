import backendComments from "./assets/data/backendComments.json"
import { useState } from "react"
import Comment from "./Comment";

const Comments = () => {

    const [comments, setComments] = useState(backendComments);
    const rootComments = comments.filter((comment) => comment.parent_id === null)

    return (
        <div>
            {
                rootComments.map(comment => <Comment key = {comment.id} comments = {comments} commentId = {comment.id} username = {comment.username} commentMsg = {comment.commentMsg} parent_id={comment.parent_id}> </Comment>)
            }
        </div>
    )
}

export default Comments;