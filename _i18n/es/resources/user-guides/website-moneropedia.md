### Make a file
Navigate to the /resources/moneropedia folder and make a new file. Be sure the file name has no spaces and the ending is .md

### Front Matter
```
---
layout: moneropedia
entry: "PUT THE NAME OF THE TERM HERE IN QUOTE, THIS IS HOW IT WILL SHOW UP ON THE LANDING PAGE"
terms: ["PUT", "TERMS", "HERE", "EXPLAINED", "BELOW"]
summary: "PUT SUMMARY OF YOUR ENTRY HERE IN QUOTES"
---
```

There is one thing to highlight. The `terms:` section of the front matter can be filled with as many terms as you would like. This is how other Moneropedia entries will link to this page. You can link to other Moneropedia entries as well in your page by putting an ampersand before the term used, i.e. `@THE-TERM-USED`. This will make an automatic link in the Moneropedia entry to the referred term, replace the @term with the word used in that terms `entry:` area of the front matter, and on hover it will show the summary. How cool is that?

### Write
Write your Moneropedia entry. Remember that you can link to other Moneropedia entries using `@term-used-in-entry` as described above. Just go to the .md file of the Moneropedia entry you want to link to and use any of the terms in the `terms:` field of the front matter. Be sure to write whichever one you choose EXACTLY as shown and preceded by an ampersand.

### Build/Test
Build your website using `jekyll serve` if it's not rebuilding automatically and test check the link to your entry is appearing on the alphabetical list of Moneropedia entries and that it leads to your entry when clicked. Test your Moneropedia entry in the browser and contact rehrar if there are any bugs.

### Submit Pull Request
You're all done. Submit a PR and wait for it to be reviewed and merged. Be sure to make any changes if requested.