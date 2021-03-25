/**
 * Format groups and return
 * just the useful fields
 * 
 * @param {array} groups 
 * @returns an array
 */
export const formatForumGroups = async (
  groups
) => {
  let forum = []

  await groups.map((group) => {
    forum.push({
      id: group.id,
      title: group.name,
      subtitle: group.description,
      data: []
    })
  })

  return forum
}

/**
 * Format comments and return 
 * just the useful fields
 * 
 * @param {array} comments 
 * @returns an array
 */
export const formatRoomComments = async (
  comments
) => {
  let newComments = []

  await comments.map((comment) => {
    newComments.push({
      id: comment.id,
      name: '',
      profile_picture: '',
      profession: '',
      text: comment.text,
      user_reacted: comment.user_reacted,
      total_reactions: comment.total_reactions,
      created_at: comment.created_at,
      created_by: comment.created_by,
      liked: false
    })
  })

  return newComments
}

/**
 * Add an like
 * to a comment
 * 
 * @param {array} comments 
 * @returns an array
 */
export const addLikeToComment = (
  comments,
  id
) => {
  let newComments = []

  comments.map((comment) => {
    if (comment.id === id) {
      comment.total_reactions = comment.user_reacted == 0 ?
        (comment.total_reactions + 1) :
        (comment.total_reactions - 1)
      comment.user_reacted = (comment.user_reacted == 0) ? 1 : 0
    }
    newComments.push(comment)
  })

  return newComments
}