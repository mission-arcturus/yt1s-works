exports.createPages = ({ actions }) => {
    const { createRedirect } = actions;
    createRedirect({
      fromPath: "/youtube-to-mp3/",
      toPath: "/youtube-to-mp4/",
      statusCode: 301,
      redirectInBrowser: true,
    });
  };
  