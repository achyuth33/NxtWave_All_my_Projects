In this project let's build a **Spotify Remix App** by applying the concepts we have learned till now. This project allows you to practice the concepts and techniques learned till React Course and apply them in a concrete project.

You will demonstrate your skills by creating an app that will fetch data from an internal server using a class component, displaying that data, using **component lifecycle** methods, **routing** concepts, **authentication**, and **authorization**, and adding responsiveness to the website.

This is an individual assessment. All work must be your own. You will also be given feedback by code reviewers after your project submission.

### Prerequisites

#### UI Prerequisites

<details>
<summary>Click to view</summary>

- What is Figma?
  - Figma is a vector graphics editor and prototyping tool which is primarily web-based. You can check more info on the <a href="https://www.figma.com/" target="_blank">Website</a>.
- Create a Free account in Figma
  - Kindly follow the instructions as shown in <a href="https://www.youtube.com/watch?v=hrHL2VLMl7g&t=37s" target="_blank">this</a> video to create a Free Figma account.
- How to Check CSS in Figma?
  - Kindly follow the instructions as shown in <a href="https://www.youtube.com/watch?v=B242nuM3y2s" target="_blank">this</a> video to check CSS in the Figma screen.
- Export Images in Figma screen
  - Kindly follow the instructions as shown in <a href="https://www.youtube.com/watch?v=NpzL1MONwaw" target="_blank">this</a> video to export images from the Figma screen.
  - Check <a href="https://help.trydesignlab.com/hc/en-us/articles/360011010634-How-do-I-export-images-and-PDFs-from-Sketch-or-Figma-in-my-short-course-" target="_blank">this</a> reference docs to export images in Figma screen.

</details>

#### API Prerequisites

<details>
<summary>Click to view</summary>

- Kindly follow this <a href="https://levelup.gitconnected.com/how-to-build-a-spotify-player-with-react-in-15-minutes-7e01991bc4b6" target="_blank">website</a> for creating a spotify account and register your application.

- Refer to the below image to check your **CLIENT ID** : - <img src="https://assets.ccbp.in/frontend/content/react-js/spotify-remix-client-id-info-v0.png" alt="client id" style="width:400px, height:400px" />
</details>

#### Design Files

<details>
<summary>Click to view</summary>

- You can check the **Design Files** for different devices <a href="https://www.figma.com/file/VHD95fQXFwCmwRNyVKbDhz/Spotify_Remix?node-id=0%3A1" target="_blank">here</a>.

</details>

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Completion Instructions

<details>
<summary>Functionality to be added</summary>

The app must have the following functionalities

- Login Route
  - Users should be able to log in/logout to their account.
- Users should be able to navigate to Profile/Home/YourMusic/Playlists routes using links in the sidebar.
- When the data is being fetched then the Loading view should be displayed to the user.
- Profile Route
  - Users should be able to see profile photo, name, and followers' details.
  - Users should be able to see the logout button.
  - Users should be able to see **PROFILE** highlighted in the sidebar.
- Home Route
  - Sidebar should contain the application title with logo, Profile, Home, Your Music, and Playlists button
  - Users should be able to navigate to the profile route when clicking on the **Spotify Remix** logo.
  - Users should be able to see a list of Featured Playlists (Ex: Editor Picks) based on the user country and name.
  - Users should be able to see the list of Categories (Ex: Genres and Moods).
  - Users should be able to see the list of New Releases based on the user country.
  - Users should be able to see **HOME** highlighted in the sidebar.
- Specific Playlist Details Route :
  - When a user clicks on any playlist in the list of featured playlists then the user should be able to see the list of songs in that playlist.
  - Users should be able the see the following details(Song Name, Artist Name, Duration of the song)
  - Users should be able to play the song
- Specific Category Playlists Details Route :
  - When a user clicks on any category in the list of categories then the user should be able to see the list of playlists in that category.
  - Users should be able to see the thumbnail and name of the playlist.
- Specific Album Details Route :
  - When a user clicks on any Album in the list of New Releases then the user should be able to see that Album.
  - Users should be able to see the thumbnail and name of the Album.
  - Users should be able to see the song in that Album
  - Users should be able to play the song.
- Your Music Route
  - Users should be able to see the list of liked songs.
  - Users should be able to play the songs.
  - Users should be able to see Your Music highlighted in the sidebar.
- Playlists Route
  - Users should be able to see the list of your playlists (thumbnail, playlist name, number of tracks).
  - When a user clicks on any playlist in the list of your playlists then the users should be able to see the list of songs in that playlist.
  - Users should be able to see Playlists highlighted in the sidebar.
- When the users enter an invalid route in the URL then the Page not found Route should be displayed.

</details>

### Quick Tips

<details>
<summary>Click to view</summary>

- You can use Moment third party library to format the date
  - Moment <a href="https://www.npmjs.com/package/moment" target="_blank">Documentation</a>
- You can use <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio" target="_blank">HTML Audio tags</a> for building the Music Player
  - You can see this <a href="https://pointclearmedia.com/2020/08/27/css-styling-the-audio-element/" target="_blank">Documentation</a> for stylings

</details>

### Important Note:

<details>
<summary>Click to view</summary>

