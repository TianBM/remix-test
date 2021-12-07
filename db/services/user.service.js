import LeanCloud from "../leancloud";

import { UserModel } from '../models/classes/user.model';

export async function create(User){

    const UserObject = LeanCloud.Object.extend('User');

    const user = new UserObject();

    Object.keys(User).forEach(key => user[key] = User[key])
    user.save().then((user) => {
        // 成功保存之后，执行其他逻辑
        console.log(`保存成功。objectId：${user.id}`);
    }, (error)=>{
        console.log(error);
    })
}
