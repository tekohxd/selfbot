@echo off

mode con:cols=130 lines=45

color 0c
echo "                                 .-~~``~~-,                                                    "
echo "                                (          \                                                   "
echo "                             .--'`-.__,     \                                                  "
echo "                            /      |\O/      |                                                 "
echo "                           |,      /         |                                                 "
echo "                           \   ,--`\         |                                                 "
echo "                            `.(   /          \                                                 "
echo "                                 /            \                                                "
echo "                                / .  ;    :.   \                                               "
echo "                               /__;   \   | \   \                                              "
echo "                               /   '. |\_ /-.'-._\                                             "
echo "                              |      `   `        \                                            "
echo "                              |    /               \                                           "
echo "                              |    |                |                                          "
echo "                              |    |                \                                          "
echo "                              \    \                 |                                         "
echo "                               \    |  |   |   \     \                                         "
echo "                                \   \  \   \    \     |                                        "
echo "                                 '.  \  \  ' \   \     \                                       "
echo "                                   \  \  `\   `\  `\    \                                      "
echo "                                    |  `\  `\   `.  '.   \                                     "
echo "                                     \   `-. '._  '-. '._/\                                    "
echo "                                      |     \-._;-._ '-._  \                                   "
echo "                                      \      `\     `--` `--\                                  "
echo "                                       ;_      `-.           |                                 "
echo "                          ~==~===~===~,-.-.-'`;'=~=-.,_   __/=~=~=~~=                          "
echo "                            =_ = -_ -( ( ( .-`( ( ( .-``""`-_ = - _ -                          "
echo "                          - -   =   - ` ` ` _= ` ` `   =  -  -    =                            "
echo "                          ~~==~=~~==~=~~=~~=~=~==~~=~~==~~=~~=~~~===~~                         "
echo "                                                   \ . \  . '|                                 "
echo "                                                    \   . .' /                                 "
echo "                                                     '.   \.'|                                 "
echo "                                                       '-.__/                                  "

echo ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
echo                 SELFBOT INSTALL              
echo ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
echo ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
echo continuing will install files and required dependencies
echo (you must have git installed - https://git-scm.com/download/win)
echo (you must have nodejs installed - https://nodejs.org/en/)
echo installation wont work without both of those
pause

call git init
call git remote add origin https://github.com/tekohxd/selfbot
call git fetch
call git checkout origin/master -b master

call npm i discord.js@11 table figlet

echo ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
echo installation complete, you must still enter your token into
echo the config.json file