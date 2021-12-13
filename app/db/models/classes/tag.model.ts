import type { ITag } from '../interfaces/tag.interface';
import type { IDeserializable } from '../interfaces/ideserializable.interface';

export class TagModel implements IDeserializable<ITag>, ITag {
    id: string;
    objectId: string;
    createTime: string;
    updateTime: string;
    icon: string;
    text: string;
  
	deserialize(input: ITag): this {
		Object.assign(this, input);
		return this;
	}
}
