# Hubot: hubot-emergencykitten

Sometimes you need an emergency kitten.
All images come from http://www.emergencykitten.com/ ([GitHub](https://github.com/rgrove/emergencykitten/))and are either under a Creative Commons license or were marked as shareable by their creators.

See [`src/emergencykitten.coffee`](src/emergencykitten.coffee) for full documentation.

## Installation

Run `npm install hubot-emergencykitten --save`

Add **hubot-emergencykitten** to your `external-scripts.json`:

```json
["hubot-emergencykitten"]
```



## Sample Interaction

This script works best with Chat apps that support image preview (Slack, RocketChat, Mattermost, ...)

```
user1> hubot kitten
Hubot> https://farm8.staticflickr.com/7078/7352069826_1e667da00b_b.jpg
```

## Update the kitten list
The list of kittens is located in [`data/kittens.coffee`](https://github.com/BackIsBachus/hubot-emergencykitten/blob/master/data/kittens.coffee) for easier access.
If other kittens are added to EmergencyKitten and you want them you can update the kitten list by running [getKittens.js](https://github.com/BackIsBachus/hubot-emergencykitten/blob/master/getKittens.js) in the console with NodeJS (the file should be located in the `node_modules/hubot-emergencykitten/` folder of your hubot installation folder):
```
nodejs getKittens.js
```
The script is far from being what you could call "proper JavaScript", but it works and is far from enough considering you won't be running it that often.
