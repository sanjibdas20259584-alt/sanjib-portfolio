import React, { useState, useRef } from "react";
import { Play, Video } from "lucide-react";
import { WorkItem } from "../data/works";

interface MediaRendererProps {
  work: WorkItem;
  isPlaying?: boolean;
  setIsPlaying?: (playing: boolean) => void;
  className?: string;
}

export const MediaRenderer: React.FC<MediaRendererProps> = ({
  work,
  isPlaying = false,
  setIsPlaying,
  className = ""
}) => {
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const isVideo = work.mediaType === "video" || !!work.videoUrl;

  const getAspectRatioClass = (ratio: WorkItem["aspectRatio"]) => {
    switch (ratio) {
      case "16:9":
        return "aspect-video";
      case "9:16":
        return "aspect-[9/16]";
      case "4:5":
        return "aspect-[4/5]";
      case "3:4":
        return "aspect-[3/4]";
      case "1:1":
        return "aspect-square";
      default:
        return "aspect-video";
    }
  };

  const aspectClass = getAspectRatioClass(work.aspectRatio);
  const objectFitClass = work.objectFit === "contain" ? "object-contain" : "object-cover";

  return (
    <div
      className={`w-full relative overflow-hidden flex items-center justify-center bg-black/30 ${
        className ? className : `${aspectClass} rounded-t-[2rem] ${
          work.aspectRatio === "9:16" ? "max-h-[480px] lg:max-h-[520px] mx-auto" : ""
        }`
      }`}
      style={{
        background: work.objectFit === "contain" ? "black" : "linear-gradient(135deg, #1a0533 0%, #2d1065 40%, #0d0d1a 100%)"
      }}
    >
      {isVideo && !videoError ? (
        isPlaying ? (
          <div className="absolute inset-0 w-full h-full flex items-center justify-center">
            <video
              ref={videoRef}
              src={work.videoUrl || work.url}
              poster={work.thumbnailUrl}
              controls
              muted
              playsInline
              preload="metadata"
              className="w-full h-full object-contain border-none"
              autoPlay
              onError={() => {
                setVideoError(true);
                if ((import.meta as any).env?.DEV) {
                  console.error(`Failed to load video: ${work.videoUrl || work.url}. Check that the file exists inside public/videos and the filename matches exactly.`);
                }
              }}
            />
            {setIsPlaying && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsPlaying(false);
                }}
                className="absolute top-4 right-4 z-20 bg-red-500/90 hover:bg-red-500 rounded-full px-3 py-1 text-[10px] font-cabin tracking-wider font-bold uppercase text-white shadow-lg cursor-pointer"
              >
                Close
              </button>
            )}
          </div>
        ) : (
          <div
            className="absolute inset-0 w-full h-full flex flex-col items-center justify-center cursor-pointer group"
            onClick={() => setIsPlaying?.(true)}
          >
            {work.thumbnailUrl && (
              <img
                src={work.thumbnailUrl}
                alt={`${work.title} - ${work.category} by Sanjib Das`}
                className="absolute inset-0 w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
            )}
            {/* Overlay purple gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent z-10" />

            {/* Play button */}
            <div className="w-14 h-14 rounded-full bg-primary/95 text-white flex items-center justify-center shadow-[0_0_20px_rgba(123,57,252,0.6)] group-hover:scale-110 transition-transform duration-300 z-20">
              <Play size={20} className="ml-1" />
            </div>

            <span className="text-white/80 text-xs font-cabin uppercase tracking-widest font-semibold mt-3 z-20 group-hover:text-white transition-colors">
              Play UGC Ad
            </span>
          </div>
        )
      ) : isVideo && videoError ? (
        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#2a0c4d] to-[#0d0d1a] p-6 text-center z-10">
          <Video className="w-12 h-12 text-red-500 mb-4 opacity-50" />
          <p className="text-white text-base font-sans font-semibold mb-1">Video file missing.</p>
          <p className="text-muted text-xs font-sans max-w-[250px]">Add the MP4 file to public/videos.</p>
        </div>
      ) : (
        <>
          <img
            src={work.image || work.imageUrl || work.url}
            alt={`${work.title} - ${work.category} by Sanjib Das`}
            className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${objectFitClass}`}
          />
          {work.objectFit !== "contain" && (
            /* Overlay gradient */
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-black/10 to-transparent transition-opacity duration-300 pointer-events-none" />
          )}
        </>
      )}
    </div>
  );
};
