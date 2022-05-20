1. SELECT
  channel.channel_id,
  channel.name AS channel_name,
  COUNT() AS no_of_subscribers
FROM
  channel
  INNER JOIN channel_user ON channel.channel_id = channel_user.channel_id
WHERE
  strftime("%Y", subscribed_datetime) = "2018"
GROUP BY
  channel.name
ORDER BY
  no_of_subscribers DESC,
  channel_name ASC
LIMIT
  10;

2. SELECT
  count(DISTINCT user_likes.user_id) AS no_of_users_reached
FROM
  user_likes
  JOIN video ON user_likes.video_id = video.video_id
WHERE
  video.channel_id = 352
  AND (user_likes.reaction_type = "LIKE")

3. SELECT
  channel.channel_id,
  channel.name AS channel_name,
  CASE
    WHEN channel_user.user_id NOT NULL THEN count()
    ELSE 0
  END AS no_of_subscribers
FROM
  channel
  LEFT JOIN channel_user ON channel.channel_id = channel_user.channel_id
GROUP BY
  channel.name
ORDER BY
  no_of_subscribers DESC,
  channel_name ASC;

4. SELECT
  COUNT(video.video_id) AS no_of_videos
FROM
  channel
  JOIN video ON channel.channel_id = video.channel_id
WHERE
  strftime('%Y', video.published_datetime) = '2018'
  AND channel.name = "News for you";

5. SELECT
  cast(strftime("%m", subscribed_datetime) AS int) AS month_in_2018,
  count() AS subscribers_per_month
FROM
  channel
  JOIN channel_user ON channel.channel_id = channel_user.channel_id
WHERE
  channel.name = "Taylor Swift"
  AND cast(strftime("%Y", subscribed_datetime) AS int) = 2018
GROUP BY
  cast(strftime("%m", subscribed_datetime) AS int)

6. SELECT
  channel.name AS channel_name,
  COUNT(video.video_id) AS no_of_videos
FROM
  channel
  LEFT JOIN video ON channel.channel_id = video.channel_id
GROUP BY
  channel.channel_id
ORDER BY
  channel_name ASC

7. SELECT
  video.channel_id,
  channel.name AS channel_name,
  count() AS no_of_videos
FROM
  channel
  INNER JOIN video ON channel.channel_id = video.channel_id
WHERE
  cast(strftime('%Y', published_datetime) AS int) = 2018
GROUP BY
  channel.channel_id
HAVING
  no_of_videos >= 5
ORDER BY
  channel.channel_id ASC;

8. SELECT
  user_likes.user_id AS user_id,
  count(user_likes.video_id) AS no_of_reactions
FROM
  user_likes
  JOIN video ON user_likes.video_id = video.video_id
WHERE
  video.channel_id = 366
  AND (
    user_likes.reaction_type = "LIKE"
    OR user_likes.reaction_type = "DISLIKE"
  )
GROUP BY
  user_likes.user_id
ORDER BY
  no_of_reactions DESC,
  user_id ASC

9. SELECT
  name,
  no_of_views
FROM
  video
WHERE
  no_of_views > (
    SELECT
      AVG(no_of_views)
    FROM
      video
  )
ORDER BY
  name ASC;

10. SELECT
  DISTINCT user_likes.user_id AS user_id
FROM
  (
    video
    INNER JOIN channel ON video.channel_id = channel.channel_id
  ) AS t
  INNER JOIN user_likes ON video.video_id = user_likes.video_id
WHERE
  channel.name = "Android Authority"
  AND user_likes.reaction_type = "LIKE"
  AND user_id NOT IN(
    SELECT
      user_likes.user_id AS user_id
    FROM
      video
      INNER JOIN user_likes ON video.video_id = user_likes.video_id
    WHERE
      video.video_id = 1005
      AND user_likes.reaction_type = "LIKE"
  )
GROUP BY
  user_likes.user_id
ORDER BY
  user_id ASC;

