exports.onClientEntry = () => {
    if (window.location.pathname === "/") {
      window.location.replace("/youtube-to-mp3/");
    }
  };
  