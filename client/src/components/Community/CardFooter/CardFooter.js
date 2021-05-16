import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import LikeButton from '../LikeButton/LikeButton'
import { useDispatch, useSelector } from 'react-redux'
import { likePosts, unLikePosts } from '../../../redux/actions/post'
import { Link } from 'react-router-dom'
CardFooter.propTypes = {}

function CardFooter({ post }) {
  const { user } = useSelector((state) => state)
  const [isLike, setIsLike] = useState(false)
  const [loadLike, setLoadLike] = useState(false)
  const dispatch = useDispatch()
  async function onHandleLike() {
    if (loadLike) return
    setIsLike(true)
    setLoadLike(true)
    await dispatch(likePosts({ post, user }))
    setLoadLike(false)
  }
  async function onHandleUnLike() {
    if (loadLike) return
    setIsLike(false)
    setLoadLike(true)
    await dispatch(unLikePosts({ post, user }))
    setLoadLike(false)
  }
  useEffect(() => {
    if (post.likes.find((like) => like._id === user.userDatas._id)) {
      setIsLike(true)
    }
  }, [post.likes, user.userDatas._id])
  return (
    <>
      <div className="flex items-center justify-start  py-4">
        <div className=" flex items-center">
          <LikeButton
            isLike={isLike}
            onHandleLike={onHandleLike}
            onHandleUnLike={onHandleUnLike}
          />
          <span className="text-gray-600 font-semibold pl-2">
            {post.likes.length}
          </span>
        </div>
        <div className="flex pl-4 items-center text-gray-600 text-xs hover:text-gray-700 transition duration-350 ease-in-out">
          <Link to={`/post/${post._id}`}>
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 mr-2"
            >
              <g>
                <path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z" />
              </g>
            </svg>
          </Link>
          <span className="text-gray-600 font-semibold pl-2">
            {post.comments.length}
          </span>
        </div>
      </div>
    </>
  )
}

export default CardFooter
