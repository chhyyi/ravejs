/**
 https://audiomotion.dev
 */

// load module from Skypack CDN
import AudioMotionAnalyzer from 'https://cdn.skypack.dev/audiomotion-analyzer?min';

// audio source
const audioEl = document.getElementById('audio');

// instantiate analyzer
const audioMotion = new AudioMotionAnalyzer(
  document.getElementById('container'),
  {
    source: audioEl,
    height: 100,
    // you can set other options below - check the docs!
    mode: 3,
    barSpace: .6,
    ledBars: true,
  }
);

// display module version
document.getElementById('version').innerText = `v${AudioMotionAnalyzer.version}`;

// play input... inputBuffer from rave.js, using bufferToWave function from buffer_to_wave.js
document.getElementById('play_vis_input').addEventListener( 'click', () => {
  if (inputBuffer) {
    const inputBufferToWave = bufferToWave(inputBuffer, inputBuffer.getChannelData(0).length)
    const inputFileForVisualizer = URL.createObjectURL(inputBufferToWave)
    audioEl.src = inputFileForVisualizer;
    audioEl.play();
  }
});

//outputFileForVisualizer is declared in rave.js, assigned by make_download function from buffer_to_wav.js
document.getElementById('play_vis_output').addEventListener( 'click', () => {
  if (outputFileForVisualizer) {
    audioEl.src = outputFileForVisualizer;
    audioEl.play();
  }
});
