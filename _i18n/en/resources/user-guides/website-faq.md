---
layout: static_page
title: How to add a question to the FAQ
---

### Copy/Paste Code
Navigate to the `/get-started/faq` folder and open the `index.md` file. Inside you will see HTML code, but you will see it is very repetetive.

Copy the code below:
```
<div class="tab">
    <input id="tab-CHANGETHIS" type="checkbox" name="tabs" class="accordian">
    <label for="tab-CHANGETHIS" class="accordian">CHANGE QUESTION</label>
    
<div class="tab-content" markdown="1">

CHANGE ANSWER

</div>

</div>
```
And paste it at the very bottom of the file. Literally underneath everything else.

Now we're going to change just a couple of things. Find the section with:
```
<input id="tab-CHANGETHIS" type="checkbox" name="tabs" class="accordian">
<label for="tab-CHANGETHIS" class="accordian">CHANGE QUESTION</label>
```

and change the sections in between the quotes that say 'CHANGETHIS'. Leave the first part `tab-` alone. You can change it to anything really, as long as they are identical in the input and label, but it's good to see what number is on the last FAQ question (i.e. `tab-nine`) and make it the next number.

Now inside the label tag you're going to find where it says 'CHANGE QUESTION' and change it to the Question you want answered.

Lastly, find the words 'CHANGE ANSWER' and change it to the answer of your question. 

**DO NOT MESS WITH THE INDENTATION HERE. The div that has `markdown=1` MUST be flush with the left side, the answer to the question must start flush with the left side, and the `</div>` MUST be flush with the left side. **

### Build/Test
Build your website using `jekyll serve` if it's not rebuilding automatically. If the build is successful, go to the FAQ page `/get-started/faq/` and check to see that your question is showing up and, when clicked, the answer drops down. If not, check to make sure that the `id="tab-CHANGETHIS"` in the input and the `for="CHANGETHIS"` in the label are identical to each other. Test the page and let rehrar know if there are any bugs.

### Submit a Pull Request
You're all done. Submit a PR and wait for it to be reviewed and merged. Be sure to make any changes if requested.