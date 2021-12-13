import type { IComment } from '../interfaces/comment.interface';
import type { IDeserializable } from '../interfaces/ideserializable.interface';

export class CommentModel implements IDeserializable<IComment>, IComment {
    postId: string;
    parentId: string;
    avatar: string;
    id: string;
    objectId: string;
    title: string;
    author: string;
    authorId: string;
    createTime: string;
    updateTime: string;
    content: string;

	deserialize(input: IComment): this {
		Object.assign(this, input);
		return this;
	}
}
