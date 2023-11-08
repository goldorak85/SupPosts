import '../../App.css'
import PostComponent from "../../components/Post";
import {Post} from "../../dto/post";

import axios from 'axios';
import {useState} from "react";

export default function posts() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [posts, setPosts]: [[Post], React.Dispatch<React.SetStateAction<Post[]>>] = useState([]);
    axios.get('/api/post').then((response) => {
        setPosts(response.data);
    }).catch((error) => {
        console.log(error);
    });
    return (
        <>
            <div className="bg-red">
                {
                    posts.map((c) =>
                        <PostComponent author={c.author} content={c.content} id={c.id} like={c.like}/>)
                }
            </div>
        </>
    )
}
