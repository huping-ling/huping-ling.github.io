# Content editor setup

The editor is available at `/admin/` and uses Sveltia CMS with the GitHub backend.

## Immediate sign-in

1. Open `https://www.hupingling.org/admin/`.
2. Choose **Sign in with token**.
3. Follow the GitHub link shown by the editor to create a fine-grained token for `huping-ling/huping-ling.github.io`.
4. Grant **Contents: Read and write** permission only.
5. Paste the token into the editor.

The token remains in that browser's local storage. Never add it to this repository.

## Optional one-click GitHub sign-in

GitHub does not currently support browser-only PKCE authentication for this CMS. A one-click sign-in therefore requires a GitHub OAuth app plus an OAuth client such as Sveltia CMS Authenticator deployed to Cloudflare Workers.

After deployment, add its URL to `admin/config.yml`:

```yaml
backend:
  name: github
  repo: huping-ling/huping-ling.github.io
  branch: main
  base_url: https://your-authenticator.example.workers.dev
```

## Publishing

Creating or editing an article commits a Markdown file in `_posts/`. GitHub Pages then rebuilds the site automatically.

