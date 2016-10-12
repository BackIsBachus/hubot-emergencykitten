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
#

kittens = require('../data/kittens.coffee').kittens

module.exports = (robot) ->
    robot.hear /// (!kitten) $ ///i, (msg) ->
      msg.send msg.random kittens