- When you want to showcase your application, you need to give access to users.
- To give access to users, follow these steps mentioned below

  - Open your app in the dashboard - <a href="https://developer.spotify.com/dashboard/applications" target="_blank">Dashboard Link</a>

  - Click the **USERS AND ACCESS** button

  <img src="https://assets.ccbp.in/frontend/content/react-js/spotify-remix-users-and-access-info-v0.png" alt="users and access" style="width:400px, height:400px" />

  - In the **USERS AND ACCESS** page, click the **ADD NEW USER** button to add a user to your application.

  <img src="https://assets.ccbp.in/frontend/content/react-js/spotify-remix-add-new-user-info-v0.png" alt="add new user" style="width:400px, height:400px" />

  - After clicking the **ADD NEW USER** button, a pop-up will be opened. In that pop-up, give the user details like name and email. Make sure you are providing the appropriate email.

  <img src="https://assets.ccbp.in/frontend/content/react-js/spotify-remix-add-new-user-pop-up-info.png" alt="pop up new user" style="width:400px, height:400px" />

  - Fill the details and save them, the user details will appear in the **USERS AND ACCESS** You can add a maximum of 25 users in development mode.

  <img src="https://assets.ccbp.in/frontend/content/react-js/spotify-remix-user-details-info.png" alt="user details" style="width:400px, height:400px" />

- Before deploying your project, change the redirect URL accordingly in `getRedirectURL` function from the path `src/components/LoginForm/index.js` which return when the condition is false

</details>

### Resources

<details>
<summary>Data fetch URLs</summary>

- Login Route:

  - **Note:** Already code has been Pre-filled, Kindly check the code in Login Form Component

    - You should use your Application clientID in place of **clientId** (Follow<a href="https://levelup.gitconnected.com/how-to-build-a-spotify-player-with-react-in-15-minutes-7e01991bc4b6" target="_blank">website</a> to create your own application clientID).
    - You can get the Redirect URL using `getRedirectURL` function. The `redirectUrl` value should be saved in the application's Redirect URIs (Follow this <a href="https://levelup.gitconnected.com/how-to-build-a-spotify-player-with-react-in-15-minutes-7e01991bc4b6" target="_blank">website</a> to save `redirectUrl` value in the application's Redirect URIs).
    - Add the URL which was given as a value for the variable `redirectUrl` to your Application Redirect URIs(Follow API Prerequisites to add Redirect URIs) to redirect after authentication success OR failure
    - When you click on the `LOG IN WITH SPOTIFY` button
      - If you didn’t log in to your Spotify account
        - It will take you to the Spotify login app to log in.
        - It will ask your credentials to log in
        - Once your login process is done it will redirect to the Terms page, and you need to click on the `Agree` button to get the access token.
      - If you’re already login to your Spotify account
        - It will directly redirect to the Terms page, and you need to click on the `Agree` button to get the access token.

  - Get Request Token:

    ```js
    'https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${redirectUrl}&scope=user-read-private%20user-read-email%20playlist-read-private%20playlist-modify-public%20playlist-modify-private%20user-library-read%20user-library-modify%20user-follow-read%20user-follow-modify&state=34fFs29kd09&show_dialog=true'

    ```

    - Sample response object:

      ```json
      {
        "access_token": "BQBeseFFzfwpW_YaB8QrmT8vaYOb2Ka_uvgf8Q62jIasqo2Bna_bgyliY7N2I4sDB-e4oOv-ECUOfSg6aW_QBTCxTTsRMcCUbT3uHY79xCAFLkNakSXhb6kSS6HYzgXH3hSl9uKwXXHtR0IDvHpxLvcJxgTI1jFN7v-3_2B-O2KtntnagT2MgtrW-TGM3IWu-bczZdrqlZ3VmpyiOx81PKuDfNACR3zPVrjJ8po7jU55WcUF8j0_nWQQ6LShAWpoYzFq_OGQfTDBIwGEqg",
        "expires_in": "3600",
        "state": "34fFs29kd09",
        "token_type": "Bearer"
      }
      ```

- Profile Route:

  - **Note:** Get Access token from Cookies

    ```js
    "const token = Cookies.get('pa_token')"

    ```

  - Get User Information:

    ```js
    'https://api.spotify.com/v1/me'

    ```

  - Sample response object:

    ```json
    {
      "country": "IN",
      "display_name": "Bobby",
      "email": "padalavijayreddy@gmail.com",
      "explicit_content": {
        "filter_enabled": false,
        "filter_locked": false
      },
      "external_urls": {
        "spotify": "https://open.spotify.com/user/tel1grq8ely359wesuv83nezp"
      },
      "followers": {
        "href": null,
        "total": 0
      },
      "href": "https://api.spotify.com/v1/users/tel1grq8ely359wesuv83nezp",
      "id": "tel1grq8ely359wesuv83nezp",
      "images": [],
      "product": "open",
      "type": "user",
      "uri": "spotify:user:tel1grq8ely359wesuv83nezp"
    }
    ```

