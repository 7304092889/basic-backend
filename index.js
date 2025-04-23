require('dotenv').config()
const express = require('express')

const app = express()
const port = 3000

const githubdata = {
    "login": "7304092889",
    "id": 169555489,
    "node_id": "U_kgDOChs2IQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/169555489?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/7304092889",
    "html_url": "https://github.com/7304092889",
    "followers_url": "https://api.github.com/users/7304092889/followers",
    "following_url": "https://api.github.com/users/7304092889/following{/other_user}",
    "gists_url": "https://api.github.com/users/7304092889/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/7304092889/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/7304092889/subscriptions",
    "organizations_url": "https://api.github.com/users/7304092889/orgs",
    "repos_url": "https://api.github.com/users/7304092889/repos",
    "events_url": "https://api.github.com/users/7304092889/events{/privacy}",
    "received_events_url": "https://api.github.com/users/7304092889/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Saifali111",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 1,
    "public_gists": 0,
    "followers": 1,
    "following": 1,
    "created_at": "2024-05-11T19:11:36Z",
    "updated_at": "2025-04-23T02:26:13Z"
  }

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/x',(req,res)=>{
    res.send("<h1>this is x route</h1>")
})
app.get('/login',(req,res)=>{
    res.send('please login at this page')
})
app.get("/saif",(req, res)=>{
    res.send('saif ali')
})

app.get('/github',(req,res)=>{
res.json(githubdata)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})