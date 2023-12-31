const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path
const ffmpeg = require('fluent-ffmpeg')
const fs = require('fs')
const layers = require('../providers/layers')
const baseVideo = 'services/input-videos/base-black.mp4'
const outputFolder = './output-outro'

ffmpeg.setFfmpegPath(ffmpegPath)

const publicAPI = {}

publicAPI.addOutro = ({ data = '', size = '720x1280', duration = 20, video = baseVideo }) => {
    createFolder(outputFolder)

    return new Promise((resolve, reject) => {    
        ffmpeg(baseVideo)
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
            .save(`${outputFolder}/${Date.now()}.mp4`)

    })
}

const createFolder = (folderPath = '') => {
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath)
    }
}

module.exports = publicAPI