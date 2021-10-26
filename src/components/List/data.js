const listData = [
  {
    curator_image: "https://media.list.ly/production/profiles/18286/picture.jpeg?ver=5183083928",
    id: "1",
    title: "Most Popular Clothing Brands In The World",
    image: "https://media.list.ly/production/3903/headline.jpeg?ver=2239718590",
    follower_count: 655,
    view: '20k',
    ranking: 366
  },
  {
    curator_image: "https://media.list.ly/production/profiles/122496/picture.jpeg?ver=1168299723",
    title: "Scrapping Sweaters: 10 Things you Can Make Out of Old Sweaters",
    image: "https://media.list.ly/production/3903/headline.jpeg?ver=2239718590",
    follower_count: 386,
    ranking: 141,
    view: '10k',
    id: "2"
  },
  {
    curator_image: "https://media.list.ly/production/profiles/9/picture.jpeg?ver=4548853044",
    title: "Best European Cities to Visit",
    image: "https://media.list.ly/production/48/headline.jpeg?ver=5422428139",
    follower_count: 200,
    ranking: 501,
    view: '40k',
    id: "3"
  },
  {
    curator_image: "https://media.list.ly/production/profiles/8091/picture.png?ver=2295096228",
    title: "Teacher tools for creating quizzes or polls",
    image: "https://media.list.ly/production/1309/headline.png?ver=9439070371",
    follower_count: 201,
    ranking: 501,
    view: '10k',
    id: "4"
  },
  {
    curator_image: "https://media.list.ly/production/profiles/42748/picture.jpeg?ver=5691156479",
    title: "Best Grammar Checkers for Proofreaders",
    image: "https://media.list.ly/production/7931/headline?ver=6106281157",
    follower_count: 101,
    ranking: 200,
    view: '50k',
    id: "5"
  },
  {
    curator_image: "https://media.list.ly/production/profiles/50786/picture.jpeg?ver=9521441226",
    title: "The Best Education Apps (iOS)",
    image: "https://media.list.ly/production/10067/561000/3179392552_abf130d685_o_185px.png",
    follower_count: 50,
    ranking: 200,
    view: '22k',
    id: "6"
  },
  {
    curator_image: "https://media.list.ly/production/profiles/50786/picture.jpeg?ver=9521441226",
    title: "The Best Education Apps (iOS)",
    image: "https://media.list.ly/production/10067/561000/3179392552_abf130d685_o_185px.png",
    follower_count: 50,
    ranking: 200,
    view: '23k',
    id: "7"
  },
  {
    curator_image: "https://media.list.ly/production/profiles/431194/picture.jpeg?ver=5427919805",
    title: "Top Digital Marketing Blogs on Present Social Media & Marketing Trends",
    image: "https://media.list.ly/production/496127/listly-top-digital-marketing-blogs-on-present-social-media-marketing-trends-headline.jpeg?ver=6620382808",
    follower_count: 150,
    ranking: 210,
    view: '20k',
    id: "8"
  },
  {
    curator_image: "https://media.list.ly/production/profiles/58259/picture.png?ver=9963698438",
    title: "The Best Keyword Research Tools",
    image: "https://media.list.ly/production/192348/headline.png?ver=9407980563",
    follower_count: 250,
    ranking: 220,
    view: '50k',
    id: "9"
  },
  {
    curator_image: "https://media.list.ly/production/profiles/57674/picture.jpeg?ver=5156827110",
    title: "A Cornucopia of Content Marketing Inspiration",
    image: "https://media.list.ly/production/116972/912403/item912403_185px?ver=5201050511",
    follower_count: 350,
    ranking: 420,
    view: '34k',
    id: "10"
  },
  {
    curator_image: "https://media.list.ly/production/profiles/89995/picture.jpeg?ver=2271027351",
    title: "The Best Resource Websites for Entrepreneurs and Small Businesses",
    image: "https://media.list.ly/production/62166/advice-9041602051.png",
    follower_count: 400,
    ranking: 320,
    view: '44k',
    id: "11"
  },
  {
    curator_image: "https://media.list.ly/production/profiles/437231/picture.png?ver=5885633078",
    title: "Top 200+ Best Startup Books For Entrepreneurs to Read",
    image: "https://media.list.ly/production/516004/listly-top-200-best-startup-books-for-entrepreneurs-to-read-headline.png?ver=8953206996",
    follower_count: 420,
    ranking: 200,
    view: '34k',
    id: "12"
  },
  {
    curator_image: "https://media.list.ly/production/profiles/328588/picture.jpeg?ver=1511391336",
    title: "Top 10 Marketing Tools for 2017",
    image: "https://media.list.ly/production/353950/headline.png?ver=7974268278",
    follower_count: 420,
    ranking: 200,
    view: '43k',
    id: "13"
  },
  {
    curator_image: "https://media.list.ly/production/profiles/162878/picture.jpeg?ver=9404025568",
    title: "Favourite Jazz Tracks For December 2014",
    image: "https://media.list.ly/production/122155/headline.jpeg?ver=6729769395",
    follower_count: 300,
    ranking: 200,
    view: '34k',
    id: "14"
  },
  {
    curator_image: "https://media.list.ly/production/profiles/121986/picture.jpeg?ver=0313884053",
    title: "7 Best Songs for Testing Speakers or Headphones",
    image: "https://media.list.ly/production/67000/headline.jpeg?ver=6001371195",
    follower_count: 300,
    ranking: 200,
    view: '56k',
    id: "15"
  },
  {
    curator_image: "https://media.list.ly/production/profiles/121986/picture.jpeg?ver=0313884053",
    title: "Guilty Pleasure Songs",
    image: "https://media.list.ly/production/79988/headline?ver=3050365697",
    follower_count: 320,
    ranking: 220,
    view: '67k',
    id: "16"
  },
  {
    curator_image: "https://media.list.ly/production/profiles/16008/picture.jpeg?ver=9305130772",
    title: "My Top 33 Digital Marketing Blogs",
    image: "https://media.list.ly/production/100760/headline.jpeg?ver=8405526183",
    follower_count: 330,
    ranking: 230,
    view: '34k',
    id: "17"
  },
  {
    curator_image: "https://media.list.ly/production/profiles/43364/picture.jpeg?ver=5617225275",
    title: "Top 100 interior design blogs",
    image: "https://media.list.ly/production/8107/horatiost33-2743636381.png",
    follower_count: 330,
    ranking: 230,
    view: '45k',
    id: "18"
  },
  {
    curator_image: "https://media.list.ly/production/profiles/12/picture.jpeg?ver=7290728233",
    title: "Tools and services for a lean startup",
    image: "https://media.list.ly/production/572/headline.gif?ver=3251175561",
    follower_count: 430,
    ranking: 430,
    view: '45k',
    id: "19"
  },
  {
    curator_image: "https://media.list.ly/production/profiles/179595/picture.jpeg?ver=5434320664",
    title: "Top 100 interior design blogs",
    image: "https://media.list.ly/production/443620/listly-top-10-popular-domesticated-pets-headline.jpeg?ver=4324298522",
    follower_count: 320,
    ranking: 330,
    view: '56k',
    id: "20"
  },
  {
    curator_image: "https://media.list.ly/production/profiles/179595/picture.jpeg?ver=5434320664",
    title: "Top 10 Cutest Dog Breeds",
    image: "https://media.list.ly/production/268492/headline.jpeg?ver=4333650279",
    follower_count: 330,
    ranking: 250,
    view: '56k',
    id: "21"
  },
  {
    curator_image: "https://listly-media.s3.amazonaws.com/defaults/avatar/j.png",
    title: "The 10 best pet related articles online this week",
    image: "https://media.list.ly/production/536079/listly-the-10-best-pet-related-articles-online-this-week-headline.jpeg?ver=3329560029",
    follower_count: 330,
    ranking: 530,
    view: '56k',
    id: "22"
  },
  {
    curator_image: "https://media.list.ly/production/profiles/449928/picture.png?ver=7354917400",
    title: "Insightful Articles on Buying and Selling Real Estate",
    image: "https://media.list.ly/production/509140/2709145/2709145-keeping-your-house-in-tip-top-condition-to-sell_185px.jpeg?ver=0160985995",
    follower_count: 330,
    ranking: 430,
    view: '56k',
    id: "23"
  },
  {
    curator_image: "https://media.list.ly/production/profiles/110950/picture.jpeg?ver=6214708229",
    title: "Best Tiny House Resources",
    image: "https://media.list.ly/production/429501/2414671/2414671-what-is-a-tiny-house_185px.png?ver=1355994616",
    follower_count: 330,
    ranking: 330,
    view: '67k',
    id: "24"
  },
];

export default listData;