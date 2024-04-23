import React from 'react';
import './style.scss'; // Import stylesheet


const Comment = ({ author, content, createdAt }) => {
    return (
        <div className="comment">
            <div className="avatar"></div>
            <div className="comment-content">
                <div>
                    <div className="author">{author}Nguyễn Danh Khánh</div>
                    <div className="content">{content}áo chất lượng tốt</div>
                </div>
                <div>
                    <div className="created-at">{createdAt}12/10/1999</div>
                </div>
            </div>
        </div>
    );
};

export default Comment;
