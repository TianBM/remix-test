import type { IPost } from '../interfaces/post.interface';
import type { IDeserializable } from '../interfaces/ideserializable.interface';

export class PostModel implements IDeserializable<IPost>, IPost {
    createdAt: string | undefined;
    updatedAt: string | undefined;
    id!: string;
    objectId!: string;
    title!: string;
    author!: string;
    authorId!: string;
    content!: string;

	deserialize(input: IPost): this {
		Object.assign(this, input);
		return this;
	}
}
