import { prisma } from "@/prisma"
import Post from "../Post"

const Feed = async () => {
	const posts = await prisma.post.findMany();

	return (
		<section>
      {posts.map((post) => (
				<Post key={post.id} />
			))}
    </section>
	)
}

export default Feed

