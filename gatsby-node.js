exports.createPages = async ({ actions }) => {
    const { createRedirect } = actions
  
    createRedirect({
      fromPath: `/en/youtube-to-mp4/`,
      isPermanent: true,
      redirectInBrowser: true,
      toPath: `/youtube-to-mp4/`,
      statusCode: 301,
    })
  }