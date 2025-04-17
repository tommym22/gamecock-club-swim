# Gamecock Club Swimming Website

![Logo](/images/team-logo.avif)

This repository contains the source code for the University of South Carolina's Gamecock Club Swimming team website. The site provides information about the team, schedules, FAQs, and resources for current and prospective members.

## Project Overview

The website serves as a one-stop-shop for everything related to Gamecock Club Swim:

- Team information and exec/chair members
- Calendar featuring practice and meet schedules
- Contact information
- Instagram integration
- Additional resources

## Development Resources & Attributions

The following resources were used in the development of this website:

- Bootstrap 5.3 documentation: <https://getbootstrap.com>
- University of South Carolina brand toolkit: <https://sc.edu/about/offices_and_divisions/communications/toolbox/visuals/colors/>
- Squoosh: Converted the large jpeg and jpg files to the much more compressed avif type
  - Website: <https://squoosh.app>
- Claude AI: Helped explain how Bootstrap worked and produced code snippets
  - Website: <https://claude.ai>
- Google Fonts: <https://fonts.google.com>
- Formspree: Allows contact form responses to get sent to the support email I created
  - Website: <https://formspree.io>
- W3Schools: <https://www.w3schools.com>

### External Integrations

- Instagram embed: Using official Instagram embedding API
  - Documentation: <https://developers.facebook.com/docs/instagram/embedding/>
- Google Calendar embed: Using Google Calendar iframe embedding
  - Documentation: <https://support.google.com/calendar/answer/41207>

### Learning Outcomes

- Lighthouse said that my images were too large, so I used an avif file converter
- Since this was going to be the offical site, it needed to be mobile friendly, so I used Bootstrap (5.3)
  - This meant trashing the custom navigation menu I created.
- The GCal embed looked too narrow on mobile, so I used AI to help generate code that swapped the mode based on screen size.
  - It was also not the same size as the instagram embed, so I fixed that as well.
- In order to be accessible, I needed to add a line of code that told the screen reader, "this dropdown is not visible."
- Since registration isn't open yet, I used a gitignore file to hide the registration page from the site.
- I also added a custom 404 page because I thought it looked cool.
- I learned a bit about markdown and how it works

## Contributing

If you're a member of the Gamecock Club Swimming team and would like to help maintain the website, please contact Tommy at <tmitch@sc.edu> for access to the repository.

## License

This project is maintained by the Gamecock Club Swim team and is not affiliated with the University of South Carolina.
