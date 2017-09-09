---
layout: static_page
title: How to make a User Guide
---

### Quick Start

* Make file in /resources/user-guides with a .md ending and no spaces in filename.
* Front Matter as in 5.3
* Write User Guide
* Add guide using markdown in the correct category in /resources/user-guides/index.md being careful not to mess with any indentation
* Test/Build
* Submit PR

### Make a file
Navigate to the /resources/user-guides folder and make a new file. Be sure the file name has no spaces and the ending is .md

### Front Matter
```
---
layout: static_page
title: TITLE OF YOUR USER GUIDE
---
```

### Write
Write your user guide. Be succinct but thorough. Remember, people will be using your guides when they need help. Make sure all the information is there. Feel free to use images or screenshots if necessary to help get your point across.

### Add Guide to the 'User Guide' landing page
In the /resources/user-guides folder, find the file labeled index.md and open it. 

DO NOT CHANGE ANYTHING IN THIS DOCUMENT BESIDES WHAT YOU ARE INSTRUCTED TO.

This file will look quite different because it's HTML. Don't panic. Simply Ctrl + F (i.e. the find feature) and search for the category that you want to put your User Guide in. You will see there are some sections that are not indented like the others. They are flush with the left side of the screen. **Do not change the indentation.** You can put markdown in these areas.

Once you've identified the non-indented area under the category you would like your User Guide to be under, you can use markdown to insert your link underneath the others. `[TITLE OF USER GUIDE](LINK-TO-USER-GUIDE.html)`. Please note that the file name in between the paranthases must be EXACTLY the same name as the file name you made in step 5.2, but with a `.html` at the end instead of `.md`.

In the event that you think your User Guide should be in a new Category that doesn't exist yet, contact rehrar to make one for you.

### Build/Test
Build your website using `jekyll serve` if it's not rebuilding automatically and test that your link appears in the correct category and that it leads to your User Guide when clicked. Test your User Guide in the browser and contact rehrar if there are any bugs.

### Submit Pull Request
You're all done. Submit a PR and wait for it to be reviewed and merged. Be sure to make any changes if requested.