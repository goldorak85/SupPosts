import {Post} from "../dto/post";

function post(props: Post) {
    const link: string = "/posts/" + props.id;
    return (
        <a href={link}>
            <div className="bg-white p-4 border border-gray-300 rounded-lg shadow-md">
                <p className="text-gray-600">{props.content}</p>
                <p className="text-gray-500 text-sm">Auteur : {props.author}</p>
                <p className="text-gray-500 text-sm">Like : {props.like}</p>
            </div>
        </a>
    )
}

export default post
