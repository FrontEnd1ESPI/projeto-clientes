import { useState, useEffect } from "react"

// define a estrutura tipada de um post API Externa
interface Post {
    id: number;
    title: string;
    body: string;
}

const ClientApi = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
            .then((res) => res.json())
            .then((data: Post[]) => setPosts(data))
            .catch((err) => console.error("Erro ao acessar API", err))
            .finally(() => setLoading(false))
    }, [])

    return (
        <div>
            <h2> Posts API externa</ h2>
            {loading ? (
                <p>Carregando api...</p>
            ) : (
                <ul>
                    {posts.map((post) => (
                        <li key={post.id}>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                        </li>
                    ))}

                </ul>
            )}

        </div>
    )
}

export default ClientApi