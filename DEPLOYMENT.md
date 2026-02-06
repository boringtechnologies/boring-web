# Deployment Guide for S3 + CloudFront

## Build the Static Site

Run the build command to generate the static export:

```bash
npm run build
```

This will create an `out` directory containing all static files.

## Deploy to S3

### Option 1: Using AWS CLI

```bash
# Sync the out directory to your S3 bucket
aws s3 sync out/ s3://your-bucket-name/ --delete

# Set the correct cache-control headers for static assets
aws s3 sync out/_next/ s3://your-bucket-name/_next/ \
  --cache-control "public,max-age=31536000,immutable" \
  --delete
```

### Option 2: Using S3 Console

1. Go to your S3 bucket in the AWS Console
2. Upload all files from the `out` directory
3. Make sure to enable "Static website hosting" in bucket properties
4. Set the index document to `index.html`
5. Set the error document to `404.html`

## CloudFront Configuration

### Distribution Settings

- **Origin Domain**: Your S3 bucket website endpoint (e.g., `your-bucket-name.s3-website-us-east-1.amazonaws.com`)
- **Viewer Protocol Policy**: Redirect HTTP to HTTPS
- **Allowed HTTP Methods**: GET, HEAD, OPTIONS
- **Cache Key and Origin Requests**: Use legacy cache settings or create a custom cache policy

### Cache Behavior for Static Assets

Create a behavior for path pattern `/_next/*`:

- **Path Pattern**: `/_next/*`
- **Viewer Protocol Policy**: Redirect HTTP to HTTPS
- **Cache Policy**: CachingOptimized (or create custom with long TTL)
- **Origin Request Policy**: None needed
- **Response Headers Policy**: (Optional) SimpleCORS if needed

### Error Pages

Configure custom error responses:

- **404 Error**: `/404.html` with 404 status code
- **403 Error**: `/404.html` with 404 status code (for S3 access denied on missing files)

## Trailing Slashes

The Next.js config is set with `trailingSlash: true`, which means:

- `/contact` → `/contact/` (redirects)
- `/service/web` → `/service/web/` (redirects)

This ensures clean URLs work with S3 static hosting where directories serve `index.html`.

## Verification

After deployment, test the following URLs:

- `https://yourdomain.com/` - Home page
- `https://yourdomain.com/contact/` - Contact page
- `https://yourdomain.com/service/web/` - Web service page
- `https://yourdomain.com/service/software/` - Software service page

## Performance Tips

1. **Enable CloudFront Compression**: Turn on automatic compression for text-based files
2. **Use Custom Domain**: Configure Route 53 or your DNS to point to CloudFront
3. **Enable HTTPS**: Use AWS Certificate Manager for free SSL certificates
4. **Set Cache Headers**: The build automatically sets optimal cache headers for `_next` assets
