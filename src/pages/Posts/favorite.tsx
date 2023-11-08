import '../../App.css'
import PostComponent from "../../components/Post";
import {Post} from "../../dto/post";

import axios from 'axios';
import {useState} from "react";
import {User} from "../../dto/user";

export default function posts() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [posts, setPosts]: [[], React.Dispatch<React.SetStateAction<[]>>] = useState([]);
    const user: User = JSON.parse(localStorage.getItem("user") || "{}");
    const favorite: string[] = JSON.parse(localStorage.getItem("favorite") || "[]");
    axios.get('/api/post', {
        headers: {
            Authorization: `Bearer ${user.password}`
        }
    }).then((response) => {
        setPosts(response.data);
    }).catch((error) => {
        if (error.status === 401) {
            window.location.href = "/login";
        }
        console.log(error);
    });
    return (
        <>
            <div className="bg-red">
                <button className="top-0 left-0 absolute p-2 rounded text-red-600 bg-green-100" onClick={() => {window.location.href = "/posts"}}>Posts</button>
                <div className="flex flex-inline bg-green-100 rounded top-0 right-0 absolute text-sm text-blue-500">
                    <p className={"flex flex-inline p-2"}>Bonjour {user.name}</p>
                    <button onClick={() => {window.location.href = "/logout"}} className={"flex flex-inline text-red-600 bg-green-300 rounded pr-2 pl-2 ml-2"}>Logout</button>
                </div>
                {
                    posts.filter((value: Post) => {
                        favorite.forEach((v: string) => {
                            if (v === value.id) {
                                return true;
                            }
                        })
                        return false;
                    }).map((c: Post) =>
                        <PostComponent author={c.author} content={c.content} id={c.id} like={c.like}/>)
                }
            </div>
        </>
    )
}