- Home Route:

  - **Note:**

    - Get Access token from Cookies
    - Get Country name and Time Stamp from Get User Information API

  - Format the Timestamp using a library called <a href="https://www.npmjs.com/package/moment" target="_blank">moment js</a>

    ```js
    "const timeStamp=moment(new Date()).format('YYYY-MM-DDTHH:00:00')"

    ```

  - Get Featured Playlists (Editors Pick):

    ```js
    'https://api.spotify.com/v1/browse/featured-playlists?country=${country}&timestamp=${timestamp}'

    ```

    - Sample response object:

    ```json
    {
        "message" : "Editor's picks",
        "playlists" : {
            "href" : "https://api.spotify.com/v1/browse/featured-playlists?country=IN&timestamp=2021-07-03T11%3A00%3A00&offset=0&limit=20",
            "items" : [
                {
                    "collaborative" : false,
                    "description" : "Hottest Bollywood R&B tunes!",
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/playlist/37i9dQZF1DXdSavJjIP6Fb"
                    },
                    "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1DXdSavJjIP6Fb",
                    "id" : "37i9dQZF1DXdSavJjIP6Fb",
                    "images" : [ {
                        "height" : null,
                        "url" : "https://i.scdn.co/image/ab67706f000000036caf8c414e0b49f1b5be3e91",
                        "width" : null
                    } ],
                    "name" : "Bollywood R&B",
                    "owner" : {
                        "display_name" : "Spotify",
                        "external_urls" : {
                        "spotify" : "https://open.spotify.com/user/spotify"
                        },
                        "href" : "https://api.spotify.com/v1/users/spotify",
                        "id" : "spotify",
                        "type" : "user",
                        "uri" : "spotify:user:spotify"
                    },
                    "primary_color" : null,
                    "public" : null,
                    "snapshot_id" : "MTYyMzgyNjY1NCwwMDAwMDAxMDAwMDAwMTdhMTM5YzY0NzAwMDAwMDE3MTM0MmFmMTgz",
                    "tracks" : {
                        "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1DXdSavJjIP6Fb/tracks",
                        "total" : 30
                    },
                    "type" : "playlist",
                    "uri" : "spotify:playlist:37i9dQZF1DXdSavJjIP6Fb"
                },
                ....
            ],
            "limit" : 20,
            "next" : null,
            "offset" : 0,
            "previous" : null,
            "total" : 15
        }
    }
    ```

  - Get Browse Categories (Genres & Moods):

  ```js
  'https://api.spotify.com/v1/browse/categories'

  ```

  - Sample response object:

  ```json
  {
      "categories" : {
          "href" : "https://api.spotify.com/v1/browse/categories?offset=0&limit=20",
          "items" : [
              {
                  "href" : "https://api.spotify.com/v1/browse/categories/toplists",
                  "icons" : [ {
                      "height" : 275,
                      "url" : "https://t.scdn.co/media/derived/toplists_11160599e6a04ac5d6f2757f5511778f_0_0_275_275.jpg",
                      "width" : 275
                  } ],
                  "id" : "toplists",
                  "name" : "Top Lists"
              },
              ....
          ],
          "limit" : 20,
          "next" : "https://api.spotify.com/v1/browse/categories?offset=20&limit=20",
          "offset" : 0,
          "previous" : null,
          "total" : 58
      }
  }
  ```

  - Get New Releases:

    - **Note:** Get User Country Code from getting User Information API

  ```js
  'https://api.spotify.com/v1/browse/new-releases?country=${getUserCountry}'

  ```

  - Sample response object:

  ```json
      {
          "albums" : {
              "href" : "https://api.spotify.com/v1/browse/new-releases?country=IN&offset=0&limit=20",
              "items" : [
                  {
                      "album_type" : "single",
                      "artists" : [ {
                          "external_urls" : {
                          "spotify" : "https://open.spotify.com/artist/7gXy60xRcwYujBFoYHnR2O"
                          },
                          "href" : "https://api.spotify.com/v1/artists/7gXy60xRcwYujBFoYHnR2O",
                          "id" : "7gXy60xRcwYujBFoYHnR2O",
                          "name" : "Big Red Machine",
                          "type" : "artist",
                          "uri" : "spotify:artist:7gXy60xRcwYujBFoYHnR2O"
                      }, {
                          "external_urls" : {
                          "spotify" : "https://open.spotify.com/artist/06HL4z0CvFAxyc27GXpf02"
                          },
                          "href" : "https://api.spotify.com/v1/artists/06HL4z0CvFAxyc27GXpf02",
                          "id" : "06HL4z0CvFAxyc27GXpf02",
                          "name" : "Taylor Swift",
                          "type" : "artist",
                          "uri" : "spotify:artist:06HL4z0CvFAxyc27GXpf02"
                      } ],
                      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZM", "ZW" ],
                      "external_urls" : {
                          "spotify" : "https://open.spotify.com/album/4kD0pFwhEjEiF9pwUwkpNo"
                      },
                      "href" : "https://api.spotify.com/v1/albums/4kD0pFwhEjEiF9pwUwkpNo",
                      "id" : "4kD0pFwhEjEiF9pwUwkpNo",
                      "images" : [ {
                          "height" : 640,
                          "url" : "https://i.scdn.co/image/ab67616d0000b273b8abc4de41be8b3158a4ef40",
                          "width" : 640
                      }, {
                          "height" : 300,
                          "url" : "https://i.scdn.co/image/ab67616d00001e02b8abc4de41be8b3158a4ef40",
                          "width" : 300
                      }, {
                          "height" : 64,
                          "url" : "https://i.scdn.co/image/ab67616d00004851b8abc4de41be8b3158a4ef40",
                          "width" : 64
                      } ],
                      "name" : "Renegade (feat. Taylor Swift)",
                      "release_date" : "2021-07-02",
                      "release_date_precision" : "day",
                      "total_tracks" : 3,
                      "type" : "album",
                      "uri" : "spotify:album:4kD0pFwhEjEiF9pwUwkpNo"
                  },
                  ....
              ],
              "limit" : 20,
              "next" : "https://api.spotify.com/v1/browse/new-releases?country=IN&offset=20&limit=20",
              "offset" : 0,
              "previous" : null,
              "total" : 100
      }
  ```

