const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path
const ffmpeg = require('fluent-ffmpeg')
const layers = require('../providers/layers')

ffmpeg.setFfmpegPath(ffmpegPath)

const publicAPI = {}

publicAPI.addOutro = ({ data = '', size = '720x1280', duration = 20 }) => {
    return new Promise((resolve, reject) => {    
        ffmpeg('services/input-videos/base-black.mp4')
            .duration(duration)
            .size(size)
            .videoCodec('libx264')
            .videoFilters(
                layers.generateOutroLayer({ data })
            )
            .on('error', (error) => {
                reject(error)
            })
            .on('end', () => {
                resolve()
            })
            .save(`./output-outro/${Date.now()}.mp4`)

    })
}

module.exports = publicAPI