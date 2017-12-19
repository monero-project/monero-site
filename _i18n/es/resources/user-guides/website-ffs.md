### Quick Start

* Read [How the Forum Funding System works](#) and the [Forum Funding System Terms and Guidelines](#).
* Make the .md file in the /forum-funding-system/proposals folder. Remember the name.
* Choose your front matter layout based on whether your proposal is an Idea (`ffs-ideas`) or Open Task (`ffs-ot`) as specified in the above reading
* Fill out the rest of the Front Matter below, leaving the `address` and `paymentid` sections empty
* Edit the ffs.yml file. I strongly recommend you read this section.
* Write the proposal
* Test/Build
* Submit PR

### Make the proposal

Navigate to the /forum-funding-system/proposals folder and make a new file. Be sure the file name has no spaces and the ending is .md. It is very important that you remember the EXACT name of this file.

### Front Matter

```
---
layout: ffs-ideas OR ffs-ot
title: NAME OF YOUR PROPOSAL
summary: A BRIEF SUMMARY OF YOUR PROPOSAL
author: YOUR NAME OR HANDLE
address:
paymentid:
---
```

The layout will depend on if you are simply presenting an idea that you do not plan to do yourself or if you are presenting an idea that you are capable and willing to do, the chosen layout will be `ffs-ideas` or `ffs-ot` respectively. You can get more information in the [How the Forum Funding System works](#) User Guide. Fill out the next three sections as normal (title, summary, author), but leave the last two (address, paymentid) blank. Again, DO NOT PUT ANYTHING HERE.

### Editing the .yml file

Navigate to the /_data folder and open the file titled `ffs.yml`. In this file you will find a long list of FFS proposals. 

**DO NOT MESS WITH THE FORMATTING OR INDENTATION OF ANYTHING OR JEKYLL WILL NOT BUILD PROPERLY!**

Identify the section you will be placing your proposal in. If you used `ffs-ideas` in the layout variable in the front matter then you will be putting your proposal in `stage: ideas`, and if you used `ffs-ot` in the layout, then you will be putting your proposal in the `stage: Open Tasks`. Copy the following code:

```
- name:
  url: /forum-funding-system/proposals/
  summary:
  author:
```

and paste it as the very top underneath the `proposals:`. 

**Make sure the indentation is EXACTLY the same as the other proposals in the area. If it's not the jekyll build WILL fail. If in doubt, put the line with the hyphen (-name) all the way to the left and press space four time, and then put the remainder of the variables all the way to the left and press space six times.**

Fill in the information. 
* `name:` should be the same as the title chosen in 7.3  
* for `url:` you should append the EXACT name of the file as chosen in 7.2 to the current string but with `.html` at the end instead of `.md`. So it should look like `/forum-funding-system/proposals/YOUR-FILE-NAME.html`
* `summary:` should be the same summary copy and pasted from the front matter in 7.3
* `author:` should be your name or handle, again the same as the front matter in 7.3

Sorry for the repetition here, but it's how Jekyll is working to put things correctly.

### Write the proposal
Go ahead and write your proposal now. Go back to your .md file in `/forum-funding-system/proposals`. Be sure to follow the [Forum Funding System Terms and Guidelines](#). Let me be the first to thank you for wanting to contribute your time and energy to better Monero.

### Build/Test
Build your website using `jekyll serve` if it's not rebuilding automatically. If the build fails and you receive an error, you may have messed up somewhere in the `ffs.yml` file back in 7.4. Go back to that section and check the indentation. Yes, it's stupid. Yes, it has to be perfect.

If the build is successful, go to the Forum Funding System section of the website and make sure that your proposal is showing up in the correct areas, and that when the linked is clicked it takes you to the correct page with your proposal. Use this time to read everything for accuracy and make any changes. If not, you will have to do multiple PRs to make edits and updates. It is this way by design so we can keep track of edits made by authors.

### Submit a Pull Request
You're all done. Submit a PR and wait for it to be reviewed and merged. Be sure to make any changes if requested.