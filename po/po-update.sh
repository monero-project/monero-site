#!/bin/bash

# SCRIPT
#
# This script loops through all the .config files in this folder and run po4a on them. The config files are one for each user guide.
# See the next section for instructions about adding new config files.
#
# CONFIG FILES
#
# The config files give a set of instructions to po4a, which will update all translations files (.pot and .po) and documents (.md) at the same time.
# we use --keep=0 to transfer all translated content directly to the original markdown file, but would be good to switch to a more reasonable thresold
# (maybe the standard 80%?) in the future, when the guides will be mostly translated.
#
# To avoid spamming unnecessary diffs, we didn't add all config files for all guides. A new config file should be added
# when the translation files and the guides themselves need to be updated (so, when the original document got changed and 
# the changes need to be transferred to the translation files). To add a new config file to be managed by po4a:
#
# 1. Copy one of the other .config files and rename it to the filename of the guide it's going to point to (for example, for the user guide
# 'verification-allos-advanced.md' we will create a config file named 'verification-allos-advanced.config').
# 2.change the strings starting with [po4a_paths] and [type: markdown] using this structure:
# [po4a_paths] ../_i18n/en/resources/user-guides/weblate/<GUIDE.pot> $lang:../_i18n/$lang/resources/user-guides/weblate/<GUIDE.po>
# 3. At the bottom of the file, change the '[type: markdown]' instruction:
# [type: markdown] ../_i18n/en/resources/user-guides/<GUIDE.md> $lang:../_i18n/$lang/resources/user-guides/<GUIDE.md>

checkpo() {
  if ! command -v po4a &> /dev/null
  then
    echo "po4a is not installed"
    exit
  else
    echo "Updating language files.."
  fi
}

updatelangs() {
  for guide in user-guides/*.config; do
    echo "-> Running po4a on ${guide}"
    po4a $guide || echo "ERROR: something went wrong, po4a didn't run succesfully on ${guide}"
  done
}

while true; do
  checkpo
  updatelangs
  echo "Done."
  break
done
