import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';

export default function LivePlayer() {
  const videoRef = useRef();

  useEffect(() => {
    const video = videoRef.current;
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource('http://137.184.227.189:8080/hls/stream.m3u8');
      hls.attachMedia(video);
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = 'http://137.184.227.189:8080/hls/stream.m3u8';
    }
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Jonli Efir</h2>
      <video ref={videoRef} controls autoPlay width="100%" />
    </div>
  );
}