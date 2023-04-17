import React from 'react'

function PostDetails({ post }) {
    if (!post) return null;
    return (
    <div className="flex flex-col border w-full px-6 py-8 mt-4">
        <p className="text-xl font-medium self-center uppercase mb-3">{ post.title}</p>
        <p className="mb-4 text-lg self-center">{ post.author}</p>
        <p className="mb-4">
            This is the content of the post....
        </p>
        <div className="flex self-center text-lg">
            <button className="mr-3 text-cyan-600">Edit</button>
            <button className="text-red-600">Delete</button>
        </div>
    </div>
    )

}

export default PostDetails