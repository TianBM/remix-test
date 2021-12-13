import LeanCloud from "../leancloud";

import { UserModel } from '../models/classes/user.model';

export async function registUser(User: UserModel){
    const user = new LeanCloud.User();

    if(User.username && User.password){
        user.setUsername(User.username);
        user.setPassword(User.password);
    }

    if(User.email){
        user.setEmail(User.email);
    }

    if(User.mobilePhoneNumber){
        user.setMobilePhoneNumber(User.mobilePhoneNumber);
    }

    user.signUp().then((user: UserModel) => {
        // 注册成功
        return user;
      }, (error: any) => {
        // 注册失败（通常是因为用户名已被使用）
        return error;
      });
}
