import { HymnType } from './hymns'

const hino = ``

// Split the hino into lines
let hino_lines = hino.trim().split('\n')

// Separating the number and the title
const title_line = hino_lines[0].split('. ')
const number = title_line[0]
const title = title_line[1]

const hino_json: HymnType = {
  id: number,
  number: parseInt(number),
  title: title,
  stanzas: []
}

let stanza_lines = []
for (let i = 1; i < hino_lines.length; i++) {
  let line = hino_lines[i].trim()
  if (line) {
    stanza_lines.push(line)
  } else {
    hino_json['stanzas'].push({ lyric: stanza_lines })
    stanza_lines = []
  }
}

// Adding the last stanza
hino_json['stanzas'].push({ lyric: stanza_lines })

// Convert to JSON
const json_output = JSON.stringify(hino_json, null, 2)
console.log(json_output)
