import { FaRegUser } from "react-icons/fa";
import type { Comment } from "../../types";


interface prop{
    c : Comment
}

function CommentCard({c}:prop) {
  return (
    
    <div className="flex flex-col gap-1 min-w-50 shadow-xl rounded-md m-1 p-4">
        <div className="w-full flex justify-center">
            <span className="w-15 h-15 flex justify-center items-center bg-stone-100 rounded-full">
                <FaRegUser size={28} color="gray"/>
            </span>
        </div>
        <p className="text-sm truncate">{c.email}</p>
        <p className=" font-bold truncate">{c.name}</p>
        <div className="w-full ">
            <p className="text-sm text-wrap line-clamp-6 text-start">{c.body}</p>
        </div>
    </div>
    
  )
}

export default CommentCard