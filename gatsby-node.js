exports.createPages = async ({ actions }) => {
    const { createRedirect } = actions
  
    createRedirect({
      fromPath: `https://yt1s.works/en/youtube-to-mp4/`,
      toPath: `https://yt1s.works/youtube-to-mp4/`,
      statusCode: 301,
    })
  }