- Specific Playlist Details Route :

  - **Note:** The value of the API id should be the `id` value of each playlist

    ```js
    'https://api.spotify.com/v1/users/spotify/playlists/${id}'

    ```

    - Sample response object:

    ```json
    {
        "collaborative" : false,
        "description": "From India to MENA, these hits will make you dance.",
        "external_urls" : {
            "spotify" : "https://open.spotify.com/playlist/37i9dQZF1DX7cLxqtNO3zl"
        },
        "followers" : {
            "href" : null,
            "total" : 47628
        },
        "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1DX7cLxqtNO3zl",
        "id" : "37i9dQZF1DX7cLxqtNO3zl",
        "images" : [ {
            "height" : null,
            "url" : "https://i.scdn.co/image/ab67706f0000000384696e0bd9318a598cc9373d",
            "width" : null
        } ],
        "name" : "Bollywood Araby",
        "owner" : {
            "display_name" : "Spotify",
            "external_urls" : {
            "spotify" : "https://open.spotify.com/user/spotify"
            },
            "href" : "https://api.spotify.com/v1/users/spotify",
            "id" : "spotify",
            "type" : "user",
            "uri" : "spotify:user:spotify"
        },
        "primary_color" : "#ffffff",
        "public" : false,
        "snapshot_id" : "MTYyNTI5NDQ3MiwwMDAwMDAwMGJiYzUwMjlhMGNjZWVlYTgxYTUyY2I0MTc1MjBjMmUy",
        "tracks" : {
            "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1DX7cLxqtNO3zl/tracks?offset=0&limit=100",
            "items" : [
                {
                    "added_at" : "2021-06-03T19:23:39Z",
                    "added_by" : {
                        "external_urls" : {
                        "spotify" : "https://open.spotify.com/user/"
                        },
                        "href" : "https://api.spotify.com/v1/users/",
                        "id" : "",
                        "type" : "user",
                        "uri" : "spotify:user:"
                    },
                    "is_local" : false,
                    "primary_color" : null,
                    "track" : {
                        "album" : {
                        "album_type" : "single",
                        "artists" : [ {
                            "external_urls" : {
                            "spotify" : "https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of"
                            },
                            "href" : "https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of",
                            "id" : "0LyfQWJT6nXafLPZqxe9Of",
                            "name" : "Various Artists",
                            "type" : "artist",
                            "uri" : "spotify:artist:0LyfQWJT6nXafLPZqxe9Of"
                        } ],
                        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZM", "ZW" ],
                        "external_urls" : {
                            "spotify" : "https://open.spotify.com/album/7IfUPFe5MSwcAp2Vw8ohF5"
                        },
                        "href" : "https://api.spotify.com/v1/albums/7IfUPFe5MSwcAp2Vw8ohF5",
                        "id" : "7IfUPFe5MSwcAp2Vw8ohF5",
                        "images" : [ {
                            "height" : 640,
                            "url" : "https://i.scdn.co/image/ab67616d0000b273bd04f8c4ddaa8586e3f1505d",
                            "width" : 640
                        }, {
                            "height" : 300,
                            "url" : "https://i.scdn.co/image/ab67616d00001e02bd04f8c4ddaa8586e3f1505d",
                            "width" : 300
                        }, {
                            "height" : 64,
                            "url" : "https://i.scdn.co/image/ab67616d00004851bd04f8c4ddaa8586e3f1505d",
                            "width" : 64
                        } ],
                        "name" : "BurjKhalifa (From \"Laxmii\")",
                        "release_date" : "2020-10-18",
                        "release_date_precision" : "day",
                        "total_tracks" : 1,
                        "type" : "album",
                        "uri" : "spotify:album:7IfUPFe5MSwcAp2Vw8ohF5"
                        },
                        "artists" : [ {
                        "external_urls" : {
                            "spotify" : "https://open.spotify.com/artist/5EXIQQjCaCnRPJ68SxYURB"
                        },
                        "href" : "https://api.spotify.com/v1/artists/5EXIQQjCaCnRPJ68SxYURB",
                        "id" : "5EXIQQjCaCnRPJ68SxYURB",
                        "name" : "Shashi",
                        "type" : "artist",
                        "uri" : "spotify:artist:5EXIQQjCaCnRPJ68SxYURB"
                        }, {
                        "external_urls" : {
                            "spotify" : "https://open.spotify.com/artist/6xElGyunMSlnuJ2vabDUWA"
                        },
                        "href" : "https://api.spotify.com/v1/artists/6xElGyunMSlnuJ2vabDUWA",
                        "id" : "6xElGyunMSlnuJ2vabDUWA",
                        "name" : "DJ Khushi",
                        "type" : "artist",
                        "uri" : "spotify:artist:6xElGyunMSlnuJ2vabDUWA"
                        }, {
                        "external_urls" : {
                            "spotify" : "https://open.spotify.com/artist/3tPQOjkxO3mrYrrgkTeXgH"
                        },
                        "href" : "https://api.spotify.com/v1/artists/3tPQOjkxO3mrYrrgkTeXgH",
                        "id" : "3tPQOjkxO3mrYrrgkTeXgH",
                        "name" : "Nikhita Gandhi",
                        "type" : "artist",
                        "uri" : "spotify:artist:3tPQOjkxO3mrYrrgkTeXgH"
                        }, {
                        "external_urls" : {
                            "spotify" : "https://open.spotify.com/artist/4x4Q6d60hC0ZuLloMeCLoS"
                        },
                        "href" : "https://api.spotify.com/v1/artists/4x4Q6d60hC0ZuLloMeCLoS",
                        "id" : "4x4Q6d60hC0ZuLloMeCLoS",
                        "name" : "Madhubanti",
                        "type" : "artist",
                        "uri" : "spotify:artist:4x4Q6d60hC0ZuLloMeCLoS"
                        } ],
                        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZM", "ZW" ],
                        "disc_number" : 1,
                        "duration_ms" : 187570,
                        "episode" : false,
                        "explicit" : false,
                        "external_ids" : {
                        "isrc" : "INZ031408360"
                        },
                        "external_urls" : {
                        "spotify" : "https://open.spotify.com/track/3ZVKI8jix6PjEFx2xFBFhz"
                        },
                        "href" : "https://api.spotify.com/v1/tracks/3ZVKI8jix6PjEFx2xFBFhz",
                        "id" : "3ZVKI8jix6PjEFx2xFBFhz",
                        "is_local" : false,
                        "name" : "BurjKhalifa (From \"Laxmii\")",
                        "popularity" : 67,
                        "preview_url" : "https://p.scdn.co/mp3-preview/db40ab496ac6cbfdc8b87e8ecf2032b18073b1e5?cid=f25d283eae8046588034aee0a42c0f31",
                        "track" : true,
                        "track_number" : 1,
                        "type" : "track",
                        "uri" : "spotify:track:3ZVKI8jix6PjEFx2xFBFhz"
                    },
                    "video_thumbnail" : {
                        "url" : null
                    }
                },
                ....
            ],
            "limit" : 100,
            "next" : null,
            "offset" : 0,
            "previous" : null,
            "total" : 50
            },
        "type" : "playlist",
        "uri" : "spotify:playlist:37i9dQZF1DX7cLxqtNO3zl"
    }
    ```

    - You can get the song url from the key `preview_url`. this key value is present inside items object that is received as a part of the response for the Specific Playlist API

    - For example in above response

    ```json
        {
        ....
        "tracks" : {
            ....
            "items" : [
                {
                    ....
                    "track" : {
                        ....
                        "preview_url" : "https://p.scdn.co/mp3-preview/db40ab496ac6cbfdc8b87e8ecf2032b18073b1e5?cid=f25d283eae8046588034aee0a42c0f31",
                        ....
                    },
                    ....
                },
                ....
            ],
            ....
            },
            ....
    }
    ```

