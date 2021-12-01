const SoundPlayer = require('./sound-player.js')

class SoundPlayerConsumer {
  constructor() {
    this.soundPlayer = new SoundPlayer();
  }

  playSomethingCool() {
    const coolSoundFileName = 'song.mp3';
    return this.soundPlayer.playSoundFile(coolSoundFileName);
  }
}

module.exports = SoundPlayerConsumer
