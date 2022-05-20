1. SELECT
  name,
  no_of_views
FROM
  video
GROUP BY
  name,
  no_of_views
ORDER BY
  no_of_views DESC,
  name ASC
LIMIT
  10;

2. SELECT
  video.name AS video_name,
  no_of_views,
  channel.name AS channel_name
FROM
  video
  INNER JOIN channel ON video.channel_id = channel.channel_id
ORDER BY
  no_of_views DESC,
  channel.name ASC
LIMIT
  10;

3. SELECT
  name,
  no_of_views,
  CAST(strftime("%Y", published_datetime) AS integer) AS year
FROM
  video
WHERE
  CAST (strftime ("%Y", published_datetime) AS integer) < 2016
  AND name LIKE "%music%"
ORDER BY
  year DESC,
  name ASC;

4. SELECT
  DISTINCT channel.channel_id,
  channel.name AS channel_name
FROM
  video
  INNER JOIN channel ON channel.channel_id = video.channel_id
WHERE
  CAST (strftime ("%Y", published_datetime) AS integer) < 2016
  AND video.name LIKE "%music%"
ORDER BY
  channel_name ASC;

5. SELECT
  name,
  no_of_views
FROM
  video
WHERE
  video.name LIKE "%review%"
ORDER BY
  no_of_views DESC;

6. SELECT
  DISTINCT channel.channel_id,
  channel.name AS channel_name
FROM
  video
  INNER JOIN channel ON channel.channel_id = video.channel_id
WHERE
  video.name LIKE "%review%"
ORDER BY
  channel_name ASC;

7. SELECT
  video.video_id,
  video.name,
  genre_id
FROM
  video
  INNER JOIN video_genre ON video_genre.video_id = video.video_id
WHERE
  genre_id = 201
  AND no_of_views > 100000
ORDER BY
  video.video_id ASC;

8. SELECT
  user.name,
  user.gender,
  user.age,
  user.country,
  user.premium_membership
FROM
  user
  INNER JOIN user_likes ON user.user_id = user_likes.user_id
WHERE
  user.country LIKE "INDIA"
  AND user_likes.video_id = 1011
  AND user.age < 30
  AND user_likes.reaction_type = "LIKE"
ORDER BY
  user.name ASC;

9. SELECT
  cast(strftime ("%Y", published_datetime) AS int) AS year,
  count() AS no_of_videos
FROM
  video
WHERE
  cast(strftime ("%Y", published_datetime) AS int) BETWEEN 2010
  AND 2016
GROUP BY
  year
ORDER BY
  year ASC;

10. SELECT
  video_genre.genre_id AS genre_id,
  COUNT(video.video_id) AS no_of_videos
FROM
  video
  INNER JOIN video_genre ON video.video_id = video_genre.video_id
WHERE
  (
    CAST(strftime('%Y', published_datetime) AS INTEGER) BETWEEN 2010
    AND 2020
  )
  AND (
    video_genre.genre_id IN (201, 202, 204, 205, 206, 207)
  )
GROUP BY
  video_genre.genre_id
ORDER BY
  no_of_videos DESC,
  genre_id ASC;

11. SELECT
  COUNT() AS no_of_channels
FROM
  channel;

12. SELECT
  count() AS no_of_subscribers
FROM
  channel_user
WHERE
  channel_id = "376"
  AND strftime("%Y", subscribed_datetime) = "2018";

13. SELECT
  count(DISTINCT country) AS country_count
FROM
  user

14. SELECT
  count(DISTINCT user.country) AS country_count
FROM
  user
  INNER JOIN channel_user ON user.user_id = channel_user.user_id
WHERE
  channel_user.channel_id = "399";

15. SELECT
  user.country,
  count(user.user_id) AS no_of_subscribers
FROM
  user
  INNER JOIN channel_user ON user.user_id = channel_user.user_id
WHERE
  channel_user.channel_id = "399"
GROUP BY
  user.country
ORDER BY
  user.country ASC;
