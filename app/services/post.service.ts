import leancloud from '~/db/leancloud';

import type { PostModel } from '~/db/models/classes/post.model';

const table = 'Post';

/**
 * 创建一篇博文
 *
 * @export
 * @param {PostModel} data
 * @return {*}  {Promise<boolean>}
 */
export async function createPost(data: PostModel): Promise<boolean>{
    const Obj = leancloud.Object.extend(table);

    const newObj = new Obj();

    Object.keys(data).forEach(key => {
        newObj.set(key, data[key]);
    });

    newObj.save().then((result: { id: any; }) => {
        if(result.id){
            return true;
        }
    });

    return false;
}

/**
 * 修改一篇博文
 *
 * @export
 * @param {PostModel} data
 * @return {*}  {Promise<boolean>}
 */
export async function editPost(data: PostModel): Promise<boolean>{
    const query = new leancloud.Query(table);

    if(data.objectId){
        query.get(data.objectId).then((post: { set: (arg0: string, arg1: any) => void; save: () => void; }) => {
            if(post){
                Object.keys(data).forEach(key => {
                    post.set(key, data[key]);
                });

                post.save();
                return true;
            }
        });
    }


    return false;
}

/**
 * 按照id删除博文
 *
 * @export
 * @param {string} id
 * @return {*}  {Promise<boolean>}
 */
export async function deletePost(id: string): Promise<boolean>{
    const query = new leancloud.Query(table);

    if(id){
        query.get(id).then((post: { destroy: () => void; }) => {
            if(post){
                post.destroy();

                return true;
            }
        });
    }

    return false;
}

/**
 * 获取所有的博文
 *
 * @export
 * @return {*}  {(Promise< void|PostModel[]>)}
 */
export async function findAllPost(): Promise<PostModel[]>{
    const query = new leancloud.Query(table);

    query.notEqualTo('id', '');

    return query.find();
}

/**
 * 按照id获取博文
 *
 * @export
 * @param {string} id
 * @return {*}  {Promise<PostModel>}
 */
export async function findPostById(id: string): Promise<PostModel>{
    const query = new leancloud.Query(table);

    query.equalTo('id', id);

    return query.find();
}