// "City: '台北市' is not accepted but Taipei, NewTaipei, Taoyuan, Taichung, Tainan, Kaohsiung, Keelung, Hsinchu, HsinchuCounty, MiaoliCounty, ChanghuaCounty, NantouCounty, YunlinCounty, ChiayiCounty, Chiayi, PingtungCounty, YilanCounty, HualienCounty, TaitungCounty, KinmenCounty, PenghuCounty, LienchiangCounty"
export const cityMap = new Map([
  ['全部', ''],
  ['台北市', 'Taipei'],
  ['新北市', 'NewTaipei'],
  ['桃園市', 'Taoyuan'],
  ['台中市', 'Taichung'],
  ['台南市', 'Tainan'],
  ['高雄市', 'Kaohsiung'],
  ['基隆市', 'Keelung'],
  ['新竹市', 'Hsinchu'],
  ['新竹縣', 'HsinchuCounty'],
  ['彰化縣', 'ChanghuaCounty'],
  ['南投縣', 'NantouCounty'],
  ['雲林縣', 'YunlinCounty'],
  ['嘉義縣', 'ChiayiCounty'],
  ['嘉義市', 'Chiayi'],
  ['屏東縣', 'PingtungCounty'],
  ['宜蘭縣', 'YilanCounty'],
  ['花蓮縣', 'HualienCounty'],
  ['台東縣', 'TaitungCounty'],
  ['金門縣', 'KinmenCounty'],
  ['澎湖縣', 'PenghuCounty'],
  ['連江縣', 'LienchiangCounty'],
  ['苗栗縣', 'MiaoliCounty']
])

export const cities = [
  {
    name: '台北市',
    term: 'Taipei',
    location: '北台灣',
    imageUrl:
      'https://www.taiwan.net.tw/pic.ashx?qp=1/big_scenic_spots/pic_A12-00139_23.jpg&sizetype=2'
  },
  {
    name: '新北市',
    term: 'NewTaipei',
    location: '北台灣',
    imageUrl:
      'https://www.taiwan.net.tw/pic.ashx?qp=1/big_scenic_spots/pic_290_12.jpg&sizetype=2'
  },
  {
    name: '桃園市',
    term: 'Taoyuan',
    location: '北台灣',
    imageUrl: 'https://cdn2.ettoday.net/images/1905/d1905045.jpg'
  },
  {
    name: '台中市',
    term: 'Taichung',
    location: '中台灣',
    imageUrl:
      'https://taiwan.sharelife.tw/tw-feat-pres-img/52542/da28060220221215.jpg'
  },
  {
    name: '台南市',
    term: 'Tainan',
    location: '南台灣',
    imageUrl:
      'https://res.klook.com/image/upload/v1616041460/blog/vxrofn0kd3bdpndkwyro.jpg'
  },
  {
    name: '高雄市',
    term: 'Kaohsiung',
    location: '南台灣',
    imageUrl:
      'http://www.funtime.com.tw/blog/wp-content/uploads/2020/04/128.jpg'
  },
  {
    name: '基隆市',
    term: 'Keelung',
    location: '北台灣',
    imageUrl:
      'https://handler.travel/wp-content/uploads/2020/01/67917712_359989641584294_8840232482713370624_n.jpg'
  },
  {
    name: '新竹市',
    term: 'Hsinchu',
    location: '北台灣',
    imageUrl:
      'https://i2.wp.com/img.journey.tw/2020-08-23-235653-63.jpg?resize=1600%2C1068&quality=100&ssl=1'
  },
  {
    name: '新竹縣',
    term: 'HsinchuCounty',
    location: '北台灣',
    imageUrl:
      'https://www.taiwan.net.tw/pic.ashx?qp=1/big_scenic_spots/pic__108.jpg&sizetype=2'
  },
  {
    name: '彰化縣',
    term: 'ChanghuaCounty',
    location: '中台灣',
    imageUrl:
      'http://www.funtime.com.tw/blog/wp-content/uploads/2019/01/52416031_121755755568364_9136597651863030929_n.jpg'
  },
  {
    name: '南投縣',
    term: 'NantouCounty',
    location: '中台灣',
    imageUrl: 'https://mimihan.tw/wp-content/uploads/20181227223149_14.jpg'
  },
  {
    name: '雲林縣',
    term: 'YunlinCounty',
    location: '中台灣',
    imageUrl: 'https://cdn2.ettoday.net/images/2309/d2309697.jpg'
  },
  {
    name: '嘉義縣',
    term: 'ChiayiCounty',
    location: '南台灣',
    imageUrl:
      'https://margaret.tw/wp-content/uploads/2021/04/nEO_IMG_DSC08942.jpg'
  },
  {
    name: '嘉義市',
    term: 'Chiayi',
    location: '南台灣',
    imageUrl:
      'https://cdn.walkerland.com.tw/images/upload/poi/p45450/m38092/923a6d12ead075ad81f43256fc2230a3741855d9.jpg'
  },
  {
    name: '屏東縣',
    term: 'PingtungCounty',
    location: '南台灣',
    imageUrl:
      'https://images.zi.org.tw/grace5228blog/2019/04/22004135/1555864894-3b62a8c8eada414ec86eb07f672685f8.jpg'
  },
  {
    name: '宜蘭縣',
    term: 'YilanCounty',
    location: '北台灣',
    imageUrl:
      'https://www.kidsplay.com.tw/assets/uploads/articles_res_des/%E9%84%AD%E5%B0%8F%E6%9F%94/%E8%98%AD%E9%99%BD%E5%8D%9A%E7%89%A9%E9%A4%A8001.jpg'
  },
  {
    name: '花蓮縣',
    term: 'HualienCounty',
    location: '東台灣',
    imageUrl:
      'https://www.taiwan.net.tw/pic.ashx?qp=1/big_scenic_spots/pic_13_6.jpg&sizetype=2'
  },
  {
    name: '台東縣',
    term: 'TaitungCounty',
    location: '東台灣',
    imageUrl:
      'https://www.hotelscombined.com.tw/news/wp-content/uploads/sites/316/2020/03/%E6%B1%A0%E4%B8%8A%E4%BC%AF%E6%9C%97%E5%A4%A7%E9%81%93.jpg'
  },
  {
    name: '金門縣',
    term: 'KinmenCounty',
    location: '外島',
    imageUrl: 'https://kinmen.travel/Content/images/page/top-img-03.jpg'
  },
  {
    name: '澎湖縣',
    term: 'PenghuCounty',
    location: '外島',
    imageUrl:
      'https://i1.wp.com/blog.kkday.com/wp-content/uploads/Taiwan_Penghu_Ashutterstock_1138184963.jpg'
  },
  {
    name: '連江縣',
    term: 'LienchiangCounty',
    location: '外島',
    imageUrl:
      'https://www.taiwan.net.tw/pic.ashx?qp=1/big_scenic_spots/pic_C100_395_18.jpg&sizetype=2'
  },
  {
    name: '苗栗縣',
    term: 'MiaoliCounty',
    location: '中台灣',
    imageUrl: 'http://www.vrwalker.net/public/sceneryfiles/39/186.jpg'
  }
]
