import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { postUpdated } from "./postsSlice";
import { selectPostById } from './postsSlice';

export const EditPostForm = ({ match }) => {
  const { postId } = match.params;
  console.log('fqfwq', postId);

  const post = useSelector(state => selectPostById(state, postId));

  console.log('fqfqw', post);
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleTitleChanged = e => {
    setTitle(e.target.value);
  };
  const handleContentChanged = e => {
    setContent(e.target.value);
  };

  const handleSavePostClick = () => {
    if (title && content) {
      dispatch(postUpdated(postId, title, content));
      history.push(`/posts/${postId}`);
    }
  }

  return (
    <section>
      <h2>编辑文章</h2>
      <form>
        <label htmlFor="postTitle">文章标题：</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          placeholder="what's your mind?"
          value={title}
          onChange={handleTitleChanged}
        />
        <label htmlFor="postContent">内容：</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={handleContentChanged}
        />
        <button type="button" onClick={handleSavePostClick}>保存文章</button>
      </form>
    </section>
  )
}