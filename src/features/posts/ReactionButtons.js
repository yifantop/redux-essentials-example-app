import { useDispatch } from "react-redux";
import { reactionAdded } from "./postsSlice";

const reactionEmoji = {
  thumbsUp: '👍',
  hooray: '🎉',
  heart: '❤️',
  rocket: '🚀',
  eyes: '👀'
}

export const ReactionButtons = ({ post }) => {
  const dispatch = useDispatch();
  const reactionButtons = Object.entries(reactionEmoji).map(([emojiName, emoji]) => {

  const handleClick = () => {
    dispatch(reactionAdded({postId: post.id, reaction: emojiName}));
  };

    return (
      <button
        key={emojiName}
        type="button"
        className="muted-button reaction-button"
        onClick={handleClick}
      >
        {emoji} {post.reactions[emojiName]}
      </button>
    )
  });

  return (
    <div>
      {reactionButtons}
    </div>
  );
}