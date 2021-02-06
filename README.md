# Rochester Tutoring

[rochestertutoring.com](https://rochestertutoring.com)

Rochester Tutoring is a simple tutoring website that I built to help a friend find people to tutor. It's a static
site served via nginx on a DigitalOcean droplet.

I used [TailwindCSS](https://tailwindcss.com) to style the site. The addition of Tailwind makes styling a breeze, but 
adds an extra build step. 


## To make changes ("build")

1. Update *something*, one of the html files, add a new public item, etc.
2. Run `npm run build`

Optional: 
Run `npm run open` to open the homepage in a web browser.


## To deploy to DigitalOcean

1. Set a `$WEBSITE_SERVER` env var to username@password of the DigitalOcean droplet
2. Run `npm run deploy`

Note:
The website will automatically deploy when the `main` branch is updated on Github.


## Copyright & Fair Use

The content and design of this website is [copyrighted](https://www.copyright.gov/help/faq/faq-general.html#mywork). Feel 
free to ask if you want to reuse any content beyond the bounds of [fair use](https://www.copyright.gov/fair-use/more-info.html).



[![CircleCI](https://circleci.com/gh/smeriwether/rochestertutoring.com.svg?style=svg)](https://rochestertutoring.com)
