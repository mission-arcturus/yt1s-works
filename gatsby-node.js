exports.createPages = async ({ actions }) => {
    const { createRedirect } = actions
  
    createRedirect({
      fromPath: `/en/youtube-to-mp4/`,
      isPermanent: false,
      redirectInBrowser: true,
      toPath: `/youtube-to-mp4/`, 
    })
  }