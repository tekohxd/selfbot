@echo off

if not defined in_subprocess (cmd /k set in_subprocess=y ^& %0 %*) & exit

echo ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
echo             INSTALLING DEPENDENCIES
echo ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
echo you still need to enter your token into config.json
echo if you don't know how to find your token, watch this video:
echo https://www.youtube.com/watch?v=tI1lzqzLQCs
echo ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
echo continuing will install required depencdencies
pause

npm i discord.js@11 table figlet