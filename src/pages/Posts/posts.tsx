import '../../App.css'
import PostComponent from "../../components/Post";
import {Post} from "../../dto/post";

import axios from 'axios';

export default function posts() {
    let posts: [Post];
    axios.get('/api/post').then((response) => {
        posts = response.data;
    }).catch((error) => {
        console.log(error);
        posts = [];
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
