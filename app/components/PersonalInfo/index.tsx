export default function PersonalInfo({  }){

    return(
        <div className="
            h-auto w-full border-2 flex flex-col p-4 rounded-xl gap-y-8
            hover:shadow-2xl hover:translate-x-2 hover:translate-y-2  hover:border-t-0 hover:border-l-0 hover:border-b-2 hover:border-r-2"
        >
            <div className="h-36 flex items-center justify-center">
                <div className="rounded-full h-24 w-24 flex items-center justify-center border-2 border-black transform-gpu hover:duration-200 hover:animate-spin hover:shadow-xl">头像</div>
            </div>
            <div className="grid grid-cols-2 gap-4 p-4 text-center">
                <div>
                    <text>姓名</text>
                    <text></text>
                </div>
                <div>
                    <text>性别</text>
                    <text></text>
                </div>
                <div className="col-span-2 text-left">
                    这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述
                </div>
            </div>
        </div>
    )
}