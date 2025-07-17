import 'server-only';

import { POST_ENDPOINT_URL } from '@/lib/wp';
import { Post } from '@/types/post';

export const getPosts = async (page: number = 1) => {
  const res = await fetch(POST_ENDPOINT_URL + `?page=${page}&per_page=1`, {
    cache: 'no-store',
  });

  const totalPageCount = (res.headers.get('x-wp-totalpages'));

  return {
    posts: (await res.json()) as Post[],
    totalPageCount: Number(totalPageCount),
  };
}

export const searchPosts = async (keyword: string) => {
  const res = await fetch(POST_ENDPOINT_URL + `?search=${keyword}`, {
    cache: 'no-store',
  });

  const totalPageCount = (res.headers.get('x-wp-totalpages'));

  return {
    posts: (await res.json()) as Post[],
    totalPageCount: Number(totalPageCount),
  };
}