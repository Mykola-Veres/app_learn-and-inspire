import React, { useEffect, useRef } from 'react';
import videojs from 'video.js';
// import 'video.js/dist/video-js.css';
import Hls from 'hls.js';
import { PlayerStyle, VideoPlayerCourseStyle } from './VideoPlayerStyled';

const VideoPlayer = ({ link }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoNode = videoRef.current;
    let player;

    if (videoNode) {
      // настройки по умолчанию
      const defaultOptions = {
        autoplay: false,
        controls: true,
        sources: [],
      };

      // настройки пользователя
      const userOptions = {
        sources: [
          {
            src: 'https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8',
            type: 'application/x-mpegURL',
          },
        ],
      };

      // объединение настроек по умолчанию и настроек пользователя
      const options = videojs.obj.merge(defaultOptions, userOptions);

      player = videojs(videoNode, options);

      // проверяем, поддерживает ли браузер HLS
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource('https://example.com/video/stream.m3u8');
        hls.attachMedia(videoNode);
        hls.on(Hls.Events.MEDIA_ATTACHED, function () {
          hls.loadSource('https://example.com/video/stream.m3u8');
          hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
            // получаем все доступные качества видео
            const availableQualities = hls.levels.map(level => level.height);

            // добавляем кнопки для переключения качества видео
            player.controlBar.addChild('QualitySelector', {
              qualities: availableQualities,
              selected: availableQualities[availableQualities.length - 1], // выбираем самое высокое качество по умолчанию
            });
          });
        });
      } else if (videoNode.canPlayType('application/vnd.apple.mpegurl')) {
        videoNode.src = 'https://example.com/video/stream.m3u8';
      }
    }

    return () => {
      if (player) {
        player.dispose();
      }
    };
  }, [link]);

  return (
    <PlayerStyle>
      <VideoPlayerCourseStyle>
        <video ref={videoRef} className="video-js vjs-default-skin" />
      </VideoPlayerCourseStyle>
    </PlayerStyle>
  );
};

export default VideoPlayer;
