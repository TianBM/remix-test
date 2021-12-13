import { useNavigate } from "react-router-dom";

interface PostBoxProps {
    id: string;
    content: string,
    title: string,
    author: string,
    time: string | undefined,
    tags: string[],
    direction: string;
}

export default function PostBox({ content, title, author, time, tags, direction }:PostBoxProps){

    const navigate = useNavigate();

    const onClick = (id) => {
        navigate('post/1')
    }

    return(
        <div 
            onClick={onClick}
            className={`
            group
            h-64 w-full rounded-lg flex flex-row ring ring-gray-100
            hover:shadow-2xl hover:translate-x-1 hover:translate-y-1 
            transform-gpu duration-100 ease-in-out 
            bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500
            items-center ${direction==='left'?'justify-start':'justify-end'}`}
            
        >   
            <div className="
                w-2/3 h-full flex flex-col bg-white p-4 rounded-lg
                group-hover:w-3/4 group-hover:scale-y-105 group-hover:border-t-2 group-hover:border-b-2 
                transform-gpu duration-100 ease-in-out
                "
            >
                <div className="w-full h-auto text-2xl">{title}</div>
                <div className="w-full flex-1 text-base overflow-ellipsis overflow-hidden">{content}</div>
                <div className="w-full h-auto text-sm flex-row text-gray-500">
                    <text className="mr-8">作者：<text>{author}</text></text>
                    <text className="mr-8">发布时间：<text>{time}</text></text>
                    <text className="mr-8">标签：<text>{tags?.map(tag => <text key={tag} className="mr-4">{tag}</text>)}</text></text>
                </div>
            </div>
        </div>
    )
}