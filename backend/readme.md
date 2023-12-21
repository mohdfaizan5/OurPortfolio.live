# Our Portfolio Startup

## Tech Stact 

<p align='center'>
<a href='https://skillicons.dev'>
  <img src='https://skillicons.dev/icons?i=react,nextjs,nodejs,mongodb,tailwind&perline=7' /> </a>
</p>

## Inspiration
https://dribbble.com/shots/22532468-Business-Landing-Page

## Colors:

home bg gradient - [#E7DBFF - #E7DBFF]
purple - #C4B7E5
pink rgb(238,140,141)


## API end points

1. Home page

`/` - GET


2. Add new portfolio
`/:username` - POST
<!-- ```json
{
  "username": "faizan5",
  "name": [
    { "first": "Mohammed"},
    { "last": "Faizan"}
  ],
  "aboutMe": "....",
  "jobTitle": "Full Stack Developer",
  "shortDescription": "....",
  "socails": [
    { "email": "mohdfaizan@gmail.com"},
    { "linkedIn": "linkedin.com/in/mohdfaizan5" },
    { "github": "github.com/mohdfaizan5" },
    { "twitter": "twitter.com/mohdfaizan5" }
  ]
}
``` -->


```json
{
  "username": "johndoe",
  "name": [
    { "first": "John" },
    { "last": "Doe" }
  ],
  "aboutMe": "I'm a skilled software developer with a passion for creating innovative web applications.",
  "jobTitle": "Full Stack Engineer",
  "shortDescription": "Expert in JavaScript, Node.js, React, and MongoDB, building full-stack web solutions.",
  "socials": [
    { "email": "johndoe@example.com" },
    { "linkedIn": "https://www.linkedin.com/in/johndoe" },
    { "github": "https://github.com/johndoe" },
    { "twitter": "https://twitter.com/johndoe" }
  ]
}
```

3. Get portfolio

`/:username` - GET

4. Delete

`/:username` - DELETE

5. Update portfolio

`/:username` - PUT