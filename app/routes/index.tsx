import type { MetaFunction, LoaderFunction } from "remix";
import { useLoaderData, json, Link } from "remix";

import dayjs from 'dayjs';

import type { LinksFunction } from "remix";

import PostBox from '~/components/PostBox';
import PersonalInfo from '~/components/PersonalInfo';
import ToolsBox from "~/components/ToolsBox";

import { PostModel } from "~/db/models/classes/post.model";

import * as postServices from '~/services/post.service';

// Loaders provide data to components and are only ever called on the server, so
// you can connect to a database or run any server side code you want right next
// to the component that renders it.
// https://remix.run/api/conventions#loader
export let loader: LoaderFunction = async () => {
  const posts = await postServices.findAllPost();

  // https://remix.run/api/remix#json
  return json(posts);
};

// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
  return {
    title: "ReBlog",
    description: "Welcome to ReBlog!"
  };
};

const formatTime = (time: string): string => {
  return dayjs(time).format('YYYY-MM-DD HH:mm');
}

// https://remix.run/guides/routing#index-routes
export default function Index() {
  let data = useLoaderData<PostModel[]>();

  return (
    <div className="flex flex-row pt-12 gap-x-8 pb-12">
      <div className="w-4/5 h-full flex flex-col gap-y-8">
        {
          data?.map((post: PostModel, index: number) => (
            <PostBox key={post.objectId} id={post.id} title={post.title} content={post.content} author={post.author} time={post.createdAt} tags={post.tags} direction={index%2===0?'right':'left'} />
          ))
        }
      </div>
      <div className="w-1/5 h-full flex flex-col">
        <div className="mb-8">
          <PersonalInfo />
        </div>
        <div>
          <ToolsBox />
        </div>
      </div>
    </div>
  );
}
