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
      created_at: comment.created_at,
      created_by: comment.created_by,
      liked: false 
    })
  })

  return newComments
}