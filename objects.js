var playlist = {
  artistName: 'songTitle',
};
function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle

  return playlist
}
function updatePlaylist(playlist, artistName) {
delete playlist.artistName;

  return playlist
}
