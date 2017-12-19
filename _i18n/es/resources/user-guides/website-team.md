If you are acting on behalf of another individual, please make sure you get their permission first before adding them onto the Team page.

### Change the .yml file
Navigate to the `/_data/` folder and open `team.yml`. You will notice a long list separated by main `-area:` tags. 

**DO NOT MESS WITH THE FORMATTING OR INDENTATION OF ANYTHING OR JEKYLL WILL NOT BUILD PROPERLY!**

Find the area that you want to update and copy the code below:
```
- name:
  url:
```
Put the name or handle of the person in the `name` section and in the  `url:` section put the link to their GitHub URL (it must have https:// at the beginning). If they have no GitHub, then you may leave it blank, it won't mess anything up.

**Make sure the indentation is EXACTLY the same as the other proposals in the area. If it's not the jekyll build WILL fail.**

Save the file.

### Build/Test
Build your website using `jekyll serve` if it's not rebuilding automatically. If the build fails and you receive an error, you may have messed up somewhere in the `team.yml` file back in 8.1. Go back to that section and check the indentation. Yes, it's stupid. Yes, it has to be perfect.

If the build is successful, go to the Team page `/community/team/` and check to see that the contributor is showing up in the correct place. Click their GitHub link (if applicable) and make sure it redirects correctly. Test the page and let rehrar know if there are any bugs.

### Submit a Pull Request
You're all done. Submit a PR and wait for it to be reviewed and merged. Be sure to make any changes if requested.