- Specific Category Playlists Details Route :

  - **Note:**

    - The value of the category id should be given in the place of `id`

  - Get User Country Code from Get UserInfo API

    ```js
    'https://api.spotify.com/v1/browse/categories/${id}/playlists?country=${getUserCountry}'

    ```

    - Sample response object:

    ```json
    {
        "playlists" : {
            "href" : "https://api.spotify.com/v1/browse/categories/toplists/playlists?country=IN&offset=0&limit=20",
            "items" : [
                {
                    "collaborative" : false,
                    "description": "Doja Cat & The Weeknd are on top of the Hottest 50!",
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M"
                    },
                    "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1DXcBWIGoYBM5M",
                    "id" : "37i9dQZF1DXcBWIGoYBM5M",
                    "images" : [ {
                        "height" : null,
                        "url" : "https://i.scdn.co/image/ab67706f0000000324cee63f23e9ec905dbcb3b0",
                        "width" : null
                    } ],
                    "name" : "Today's Top Hits",
                    "owner" : {
                        "display_name" : "Spotify",
                        "external_urls" : {
                        "spotify" : "https://open.spotify.com/user/spotify"
                        },
                        "href" : "https://api.spotify.com/v1/users/spotify",
                        "id" : "spotify",
                        "type" : "user",
                        "uri" : "spotify:user:spotify"
                    },
                    "primary_color" : null,
                    "public" : null,
                    "snapshot_id" : "MTYyNTE5ODQwMCwwMDAwMDRjMTAwMDAwMTdhNjU1ZjkyY2YwMDAwMDE3YTY0OWRhYmYw",
                    "tracks" : {
                        "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1DXcBWIGoYBM5M/tracks",
                        "total" : 50
                    },
                    "type" : "playlist",
                    "uri" : "spotify:playlist:37i9dQZF1DXcBWIGoYBM5M"
                },
                ....
            ],
            "limit" : 20,
            "next" : null,
            "offset" : 0,
            "previous" : null,
            "total" : 13
        }
    }
    ```

