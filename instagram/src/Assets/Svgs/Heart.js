import React, {useState, useEffect} from 'react';

import {TouchableOpacity} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {useDispatch} from 'react-redux';
import {width as w, height as h, width} from '../../constants/Metrics';
import {addToLikes} from './../../redux/postsReducer';
function Heart(props) {
  const {isLiked, setisLiked} = props;

  const {postId, posterId, setlikeCount, likeCount} = props;

  const dispatch = useDispatch();

  const switchPressing = () => {
    if (isLiked) {
      setisLiked(null);
      setlikeCount(likeCount - 1);
      dispatch(addToLikes(posterId, postId, 'remove'));
    } else {
      setisLiked('#f44336');
      setlikeCount(likeCount + 1);
      dispatch(addToLikes(posterId, postId, 'add'));
    }
  };
  return (
    <TouchableOpacity onPress={() => switchPressing()}>
      <Svg
        height={w * 0.05 * props.scale}
        viewBox="0 0 24 24"
        width={w * 0.05 * props.scale}
        {...props}>
        <Path
          d="M11.466 22.776a.746.746 0 001.068 0l9.594-9.721C26.129 9.002 23.286 2 17.596 2 14.179 2 12.611 4.511 12 4.98 11.386 4.509 9.828 2 6.404 2 .732 2-2.146 8.984 1.873 13.055z"
          fill={isLiked}
          stroke="#707070"
        />
      </Svg>
    </TouchableOpacity>
  );
}

const MemoHeart = React.memo(Heart);
export default MemoHeart;
