exports.createPages = async ({ actions }) => {
  const { createRedirect } = actions;

  createRedirect({
    fromPath: '/youtube-to-mp4/',
    toPath: '/youtube-to-mp3/',
    isPermanent: true,
    redirectInBrowser: false,
  });
};
