# Techalchamy

## Create New User

> Creating new user with taking email, usename and password

```json
{
  "user_id": "61c782afa0e0fbabc1e3ac6f",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFjNzgyYWZhMGUwZmJhYmMxZTNhYzZmIn0sImlhdCI6MTY0MDQ2NTA3MiwiZXhwIjoxNjQwNDg1MDcyfQ.7ds8enq9mIajSFjrOIpimjiHe4zY-se1P2jcz7s--YM",
  "message": "Bingo ! you have sucessfully resisterd to - Samachhar App"
}
```

Authentication Required : No

This endpoint will create a new user

### HTTP Request

`POST /user/signup`

### Body Parameter

| Parameter    | Type   | Required | Description          |
| ------------ | ------ | -------- | -------------------- |
| user_name    | string | Yes      | user name            |
| email        | string | Yes      | email_id of a user   |
| password     | string | Yes      | new password         |
| cnf_password | string | Yes      | confirm new password |

## Signin

> To Login into the app -

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFjNzgyYWZhMGUwZmJhYmMxZTNhYzZmIn0sImlhdCI6MTY0MDQ2NTQ1MywiZXhwIjoxNjQwNDc1NDUzfQ.CLgep2UVOzwIWzRaC3tmWHu2nm7MWR5tFpy-811UBEk",
  "message": "copy the above token and add to the header while geting your profile"
}
```

Authentication Required : Yes

This endpoint retrieves all meetings (both when user is attendee as well as organiser).

### HTTP Request

`POST /user/login`

### Body Parameters

| Parameter | Type   | Required | Description        |
| --------- | ------ | -------- | ------------------ |
| email     | string | Yes      | email_id of a user |
| password  | string | Yes      | new password       |

## Get news with country as parameter

> news with country filter

```json
{
  "message": "success",
  "final_res": {
    "count": 20,
    "data": [
      {
        "headline": "India’s Omicron tally climbs to 439, Rajasthan logs biggest surge in cases - Hindustan Times",
        "link": "https://www.hindustantimes.com/india-news/indias-omicron-tally-climbs-to-439-rajasthan-logs-biggest-surge-in-cases-101640452646748.html",
        "content": "Indias Omicron tally grew to at least 439 by Saturday evening, with 21 new cases reported from Rajasthan, 2 from Maharashtra and 1 from Kerala, according to the states respective health departments. … [+1761 chars]"
      },
      {
        "headline": "Microsoft in 2021: year in review - Techradar",
        "link": "https://www.techradar.com/news/microsoft-in-2021-year-in-review",
        "content": "In the year in which Microsoft brought Clippy back to Windows – if only as a replacement for the paperclip emoji – Microsoft’s big play was the release of Windows 11.\r\nIn this article, we’re going to… [+16842 chars]"
      },
      {
        "headline": "US sanctions: China replaces Xinjiang party chief amid forced labour allegations - Hindustan Times",
        "link": "https://www.hindustantimes.com/world-news/us-sanctions-china-replaces-xinjiang-party-chief-amid-forced-labour-allegations-101640450068383.html",
        "content": "The ruling Communist party has replaced its chief in the volatile northwest region of Xinjiang Chen Quanguo who was last year sanctioned by the US for alleged human rights abuses against the minority… [+2207 chars]"
      },
      {
        "headline": "PM Modi's Speech Highlights: Vaccine For Children, Boosters For Frontline Workers - NDTV",
        "link": "https://www.ndtv.com/india-news/pm-modi-to-address-nation-soon-2671517",
        "content": "\"Covid isn't past us yet. Being careful is very important,\" PM Modi said.\r\nNew Delhi: India will start vaccinating children between the ages of 15 to 18 from January 3 next year, Prime Minister Naren… [+1667 chars]"
      },
      {
        "headline": "DCGI nod to Covaxin for use in children above 12 years with certain conditions - Times of India",
        "link": "https://timesofindia.indiatimes.com/india/dcgi-nod-to-covaxin-for-use-in-children-above-12-years-with-certain-conditions/articleshow/88495295.cms",
        "content": null
      },
      {
        "headline": "World's Most Powerful Space Telescope Sets Off On A Million-Mile Voyage - NDTV",
        "link": "https://www.ndtv.com/world-news/james-webb-space-telescope-worlds-most-powerful-telescope-blasts-off-into-space-2671201",
        "content": "The telescope is headed to an outpost 1.5 million kilometres from Earth.\r\nKourou, France: The world's most powerful space telescope on Saturday blasted off into orbit, headed to an outpost 1.5 millio… [+3221 chars]"
      },
      {
        "headline": "Vicky Kaushal shares the tightest hug with ‘Meri Christmas’ Katrina Kaif in latest photo. See here - The Indian Express",
        "link": "https://indianexpress.com/article/entertainment/bollywood/vicky-kaushal-shares-the-tightest-hug-with-meri-christmas-katrina-kaif-in-latest-photo-7690416/",
        "content": "Newlyweds Vicky Kaushal and Katrina Kaif celebrated Christmas together on Saturday. On the special day, Vicky treated his fans to a new photo, which has left his fans in awe. The newlyweds are seen s… [+1792 chars]"
      },
      {
        "headline": "India Tour of South Africa: Zaheer Khan Passes on Valuable Advice to Underperforming Ajinkya Rahane Ahead of Test Series | IND vs SA 1st Test - India.com",
        "link": "https://www.india.com/sports/india-tour-of-south-africa-zaheer-khan-passes-on-valuable-advice-to-underperforming-ajinkya-rahane-ahead-of-test-series-5155435/",
        "content": "New Delhi: Ajinkya Rahane’s performances in the longest format of the game has been worrisome as India’s one of top premier batsman in red-ball cricket averages only 24 in the last 16 Tests. He led t… [+1717 chars]"
      },
      {
        "headline": "RBL Bank board approves MD & CEO Vishwavir Ahuja's request to proceed on leave with immediate effect - Moneycontrol",
        "link": "https://www.moneycontrol.com/news/business/rbl-bank-board-approves-md-ceo-vishwavir-ahujas-request-to-proceed-on-leave-with-immediate-effect-7866681.html",
        "content": "The board of private lender RBL Bank on December 25 approved the request of bank's managing director and chief executive officer Vishwavir Ahuja to \"proceed on leave with immediate effect\".\r\nThe boar… [+1878 chars]"
      },
      {
        "headline": "iPhone SE 3 5G Launch To Happen Sooner Than Expected: To Be Called iPhone SE 2022? - Trak.in",
        "link": "https://trak.in/tags/business/2021/12/25/iphone-se-3-5g-launch-to-happen-sooner-than-expected-to-be-called-iphone-se-2022/",
        "content": "iPhone SE 3 trial production will start soon, and will launch in the first quarter of 2022. The upcoming iPhone SE 3 / iPhone SE 2022 will enter the trial production phase soon. An earlier DigiTimes … [+1394 chars]"
      },
      {
        "headline": "Corona LIVE: Kerala reports one more Omicron case taking the state’s tally to 38 - The Financial Express",
        "link": "https://news.google.com/__i/rss/rd/articles/CBMi0gFodHRwczovL3d3dy5maW5hbmNpYWxleHByZXNzLmNvbS9saWZlc3R5bGUvaGVhbHRoL29taWNyb24tbGl2ZS11cGRhdGVzLWNvcm9uYXZpcnVzLWluZGlhLWxpdmUtdXBkYXRlcy1vbWljcm9uLWNhc2VzLXRvZGF5LW9taWNyb24tbG9ja2Rvd24tb21pY3Jvbi1uaWdodC1jdXJmZXctY292aWQtbmV3LXJ1bGVzLXRvZGF5LWNvdmlkMTktY2FzZXMtdG9kYXkvMjM4ODYwNS_SAQA?oc=5",
        "content": null
      },
      {
        "headline": "22 farm unions float a political front in Punjab, to contest all seats - The Indian Express",
        "link": "https://indianexpress.com/article/cities/chandigarh/farm-unions-samyukta-samaj-morcha-political-front-punjab-elections-7689993/",
        "content": "As many as 22 farmer organisations who were a part of the Samyukt Kisan Morcha (SKM) that spearheaded the year-long farmers’ agitation floated their own political outfit Saturday and announced that t… [+3694 chars]"
      },
      {
        "headline": "U19 Asia Cup: India Lose To Arch-Rivals Pakistan In Last-Ball Thriller - NDTVSports.com",
        "link": "https://sports.ndtv.com/cricket/u19-asia-cup-india-lose-to-arch-rivals-pakistan-in-last-ball-thriller-2671274",
        "content": "Muhammad Shehzad played an 81-run knock as Pakistan defeated India by two wickets in a nail-biter at the ICC Academy Ground Number 2 in Dubai in the ongoing ACC U19 Asia Cup 2021 on Saturday. India w… [+1249 chars]"
      },
      {
        "headline": "Internal conversation about captaincy is not for media: Rahul Dravid | Cricket News - Times of India",
        "link": "https://timesofindia.indiatimes.com/sports/cricket/india-in-south-africa/internal-conversation-about-captaincy-is-not-for-media-rahul-dravid/articleshow/88493479.cms",
        "content": "India vs South Africa: Dravid urges India to seize their moment in historyIndia coach Rahul Dravid has urged his players to seize the chance to claim a first ever Test series win in South Africa, a m… [+173 chars]"
      },
      {
        "headline": "Ranbir Kapoor and Alia Bhatt skip Kapoor family's annual Christmas brunch - Times of India",
        "link": "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/ranbir-kapoor-and-alia-bhatt-skip-kapoor-familys-annual-christmas-brunch/articleshow/88493084.cms",
        "content": null
      },
      {
        "headline": "Manish Tiwari attacks Harish Rawat on 'his master's voice' dig, recaps 2012 - Hindustan Times",
        "link": "https://www.hindustantimes.com/india-news/manish-tiwari-attacks-harish-rawat-on-his-master-s-voice-dig-recaps-2012-101640434300056.html",
        "content": "When Uttarakhand Congress leader Harish Rawat tweeted about 'tied hands' indicating helplessness in the party ahead of the election in 2022, senior Congress leader Manish Tewari took a dig at Rawat r… [+2015 chars]"
      },
      {
        "headline": "Need to ensure that country's unity remains unharmed: PM Modi - India TV News",
        "link": "https://www.indiatvnews.com/news/india/need-to-ensure-that-country-s-unity-remains-unharmed-pm-modi-751176",
        "content": "<ul><li> PM said that the dangers against which the Gurus alerted the people continue to exist even today </li><li>PM's appeal comes two days after a blast took place in Punjab's Ludhiana district co… [+4242 chars]"
      },
      {
        "headline": "Oppo Reno 7 5G New Year Edition in Red Colour Launched: Price, Specifications - Gadgets 360",
        "link": "https://gadgets.ndtv.com/mobiles/news/oppo-reno-7-5g-new-year-edition-price-cny-2699-launch-sale-date-december-25-specifications-red-velvet-colour-2671150",
        "content": "Oppo Reno 7 5G has received a special version that the Chinese tech giant has dubbed as Oppo Reno 7 5G New Year Edition. The special edition model brings a new colour to the smartphone and has a spec… [+1761 chars]"
      },
      {
        "headline": "NCLAT stays CCI order imposing Rs 873 crore penalty on UBL, other beer makers - Moneycontrol",
        "link": "https://www.moneycontrol.com/news/business/nclat-stays-cci-order-imposing-rs-873-crore-penalty-on-ubl-other-beer-makers-7866011.html",
        "content": "The National Company Law Appellate Tribunal (NCLAT) has imposed a stay on the orders passed by the fair-trade regulator CCI slapping penalties on several beer makers, including United Breweries Ltd t… [+2704 chars]"
      },
      {
        "headline": "Jio Rs. 2,545 Prepaid Recharge Plan Gets 29 Days of Extra Validity in Happy New Year Offer - Gadgets 360",
        "link": "https://gadgets.ndtv.com/telecom/news/jio-rs-2545-prepaid-recharge-plan-new-year-offer-365-days-validity-1-5gb-high-speed-data-100-sms-messages-benefits-2671105",
        "content": "Jio's Rs. 2,545 prepaid recharge plan has got a new, limited-period Happy New Year offer. The yearly prepaid plan from Jio that typically comes with a validity of 336 days is now getting 29 days of e… [+1476 chars]"
      }
    ]
  }
}
```

Authentication Required : Yes

This endpoint retrieves hedlines, link and content as per the country

### HTTP Request

`GET /news?country={country_code}`

### Query Parameters

| Parameter | Default | Description                   |
| --------- | ------- | ----------------------------- |
| country   | in      | country codes as per the docs |

## Get news by searching string as parameter

> A user can search the news with searching string as filter

```json
{
  "message": "success",
  "final_res": {
    "count": 5,
    "data": [
      {
        "headline": "Delhi's New Covid Cases Jump 38% In One Day, Highest In Over 6 Months - NDTV",
        "link": "https://www.ndtv.com/india-news/delhis-new-covid-cases-jump-38-in-one-day-highest-in-over-6-months-2671239",
        "content": "Delhi has reported 67 Omicron cases. (File)\r\nNew Delhi: Delhi on Saturday reported 249 new coronavirus cases - a 38 per cent jump over the previous day and the highest in over six months amid growing… [+1426 chars]"
      },
      {
        "headline": "Covaxin gets DCGI nod for emergency use for kids aged 12-18 years - Times of India",
        "link": "https://timesofindia.indiatimes.com/india/covaxin-gets-dcgi-nod-for-emergency-use-in-kids-aged-12-18-years/articleshow/88496147.cms",
        "content": null
      },
      {
        "headline": "Here's Why PM Modi Termed Third Shot 'Precaution Dose' and Not Booster in Covid Address to Nation - News18",
        "link": "https://www.news18.com/news/india/heres-why-pm-modi-termed-third-shot-precaution-dose-and-not-booster-in-covid-address-to-nation-4593014.html",
        "content": "Prime Minister Narendra Modis announcements for a precautionary dose for healthcare and frontline workers as well as co-morbid seniors and vaccination for adolescents between 15-18 years of age will … [+1418 chars]"
      },
      {
        "headline": "Omicron can evade protection offered by Covid vaccines: Study - EastMojo",
        "link": "https://www.eastmojo.com/coronavirus-updates/2021/12/25/omicron-can-evade-protection-offered-by-covid-vaccines-study/",
        "content": "Washington: Omicron can evade the immune protection conferred by COVID-19 vaccines and natural infection, according to a peer-reviewed study which also suggests that the new variant of coronavirus is… [+3568 chars]"
      },
      {
        "headline": "COVID-19 vaccine booster protection against Omicron fades within 10 weeks, says new study - Republic World",
        "link": "https://www.republicworld.com/technology-news/science/covid-19-vaccine-booster-protection-against-omicron-fades-within-10-weeks-says-new-study.html",
        "content": "In a more concerning development, the efficacy of the mRNA Pfizers booster shot against symptomatic COVID-19 infection from the Omicron variant waned in just 10 weeks after the third shot, a new stud… [+5561 chars]"
      }
    ]
  }
}
```

Authentication Required : Yes

This endpoint retrieves news with searching string as filter

### HTTP Request

`GET /news?search={search_string}`

### Query Parameters

| Parameter | Default | Description                    |
| --------- | ------- | ------------------------------ |
| search    | none    | to group by week month or year |

## Get response as per choice of language, page size and page limit

> Getting news as per language chosen

```json
{
  "message": "success",
  "final_res": {
    "count": 1,
    "data": [
      {
        "headline": "Here's Why PM Modi Termed Third Shot 'Precaution Dose' and Not Booster in Covid Address to Nation - News18",
        "link": "https://www.news18.com/news/india/heres-why-pm-modi-termed-third-shot-precaution-dose-and-not-booster-in-covid-address-to-nation-4593014.html",
        "content": "Prime Minister Narendra Modis announcements for a precautionary dose for healthcare and frontline workers as well as co-morbid seniors and vaccination for adolescents between 15-18 years of age will … [+1418 chars]"
      }
    ]
  }
}
```

Authentication Required : Yes

### HTTP Request

`GET /news?country={country_code}&search={search_string}&language={language-code}&pageSize={pageSize}&page={page}`

### Query Parameters

| Parameter | Type    | Required | Description      |
| --------- | ------- | -------- | ---------------- |
| country   | string  | no       | country code     |
| search    | string  | no       | search string    |
| language  | string  | no       | language code    |
| pageSize  | Integer | no       | pagination limit |
| page      | Integer | no       | no of pages      |

## Get news as per category chosen

> Get news as per you chosen category

```json
{
  "message": "success",
  "final_res": {
    "count": 20,
    "data": [
      {
        "headline": "From Dying Light 2 to Zelda’s Sequel: Top Nintendo Switch Exclusives Fans Cannot Miss In 2022 - EssentiallySports",
        "link": "https://www.essentiallysports.com/esports-news-from-dying-light-2-to-zeldas-sequel-top-nintendo-switch-exclusives-fans-cannot-miss-in-2022/",
        "content": "A big year with lots of fantastic launches is on its way to Nintendo Switch. But when is that not the case? Year after year, Nintendo Switch brings tons of exciting new releases for fans. 2021 was an… [+3127 chars]"
      },
      {
        "headline": "10 Things You Need to Know About Your New iPad - MacRumors",
        "link": "https://www.macrumors.com/guide/10-ipad-tips/",
        "content": "It's just after the December holidays, and many people may have received an iPad as a gift. If that's you and you're new to the ‌iPad‌ or this is your first update in some time, make sure to check ou… [+10807 chars]"
      },
      {
        "headline": "Animal Crossing: New Horizons – Making a Massive Christmas Tree Just Got Easier! - EssentiallySports",
        "link": "https://www.essentiallysports.com/esports-news-animal-crossing-new-horizons-making-a-massive-christmas-tree-just-got-easier/",
        "content": "The festive season is upon us all and Animal Crossing New Horizons has certainly embraced the festive season. These amazing times serve as the perfect opportunity for gamers to awaken their creative … [+1864 chars]"
      },
      {
        "headline": "Apple iPhone 15 Pro to come without a SIM card slot - GSMArena.com news - GSMArena.com",
        "link": "https://www.gsmarena.com/apple_iphone_15_pro_2023_ditch_sim_card_slot-news-52434.php",
        "content": "Apple unveiled the iPhone 13 lineup in September, and the iPhone 14 is still months away from the launch, but rumors around the iPhone 15 have already started doing rounds on the internet, with the l… [+1226 chars]"
      },
      {
        "headline": "Epic Games Store 10th Free Mystery Game Confirmed - GameRant",
        "link": "https://news.google.com/__i/rss/rd/articles/CBMiRGh0dHBzOi8vZ2FtZXJhbnQuY29tL2VwaWMtZ2FtZXMtc3RvcmUtZnJlZS1nYW1lcy1kZWNlbWJlci0yMDIxLXByZXkv0gEA?oc=5",
        "content": null
      },
      {
        "headline": "Apple making same blunders as Nokia? All you need to know - Zee News",
        "link": "https://zeenews.india.com/technology/apple-making-same-blunders-like-nokia-all-you-need-to-know-2422609.html",
        "content": "New Delhi: Apple, established by Steve Jobs, Steve Wozniak, and Ronald Wayne, is the world's second most valuable firm, trailing only Microsoft.\r\nHowever, the tech titan is repeating the mistakes mad… [+4751 chars]"
      },
      {
        "headline": "Nintendo Switch eShop Sees Big Server Issues Christmas Morning - Kotaku",
        "link": "https://kotaku.com/nintendo-eshop-sees-big-issues-christmas-morning-under-1848270547",
        "content": "Across the country, folks everywhere are unwrapping their new Nintendo portable hardware, booting up their accounts, and trying to buy new digital games. But over the last few hours, per social media… [+1801 chars]"
      },
      {
        "headline": "Here are some of the best apps for shooting and editing video on iPhone - 9to5Mac",
        "link": "https://9to5mac.com/2021/12/25/here-are-some-of-the-best-apps-for-shooting-and-editing-video-on-iphone/",
        "content": "iPhone has become the primary camera of many people around the world not only because of its quality, but also because of the great apps available on the App Store. This year we’ve made a list of the… [+4632 chars]"
      },
      {
        "headline": "This Supercomputer Also Can Use Light In Lieu of Electric Current - Interesting Engineering",
        "link": "https://interestingengineering.com/supercomputer-uses-light-instead-of-electric-current",
        "content": "France's Jean Zay supercomputer, one of the most powerful computers in the world and part of the Top500, is now the first HPC to have a photonic coprocessor meaning it transmits and processes informa… [+1766 chars]"
      },
      {
        "headline": "5 best action games of 2021 - Sportskeeda",
        "link": "https://www.sportskeeda.com/esports/5-best-action-games-2021",
        "content": "Game developers showered action game fans with new titles throughout 2021. Blending genres from open-world to rogue-like, action games such as Returnal and Deathloop not only delivered on what was pr… [+3352 chars]"
      },
      {
        "headline": "Galaxy S22 is around the corner, and Samsung’s megapixel war’s delayed to Galaxy S23 - SamMobile",
        "link": "https://www.sammobile.com/news/galaxy-s22-200mp-megapixel-war-delayed-galaxy-s23/",
        "content": "A few months ago, it was rumored that the Galaxy S22 Ultra would feature a 200MP camera. However, those rumors were put to rest a long time ago. The smartphone will feature Samsung’s improved 108MP c… [+1553 chars]"
      },
      {
        "headline": "Apple iPhone 14 Pro Models May Feature Hole-Punch Displays From LG - TelecomTalk",
        "link": "https://telecomtalk.info/apple-iphone-14-pro-models-may-feature/487471/",
        "content": "Its a new year, and its time for a new iPhone! On the one hand, the talks on Apples latest iPhone 13 and iOS updates are still going strong, and on the other, rumour mills are swirling about Apples n… [+2113 chars]"
      },
      {
        "headline": "8 of the best games for your new 2021 PlayStation 5 - The Verge",
        "link": "https://www.theverge.com/22825859/ps5-best-games-playstation-5-sony-2021",
        "content": "If you buy something from a Verge link, Vox Media may earn a commission. See our ethics statement.The PlayStation 5 was released in November 2020, but its still incredibly hard to get. The chip short… [+8240 chars]"
      },
      {
        "headline": "Xiaomi 12 front camera officially revealed: 32MP sensor with GAN based beauty mode - gizmochina",
        "link": "https://news.google.com/__i/rss/rd/articles/CBMieGh0dHBzOi8vd3d3Lmdpem1vY2hpbmEuY29tLzIwMjEvMTIvMjUveGlhb21pLTEyLWZyb250LWNhbWVyYS1vZmZpY2lhbGx5LXJldmVhbGVkLTMybXAtc2Vuc29yLXdpdGgtZ2FuLWJhc2VkLWJlYXV0eS1tb2RlL9IBfmh0dHBzOi8vd3d3Lmdpem1vY2hpbmEuY29tLzIwMjEvMTIvMjUveGlhb21pLTEyLWZyb250LWNhbWVyYS1vZmZpY2lhbGx5LXJldmVhbGVkLTMybXAtc2Vuc29yLXdpdGgtZ2FuLWJhc2VkLWJlYXV0eS1tb2RlLz9hbXA9MQ?oc=5",
        "content": null
      },
      {
        "headline": "Winners and losers: Apple - GSMArena.com news - GSMArena.com",
        "link": "https://www.gsmarena.com/winners_and_losers_apple-news-52105.php",
        "content": "It was a challenging year for all brands, but Apple ends up an absolute winner. Sure, it ended up a victim of the chip shortages as well and is still having trouble putting all of its devices on stor… [+5338 chars]"
      },
      {
        "headline": "First 10 things to do with a new Apple Watch - XDA Developers",
        "link": "https://www.xda-developers.com/first-10-things-to-do-apple-watch/",
        "content": "The Apple Watch is one of the company’s greatest products and a device that dominates the wearables domain. Whether you’re looking for a fitness companion or more than just that, there’s an Apple Wat… [+8997 chars]"
      },
      {
        "headline": "10 of the best games for your new 2021 OLED Switch - The Verge",
        "link": "https://www.theverge.com/22785298/nintendo-switch-best-games-2021",
        "content": "If you buy something from a Verge link, Vox Media may earn a commission. See our ethics statement.The recent release of the Nintendo Switch OLED has many people rediscovering their love for the versa… [+7729 chars]"
      },
      {
        "headline": "Nokia getting ready to launch new affordable LTE device (TA-1404) - Nokiamob",
        "link": "https://nokiamob.net/2021/12/25/nokia-getting-ready-to-launch-new-affordable-lte-device-ta-1404/",
        "content": "Nokia Mobile is pretty quiet regarding new device announcements, but Evleaks revealed that some US specific smartphones are coming. Nokia TA-1404 that just passed the FCC test might be just one of th… [+930 chars]"
      },
      {
        "headline": "iPhone SE 2022 leaks and rumours: All we know about it so far - HT Tech",
        "link": "https://tech.hindustantimes.com/mobile/news/iphone-se-2022-leaks-and-rumours-all-we-know-about-it-so-far-71640434145385.html",
        "content": "The iPhone SE 3 has been long in the rumours and even got analysts talking already! Apple is yet to announce anything officially on this front but tipsters and analysts have spoken a lot about the iP… [+1942 chars]"
      },
      {
        "headline": "Samsung will update these devices to Android 12 - 9to5Google",
        "link": "https://9to5google.com/2021/12/25/samsung-android-12-update-rollout/",
        "content": "Android 12 is still a very new version of the platform, but Samsung is launching the update for its Galaxy devices less than a month after Google’s own Pixel phones. More devices will be updated over… [+7834 chars]"
      }
    ]
  }
}
```

Authentication Required : Yes

### HTTP Request

`GET /news?category=technology`

### Querystring Parameters

| Parameter | Type   | Required | Description                      |
| --------- | ------ | -------- | -------------------------------- |
| category  | string | Yes      | give category as per your choice |

## Get weather by city

> successfull response

```json
{
  "message": "success",
  "final_res": {
    "count": 5,
    "units": "metric",
    "location": "Kolkata,IN",
    "data": [
      {
        "date": "Sun Dec 26 2021 05:30:00 GMT+0530 (India Standard Time)",
        "main": "Clear",
        "temp": 17.93
      },
      {
        "date": "Mon Dec 27 2021 05:30:00 GMT+0530 (India Standard Time)",
        "main": "Clear",
        "temp": 18.78
      },
      {
        "date": "Tue Dec 28 2021 05:30:00 GMT+0530 (India Standard Time)",
        "main": "Clouds",
        "temp": 19.36
      },
      {
        "date": "Wed Dec 29 2021 05:30:00 GMT+0530 (India Standard Time)",
        "main": "Clouds",
        "temp": 19.54
      },
      {
        "date": "Thu Dec 30 2021 05:30:00 GMT+0530 (India Standard Time)",
        "main": "Clouds",
        "temp": 17.67
      }
    ]
  }
}
```

Authentication Required : No

This endpoint will give forecast for next 5 days

### HTTP Request

`GET /weather?q={city}&units={units}`

### Query Parameters

| Parameter | Type   | Description                              |
| --------- | ------ | ---------------------------------------- |
| q         | string | give city of your choice                 |
| units     | string | give unit of yur choice like celcius etc |

## Get Forecast by city_id

> Get the weather forcast by city_id instead of city name

```json
{
  "message": "success",
  "final_res": {
    "count": 5,
    "units": "metric",
    "location": "Kolkata,IN",
    "data": [
      {
        "date": "Sun Dec 26 2021 05:30:00 GMT+0530 (India Standard Time)",
        "main": "Clear",
        "temp": 17.93
      },
      {
        "date": "Mon Dec 27 2021 05:30:00 GMT+0530 (India Standard Time)",
        "main": "Clear",
        "temp": 18.78
      },
      {
        "date": "Tue Dec 28 2021 05:30:00 GMT+0530 (India Standard Time)",
        "main": "Clouds",
        "temp": 19.36
      },
      {
        "date": "Wed Dec 29 2021 05:30:00 GMT+0530 (India Standard Time)",
        "main": "Clouds",
        "temp": 19.54
      },
      {
        "date": "Thu Dec 30 2021 05:30:00 GMT+0530 (India Standard Time)",
        "main": "Clouds",
        "temp": 17.67
      }
    ]
  }
}
```

Authentication Required : No

### HTTP Request

` GET /weather?id={city_id}`

### Query Parameters

| Parameter | Type   | Required | Description                       |
| --------- | ------ | -------- | --------------------------------- |
| id        | number | Yes      | city id like id = 1275004 kolkata |


