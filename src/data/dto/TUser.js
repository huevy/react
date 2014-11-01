/*

    "id": 379675544,
    "id_str": "379675544",
    "name": "Хуёвый Баку",
    "screen_name": "anar1257",
    "location": "Баку",
    "description": "Лига Хуёвых Городов",
    "url": null,
    "entities": {
      "description": {
        "urls": []
      }
    },
    "protected": false,
    "followers_count": 739,
    "friends_count": 1341,
    "listed_count": 14,
    "created_at": "Sun Sep 25 11:02:29 +0000 2011",
    "favourites_count": 39,
    "utc_offset": null,
    "time_zone": null,
    "geo_enabled": true,
    "verified": false,
    "statuses_count": 1597,
    "lang": "ru",
    "status": {
      "created_at": "Thu Aug 14 11:40:52 +0000 2014",
      "id": 499883351243628540,
      "id_str": "499883351243628545",
      "text": "Майдан по азербайджански Meydan =площадь интересно правда как мы похожи хотя бы по языку",
      "source": "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>",
      "truncated": false,
      "in_reply_to_status_id": null,
      "in_reply_to_status_id_str": null,
      "in_reply_to_user_id": null,
      "in_reply_to_user_id_str": null,
      "in_reply_to_screen_name": null,
      "geo": {
        "type": "Point",
        "coordinates": [
          40.3745904,
          49.841841
        ]
      },
      "coordinates": {
        "type": "Point",
        "coordinates": [
          49.841841,
          40.3745904
        ]
      },
      "place": {
        "id": "efc23cd34689b068",
        "url": "https://api.twitter.com/1.1/geo/id/efc23cd34689b068.json",
        "place_type": "country",
        "name": "Azerbaijan",
        "full_name": "Azerbaijan",
        "country_code": "AZ",
        "country": "Azerbaijan",
        "contained_within": [],
        "bounding_box": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                44.7745585530002,
                38.392644755
              ],
              [
                50.6257430350002,
                38.392644755
              ],
              [
                50.6257430350002,
                41.8904415900001
              ],
              [
                44.7745585530002,
                41.8904415900001
              ]
            ]
          ]
        },
        "attributes": {}
      },
      "contributors": null,
      "retweet_count": 4,
      "favorite_count": 2,
      "entities": {
        "hashtags": [],
        "symbols": [],
        "urls": [],
        "user_mentions": []
      },
      "favorited": false,
      "retweeted": false,
      "lang": "ru"
    },
    "contributors_enabled": false,
    "is_translator": false,
    "is_translation_enabled": false,
    "profile_background_color": "C0DEED",
    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
    "profile_background_tile": false,
    "profile_image_url": "http://pbs.twimg.com/profile_images/491297150442020865/s4_Hq8B6_normal.jpeg",
    "profile_image_url_https": "https://pbs.twimg.com/profile_images/491297150442020865/s4_Hq8B6_normal.jpeg",
    "profile_banner_url": "https://pbs.twimg.com/profile_banners/379675544/1401172611",
    "profile_link_color": "00B321",
    "profile_sidebar_border_color": "C0DEED",
    "profile_sidebar_fill_color": "DDEEF6",
    "profile_text_color": "333333",
    "profile_use_background_image": true,
    "default_profile": false,
    "default_profile_image": false,
    "following": true,
    "follow_request_sent": false,
    "notifications": false,
    "muting": false

*/
var t = require('tcomb');

var TUser = t.struct({
  id_str: t.Str,
  name: t.maybe(t.Str),
  screen_name: t.Str,
  description: t.maybe(t.Str),
  url: t.maybe(t.Str),
  profile_image_url_https: t.Str,
  followers_count: t.Num,
  friends_count: t.Num,
  listed_count: t.Num,
  statuses_count: t.Num,
});

module.exports = TUser;