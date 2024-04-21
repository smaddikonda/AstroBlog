const transformTag = (tag: string) => {
  return tag.toLowerCase().replace(/(?:^|\s)\S/g, function (a) {
    return a.toUpperCase();
  });
};

export default transformTag;
