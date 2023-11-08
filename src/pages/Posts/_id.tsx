import '../../App.css'
import { useParams } from 'react-router-dom';
import {useState} from "react";
import axios from "axios";
import {Post} from "../../dto/post";
import PostComponent from "../../components/Post";
import {User} from "../../dto/user";

export default function PostById() {
    const { id } = useParams();
    const base: Post = new class implements Post {
        author: string = "";
        content: string = "";
        id: string = "";
        like: number = 1;
    }
    const [post, setPost]: [Post , React.Dispatch<React.SetStateAction<Post>>] = useState(base);
    const user: User = JSON.parse(localStorage.getItem("user") || "{}");
    axios.get('/api/post?id='+id, {
        headers: {
            Authorization: `Bearer ${user.password}`
        }
    }).then((response) => {
        setPost(response.data);
    }).catch((error) => {
        if (error.status === 401) {
            window.location.href = "/login";
        }
        console.log(error);
    });

    return (
        <>
            <div>
                <div className="flex flex-inline bg-green-100 rounded top-0 right-0 absolute text-sm text-blue-500">
                    <p className={"flex flex-inline p-2"}>Bonjour {user.name}</p>
                    <button onClick={() => {window.location.href = "/logout"}} className={"flex flex-inline text-red-600 bg-green-300 rounded pr-2 pl-2 ml-2"}>Logout</button>
                </div>
                <PostComponent author={post.author} content={post.content} id={post.id} like={post.like}/>
            </div>
        </>
    )
}
