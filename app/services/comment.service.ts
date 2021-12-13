import leancloud from '~/db/leancloud';

import type { CommentModel } from '~/db/models/classes/comment.model';

const table = 'Comment';


/**
 * 创建一个评论
 *
 * @export
 * @param {CommentModel} data
 * @return {*}  {Promise<boolean>}
 */
export async function createComment(data: CommentModel):Promise<boolean>{
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
 * 修改一个评论
 *
 * @export
 * @param {CommentModel} data
 * @return {*}  {Promise<boolean>}
 */
export async function editComment(data: CommentModel):Promise<boolean>{
    const query = new leancloud.Query(table);

    if(data.objectId){
        query.get(data.objectId).then((comment: { set: (arg0: string, arg1: any) => void; save: () => void; }) => {
            if(comment){
                Object.keys(data).forEach(key => {
                    comment.set(key, data[key]);
                });

                comment.save();
                return true;
            }
        });
    }


    return false;
}

/**
 * 按照id删除一个评论
 *
 * @export
 * @param {string} id
 * @return {*}  {Promise<boolean>}
 */
export async function deleteComment(id: string): Promise<boolean>{
    const query = new leancloud.Query(table);

    if(id){
        query.get(id).then((comment: { destroy: () => void; }) => {
            if(comment){
                comment.destroy();

                return true;
            }
        });
    }

    return false;
}
