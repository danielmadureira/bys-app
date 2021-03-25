import { APIServices } from "./APIServices"
import { ENDPOINTS } from "./enums/Endpoints"

const getAllGroups = async () => {
  return await APIServices.get(
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
  return await APIServices.get(
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
  return await APIServices.get(
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
  return await APIServices.post(
    ENDPOINTS.FORUM_COMMENT_REACTION,
    {
      forum_room_comment_id: id
    }
  )
}

const removeLikeToComment = async (id) => {
  return await APIServices.delete(
    ENDPOINTS.FORUM_COMMENT_REACTION,
    {
      params: {
        forum_room_comment_id: id
      }
    }
  )
}

export const ForumServices = {
  getAllGroups,
  getRoomsByGroup,
  getCommentsByRoom,
  addLikeToComment,
  removeLikeToComment
}