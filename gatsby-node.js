exports.createPages = async ({ graphql, actions }) => {
    const { createRedirect } = actions

    createRedirect({
        fromPath: '/',
        exactPath: true,
        isPermanent: true,
        redirectInBrowser: true,
        toPath: '/en2/'
    });
    createRedirect({
        fromPath: '/en/',
        exactPath: true,
        isPermanent: true,
        redirectInBrowser: true,
        toPath: '/en2/'
    });
    createRedirect({
        fromPath: '/en/en2/',
        exactPath: true,
        isPermanent: true,
        redirectInBrowser: true,
        toPath: '/en2/'
    });
}