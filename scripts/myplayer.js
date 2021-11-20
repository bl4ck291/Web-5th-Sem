// videojs selects by id our video player
// arguments for the player used are the video should be autoplayed and muted when loaded.
// Fluid means that the player is responsive with the size of its container.
// PlaybackRates require no explanation I think
var player = videojs('my-video', {
  autoplay: 'muted',
  fluid: 'true',
  playbackRates: [0.5, 1, 1.5, 2]
});
