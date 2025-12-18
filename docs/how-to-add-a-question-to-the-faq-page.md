# How to add a question to the FAQ page

The FAQ page is located at `/get-started/faq` and displays frequently asked questions organized into categories. Questions and answers are stored in the internationalization (i18n) files to support multiple languages.

## Steps to add a new FAQ question

1. **Navigate to the translation files**:
   - Go to `src/i18n/translations/[locale]/translation.json`, where `[locale]` is the language code (e.g., `en` for English).
   - For English, this is `src/i18n/translations/en/translation.json`.

2. **Locate the FAQ section**:
   - Open the file and find the `"faq"` key.
   - Under `"faq"`, you'll see categories like `"basics"`, `"nodes"`, `"privacy"`, `"security"`, `"wallets"`, and `"economics"`.
   - Each category has a `"title"` and an `"items"` array containing the questions.

3. **Choose or create a category**:
   - Select an existing category that fits your question (e.g., `"basics"` for general questions, `"privacy"` for privacy-related ones).
   - If no category fits, you can add a new one by creating a new key under `"faq"`, following the structure:
     ```json
     "newCategory": {
       "title": "New Category Name",
       "items": []
     }
     ```
     - Update the FAQ page (`src/pages/get-started/faq.astro`) to include the new category by adding a similar line to the existing ones (e.g., `t("faq.newCategory.items", { returnObjects: true }) as AccordionItem[]`).

4. **Add the question and answer**:
   - In the chosen category's `"items"` array, add a new object with `"title"` (the question) and `"content"` (the answer).
   - Example:
     ```json
     {
       "title": "What is the best way to secure my Monero wallet?",
       "content": "Always use a strong, unique password and enable two-factor authentication if available. Store your seed phrase offline in a secure location."
     }
     ```
   - The `"content"` field supports Markdown formatting, including links to Moneropedia terms using the `@` prefix (e.g., `@RandomX`).

6. **Test the changes**:
   - Run the development server (`npm run dev` or `pnpm dev`) and navigate to `/get-started/faq` to verify the new question appears correctly.
   - Check that any @links render properly as links to Moneropedia entries.

## Notes
- Keep answers concise, clear, and neutral.
- If your question requires complex formatting or code, ensure it's properly escaped in JSON.
- For major changes or new categories, consider discussing with the Website workgroup first.