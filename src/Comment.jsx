const Comment = ({ comments, commentId, commentMsg, username, parent_id}) => {

    const replies = comments.filter((comment) => comment.parent_id === commentId)

    return (
        <div style={{ display: "flex", padding: "15px"}}>
            <div>
                <img
                    src={"https://cdn-icons-png.flaticon.com/512/3177/3177440.png"}
                    style={{ width: parent_id === null ? "35px" : "25px", height: parent_id === null ? "35px" : "25px", borderRadius: "50%" }}
                    alt="User Avatar"
                />
            </div>

            <div style={{ marginLeft: "10px" }}>
                <div>
                    <h3 style={{ margin: "0", fontSize: "18px" }}> {username} </h3>
                </div>

                <div>
                    <h4 style={{ margin: "0", fontSize: "16px", fontWeight : "normal"}}> {commentMsg} </h4>
                </div>

                <div>
                    {
                        replies.map(comment => <Comment comments = {comments} commentId={comment.id} commentMsg={comment.commentMsg} username={comment.username} parent_id={comment.parent_id}> </Comment>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Comment;
