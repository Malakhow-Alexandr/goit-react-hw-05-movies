export const transformReviewsData = data =>
  data['results'].map(({ id, author, content }) => ({
    id,
    author: `Author: ${author}`,
    content,
  }));
