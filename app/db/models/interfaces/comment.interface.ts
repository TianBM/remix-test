export interface IComment {
    id: string | undefined,
    objectId: string | undefined,
    avatar: string | undefined,
    title: string,
    author: string,
    authorId: string | undefined,
    createTime: string | undefined,
    updateTime: string | undefined,
    content: string,
    parentId: string,
    postId: string
}