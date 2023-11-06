import { Post } from "../../src/dto/post";
import { uuid } from '@cfworker/uuid';

export async function onRequestPost({ request, env }) {
    const body: Post = JSON.parse(await request.body);
    const data: Post = {
        id: uuid(),
        like: 0,
        author: body.author,
        content: body.content
    }
    const post = await env.posts.put(data.id, JSON.stringify(data));
    console.log(post);
    return new Response(JSON.stringify(post), {
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
    if (id) {
        return new Response(await env.posts.get(id), {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    // eslint-disable-next-line guard-for-in,no-restricted-syntax
    for (const i in rkeys) {
        // eslint-disable-next-line no-await-in-loop
        result.push(JSON.parse(await env.posts.get(rkeys[i].name)));
    }
    console.log(result);
    return new Response(JSON.stringify(result), {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
