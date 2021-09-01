import React from "react"
interface IComment {
	title?: string
	text?: string
	author?: string
}
const CommentItem: React.FC<IComment> = (props) => {
	return (
		<div className="px-8">
			<div className=" w-52 h-64 text-sm font-medium">
				<p className="text-base text-green-500">
					{props.title}
				</p>
				<p className="text-gray-500">
					{props.text}
				</p>
				<p className="text-left dark:text-green-300">{props.author}</p>
			</div>
		</div>
	)
}

export default CommentItem
