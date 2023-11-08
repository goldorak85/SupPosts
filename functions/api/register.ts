import { uuid } from '@cfworker/uuid';
import {Register} from "../../src/dto/register";
import {User} from "../../src/dto/user";
import * as hashTools from '../../dev/hashTools';

export async function onRequestPost({ request, env }) {
    const body: Register = await request.json();
    const passHashed: string = await hashTools.hash(body.password, body.email, env);
    const data: User = {
        email: body.email,
        id: uuid(),
        name: body.name,
        password: passHashed
    }

    const u = await env.users.put(data.email, JSON.stringify(data));
    console.log(u);
    return new Response(JSON.stringify(u), {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
