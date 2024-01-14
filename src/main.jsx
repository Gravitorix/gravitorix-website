import React from 'react'
import ReactDOM from 'react-dom'
import { SocialIcon } from 'react-social-icons'

const Twitter = <SocialIcon url="https://twitter.com/gravitorix" target='_blank' />
const GitHub = <SocialIcon url="https://github.com/Gravitorix" target='_blank' />
const Discord = <SocialIcon url="https://discord.gg/hkxXfGcEcH" target='_blank' />
const Twitch = <SocialIcon url="https://www.twitch.tv/gravitorix" target='_blank' />
const Youtube = <SocialIcon url="https://www.youtube.com/c/@gravitorix" target='_blank' />
const Instagram = <SocialIcon url="https://www.instagram.com/gravitorixl/" target='_blank' />
const Reddit = <SocialIcon url="https://www.reddit.com/user/Gravitorix" target='_blank' />
const Soundcloud = <SocialIcon url="https://soundcloud.com/gravitorix" target='_blank' />
const Spotify = <SocialIcon url="https://open.spotify.com/artist/5MF7FnGiSFSeuBK6dpCq7t" target='_blank' />

// React v17+
ReactDOM.createRoot(document.getElementById('twitter-social')).render(Twitter)
ReactDOM.createRoot(document.getElementById('github-social')).render(GitHub)
ReactDOM.createRoot(document.getElementById('discord-social')).render(Discord)
ReactDOM.createRoot(document.getElementById('twitch-social')).render(Twitch)
ReactDOM.createRoot(document.getElementById('youtube-social')).render(Youtube)
ReactDOM.createRoot(document.getElementById('instagram-social')).render(Instagram)
ReactDOM.createRoot(document.getElementById('reddit-social')).render(Reddit)
ReactDOM.createRoot(document.getElementById('soundcloud-social')).render(Soundcloud)
ReactDOM.createRoot(document.getElementById('spotify-social')).render(Spotify)