# HNG Frontend Task for Stage 1

Create and host a simple single-page website outlining your goals for the next 2 years in the tech field.
The website should be visually appealing, mobile-friendly, and utilize HTML, CSS and JavaScript only.
Each required element should have a specified data-testid attribute for easy identification and testing.

## Requirements

- *Languages:* Only HTML, CSS and JavaScript allowed for this stage.
- *Responsiveness:* The website must be responsive and function well on all devices (desktop, tablet, mobile).
- *Images:* All images used on the website must have natural dimensions (width and height specified in the image file itself). Websites with images that don't have natural dimensions will be automatically disqualified.
- *Required Elements:* Each required element on the website (Slack name, slack profile picture, links) should have a data-test-id attribute assigned for easy testing purposes:
> Slack Name: Display your Slack Display Name: `Attribute: data-testid="slackDisplayName"`
> Current Time in UTC:Display the current time in UTC: `Attribute: data-testid="currentTimeUTC"`
> Current Day of the week (e.g. Monday, friday): `Attribute: data-testid="currentDay"`
> Display your Slack Email: `Attribute: data-testid="slackEmail"`
> Display your Slack Profile Picture `Attribute: data-testid="slackProfilePicture"`
NB: The image must have natural dimensions (width and height specified in the image file itself) and added to the page in its original size (natural width and natural height).

> Add a link to hng.tech/learn: `Attribute: data-testid="hngLink"`
> Add a link to keyword.dog: `Attribute: data-testid="keywordLink"`
> Add a link to scrapeanyweb.site: `Attribute: data-testid="scrapeanywebLink"`

*[View Page hosted on Github](https://ruxy1212.github.io/teleport-fe)*