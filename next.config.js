/** @type {import('next').NextConfig} */
module.exports = {
  basePath: process.env.GITHUB_ACTIONS ? "/blog-tsxsample3" : "",
  reactStrictMode: true,
  trailingSlash: true,
};
