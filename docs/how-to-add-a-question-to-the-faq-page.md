# How to add a question to the FAQ page

The FAQ page is located at `/get-started/faq` and displays frequently asked questions organized into categories. Questions and answers are stored in the internationalization (i18n) files to support multiple languages.

## Steps to add a new FAQ question

1. **Navigate to the translation files**:
   - Go to `src/i18n/translations/[locale]/faq.json`, where `[locale]` is the language code (e.g., `en` for English).
   - For English, this is `src/i18n/translations/en/faq.json`.

2. **Locate the FAQ categories**:
   - Open the file and you'll see categories like `"basics"`, `"nodes"`, `"privacy"`, `"security"`, `"wallets"`, and `"economics"`.
   - Each category has a `"title"` key plus individual question objects as named keys.

3. **Choose or create a category**:
   - Select an existing category that fits your question (e.g., `"basics"` for general questions, `"privacy"` for privacy-related ones).
   - If no category fits, you can add a new one by creating a new key in `faq.json`, following the structure:
     ```json
     "newCategory": {
       "title": "New Category Name",
       "firstQuestion": {
         "title": "Question text?",
         "content": "Answer text."
       }
     }
     ```
     - Update the FAQ page (`src/pages/get-started/faq.astro`) to include the new category by adding a similar `sectionToItems()` call.

4. **Add the question and answer**:
   - In the chosen category, add a new named key with `"title"` (the question) and `"content"` (the answer).
   - Use camelCase for the key name (e.g., `"howToSecureWallet"`).
   - Example:
     ```json
     "basics": {
       "title": "Basics",
       "whatIsMonero": {
         "title": "What is Monero?",
         "content": "Monero is uncompromising digital cash..."
       },
       "howToSecureWallet": {
         "title": "What is the best way to secure my Monero wallet?",
         "content": "Always use a strong, unique password and enable two-factor authentication if available. Store your seed phrase offline in a secure location."
       }
     }
     ```
   - The `"content"` field supports Markdown formatting, including links to Moneropedia terms using the `@` prefix (e.g., `@RandomX`).

5. **Test the changes**:
   - Run the development server (`pnpm dev`) and navigate to `/get-started/faq` to verify the new question appears correctly.
   - Check that any @links render properly as links to Moneropedia entries.

## Notes
- Keep answers concise, clear, and neutral.
- If your question requires complex formatting or code, ensure it's properly escaped in JSON.
- For major changes or new categories, consider discussing with the Website workgroup first.