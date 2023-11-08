import '../../App.css'
import { useParams } from 'react-router-dom';
import {useState} from "react";
import axios from "axios";
import {Post} from "../../dto/post";
import PostComponent from "../../components/Post";

export default function PostById() {
    const { id } = useParams();
    const base: Post = new class implements Post {
        author: string = "";
        content: string = "";
        id: string = "";
        like: number = 1;
    }
    const [post, setPost]: [Post , React.Dispatch<React.SetStateAction<Post>>] = useState(base);
    axios.get('/api/post?id='+id).then((response) => {
        setPost(response.data);
    }).catch((error) => {
        console.log(error);
    });

    return (
        <>
            <div>
                <PostComponent author={post.author} content={post.content} id={post.id} like={post.like}/>
            </div>
        </>
    )
}
