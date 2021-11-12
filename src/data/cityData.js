// "City: '台北市' is not accepted but Taipei, NewTaipei, Taoyuan, Taichung, Tainan, Kaohsiung, Keelung, Hsinchu, HsinchuCounty, MiaoliCounty, ChanghuaCounty, NantouCounty, YunlinCounty, ChiayiCounty, Chiayi, PingtungCounty, YilanCounty, HualienCounty, TaitungCounty, KinmenCounty, PenghuCounty, LienchiangCounty"
import Taipei from '../assets/images/cities/Taipei.jpg'
import NewTaipei from '../assets/images/cities/NewTaipei.jpg'
import Taoyuan from '../assets/images/cities/Taoyuan.jpg'
import Taichung from '../assets/images/cities/Taichung.jpg'
import Tainan from '../assets/images/cities/Tainan.jpg'
import Kaohsiung from '../assets/images/cities/Kaohsiung.jpg'
import Keelung from '../assets/images/cities/Keelung.jpg'
import Hsinchu from '../assets/images/cities/Hsinchu.jpg'
import HsinchuCounty from '../assets/images/cities/HsinchuCounty.jpg'
import ChanghuaCounty from '../assets/images/cities/ChanghuaCounty.jpg'
import NantouCounty from '../assets/images/cities/NantouCounty.jpg'
import YunlinCounty from '../assets/images/cities/YunlinCounty.jpg'
import ChiayiCounty from '../assets/images/cities/ChiayiCounty.jpg'
import Chiayi from '../assets/images/cities/Chiayi.jpg'
import PingtungCounty from '../assets/images/cities/PingtungCounty.jpg'
import YilanCounty from '../assets/images/cities/YilanCounty.jpg'
import HualienCounty from '../assets/images/cities/HualienCounty.jpg'
import TaitungCounty from '../assets/images/cities/TaitungCounty.jpg'
import KinmenCounty from '../assets/images/cities/KinmenCounty.jpg'
import PenghuCounty from '../assets/images/cities/PenghuCounty.jpg'
import LienchiangCounty from '../assets/images/cities/LienchiangCounty.jpg'
import MiaoliCounty from '../assets/images/cities/MiaoliCounty.jpg'
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
    imageUrl: Taipei
  },
  {
    name: '新北市',
    term: 'NewTaipei',
    location: '北台灣',
    imageUrl: NewTaipei
  },
  {
    name: '桃園市',
    term: 'Taoyuan',
    location: '北台灣',
    imageUrl: Taoyuan
  },
  {
    name: '台中市',
    term: 'Taichung',
    location: '中台灣',
    imageUrl: Taichung
  },
  {
    name: '台南市',
    term: 'Tainan',
    location: '南台灣',
    imageUrl: Tainan
  },
  {
    name: '高雄市',
    term: 'Kaohsiung',
    location: '南台灣',
    imageUrl: Kaohsiung
  },
  {
    name: '基隆市',
    term: 'Keelung',
    location: '北台灣',
    imageUrl: Keelung
  },
  {
    name: '新竹市',
    term: 'Hsinchu',
    location: '北台灣',
    imageUrl: Hsinchu
  },
  {
    name: '新竹縣',
    term: 'HsinchuCounty',
    location: '北台灣',
    imageUrl: HsinchuCounty
  },
  {
    name: '彰化縣',
    term: 'ChanghuaCounty',
    location: '中台灣',
    imageUrl: ChanghuaCounty
  },
  {
    name: '南投縣',
    term: 'NantouCounty',
    location: '中台灣',
    imageUrl: NantouCounty
  },
  {
    name: '雲林縣',
    term: 'YunlinCounty',
    location: '中台灣',
    imageUrl: YunlinCounty
  },
  {
    name: '嘉義縣',
    term: 'ChiayiCounty',
    location: '南台灣',
    imageUrl: ChiayiCounty
  },
  {
    name: '嘉義市',
    term: 'Chiayi',
    location: '南台灣',
    imageUrl: Chiayi
  },
  {
    name: '屏東縣',
    term: 'PingtungCounty',
    location: '南台灣',
    imageUrl: PingtungCounty
  },
  {
    name: '宜蘭縣',
    term: 'YilanCounty',
    location: '北台灣',
    imageUrl: YilanCounty
  },
  {
    name: '花蓮縣',
    term: 'HualienCounty',
    location: '東台灣',
    imageUrl: HualienCounty
  },
  {
    name: '台東縣',
    term: 'TaitungCounty',
    location: '東台灣',
    imageUrl: TaitungCounty
  },
  {
    name: '金門縣',
    term: 'KinmenCounty',
    location: '外島',
    imageUrl: KinmenCounty
  },
  {
    name: '澎湖縣',
    term: 'PenghuCounty',
    location: '外島',
    imageUrl: PenghuCounty
  },
  {
    name: '連江縣',
    term: 'LienchiangCounty',
    location: '外島',
    imageUrl: LienchiangCounty
  },
  {
    name: '苗栗縣',
    term: 'MiaoliCounty',
    location: '中台灣',
    imageUrl: MiaoliCounty
  }
]
