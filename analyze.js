const tracks = require('./trackdata');

const features = ['danceability', 'energy', 'loudness', 'acousticness', 'instrumentalness', 'speechiness', 'valence', 'tempo', 'duration_ms'];

const genres = {
  house: tracks.slice(0,11),
  other: tracks.slice(12,23),
  grime: tracks.slice(24,35)
};

// average the features for the genres

for(genre in genres) {
  const tracks = genres[genre];
  let averages = {};
  features.map((feature) => {
    let sum = 0;
    tracks.map((track) => {
      sum += track.audio_features[feature];
    });
    averages[feature] = sum/tracks.length;
  });
  console.log('\nAveraged features for', genre, '\n', averages);
}
