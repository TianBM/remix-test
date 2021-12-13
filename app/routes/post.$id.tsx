import type { MetaFunction, LoaderFunction } from "remix";
import { useLoaderData, json, Link } from "remix";

import type { LinksFunction } from "remix";

import PostBox from '~/components/PostBox';
import PersonalInfo from '~/components/PersonalInfo';

type IndexData = {
  resources: Array<{ name: string; url: string }>;
  demos: Array<{ name: string; to: string }>;
};

// Loaders provide data to components and are only ever called on the server, so
// you can connect to a database or run any server side code you want right next
// to the component that renders it.
// https://remix.run/api/conventions#loader


// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
  return {
    title: "Post",
    description: "Welcome to ReBlog!"
  };
};

// https://remix.run/guides/routing#index-routes
export default function Index() {

  return (
    <div className="flex flex-row pt-12 gap-x-8 pb-12">
      <div className="w-3/4 h-full flex flex-col gap-y-8">
        
      </div>
      <div className="w-1/4 h-full flex flex-col gap-y-8">

      </div>
    </div>
  );
}
