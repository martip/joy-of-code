import type { PageServerLoad } from './$types'

import { getPosts } from '$lib/api/posts'

export const load: PageServerLoad = async ({ setHeaders }) => {
	const posts = await getPosts()

	setHeaders({
		'Cache-Control': `max-age=0, s-maxage=${60 * 60}`,
	})

	return { posts }
}
