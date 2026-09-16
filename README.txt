RISENYOU WEBSITE
================

Static website for risenyou.co.in, designed for S3 + CloudFront.

Files:
- index.html
- assets/css/style.css
- assets/js/main.js

CONTACT DETAILS
---------------
The site currently uses:
+91 95672 73326
WhatsApp: 919567273326

If this number ever changes, update all occurrences of 919567273326 / 95672 73326
in index.html (WhatsApp links, tel: link, and footer).
Also update hello@risenyou.co.in if that changes.

AWS HOSTING
-----------
Recommended:
Browser -> CloudFront -> private S3 bucket using Origin Access Control (OAC).

Set CloudFront Default Root Object to index.html.
Upload the contents of this package so index.html is at the bucket root.

For risenyou.co.in:
- Request an ACM certificate covering risenyou.co.in and www.risenyou.co.in in us-east-1.
- Attach the certificate to CloudFront.
- Point DNS records to CloudFront.
