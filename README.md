# Decode the Drawing

This project is my attempt to decode a drawing from a video. Please read more at [Decode the Drawing](https://radufromfinland.com/decodeTheDrawings/).

## Strategy

The solution in this repository is quite simple.

- Get the video data for each frame.

- Locate the positions of the red, green, and blue balls.

- The pen's x-coordinate is approximated as the difference between the size of the right ball and the size of the left ball.

- The pen's y-coordinate is approximated as the size of the bounding box that houses all three balls; hence, the smaller the bounding box, the farther the pen is from the balls.
