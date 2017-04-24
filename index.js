const kmeans = require('node-kmeans');
const tracks = require('./trackdata');

const vectors = tracks.map((track) => {
  const dimensions = new Array(
    track.audio_features.danceability,
    track.audio_features.loudness,
    track.audio_features.speechiness,
    track.audio_features.acousticness,
    track.audio_features.instrumentalness,
    track.audio_features.valence,
    track.audio_features.tempo
  );
  return dimensions;
});

kmeans.clusterize(vectors, {k: 3}, (err, res) => {
  if (err) console.error(err);
  else {
    res.map((cluster, clusterIdx) => {
      console.log('\nCluster', clusterIdx);
      cluster.clusterInd.map((trackIdx) => {
        const track = tracks[trackIdx];
        console.log(track.artists[0].name, '-', track.name);
      });
    });
  }
});