11. SELECT
  video.name AS video_name,
  video.no_of_views AS no_of_views
FROM
  video
  JOIN video_genre ON video.video_id = video_genre.video_id
WHERE
  video_genre.genre_id = 201
GROUP BY
  video.name
INTERSECT
SELECT
  video.name AS video_name,
  video.no_of_views
FROM
  video
  JOIN video_genre ON video.video_id = video_genre.video_id
WHERE
  video_genre.genre_id = 202
GROUP BY
  video.name
ORDER BY
  video.no_of_views DESC
LIMIT
  5;

12. SELECT
  VIDEO.name AS video_name,
  video.no_of_views AS no_of_views
FROM
  VIDEO
  JOIN VIDEO_GENRE ON VIDEO.VIDEO_ID = VIDEO_GENRE.VIDEO_ID
WHERE
  VIDEO_GENRE.GENRE_ID = 207
ORDER BY
  VIDEO.no_of_views DESC,
  video.name ASC
LIMIT
  5

13. SELECT
  CAST(strftime('%H', user_likes.reacted_at) AS INTEGER) AS hour_of_engagement,
  count(user_likes.video_id) AS no_of_likes
FROM
  user_likes
  JOIN video_genre ON user_likes.video_id = video_genre.video_id
WHERE
  video_genre.genre_id = 202
  AND user_likes.reaction_type = "LIKE"
GROUP BY
  strftime('%H', user_likes.reacted_at)
ORDER BY
  no_of_likes DESC
LIMIT
  1;

14. SELECT
  USER_LIKES.user_id AS active_user_id,
  count(USER_LIKES.video_id) AS no_of_likes
FROM
  USER_LIKES
WHERE
  user_likes.reaction_type = "LIKE"
GROUP BY
  user_likes.user_id
HAVING
  count(user_likes.video_id) >= 50
ORDER BY
  user_id ASC

15. SELECT
  user_likes.user_id AS active_user_id,
  count(video.video_id) AS no_of_likes
FROM
  user_likes
  JOIN video ON user_likes.video_id = video.video_id
WHERE
  (video.channel_id = 353)
  AND (user_likes.reaction_type = "LIKE")
GROUP BY
  user_likes.user_id
HAVING
  (count(video.video_id) >= 5)
ORDER BY
  no_of_likes DESC,
  active_user_id ASC

16. SELECT
  user_likes.user_id AS potential_user_id,
  count(user_likes.user_id) AS no_of_likes
FROM
  video
  JOIN user_likes ON video.video_id == user_likes.video_id
WHERE
  video.channel_id = 352
  AND user_likes.reaction_type = "LIKE"
GROUP BY
  user_likes.user_id
HAVING
  no_of_likes >= 2
ORDER BY
  no_of_likes DESC,
  potential_user_id;

17. SELECT
  video_genre.genre_id AS genre_id,
  genre.genre_type AS genre_type,
  count(video_genre.video_id) AS no_of_likes
FROM
  user_likes
  JOIN video_genre ON user_likes.video_id = video_genre.video_id
  JOIN genre ON video_genre.genre_id = genre.genre_id
WHERE
  user_likes.reaction_type = "LIKE"
GROUP BY
  video_genre.genre_id
ORDER BY
  no_of_likes DESC,
  genre_type ASC
LIMIT
  5;

18. SELECT
  video_genre.genre_id AS genre_id,
  count(user_likes.user_id) AS no_of_likes
FROM
  user
  JOIN user_likes ON user.user_id = user_likes.user_id
  JOIN video_genre ON user_likes.video_id = video_genre.video_id
WHERE
  user.country = "INDIA"
  AND strftime('%Y', user_likes.reacted_at) = '2018'
  AND user_likes.reaction_type = "LIKE"
GROUP BY
  video_genre.genre_id
ORDER BY
  no_of_likes DESC,
  genre_id ASC
LIMIT
  3;
