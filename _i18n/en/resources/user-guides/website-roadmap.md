---
layout: static_page
title: How to update the Roadmap
---

### Edit the .yml file
Navigate to the `/_data/` folder and open `roadmap.yml`. You will notice a list separated by hyphenated `-year` tags. 

**DO NOT MESS WITH THE FORMATTING OR INDENTATION OF ANYTHING OR JEKYLL WILL NOT BUILD PROPERLY!**

Find the year that you want to update and copy the code below:
```
- name:
  date:
  status:
```
and paste it in the correct years `accomplishments:` section IN THE CHRONOLOGICAL ORDER that it will be in. So if there is a accomplishment that happened/is happening before the one you are inputting, make sure it is higher up than yours. If there is an accomplishment that happened/is happening AFTER yours, make sure it is after yours. If you don't have exact dates, just do your best to estimate.

Fill in the data as follows:
* `name:` The name of the accomplishment. Try to keep it short, a sentence or two at most.
* `date:` When the accomplishment happened (past) or when it is expected to happen (future)
* `status:` If the task is done, put `completed`, if the task is currently in the works put `ongoing`, and if work on the task has not yet started to your knowledge, but is expected to, put `upcoming`.

**Make sure the indentation is EXACTLY the same as the other proposals in the area. If it's not the jekyll build WILL fail.**

Save the file.

### Build/Test
Build your website using `jekyll serve` if it's not rebuilding automatically. If the build fails and you receive an error, you may have messed up somewhere in the `roadmap.yml` file back in 10.1. Go back to that section and check the indentation. Yes, it's stupid. Yes, it has to be perfect.

If the build is successful, go to the Events page `/resources/roadmap/` and check to see that the newly added accomplishment is showing up in the correct place in the correct year. Test the page and let rehrar know if there are any bugs.

### Submit a Pull Request
You're all done. Submit a PR and wait for it to be reviewed and merged. Be sure to make any changes if requested.