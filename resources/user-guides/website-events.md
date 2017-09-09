---
layout: static_page
title: How to add an event
---

### 9.1 Edit the .yml file
Navigate to the `/_data/` folder and open `events.yml`. You will notice a  list separated by hyphenated `-event` tags. 

**DO NOT MESS WITH THE FORMATTING OR INDENTATION OF ANYTHING OR JEKYLL WILL NOT BUILD PROPERLY!**

Find the area that you want to update and copy the code below:
```
- event:
  where:
  when:
  description:
  link:
```
and paste it IN THE CHRONOLOGICAL ORDER that it will be in. So if there is an event happening before yours, make sure it is higher up than yours. If there is an event happening AFTER yours, make sure it is after your event.

Fill in the data as follows:
* `event:` The name of the event goes here as well as the date. The recommended format is: `Event Name - January 1st, 2000`
* `where:` Where the event will take place. Vanue name and address are recommended.
* `when:` Date and time
* `description:` Descriptoin of the happenings of your event
* `link:` The website of your event (if applicable, this can be left blank and everything will be ok). This link must have http:// at the beginning if it is an external link.

**Make sure the indentation is EXACTLY the same as the other proposals in the area. If it's not the jekyll build WILL fail.**

Save the file.

### 9.2 Build/Test
Build your website using `jekyll serve` if it's not rebuilding automatically. If the build fails and you receive an error, you may have messed up somewhere in the `events.yml` file back in 9.1. Go back to that section and check the indentation. Yes, it's stupid. Yes, it has to be perfect.

If the build is successful, go to the Events page `/community/events/` and check to see that the event is showing up in the correct place. Click their Event url link (if applicable) and make sure it redirects correctly. Test the page and let rehrar know if there are any bugs.

### 9.3 Submit a Pull Request
You're all done. Submit a PR and wait for it to be reviewed and merged. Be sure to make any changes if requested.