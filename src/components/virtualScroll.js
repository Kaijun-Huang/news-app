export const isBottom = (e) => {
  console.log("scrollTop: " + e.target.scrollTop);
  const roundedScrollTop = Math.ceil(e.target.scrollTop);
  return e.target.clientHeight + roundedScrollTop === e.target.scrollHeight
    ? true
    : false;
};
