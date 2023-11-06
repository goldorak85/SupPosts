import { Comment } from "../../src/dto/comment";
import { uuid } from '@cfworker/uuid';

export async function onRequestPost({ request, env }) {
    const body: Comment = await request.json();
    body.id = uuid();
    body.like = 0;
    const data: Comment = {
        id: uuid(),
        like: 0,
        postID: body.postID,
        author: body.author,
        content: body.content
    }
    const comment = await env.comment.put(data.id, JSON.stringify(data));
    console.log(comment);
    return new Response(JSON.stringify(data), {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export async function onRequestGet({request, env}) {
    const posts = await env.posts.list();
    const rkeys = posts.keys;
    const result = [];
    const { searchParams } = new URL(request.url)
    const id: string | null = searchParams.get('id')
    // eslint-disable-next-line guard-for-in,no-restricted-syntax
    for (const i in rkeys) {
        // eslint-disable-next-line no-await-in-loop
        const comment = JSON.parse(await env.comment.get(rkeys[i].name));
        if (comment.postID === id) result.push(comment);
    }
    console.log(result);
    return new Response(JSON.stringify(result), {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
