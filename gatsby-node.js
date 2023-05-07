exports.createPages = ({ graphql, actions }) => {
    const { createRedirect } = actions
    createRedirect({ fromPath: '/', toPath: '/new-url', isPermanent: true })
    createRedirect({ fromPath: '/url', toPath: '/zn-CH/url', Language: 'zn' })
    createRedirect({ fromPath: '/youtube-to-mp3/', toPath: '/pretty/url', statusCode: 200 })
    // Create pages here
}