import React, { useState } from 'react'
import Skeleton from '@mui/material/Skeleton'
import { IMAGE_PATH, VIDEO_PATH, handleErrorFile } from '../datas/Const'

export default function Element(props) {
  const [load, setLoad] = useState(false)

  const handleLoad = () => {
    setLoad(true) // Triggered when the image or video has loaded
  }

  if (props.url.startsWith(IMAGE_PATH)) {
    return (
      <>
        {/* Skeleton is displayed while loading */}
        {!load && (
          <Skeleton
            variant="rectangular"
            width={props.width}
            height={props.height}
            style={{ position: 'absolute' }}
          />
        )}
        {/* Image is hidden until loaded */}
        <img
          alt={props.name}
          src={props.url}
          style={{
            objectFit: 'fill',
            width: props.width,
            height: props.height,
            display: load ? 'block' : 'none',
          }}
          onError={(e) => {
            handleErrorFile(e)
          }}
          onLoad={handleLoad}
        />
      </>
    )
  } else if (props.url.startsWith(VIDEO_PATH)) {
    return (
      <>
        {/* Skeleton is displayed while loading */}
        {!load && (
          <Skeleton
            variant="rectangular"
            width={props.width}
            height={props.height}
            style={{
                display: load ? 'none' : 'block',
            }}
          />
        )}
        {/* 
            Video is hidden until loaded 

<video
          key={props.url}
          src={props.url}
          alt={props.name}
          muted
          controls
          playsInline
          preload="auto"
          poster={props.preview}  // Add a path to your desired preview image
          style={{
            objectFit: 'contain',
            width: props.width,
            height: props.height,
            opacity: load ? 1 : 0,
            transition: 'opacity 0.3s ease', // Smooth fade-in effect
          }}
          onError={(e) => {
            handleErrorFile(e)
          }}
          onLoadedData={handleLoad}
          onCanPlay={handleLoad} // Trigger load completion here
          onLoadedMetadata={handleLoad} // Trigger load completion here




          
          src={props.url}
          controls
          playsInline
          muted
          autoPlay={false}
          preload="metadata" // Preload only metadata, which may help with load times
          style={{ width: '100%', height: 'auto' }}
        />

        */}
        <video
          //key={props.url}
          src={props.url}
          alt={props.name}
          muted
          controls
          playsInline
          preload="metadata"
          poster={props.preview}  // Add a path to your desired preview image
          style={{
            objectFit: 'contain',
            width: props.width,
            height: props.height,
          }}
          onError={(e) => {
            handleErrorFile(e)
          }}
          onLoadedData={handleLoad}
          onCanPlay={handleLoad} // Trigger load completion here
          onLoadedMetadata={handleLoad} // Trigger load completion here
        />
      </>
    )
  }

  return null
}