- Specific Album Details Route :

  - **Note:** The value of the album id should be given in the place of `id`

    ```js
    'https://api.spotify.com/v1/albums/${id}'

    ```

    - Sample response object:

    ```json
    {
        "album_type" : "single",
        "artists" : [
            {
                "external_urls" : {
                "spotify" : "https://open.spotify.com/artist/7gXy60xRcwYujBFoYHnR2O"
                },
                "href" : "https://api.spotify.com/v1/artists/7gXy60xRcwYujBFoYHnR2O",
                "id" : "7gXy60xRcwYujBFoYHnR2O",
                "name" : "Big Red Machine",
                "type" : "artist",
                "uri" : "spotify:artist:7gXy60xRcwYujBFoYHnR2O"
            },
            ....
        ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZM", "ZW" ],
        "copyrights" : [ {
            "text" : "2021 Jagjaguwar / 37d03d",
            "type" : "C"
        }, {
            "text" : "2021 Jagjaguwar / 37d03d",
            "type" : "P"
        } ],
        "external_ids" : {
            "upc" : "617308011296"
        },
        "external_urls" : {
            "spotify" : "https://open.spotify.com/album/4kD0pFwhEjEiF9pwUwkpNo"
        },
        "genres" : [ ],
        "href" : "https://api.spotify.com/v1/albums/4kD0pFwhEjEiF9pwUwkpNo",
        "id" : "4kD0pFwhEjEiF9pwUwkpNo",
        "images" : [ {
            "height" : 640,
            "url" : "https://i.scdn.co/image/ab67616d0000b273b8abc4de41be8b3158a4ef40",
            "width" : 640
        }, {
            "height" : 300,
            "url" : "https://i.scdn.co/image/ab67616d00001e02b8abc4de41be8b3158a4ef40",
            "width" : 300
        }, {
            "height" : 64,
            "url" : "https://i.scdn.co/image/ab67616d00004851b8abc4de41be8b3158a4ef40",
            "width" : 64
        } ],
        "label" : "Jagjaguwar",
        "name" : "Renegade (feat. Taylor Swift)",
        "popularity" : 0,
        "release_date" : "2021-07-02",
        "release_date_precision" : "day",
        "total_tracks" : 3,
        "tracks" : {
            "href" : "https://api.spotify.com/v1/albums/4kD0pFwhEjEiF9pwUwkpNo/tracks?offset=0&limit=50",
            "items" : [
                {
                    "artists" : [ {
                        "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/7gXy60xRcwYujBFoYHnR2O"
                        },
                        "href" : "https://api.spotify.com/v1/artists/7gXy60xRcwYujBFoYHnR2O",
                        "id" : "7gXy60xRcwYujBFoYHnR2O",
                        "name" : "Big Red Machine",
                        "type" : "artist",
                        "uri" : "spotify:artist:7gXy60xRcwYujBFoYHnR2O"
                    }, {
                        "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/06HL4z0CvFAxyc27GXpf02"
                        },
                        "href" : "https://api.spotify.com/v1/artists/06HL4z0CvFAxyc27GXpf02",
                        "id" : "06HL4z0CvFAxyc27GXpf02",
                        "name" : "Taylor Swift",
                        "type" : "artist",
                        "uri" : "spotify:artist:06HL4z0CvFAxyc27GXpf02"
                    } ],
                    "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZM", "ZW" ],
                    "disc_number" : 1,
                    "duration_ms" : 254466,
                    "explicit" : false,
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/track/1aU1wpYBSpP0M6IiihY5Ue"
                    },
                    "href" : "https://api.spotify.com/v1/tracks/1aU1wpYBSpP0M6IiihY5Ue",
                    "id" : "1aU1wpYBSpP0M6IiihY5Ue",
                    "is_local" : false,
                    "name" : "Renegade (feat. Taylor Swift)",
                    "preview_url" : "https://p.scdn.co/mp3-preview/e3b1851865f3ee5f213dfd8d950e344e6b14ec8c?cid=f25d283eae8046588034aee0a42c0f31",
                    "track_number" : 1,
                    "type" : "track",
                    "uri" : "spotify:track:1aU1wpYBSpP0M6IiihY5Ue"
                },
                ....
            ],
            "limit" : 50,
            "next" : null,
            "offset" : 0,
            "previous" : null,
            "total" : 3
        },
        "type" : "album",
        "uri" : "spotify:album:4kD0pFwhEjEiF9pwUwkpNo"
    }
    ```

- Your Music Route :

  - **Note:** In this API you will get your liked songs as response, you should like a few songs in your account to see the list of liked songs, you can access the list of liked songs from the response using the key `items`.

  ```js
  'https://api.spotify.com/v1/me/tracks'

  ```

  - Sample response object:

  ```json
  {
      "href" : "https://api.spotify.com/v1/me/tracks?offset=0&limit=20",
      "items" : [
          {
              "added_at" : "2021-07-02T09:42:53Z",
              "track" : {
              "album" : {
                  "album_type" : "single",
                  "artists" : [ {
                  "external_urls" : {
                      "spotify" : "https://open.spotify.com/artist/4A2XSc4OJjuPY4l6NjnrDj"
                  },
                  "href" : "https://api.spotify.com/v1/artists/4A2XSc4OJjuPY4l6NjnrDj",
                  "id" : "4A2XSc4OJjuPY4l6NjnrDj",
                  "name" : "Ram Miriyala",
                  "type" : "artist",
                  "uri" : "spotify:artist:4A2XSc4OJjuPY4l6NjnrDj"
                  } ],
                  "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZM", "ZW" ],
                  "external_urls" : {
                  "spotify" : "https://open.spotify.com/album/16FbjE4zTKmqoa9DOt4lrs"
                  },
                  "href" : "https://api.spotify.com/v1/albums/16FbjE4zTKmqoa9DOt4lrs",
                  "id" : "16FbjE4zTKmqoa9DOt4lrs",
                  "images" : [ {
                  "height" : 640,
                  "url" : "https://i.scdn.co/image/ab67616d0000b27322f35b0b1851208dd08f4a78",
                  "width" : 640
                  }, {
                  "height" : 300,
                  "url" : "https://i.scdn.co/image/ab67616d00001e0222f35b0b1851208dd08f4a78",
                  "width" : 300
                  }, {
                  "height" : 64,
                  "url" : "https://i.scdn.co/image/ab67616d0000485122f35b0b1851208dd08f4a78",
                  "width" : 64
                  } ],
                  "name" : "Gully Rowdy",
                  "release_date" : "2021-05-07",
                  "release_date_precision" : "day",
                  "total_tracks" : 1,
                  "type" : "album",
                  "uri" : "spotify:album:16FbjE4zTKmqoa9DOt4lrs"
              },
              "artists" : [ {
                  "external_urls" : {
                  "spotify" : "https://open.spotify.com/artist/4A2XSc4OJjuPY4l6NjnrDj"
                  },
                  "href" : "https://api.spotify.com/v1/artists/4A2XSc4OJjuPY4l6NjnrDj",
                  "id" : "4A2XSc4OJjuPY4l6NjnrDj",
                  "name" : "Ram Miriyala",
                  "type" : "artist",
                  "uri" : "spotify:artist:4A2XSc4OJjuPY4l6NjnrDj"
              } ],
              "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZM", "ZW" ],
              "disc_number" : 1,
              "duration_ms" : 226083,
              "explicit" : false,
              "external_ids" : {
                  "isrc" : "INM5B2107760"
              },
              "external_urls" : {
                  "spotify" : "https://open.spotify.com/track/6qNCPMFrXaeVQuA3QFZ4F1"
              },
              "href" : "https://api.spotify.com/v1/tracks/6qNCPMFrXaeVQuA3QFZ4F1",
              "id" : "6qNCPMFrXaeVQuA3QFZ4F1",
              "is_local" : false,
              "name" : "Puttene Prema",
              "popularity" : 47,
              "preview_url" : "https://p.scdn.co/mp3-preview/8857fab350b39595c912e6913d2f0f1c8826a4d1?cid=f25d283eae8046588034aee0a42c0f31",
              "track_number" : 1,
              "type" : "track",
              "uri" : "spotify:track:6qNCPMFrXaeVQuA3QFZ4F1"
              }
          },
          ....
      ],
      "limit" : 20,
      "next" : "https://api.spotify.com/v1/browse/categories?offset=20&limit=20",
      "offset" : 0,
      "previous" : null,
      "total" : 58
  }
  ```

