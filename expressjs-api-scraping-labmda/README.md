# Deploy this Scraper to AWS

Scraper built in Node.js with Express, Cheerio, Axios

##

### Lambda

- Create Lambda function with Node.js 18.x
- Upload the zip file
- Increase Timeout (it takes more than the default (3sec)) 🤨

### API Gateway

- Create REST API
- Create Resource:
  - Proxy resource
  - Resource name: {proxy+}
  - Enable CORS
- Add integration with the above Lambda function (check on Lambda proxy integration)
- Deploy API

### Notes

namimg... 🫠
