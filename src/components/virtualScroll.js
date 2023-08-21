export const isBottom = (e) => {
  const roundedScrollTop = Math.ceil(e.target.scrollTop);
  return e.target.clientHeight + roundedScrollTop === e.target.scrollHeight
    ? true
    : false;
};
