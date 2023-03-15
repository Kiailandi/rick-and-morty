export const getNextPageParam = (lastPage, pages) => {
  if (lastPage.info.next) {
    return pages.length + 1;
  }
};
