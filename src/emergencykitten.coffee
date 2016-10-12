# Description:
#   Display a kitten
#
# Dependencies:
#   None
#
# Configuration:
#   None
#
# Commands:
#   !kitten - Hubot replies with a kitten image URL
#
# Author:
#   BackIsBachus

module.exports = (robot) ->
    robot.hear /// (!kitten) $ ///i, (msg) ->
      imgurl = 'http://farm8.staticflickr.com/7239/7028040701_6de179d6fb_b.jpg'
      msg.send imgurl
