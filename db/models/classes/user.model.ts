import type { IUser } from '../interfaces/user.interface';
import type { IDeserializable } from '../interfaces/ideserializable.interface';

export class UserModel implements IDeserializable<IUser>, IUser {
	public name: string = '';

	deserialize(input: IUser): this {
		Object.assign(this, input);
		return this;
	}
}
