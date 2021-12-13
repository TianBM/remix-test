import type { IUser } from '../interfaces/user.interface';
import type { IDeserializable } from '../interfaces/ideserializable.interface';

export class UserModel implements IDeserializable<IUser>, IUser {
	objectId: string;
	username: string;
	password: string;
	email: string;
	emailVerified: boolean;
	mobilePhoneNumber: string;
	mobilePhoneVerified: boolean;


	deserialize(input: IUser): this {
		Object.assign(this, input);
		return this;
	}
}
