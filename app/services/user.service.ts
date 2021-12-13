import leancloud from '~/db/leancloud';

import type { UserModel } from '~/db/models/classes/user.model';

interface IReset {
    email: string | null,
    phone: string | null,
}

/**
 * 注册用户
 *
 * @export
 * @param {UserModel} User
 * @return {*}  {Promise<null>}
 */
export async function registUser(User: UserModel):Promise<null>{
    const userManager = new leancloud.User();

    if(User.username && User.password){
        userManager.setUsername(User.username);
        userManager.setPassword(User.password);
    }

    if(User.email){
        userManager.setEmail(User.email);
    }

    if(User.mobilePhoneNumber){
        userManager.setMobilePhoneNumber(User.mobilePhoneNumber);
    }

    userManager.signUp().then((userManager: UserModel) => {
        // 注册成功
        return userManager;
      }, (error: Error) => {
        // 注册失败（通常是因为用户名已被使用）
        return error;
      });

    return null;
}

/**
 * 发送重置密码邮件或短信
 *
 * @export
 * @param {IReset} reset
 * @return {*}  {Promise<void>}
 */
export async function requestResetPassword(reset: IReset):Promise<void>{
    const userManager = new leancloud.User();

    if(reset.email){
        userManager.requestPasswordReset(reset.email);
    }

    if(reset.phone){
        userManager.requestPasswordResetBySmsCode(reset.phone);
    }
}

/**
 * 发送修改手机号的验证码
 *
 * @export
 * @param {string} oldPhone
 * @return {*}  {Promise<void>}
 */
export async function requestChangePhoneNumber(oldPhone: string):Promise<void>{
    const userManager = new leancloud.User();
    userManager.requestChangePhoneNumber(oldPhone);
}

/**
 * 发送修改手机号的请求
 *
 * @export
 * @param {string} newPhone
 * @param {string} code
 * @return {*}  {Promise<void>}
 */
export async function requestSetPhoneNumber(newPhone: string, code: string):Promise<boolean|Error>{
    const userManager = new leancloud.User();
    userManager.changePhoneNumber(newPhone, code).then(() => {
        // 更新本地数据
        const currentUser = userManager.current();
        currentUser.setMobilePhoneNumber('+8618200008888');

        return true;
    }, (error: Error) => {
        // 验证码不正确
        throw error;
    });

    return false;
}

/**
 * 使用用户名和密码登录
 *
 * @export
 * @param {string} name
 * @param {string} password
 * @return {*}  {(Promise<boolean|Error>)}
 */
export async function requestLoginByName(name: string, password: string):Promise<boolean|Error>{
    const userManager = new leancloud.User();
    userManager.logIn(name, password).then(() => {
        // 登录成功
        return true;
    }, (error: Error) => {
        // 登录失败（可能是密码错误）
        throw error;
    });

      return false;
}

/**
 * 使用邮箱和密码登录
 *
 * @export
 * @param {string} email
 * @param {string} password
 * @return {*}  {(Promise<boolean|Error>)}
 */
export async function requestLoginByEmail(email: string, password: string):Promise<boolean|Error>{
    const userManager = new leancloud.User();
    userManager.loginWithEmail(email, password).then(() => {
        // 登录成功
        return true;
    }, (error: Error) => {
        // 登录失败（可能是密码错误）
        throw error;
    });

    return false;
}

/**
 * 使用手机号和密码登录 
 *
 * @export
 * @param {string} phone
 * @param {string} password
 * @return {*}  {(Promise<boolean|Error>)}
 */
export async function requestLoginByPhone(phone: string, password: string):Promise<boolean|Error>{
    const userManager = new leancloud.User();
    userManager.logInWithMobilePhone(phone, password).then(() => {
        // 登录成功
        return true;
    }, (error: Error) => {
        // 登录失败（可能是密码错误）
        throw error;
    });

    return false;
}

/**
 * 使用手机号和验证码登录
 *
 * @export
 * @param {string} phone
 * @param {string} code
 * @return {*}  {(Promise<boolean|Error>)}
 */
export async function requestLoginBySmscode(phone: string, code: string):Promise<boolean|Error>{
    const userManager = new leancloud.User();
    userManager.logInWithMobilePhoneSmsCode(phone, code).then(() => {
        // 登录成功
        return true;
    }, (error: Error) => {
        // 验证码不正确
        throw error;
    });

    return false;
}

/**
 * 请求手机号登录的验证码
 *
 * @export
 * @param {string} phone
 * @return {*}  {Promise<void>}
 */
export async function requestLoginSmscode(phone: string):Promise<void>{
    const userManager = new leancloud.User();
    userManager.requestLoginSmsCode(phone);
}

/**
 * 给用户指定邮箱发送邮箱验证
 *
 * @export
 * @param {string} email
 * @return {*}  {Promise<void>}
 */
export async function requestEmailVerify(email: string):Promise<void>{
    const userManager = new leancloud.User();
    userManager.requestEmailVerify(email);
}

/**
 * 给用户指定手机号发送手机验证短信
 *
 * @export
 * @param {string} phone
 * @return {*}  {Promise<void>}
 */
export async function requestMobilePhoneVerify(phone: string):Promise<void>{
    const userManager = new leancloud.User();
    userManager.requestMobilePhoneVerify(phone);
}

/**
 * 根据用户输入验证码在后台验证手机号
 *
 * @export
 * @param {string} code
 * @return {*}  {(Promise<boolean|Error>)}
 */
export async function requestVerifyMobilePhone(code: string):Promise<boolean|Error>{
    const userManager = new leancloud.User();
    userManager.verifyMobilePhone(code).then(() => {
        // mobilePhoneVerified 将变为 true
        return true;
      }, (error: Error) => {
        // 验证码不正确

        throw error;
      });

      return false;
}