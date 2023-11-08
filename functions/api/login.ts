import {User} from "../../src/dto/user";
import {Login} from "../../src/dto/login";
import {verify} from "../../dev/hashTools";
import jwt from '@tsndr/cloudflare-worker-jwt';

export async function onRequestPost({ request, env }) {
    const body: Login = await request.json();
    console.log(JSON.stringify(body));
    const u = await env.users.get(body.email);
    console.log(u);
    if (!u || u === null || u === undefined) {
        return new Response(JSON.stringify({error: 'User not found'}), {
            headers: {
                'Content-Type': 'application/json'
            },
            status: 401
        });
    }
    const user: User = JSON.parse(u);
    console.log(JSON.stringify(user));
    if (!(await verify(body.password, body.email, user.password, env))) {
        return new Response(JSON.stringify({error: 'Password not good'}), {
            headers: {
                'Content-Type': 'application/json'
            },
            status: 401
        });
    }
    console.log("DEBUG");
    user.password = await jwt.sign({
        id: user.id,
        email: user.email,
        name: user.name,
        exp: Math.floor(Date.now() / 1000) + (5 * 60),
        iss: 'SUPDEVINCI-TP-DEV'
    }, env.secret);
    console.log(JSON.stringify(user));
    return new Response(JSON.stringify(user), {
        headers: {
            'Content-Type': 'application/json'
        },
        status: 200
    });
}
