<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\assets\css\APlayer.min.css"><script src="\assets\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script>!(function() {
    var oldLoadAp = window.onload;
    window.onload = function () {
      oldLoadAp && oldLoadAp();
  
      new APlayer({
        container: document.getElementById('aplayer'),
        fixed: true,
        autoplay: false,
        loop: 'all',
        order: 'random',
        theme: '#b7daff',
        preload: 'none',
        lrcType: 3,
        audio: [
          {
            name: '花の塔',
            artist: 'さユり',
            url: 'http://music.163.com/song/media/outer/url?id=1956534872.mp3',
            cover: 'https://p2.music.126.net/fS_5RbP_4qg-RYreqp2tGg==/109951167558017839.jpg?param=130y130',
            lrc: 'https://moechun.fun/music/lrc/さユり - 花の塔.lrc'
        }
        ]
      });
    }
  })();