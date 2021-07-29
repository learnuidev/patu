/** @const */ var MIN_GAIN$$module$lib$audio = 0;
/** @const */ var MAX_GAIN$$module$lib$audio = 3;
/** @const */ var MIN_SPEED$$module$lib$audio = 0;
/** @const */ var MAX_SPEED$$module$lib$audio = 3;
/** @const */ var MIN_DETUNE$$module$lib$audio = -1200;
/** @const */ var MAX_DETUNE$$module$lib$audio = 1200;
function audioInit$$module$lib$audio() {
  function volume(v) {
    if (v !== undefined) {
      audio.gainNode.gain.value = clamp$$module$lib$math(v, MIN_GAIN$$module$lib$audio, MAX_GAIN$$module$lib$audio);
    }
    return audio.gainNode.gain.value;
  }
  function play(sound, conf) {
    conf = conf === undefined ? {loop:false, volume:1, speed:1, detune:0, seek:0} : conf;
    var stopped = false;
    var srcNode = audio.ctx.createBufferSource();
    srcNode.buffer = sound;
    srcNode.loop = conf.loop ? true : false;
    /** @const */ var gainNode = audio.ctx.createGain();
    srcNode.connect(gainNode);
    gainNode.connect(audio.masterNode);
    /** @const */ var pos$jscomp$0 = conf.seek ? conf.seek : 0;
    srcNode.start(0, pos$jscomp$0);
    var startTime = audio.ctx.currentTime - pos$jscomp$0;
    var stopTime = null;
    /** @const */ var handle = {stop:function() {
      if (stopped) {
        return;
      }
      this.pause();
      startTime = audio.ctx.currentTime;
    }, play:function(seek) {
      if (!stopped) {
        return;
      }
      /** @const */ var oldNode = srcNode;
      srcNode = audio.ctx.createBufferSource();
      srcNode.buffer = oldNode.buffer;
      srcNode.loop = oldNode.loop;
      srcNode.playbackRate.value = oldNode.playbackRate.value;
      if (srcNode.detune) {
        srcNode.detune.value = oldNode.detune.value;
      }
      srcNode.connect(gainNode);
      /** @const */ var pos = seek ? seek : this.time();
      srcNode.start(0, pos);
      startTime = audio.ctx.currentTime - pos;
      stopped = false;
      stopTime = null;
    }, pause:function() {
      if (stopped) {
        return;
      }
      srcNode.stop();
      stopped = true;
      stopTime = audio.ctx.currentTime;
    }, paused:function() {
      return stopped;
    }, stopped:function() {
      return stopped;
    }, speed:function(val) {
      if (val !== undefined) {
        srcNode.playbackRate.value = clamp$$module$lib$math(val, MIN_SPEED$$module$lib$audio, MAX_SPEED$$module$lib$audio);
      }
      return srcNode.playbackRate.value;
    }, detune:function(val) {
      if (!srcNode.detune) {
        return 0;
      }
      if (val !== undefined) {
        srcNode.detune.value = clamp$$module$lib$math(val, MIN_DETUNE$$module$lib$audio, MAX_DETUNE$$module$lib$audio);
      }
      return srcNode.detune.value;
    }, volume:function(val) {
      if (val !== undefined) {
        gainNode.gain.value = clamp$$module$lib$math(val, MIN_GAIN$$module$lib$audio, MAX_GAIN$$module$lib$audio);
      }
      return gainNode.gain.value;
    }, loop:function() {
      srcNode.loop = true;
    }, unloop:function() {
      srcNode.loop = false;
    }, duration:function() {
      return sound.duration;
    }, time:function() {
      if (stopped) {
        return stopTime - startTime;
      } else {
        return audio.ctx.currentTime - startTime;
      }
    }};
    handle.speed(conf.speed);
    handle.detune(conf.detune);
    handle.volume(conf.volume);
    return handle;
  }
  function ctx() {
    return audio.ctx;
  }
  /** @const */ var audio = function() {
    /** @const */ var ctx = new (window.AudioContext || window.webkitAudioContext);
    /** @const */ var gainNode = ctx.createGain();
    /** @const */ var masterNode = gainNode;
    masterNode.connect(ctx.destination);
    return {ctx:ctx, gainNode:gainNode, masterNode:masterNode};
  }();
  return {ctx:ctx, volume:volume, play:play};
}
/** @const */ var module$lib$audio = {};
/** @const */ module$lib$audio.audioInit = audioInit$$module$lib$audio;

$CLJS.module$lib$audio=module$lib$audio;
//# sourceMappingURL=module$lib$audio.js.map