- Playlists Route :

  - **Note:**

    - Get User Name from Get UserInfo API
    - In this API you will get your playlists as response, you should add a few playlists in your account to see the list of playlists, you can access the list of playlists from the response using the key `items`.

    ```js
    'https://api.spotify.com/v1/users/${username}/playlists?limit=50'

    ```

    - Sample response object:

    ```json
    {
        "href" : "https://api.spotify.com/v1/users/tel1grq8ely359wesuv83nezp/playlists?offset=0&limit=50",
        "items" : [
            {
                "collaborative" : false,
                "description" : "",
                "external_urls" : {
                "spotify" : "https://open.spotify.com/playlist/12zGJe6oEH6ow3ZPPlZjHW"
                },
                "href" : "https://api.spotify.com/v1/playlists/12zGJe6oEH6ow3ZPPlZjHW",
                "id" : "12zGJe6oEH6ow3ZPPlZjHW",
                "images" : [ ],
                "name" : "My Playlist #2",
                "owner" : {
                "display_name" : "Bobby",
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/user/tel1grq8ely359wesuv83nezp"
                },
                "href" : "https://api.spotify.com/v1/users/tel1grq8ely359wesuv83nezp",
                "id" : "tel1grq8ely359wesuv83nezp",
                "type" : "user",
                "uri" : "spotify:user:tel1grq8ely359wesuv83nezp"
                },
                "primary_color" : null,
                "public" : false,
                "snapshot_id" : "MSw4YWFiNWI5NTYyZTEwN2FmMDY5MTBhNDJlYzZmMjAyMjQ2OTcxOWFm",
                "tracks" : {
                "href" : "https://api.spotify.com/v1/playlists/12zGJe6oEH6ow3ZPPlZjHW/tracks",
                "total" : 0
                },
                "type" : "playlist",
                "uri" : "spotify:playlist:12zGJe6oEH6ow3ZPPlZjHW"
            },
            ....
        ],
        "limit" : 20,
        "next" : "https://api.spotify.com/v1/browse/categories?offset=20&limit=20",
        "offset" : 0,
        "previous" : null,
        "total" : 58
    }
    ```

