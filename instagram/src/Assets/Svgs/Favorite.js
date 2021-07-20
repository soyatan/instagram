import React, {useState, useEffect} from 'react';
import Svg, {Path} from 'react-native-svg';
import {TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {width as w, height as h, width} from '../../constants/Metrics';
import {addToFavorites} from '../../redux/postsReducer';

function Favorite(props) {
  const {isFavorite, setisFavorite} = props;
  const dispatch = useDispatch();

  const {postId, posterId} = props;
  const switchPressing = () => {
    if (isFavorite) {
      setisFavorite(null);
      dispatch(addToFavorites(posterId, postId, 'remove'));
    } else {
      setisFavorite('#f44336');
      dispatch(addToFavorites(posterId, postId, 'add'));
    }
  };
  return (
    <TouchableOpacity onPress={() => switchPressing()}>
      <Svg
        viewBox="0 0 212.045 212.045"
        width={w * 0.05 * props.scale}
        height={w * 0.05 * props.scale}
        {...props}>
        <Path
          d="M167.871 0H44.84C34.82 0 26.022 8.243 26.022 18v182c0 3.266.909 5.988 2.374 8.091a9.204 9.204 0 007.598 3.954c2.86 0 5.905-1.273 8.717-3.675l55.044-46.735c1.7-1.452 4.142-2.284 6.681-2.284 2.538 0 4.975.832 6.68 2.288l54.86 46.724c2.822 2.409 5.657 3.683 8.512 3.683 4.828 0 9.534-3.724 9.534-12.045V18c0-9.757-8.131-18-18.151-18z"
          fill={isFavorite}
          stroke="#000000"
        />
      </Svg>
    </TouchableOpacity>
  );
}

const MemoFavorite = React.memo(Favorite);
export default MemoFavorite;
