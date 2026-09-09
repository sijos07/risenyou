RISENYOU WEBSITE
================

Static website for risenyou.co.in, designed for S3 + CloudFront.

Files:
- index.html
- assets/css/style.css
- assets/js/main.js

CONTACT DETAILS
---------------
The site currently uses the placeholder:
+91 99999 99999
WhatsApp: 919999999999

Replace all occurrences of 9999999999 in index.html with the real WhatsApp number.
Also replace the displayed phone number and hello@risenyou.co.in if required.

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