- Get Search Results :

  - **Note:** The value of the search input should be given in the place of searchInputValue

    ```js
    'https://api.spotify.com/v1/search?type=track,playlist&q=${searchInputValue}&market=from_token'

    ```

    - Sample response object:

    ```json
    {
        "tracks" : {
            "href" : "https://api.spotify.com/v1/search?query=TELUGU&type=track&market=from_token&offset=0&limit=20",
            "items" : [
                {
                    "album" : {
                        "album_type" : "single",
                        "artists" : [ {
                        "external_urls" : {
                            "spotify" : "https://open.spotify.com/artist/2FgHPfRprDaylrSRVf1UlN"
                        },
                        "href" : "https://api.spotify.com/v1/artists/2FgHPfRprDaylrSRVf1UlN",
                        "id" : "2FgHPfRprDaylrSRVf1UlN",
                        "name" : "Thaman S",
                        "type" : "artist",
                        "uri" : "spotify:artist:2FgHPfRprDaylrSRVf1UlN"
                        } ],
                        "external_urls" : {
                        "spotify" : "https://open.spotify.com/album/2dnfny8QAiGbUk9NI2P9c2"
                        },
                        "href" : "https://api.spotify.com/v1/albums/2dnfny8QAiGbUk9NI2P9c2",
                        "id" : "2dnfny8QAiGbUk9NI2P9c2",
                        "images" : [ {
                        "height" : 640,
                        "url" : "https://i.scdn.co/image/ab67616d0000b27363118748c712b6ac32c0feec",
                        "width" : 640
                        }, {
                        "height" : 300,
                        "url" : "https://i.scdn.co/image/ab67616d00001e0263118748c712b6ac32c0feec",
                        "width" : 300
                        }, {
                        "height" : 64,
                        "url" : "https://i.scdn.co/image/ab67616d0000485163118748c712b6ac32c0feec",
                        "width" : 64
                        } ],
                        "name" : "Ala Vaikunthapurramuloo",
                        "release_date" : "2019-12-24",
                        "release_date_precision" : "day",
                        "total_tracks" : 1,
                        "type" : "album",
                        "uri" : "spotify:album:2dnfny8QAiGbUk9NI2P9c2"
                    },
                    "artists" : [ {
                        "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/4IKVDbCSBTxBeAsMKjAuTs"
                        },
                        "href" : "https://api.spotify.com/v1/artists/4IKVDbCSBTxBeAsMKjAuTs",
                        "id" : "4IKVDbCSBTxBeAsMKjAuTs",
                        "name" : "Armaan Malik",
                        "type" : "artist",
                        "uri" : "spotify:artist:4IKVDbCSBTxBeAsMKjAuTs"
                    }, {
                        "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/2FgHPfRprDaylrSRVf1UlN"
                        },
                        "href" : "https://api.spotify.com/v1/artists/2FgHPfRprDaylrSRVf1UlN",
                        "id" : "2FgHPfRprDaylrSRVf1UlN",
                        "name" : "Thaman S",
                        "type" : "artist",
                        "uri" : "spotify:artist:2FgHPfRprDaylrSRVf1UlN"
                    } ],
                    "disc_number" : 1,
                    "duration_ms" : 198782,
                    "explicit" : false,
                    "external_ids" : {
                        "isrc" : "INA091916753"
                    },
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/track/0dnDTvdUco2UbaBjUtPxNS"
                    },
                    "href" : "https://api.spotify.com/v1/tracks/0dnDTvdUco2UbaBjUtPxNS",
                    "id" : "0dnDTvdUco2UbaBjUtPxNS",
                    "is_local" : false,
                    "is_playable" : true,
                    "name" : "Buttabomma - Telugu",
                    "popularity" : 63,
                    "preview_url" : "https://p.scdn.co/mp3-preview/92f167ab9ce9c48e104b90715a7f175d6bba5fb3?cid=f25d283eae8046588034aee0a42c0f31",
                    "track_number" : 1,
                    "type" : "track",
                    "uri" : "spotify:track:0dnDTvdUco2UbaBjUtPxNS"
                },
                ....
            ],
            "limit" : 20,
            "next" : "https://api.spotify.com/v1/search?query=TELUGU&type=track&market=from_token&offset=20&limit=20",
            "offset" : 0,
            "previous" : null,
            "total" : 3947
        },
        "playlists" : {
            "href" : "https://api.spotify.com/v1/search?query=TELUGU&type=playlist&market=from_token&offset=0&limit=20",
            "items" : [
                {
                    "collaborative" : false,
                    "description": "The best love track from Tolly World!",
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/playlist/37i9dQZF1DX44F1QWqYoaV"
                    },
                    "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1DX44F1QWqYoaV",
                    "id" : "37i9dQZF1DX44F1QWqYoaV",
                    "images" : [ {
                        "height" : null,
                        "url" : "https://i.scdn.co/image/ab67706f00000003b8254e36f9df0ed6e8aba38f",
                        "width" : null
                    } ],
                    "name" : "Telugu Romance",
                    "owner" : {
                        "display_name" : "Spotify",
                        "external_urls" : {
                        "spotify" : "https://open.spotify.com/user/spotify"
                        },
                        "href" : "https://api.spotify.com/v1/users/spotify",
                        "id" : "spotify",
                        "type" : "user",
                        "uri" : "spotify:user:spotify"
                    },
                    "primary_color" : null,
                    "public" : null,
                    "snapshot_id" : "MTYyNTI5NzIxMiwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
                    "tracks" : {
                        "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1DX44F1QWqYoaV/tracks",
                        "total" : 60
                    },
                    "type" : "playlist",
                    "uri" : "spotify:playlist:37i9dQZF1DX44F1QWqYoaV"
                },
                ....
            ]
            "limit" : 20,
            "next" : "https://api.spotify.com/v1/search?query=TELUGU&type=playlist&market=from_token&offset=20&limit=20",
            "offset" : 0,
            "previous" : null,
            "total" : 23766
        }
    }
    ```

</details>

### Stretch Goals

If you complete the main features of the project you can try out the below features as well.

**Note:** Just a reminder the additional functionality is just extra practice using the tools we have learned. These are not required. If you do not reach the stretch goals, don't worry.

<details>
<summary>Additional Functionality to be added</summary>

- Users should be able to view and use the website responsively on a mobile, tablet, desktop devices.
- Search Route
  - Users should be able to search for playlists and tracks.
  - When the user provides the playlist name which is not in the database then the No results view should be displayed.
  - When the users click a playlist, it should open a new page with a respective list of songs in that playlist.

</details>

### Project Submission Instructions

- For Mini Projects, you no need to submit the code using `ccbp submit RJSCP2G83E`, Though you submit the test cases may or may not succeed and you can ignore the result, Test cases will be added soon.

- For Mini Projects, you need to only publish/deploy the code using `ccbp publish RJSCP2G83E domain_name.ccbp.tech`. So that our team will be able to see that code and deployed URL( Ex: something.ccbp.tech) and will share feedback to you if required.

> ### _Things to Keep in Mind_
>
> - All components you implement should go in the `src/components` directory.
> - **Do not remove the pre-filled code**
> - Want to quickly review some of the concepts you’ve been learning? Take a look at the Cheat Sheets.
