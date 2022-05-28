import * as handTrack from 'handtrackjs';

const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

let model;

function startVideo() {
    handTrack.startVideo(vidoe).then((status = {}) => {
        if (status.status) {
            navigator.getUserMedia({ video: true }).then(stream => {});
        }
    });
}

handTrack.load().then(loadedModel => {
    model = loadedModel;
    startVideo();
});
