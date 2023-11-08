import {Post} from "../dto/post";

function post(props: Post) {
    const link: string = "/posts/" + props.id;
    function addPost() {
        if (localStorage.getItem("favorite") === null) {
            localStorage.setItem("favorite", JSON.stringify([props.id]));
        } else {
            const favorite: string[] = JSON.parse(localStorage.getItem("favorite") || "[]");
            favorite.push(props.id);
            localStorage.setItem("favorite", JSON.stringify(favorite));
        }
    }
    return (
        <div className="p-5">
        <a href={link}>
            <div className="bg-white p-4 border border-gray-300 rounded-lg shadow-md">
                <p className="text-gray-600">{props.content}</p>
                <p className="text-gray-500 text-sm">Auteur : {props.author}</p>
                <p className="text-gray-500 text-sm">Like : {props.like}</p>
            </div>
        </a>
        <button className="bg-grey text-red-100 border border-gray-300 rounded shadow-md" onClick={addPost}>Ajouter</button>
        </div>
    )
}

export default post
