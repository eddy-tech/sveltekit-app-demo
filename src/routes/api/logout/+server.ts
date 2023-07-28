import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = ({ cookies }) => {
    cookies.delete('token', {path: '/'});
    return json({ sucess: true });
}