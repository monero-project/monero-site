---
layout: static_page
title: How to add a new merchant
---

### Edit the .yml file
Navigate to the `/_data/` folder and open `merchants.yml`. You will notice a list separated by hyphenated `-category` tags. 

**DO NOT MESS WITH THE FORMATTING OR INDENTATION OF ANYTHING OR JEKYLL WILL NOT BUILD PROPERLY!**

Find the category that best describes your business/service and copy the code below:
```
- name:
  url:
```
and paste it in the correct category under the `merchants:` section.

Fill in the data as follows:
* `name:` The name of the business/service.
* `url:` The external url of the business/service. This link must have http:// (or https://) at the beginning if it is an external link.

**Make sure the indentation is EXACTLY the same as the other proposals in the area. If it's not the jekyll build WILL fail.**

Save the file.

### Build/Test
Build your website using `jekyll serve` if it's not rebuilding automatically. If the build fails and you receive an error, you may have messed up somewhere in the `merchants.yml` file back in 10.1. Go back to that section and check the indentation. Yes, it's stupid. Yes, it has to be perfect.

If the build is successful, go to the Merchants page `/community/merchants/` and check to see that the business is showing up in the correct category and that the link is redirecting correctly. Test the page and let rehrar know if there are any bugs.

### Submit a Pull Request
You're all done. Submit a PR and wait for it to be reviewed and merged. Be sure to make any changes if requested.