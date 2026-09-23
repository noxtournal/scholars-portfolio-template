# Seidenberg Scholars Portfolio Template

A one-page portfolio you can put online for free with GitHub Pages. You only edit **one file**: `content.js`.

## What's in here

| File | What it does | Do you edit it? |
| --- | --- | --- |
| `content.js` | All your text: name, projects, experience, skills | **Yes** |
| `index.html` | The layout and styling | No |
| `resume.pdf` | Your resume (you add this) | Upload your own |

## Put it online (about 10 minutes)

1. **Make a GitHub account** at github.com if you don't have one. Pick your username carefully, because it becomes part of your web address.
2. **Create a new repository.** Click **+** (top right) → **New repository**. Name it exactly `your-username.github.io` (use your real username). Set it to **Public**, then click **Create repository**.
3. **Upload the files.** On the new repo page, click **uploading an existing file**, drag in `index.html` and `content.js`, and click **Commit changes**.
4. **Turn on Pages.** Go to **Settings** → **Pages**. Under *Branch*, pick `main` and `/ (root)`, then **Save**.
5. **Wait 1–2 minutes**, then visit `https://your-username.github.io`. That's your live site.

## Edit your content

1. In your repo, click `content.js`, then the **pencil icon** to edit.
2. Change the text inside the "quotes".
3. Click **Commit changes**. Your site updates in about a minute.

**Add a project:** copy one whole project block, from `{` down to `},`, paste it right below, and change the text.

**Remove something:** set it to `""`. It disappears from the page. Set a whole list to `[]` to hide that section.

**Change the link color:** edit `accentColor`, for example `"#0a7d4f"` for green.

## Add your resume

Save your resume as a PDF named `resume.pdf` and upload it to the repo (**Add file** → **Upload files**). The document icon in your header links to it. No resume yet? Set `resume: ""` in `content.js` to hide the icon.

## Something broke?

If your page shows a red box saying it couldn't read `content.js`, there's a typo in your last edit. The usual causes are a missing `"`, a missing `,` at the end of a line, or a deleted `}`. Open the file's **History** on GitHub to compare with the last working version.

## Print or save as PDF

Press **Ctrl+P** (Cmd+P on Mac) on your live site for a clean printable version.
