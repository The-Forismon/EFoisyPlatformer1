var GAME_LEVELS = [
  ["                                                        xxxxxxxxxxxxxxxxxxxxxxxx",
   "                                                        xxxxxxxxxxxxxxxxxxxxxxxx",
   "                                                        xxxxxxxxxxxxxxxxxxxxxxxx",
   "                                                        xxxxxxxxxxx!!!!!!!!!!!!!",
   "                                                        xxxxxxx!!!!!xxxxxxxxxxxx",
   "                                                        xxxxxxx!xxxxxxxxxxxxxxxx",
   "                                                        xxxxxxx!xxxxxxxxxxxxxxxx",
   "yy                                                      xxxxxxx!xxxx     xxxxxxx",
   "xyy                                                     xxxxxxx!xxx   o   xxxxxx",
   "xxy                                                     xxxxxxx!xx         xxxxx",
   "xxy                                                            v               x",
   "xxy                                                                 xxxxx      x",
   "xxy                                                                            x",
   "xxy                           o    o                                           x",
   "xxy                                                     xxxxx     xxxxxxxxxx   x",
   "xxy                         xxyyyyyyyyy                 xxxxxx   xxxxxxxxxxx   x",
   "xxy                         xxxxxxxxxxy             o   xxxxxxxxxxxxxxxxxxxx   x",
   "xxy                         xxxxxxxxxxy                 xxxxxxxxxxxxxxxxxxxx   x",
   "xxy                        xxxxxxxxxxxy            xxx  xxxxxxxxxxxxxxxxxxxx   x",
   "xxy                         xxxxxxxxxxy             x   xxxxxxxxxxxxxxxxxxxx   x",
   "xxyy @           o          xxxxxxxxxxy                 xxxxxxxxxxxxxxxxxxxx   x",
   "xxxyyyy                     xxxxxxxxxxyy        x       xxxxxxxxxxxxxxxxxxxx   x",
   "xxxxxxxxxxxgxxxxxxxxxxxxxxxxxxxxxxxxxxxyyyyyy!!!x!!!!!!!xxxxxxxxxxxxxxxxxxxx o x",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx!!!x!!!!!!!xxxxxxxxxxxxxxxxxxxxyyyx",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"],

  ["xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                                                                        xxxxxxxxxx",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx               v                                                        xxxxxxxxxx",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                                                                        xxxxxxxxxx",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                                           o                   o        xxxxxxxxxx",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx               !                           x         x         x        xxxxxxxxxx",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx   o           !                                                        xxxxxxxxxx",
   "xxxxyyyxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx   x        x         x        x    xxxxxxxxxx",
   "xxxxyyyxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                 x                  xxxxxxxxxx",
   "xxxxyyyxxxxxxxxxxxxxxxxxxxx                     xxxxxxxxxxxxxxxxxxxx                                    xxxxxxxxxx",
   "xxxxyyyxxxxxxxxxxxxxxxxxxx                      xxxxxxxxxxxxxxxxxxxx                                    xxxxxxxxxx",
   "xxxxyy                                                            xx                 x                  xxxxxxxxxx",
   "xxxxyy@                                           o               xx                                    xxxxxxxxxx",
   "xxxxyyx  xxxxxxxxxxxxxxxxxxxx   x   x   x   x   xxxxxx            xx            x         x             xxxxxxxxxx",
   "xxxxxxx   xxxxxxxxxxxxxxxxxxx!!!!!!!!!!!!!!!!!!!xxxxxx            xxyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyxxxxxxxxxx",
   "xxxxxxx   xxxxxxxxxxxxxxxxxxxxxxx!xxxx!xxxxx!xxxxxxxxxx           xxyyyyyyyyyyyyyyyyyxyyyyyyyyyyyyyyyyyyxxxxxxxxxx",
   "xxxxxxxx  xxxxxxxxxxxxxxxx       v    v     v        x            xxyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyxxxxxxxxxx",
   "xxxxxxx   xxxxxxxxxxxxxxx                            x            xxyyyyyyyyyyyyxyyyyyyyyyxyyyyyyyyyyyyyxxxxxxxxxx",
   "xxxxxxx                                              x            xxyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyxxxxxxxxxx",
   "xxxxxxx                                         o    x  x         xxyyyyyyyxyyyyyyyyyyyyyyyyyyyxyyyyyyyyxxxxxxxxxx",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxx   xx   xx   xxx   xxx    x            xxyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyxxxxxxxxxx",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxx   x     x   x       x    x       x    xxyyyyyyyyyyyyxyyyyyyyyyxyyyyyyyyyyyyyxxxxxxxxxx",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxx!!!x!!!!!x!!!x!!!!!!!x!!!!x            xxyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyxxxxxxxxxx",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyxyyyyyyyyyyyyyyyyyyxxxxxxxxxx",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxyyyyyyxyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyxxxxxxxxxx",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyxxxxxxxxxx",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"],

  ["xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "xxxxxx!!!!!!!!!!!!!!!!!!!xxxxxx",
   "xxxxxxxxxxxvxxxxxxxvxxxxxxxxxxx",
   "xxxxxx                   xxxxxx",
   "xxxxxx                   xxxxxx",
   "xxxxxx         o         xxxxxx",
   "xxxxxx       xxxxx       xxxxxx",
   "xxxxxx                   xxxxxx",
   "xxxxxx                   xxxxxx",
   "xxxxxx  x!!x       x!!x  xxxxxx",
   "xxxxxx  xvxx       xxvx  xxxxxx",
   "xxxxxx                   xxxxxx",
   "xxxxxx                   xxxxxx",
   "xxxxxx       o   o       xxxxxx",
   "xxxxxx       x!!!x       xxxxxx",
   "xxxxxx        xvx        xxxxxx",
   "xxxxxx                   xxxxxx",
   "xxxxxx      x     x      xxxxxx",
   "xxxxxx                   xxxxxx",
   "xxxxxx   o           o   xxxxxx",
   "xxxxxx   x           x   xxxxxx",
   "xxxxxx                   xxxxxx",
   "xxxxxx                   xxxxxx",
   "xxxxxx      x     x      xxxxxx",
   "xxxxxx                   xxxxxx",
   "xxxxxx         ^         xxxxxx",
   "xxxxxx   x           x   xxxxxx",
   "xxxxxx                   xxxxxx",
   "xxxxxx     x  x x  x     xxxxxx",
   "xxxxxx     x!!x x!!x     xxxxxx",
   "xxxxxx      xvx xvx      xxxxxx",
   "xxxxxx                   xxxxxx",
   "xxxxxx                   xxxxxx",
   "xxxxxx  ^!!x   x   x!!^  xxxxxx",
   "xxxxxx  xxvx       xvxx  xxxxxx",
   "xxxxxx                   xxxxxx",
   "xxxxxx      x     x      xxxxxx",
   "xxxxxx                   xxxxxx",
   "xxxxxx         o         xxxxxx",
   "xxxxxx         x         xxxxxx",
   "xxxxxx                   xxxxxx",
   "xxxxxx                   xxxxxx",
   "xxxxxx      x     x      xxxxxx",
   "xxxxxx                   xxxxxx",
   "xxxxxx         @         xxxxxx",
   "xxxxxx^xxxxxxxxxxxxxxxxx^xxxxxx",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"],

  ["xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "xxx    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "xxx oo xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "xxx    xxxxx                                                              xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "xxx    xxxxx                                                              xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "xxx    xxxxx                  x>                                          xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "xxx    xxxxx>   o                                                          xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "xxx    xxxxx       x>                                                                xxxxxxxxxxxxxxxxxxxxxxxxx",
   "xxx    xxxxxxx   xxxxxxxxxxxxxxxxxxxxxxxxxyyxxxxxxxxxxxxxxxxxxxxxxxxxxxxx            xxxxxxxxxxxxxxxxxxxxxxxxx",
   "xxx    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxyyxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx        o  xxxxxxxxxxxxxxxxxxxxxxxxx",
   "xxx    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx    xxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "xxx                                                                                  xxxxxxxxxxxxxxxxxxxxxxxxx",
   "xxx                                                                                 <xxxxxxxxxxxxxxxxxxxxxxxxx",
   "xxx                                                                                  xxxxxxxxxxxxxxxxxxxxxxxxx",
   "xxx ^^ xxxxxxxxxxxxyyxxxxxxxxxxxxyyxxxxxxxxxxxxyyxxxxxxxxxxxxyyxxxxxxxxxxxx          xxxxxxxxxxxxxxxxxxxxxxxxx",
   "xxx    xxxxxxxxxxxxxxxxxx!!!xxxxxxxxxxxxxxx!v!xxxxxxxxxxxxxxxxxxxxxxxxxxxxx          xxxxxxxxxxxxxxxxxxxxxxxxx",
   "xxx    xxxxxxxxxxxxxxxxxxxvxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx          xxxxxxxxxxxxxxxxxxxxxxxxx",
   "xxx    xxxxxx                                                            xx          xxxxxxxxxxxxxxxxxxxxxxxxx",
   "xxx    xxxxxx                                  o                         xx          xxxxxxxxxxxxxxxxxxxxxxxxx",
   "xxx    xxxxxx                              x x x x x x x xx              xx          xxxxxxxxxxxxxxxxxxxxxxxxx",
   "xxx    xxxxxx                              x!!!!!!!!!!!!!!x              xx          xxxxxxxxxxxxxxxxxxxxxxxxx",
   "xxx    xxxxxx             !                 vxxxxxxxxxxxvx                           xxxxxxxxxxxxxxxxxxxxxxxxx",
   "xxx    xxxxxx    ooo      !                                                         <xxxxxxxxxxxxxxxxxxxxxxxxx",
   "xxx    xxxxxx    ooo      !                                                          xxxxxxxxxxxxxxxxxxxxxxxxx",
   "xxx    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                    xxxxxxxxxxxxxxxxxx^^xxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "xxx    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "xxx    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "xxx^  ^xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx!!!!xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "xxx    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "xxx @  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "xxxyyyyxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"],

  ["xxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "xx                         xx",
   "xx                         xx",
   "xx                         xx",
   "xx   x x  x  x x           xx",
   "xx    x  x x x x    xxx  xxxx",
   "xx    x   x   x            xx",
   "xx                x        xx",
   "xx   x   x x xx x x        xx",
   "xx   x x x x x xx          xx",
   "xx    x x  x x  x x        xx",
   "xx                         xx",
   "xx                         xx",
   "xx                         xx",
   "xx                         xx",
   "xx @                       xx",
   "xxxxxxxxxxxxxxxxxxxxxxxx^xxxx",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxx"]
];

if (typeof module != "undefined" && module.exports)
  module.exports = GAME_LEVELS;
