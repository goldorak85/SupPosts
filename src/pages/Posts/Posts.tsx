import '../../App.css'
import PostComponent from "../../components/Post";
import {Post} from "../../dto/post";

import axios from 'axios';

function displayPosts(data: [Post]) {
    const listItems = data.map((c) =>
        <PostComponent author={c.author} content={c.content} id={c.id} like={c.like}/>
    );
    return (
        {listItems}
    );
}


export default function Posts() {
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
                {displayPosts(posts)}
            </div>
        </>
    )
}
