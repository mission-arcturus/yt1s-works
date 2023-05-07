exports.onClientEntry = () => {
    if (window.location.pathname === "/youtube-to-mp3/") {
      window.location.replace("/youtube-to-mp4/");
    }
  };
  