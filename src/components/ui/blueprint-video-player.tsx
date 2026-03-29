import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface BlueprintVideoPlayerProps {
  videoUrl: string;
  isLocked: boolean;
  onTimeUpdate?: (currentTime: number) => void;
  onLockTriggered?: () => void;
}

export const BlueprintVideoPlayer: React.FC<BlueprintVideoPlayerProps> = ({
  videoUrl,
  isLocked,
  onTimeUpdate,
  onLockTriggered,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showBlur, setShowBlur] = useState(false);

  const PREVIEW_DURATION = 10; // 10 seconds

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      const time = video.currentTime;
      setCurrentTime(time);
      onTimeUpdate?.(time);

      // Trigger lock after 10 seconds for non-premium users
      if (!isLocked && time >= PREVIEW_DURATION) {
        setShowBlur(true);
        video.pause();
        setIsPlaying(false);
        onLockTriggered?.();
      }
    };

    const handleLoadedMetadata = () => {
      setDuration(video.duration);
    };

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
    };
  }, [isLocked, onTimeUpdate, onLockTriggered]);

  const handlePlayPause = () => {
    if (!isLocked && currentTime >= PREVIEW_DURATION) {
      return; // Prevent playing beyond preview
    }
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="relative w-full bg-black rounded-2xl overflow-hidden group">
      {/* Video Container */}
      <div className={cn('relative aspect-video bg-black', showBlur && 'blur-sm')}>
        <video
          ref={videoRef}
          src={videoUrl}
          className="w-full h-full object-cover"
          poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080'%3E%3Crect fill='%23000' width='1920' height='1080'/%3E%3C/svg%3E"
        />

        {/* Play Button Overlay */}
        {!isPlaying && (
          <div
            className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer hover:bg-black/50 transition-colors"
            onClick={handlePlayPause}
          >
            <div className="flex items-center justify-center h-20 w-20 rounded-full bg-brand-purple/80 hover:bg-brand-purple transition-colors">
              <svg
                className="h-10 w-10 text-white ml-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
            </div>
          </div>
        )}

        {/* Blur Overlay with Lock Message */}
        {showBlur && (
          <div className="absolute inset-0 bg-black/60 backdrop-blur-md flex flex-col items-center justify-center">
            <div className="text-center space-y-4">
              <div className="text-5xl">🔒</div>
              <h3 className="text-xl font-bold text-white">Preview Ended</h3>
              <p className="text-gray-300 text-sm">
                Unlock the full Deep Profile Report to see the complete analysis
              </p>
            </div>
          </div>
        )}

        {/* Preview Badge */}
        {!isLocked && (
          <div className="absolute top-4 right-4 bg-brand-purple/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-white">
            PREVIEW: {Math.ceil(PREVIEW_DURATION - currentTime)}s
          </div>
        )}
      </div>

      {/* Video Controls */}
      <div className="bg-gradient-to-t from-black/80 to-transparent p-4 space-y-2">
        {/* Progress Bar */}
        <div className="flex items-center gap-2">
          <div className="flex-1 h-1 bg-gray-700 rounded-full overflow-hidden cursor-pointer group/progress">
            <div
              className="h-full bg-gradient-to-r from-brand-purple to-accent-purple transition-all"
              style={{
                width: `${duration > 0 ? (currentTime / duration) * 100 : 0}%`,
              }}
            />
            <div
              className="absolute h-3 w-3 bg-brand-purple rounded-full -translate-y-1 opacity-0 group-hover/progress:opacity-100 transition-opacity"
              style={{
                left: `${duration > 0 ? (currentTime / duration) * 100 : 0}%`,
              }}
            />
          </div>
        </div>

        {/* Time Display */}
        <div className="flex items-center justify-between text-xs text-gray-400">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>

        {/* Control Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={handlePlayPause}
            disabled={!isLocked && currentTime >= PREVIEW_DURATION}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isPlaying ? (
              <svg
                className="h-5 w-5 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M5.75 1.5A.75.75 0 005 2.25v15.5a.75.75 0 001.5 0V2.25A.75.75 0 005.75 1.5zm8.5 0A.75.75 0 0013 2.25v15.5a.75.75 0 001.5 0V2.25a.75.75 0 00-1.5 0z" />
              </svg>
            ) : (
              <svg
                className="h-5 w-5 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
            )}
          </button>

          {/* Volume Control */}
          <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
            <svg
              className="h-5 w-5 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.172a1 1 0 011.414 0A6.972 6.972 0 0118 10a6.972 6.972 0 01-1.929 4.828 1 1 0 01-1.414-1.414A4.972 4.972 0 0016 10c0-1.713-.672-3.262-1.757-4.393a1 1 0 010-1.414z" />
            </svg>
          </button>

          <div className="flex-1" />

          {/* Fullscreen Button */}
          <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
            <svg
              className="h-5 w-5 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm12 0a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L12.586 5H11a1 1 0 110-2h4zM3 16a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 13.586V16a1 1 0 01-2 0zm12 0a1 1 0 011-1h4a1 1 0 010 2h-2.586l2.293 2.293a1 1 0 11-1.414 1.414l-2.293-2.293V16a1 1 0 01-2 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
