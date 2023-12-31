const publicAPI = {}

/**
 * Generates an outro layer to be added to a video using the 'videoFilters' option of the 'ffmpeg' library
 * @returns 
 */
publicAPI.generateOutroLayer = ({ data = '', fontFile = './fonts/OpenSans-Regular.ttf', fontColor = '#FF00F2', fontSize = 32, disappearAfter = 4 }) => {
    const layer = { 
        filter: 'drawtext',
        options: {
            text: data,
            x: '(w-text_w) / 2',
            y: '(h-text_h) / 2'
        }
    }

    if (fontFile) {
        layer.options.fontfile = fontFile
    }
    if (fontColor) {
        layer.options.fontcolor = fontColor
    }
    if (fontFile) {
        // layer.options.fontfile = fontFile
    }
    if (fontSize) {
        layer.options.fontsize = fontSize
    }
    if (disappearAfter != undefined) {
        layer.options.enable = `between(t, 0, ${disappearAfter})`
    }

    return layer
}

module.exports = publicAPI