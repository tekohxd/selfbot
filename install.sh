cat << "EOF"
       .-~~``~~-,
      (          \
   .--'`-.__,     \
  /      |\O/      |
 |,      /         |
 \   ,--`\         |
  `.(   /          \
       /            \
      / .  ;    :.   \
     /__;   \   | \   \
     /   '. |\_ /-.'-._\
    |      `   `        \
    |    /               \
    |    |                |
    |    |                \
    \    \                 |
     \    |  |   |   \     \
      \   \  \   \    \     |
       '.  \  \  ' \   \     \
         \  \  `\   `\  `\    \
          |  `\  `\   `.  '.   \
           \   `-. '._  '-. '._/\
            |     \-._;-._ '-._  \
            \      `\     `--` `--\
             ;_      `-.           |
~==~==jgs==~,-.-.-'`;'=~=-.,_   __/=~=~=~~=
  =_ = -_ -( ( ( .-`( ( ( .-``"`-_ = - _ -
- -   =   - ` ` ` _= ` ` `   =  -  -    =
~~==~=~~==~=~~=~~=~=~==~~=~~==~~=~~=~~~===~~
                         \ . \  . '|
                          \   . .' /
                           '.   \.'|
                             '-.__/
EOF

echo "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
echo "                SELFBOT INSTALL                "
echo "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
echo "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
echo "continuing will install files and required dependencies"
echo "(you must have nodejs installed - https://nodejs.org/en/)"
echo "installation wont work without both of those"
echo "press any key to continue.."

read

git init
git remote add origin https://github.com/tekohxd/selfbot
git fetch
git checkout origin/master -b master

npm i discord.js@11 table figlet

echo "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
echo "installation complete, you must still enter your token into"
echo "the config.json file"
echo "press any key to continue.."
read
echo "tip: hosting this on a vps/cloud server (east NA) will typically give faster responses but isn't required"
echo "press any key to continue.."
read