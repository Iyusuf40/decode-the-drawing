# Decode the Drawing

This project is my attempt to decode a drawing from a video. Please read more at [Decode the Drawing](https://radufromfinland.com/decodeTheDrawings/).

## Method

### Triangulation and Pinhole Camera

To estimate the location of the camera at each frame, we calculate the distance between the blue and green balls using the pinhole camera estimations, this gives us 2 sides, we use the distance between the balls since this is know to form a triangle. From there we use cosine rule to get the angles of the vertices of the triangle, with this data we can estimate the position of the camera by pegging the blue-green ball at fixed locations separated by their real world distance ie 9cm.
please look in `TriangulationHandler.getCurrentPosition` for the implementation.

## Noise and Distortion Correction

To reduce noise, we used linear interpolation (lerp) to limit the shift after each frame to the previous decoded position. This smoothened out the images, however, this proved to cause some loss in accuracy as the pen down duration increases as each lerp accumulates overtime.

Distortion was corrected by dividing the difference in the size of the bounding boxes of the balls, since the balls were expected to be spherical, their bounding boxes were expected to be a square. A ratio of the differences in size of the bounding box helped correct distortion.

## Detection of Pen Up/Down

To detect pen down or up, an audio analyser was used to process the audio from the video. The average volume of the audio was calculated for each frame. If the average volume exceeds a certain threshold (1.1), it was determined that the pen is down, and the corresponding coordinates are recorded.

## Performance

The approach used attempts to process each frame as the video plays, to achieve this the image processing needs to be fast. This was done by skipping many pixels (200) in search of relevant pixels ie balls, on hitting a ball we track back linearly and forward processing only relevant rows.

## Limitations

- **Non-reproducible results:** The accuracy of the results gotten varies with each video processed since we do not currently handle frames 100% sequentially.

- **Noise reduction technique causes accuracy loss:** The accuracy of the results gotten varies with each video processed since we do not currently handle frames 100% sequentially.
