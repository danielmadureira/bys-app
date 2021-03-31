/**
 * Format groups and return
 * just the useful fields
 * 
 * @param {array} groups 
 * @returns an array
 */
const formatForumGroups = async (
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
const formatRoomComments = (
  comments
) => {
  let newComments = []

  comments.map((comment) => {
    newComments.push({
      id: comment.id,
      name: comment.created_by ? comment.created_by.name : 'Usuário indisponível',
      profile_picture: comment.created_by ? comment.created_by.profile_picture : '',
      profession: comment.created_by ? comment.created_by.profession : '',
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
const addLikeToComment = (
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

export const ForumHelpers = {
  addLikeToComment,
  formatForumGroups,
  formatRoomComments
}