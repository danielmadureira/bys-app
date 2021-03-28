import { RequestAdapter } from "../adapter/RequestAdapter"
import { ENDPOINTS } from "../enums/Endpoints"

const getAllGroups = async () => {
  return await RequestAdapter.get(
    `${ENDPOINTS.FORUM_GROUP}`,
  )
    .then(res => {
      return res.data
    })
    .catch(err => {
      return err
    })
}

const getRoomsByGroup = async (id) => {
  return await RequestAdapter.get(
    `${ENDPOINTS.FORUM_ROOM}`,
    {
      params: {
        forum_group_id: id
      }
    }
  )
    .then(res => {
      const { data } = res.data

      return data
    })
    .catch(err => {
      return err
    })
}

const getCommentsByRoom = async (id) => {
  return await RequestAdapter.get(
    `${ENDPOINTS.FORUM_COMMENT}`,
    {
      params: {
        forum_room_id: id
      }
    }
  )
    .then(res => {
      return res.data
    })
    .catch(err => {
      return err
    })
}

const addLikeToComment = async (id) => {
  return await RequestAdapter.post(
    ENDPOINTS.FORUM_COMMENT_REACTION,
    {
      forum_room_comment_id: id
    }
  )
}

const removeLikeToComment = async (id) => {
  return await RequestAdapter.delete(
    ENDPOINTS.FORUM_COMMENT_REACTION,
    {
      params: {
        forum_room_comment_id: id
      }
    }
  )
}

/**
 * Create a comment for 
 * a specific room 
 * 
 * @param {object} form 
 * @returns Promise
 */
const addComment = async (form) => {
  return await RequestAdapter.post(
    ENDPOINTS.FORUM_COMMENT,
    form
  )
    .then(res => {
      return res.data
    })
    .catch(async (err) => {
      return err
    })
}

export const ForumServices = {
  getAllGroups,
  getRoomsByGroup,
  getCommentsByRoom,
  addLikeToComment,
  removeLikeToComment,
  addComment
}