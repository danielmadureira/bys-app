import { RequestAdapter } from "../adapter/RequestAdapter"
import { ENDPOINTS } from "../enums/Endpoints"

/**
 * Returns all 
 * forum groups
 * 
 * @returns {Promise}
 */
const getAllGroups = async (page) => {
  return await RequestAdapter.get(
    `${ENDPOINTS.FORUM_GROUP}`,
    {
      params: {
        page: page
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

/**
 * Get rooms 
 * by group
 * 
 * @param {number} id 
 * @returns {Promise}
 */
const getRoomsByGroup = async (id, page = 1) => {
  return await RequestAdapter.get(
    `${ENDPOINTS.FORUM_ROOM}`,
    {
      params: {
        page: page,
        forum_group_id: id,
        per_page: 5
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

/**
 * Get comments 
 * by room 
 * 
 * @param {number} id 
 * @returns 
 */
const getCommentsByRoom = async (id, page = 1) => {
  return await RequestAdapter.get(
    `${ENDPOINTS.FORUM_COMMENT}`,
    {
      params: {
        page: page,
        forum_room_id: id,
        per_page: 2
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

/**
 * Like a comment 
 * by id
 * 
 * @param {number} id  
 * @returns {Promise}
 */
const addLikeToComment = async (id) => {
  return await RequestAdapter.post(
    ENDPOINTS.FORUM_COMMENT_REACTION,
    {
      forum_room_comment_id: id
    }
  )
}

/**
 * Deslike a 
 * comment by id
 * 
 * @param {number} id  
 * @returns {Promise}
 */
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
 * @returns {Promise}
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