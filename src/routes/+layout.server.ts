import type { LayoutServerData } from "./$types";

export const load: LayoutServerData = ({ cookies }) => {
   const token = cookies.get('toekn');
    const user = { name: 'John', id: 1}

    return {
        user: token ? user : null
    }
}