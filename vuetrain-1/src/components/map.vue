<template>
    <div class="container">
      <div class="top-bar">
        <div class="first-block"></div>
        <div class="first-block">
          <div class="secblock"><router-link to="/" style="color: black;align-self: center;">首頁</router-link></div>
          <div class="secblock"><router-link to="/food" style="color:black;align-self:center;">美食</router-link></div>
          <div class="secblock sese"><router-link to="/map" style="color:black;align-self:center;">景點</router-link></div>

        </div>
      </div>
      <div id="main" class="main " :class="{ active: showMain }" v-show="showMain">
        <div class="background box-content">
          <img src="/shikotownmap.png" class="backimg">
        </div>
        <div class="select-wrap">
          <div class="select "  :style="{ opacity: divOpacity }"  @mouseenter="handleMouseEnter('temple.JPG')" @mouseleave="handleMouseLeave" @click="showFirstSc"></div>
          <div class="select2"  :style="{ opacity: divOpacity2 }"  @mouseenter="handleMouseEnter('xi-north.jpg')" @mouseleave="handleMouseLeave" @click="showSecSc"></div>
        </div>
        <div class="preview box-content" >
          <div class="picture" v-show="showImg">
            <img :src="displayImg" >
          </div>
        </div>
      </div>
      <div id="first" class="first-sc background" :class="{ active: showFirst }" v-show="showFirst">
        
        <div @click="showMainDiv" class="back"><p>返回</p></div>
        <div class="intro-wrap">
          <div class="intro">
            <span>柴林腳開元殿 : </span>
            <a :href="generateGoogleMapsLink()" target="_blank">交通資訊</a>
          </div>
          <div class="imform">
            開元殿是供奉民族英雄鄭成功的殿堂。在民國五十九年經眾多善信努力，購得現址，隨後展開了廟宇的建設。
            <br>
            開台尊王廟經歷了多次擴建，包括前殿、中殿、後殿、餐廳等，增添了鄭成功大神像，高達一百七十八尺，內部規劃了鄭成功文物紀念館供遊客免費參觀，展示了鄭成功的生平歷程、為國家犧牲貢獻的文物和歷史文獻，具有重要的歷史價值，成為台灣的觀光旅遊聖地之一。</div>
        </div>
        <div class="land-selec">
          <div class="pre sele-box" >
            <img src="temple_left.JPG"  >
          </div>
          <div class="now sele-box">
            <img src="temple_mid.JPG"  >
          </div>
          <div class="next sele-box" >
            <img src="temple_right.JPG"  >
          </div>
        </div>
      </div>
      <div id="second" class="second-sc background" :class="{ active: showSec }" v-show="showSec" :style="{ backgroundImage: 'url(' + currentimg + ')' }" >
        <div @click="showMainDiv" class="back"><p>返回</p></div>
        <div class="intro-wrap">
          <div class="intro">
            <span>{{ links[index].nonLinkText }}</span>
            <a :href="links[index].url" target="_blank">{{ links[index].text}}</a>
            
          </div>
          <div class="imform"><p>{{ introContents[index] }}</p></div>
        </div>
        <div class="land-selec">
          <div class="pre sele-box"  @click="movePre">
            <img :src="preimg"  >
          </div>
          <div class="now sele-box">
            <img :src="currentimg"  >
          </div>
          <div class="next sele-box" @click="moveNext">
            <img :src="nextimg"  >
            
          </div>
        </div>
      </div>
    </div>
  </template>

<script>
export default {
  data(){
    return{
      showMain: true,
      displayImg:"xi-north.jpg",
      showImg: true,
      showFirst: false,
      showSec: false,
      divOpacity: 0,
      divOpacity2: 0,
      imgs: ["life_mus.JPG", "secret_long.JPG", "take1.jpg", "hakka.png", "DSC_0485.JPG"], 
      introContents: ["這座位於溪口老街周邊的建築，坐落在一連串傳統建築之中。外觀看起來像是一本打開的書，中央有一個中庭廣場，左邊是圖書館，右邊一樓是展覽館，二樓則是自修教室和辦公區。這座建築也是全國第一座將圖書館和展演空間結合的綠建築，並獲得內政部核定的黃金級綠建築標章。",
       "這條通道位於中正路旁的小巷中。當你走進羊腸小徑探索時，會遇見愛溪口、麵線妹、陀螺弟和竹簍哥等擬真人物，陪伴遊客進行一場奇幻的旅程，一同探索溪東村最美麗的134巷。這裡的迷人之處在於融合了多位藝術家的創意，配合著社區的地景，透過說故事的方式，讓遊客沉浸在充滿童年幻想的秘密基地中。",
       "廟口水池與小吃是它的標記，跟隨導航從交流道下來後進入溪口後的第一個大門面。主祀：玄天上帝、合祀 :觀世音菩薩、神農聖帝、關聖帝君、康趙二元帥、土地公、土地婆。", 
       "客家文化館原本是一座衛生所，後來因遷移而空置了很長一段時間。經過重新利用後，才成立了客家文化館，致力於推廣和傳承客家文化。一踏進客家文化館大門，便能感受到溫馨的畫面，好運奶奶抱著一位嬰兒，而這嬰兒所包裹的布，是由客家拼布製成。館內展示了許多懷舊的文物和老照片，值得細細品味。更令人印象深刻的是，管理員會親自表演打陀螺，展現各種技巧，讓我們流連忘返，", 
      "嘉義縣溪口鄉中正路上的「張濟生中藥房」自清朝開業至今已有一百五十年歷史。這座舊式老平房是溪口老街上最早的建築之一，店內至今仍保留著百年歷史的搗藥缽和中藥鍘刀等古老器具。"],
      links:[
        { url: 'https://www.google.com/maps/dir//623%E5%98%89%E7%BE%A9%E7%B8%A3%E6%BA%AA%E5%8F%A3%E9%84%89%E4%B8%AD%E5%B1%B1%E8%B7%AF55%E8%99%9F/@23.6033009,120.3107284,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x346ebc5e48ba6d05:0x7c0ff7a4068ab605!2m2!1d120.3931259!2d23.6033224?entry=ttu', text: '交通資訊', nonLinkText: ' 溪口文化生活館 : ' },
        { url: 'https://www.google.com/maps/place/%E6%84%9B%E6%BA%AA%E5%8F%A3%E7%A7%98%E5%AF%86%E9%80%9A%E9%81%93/@23.6052722,120.3949716,15z/data=!4m6!3m5!1s0x346ebc5ee7bbdf73:0x774c32cfbeb1adb7!8m2!3d23.6052722!4d120.3949716!16s%2Fg%2F11f1ccrjc7?entry=ttu', text: '通道入口', nonLinkText: ' 愛溪口秘密通道 : ' },
        { url: 'https://www.google.com/maps/place/%E6%BA%AA%E5%8F%A3%E5%8C%97%E6%A5%B5%E6%AE%BF/@23.6032738,120.3758213,15z/data=!4m10!1m2!2m1!1z5YyX5qW15q6_!3m6!1s0x346ebc5e132376fb:0xfa78145082ab5773!8m2!3d23.6032843!4d120.394865!15sCgnljJfmpbXmrr-SARBwbGFjZV9vZl93b3JzaGlw4AEA!16s%2Fg%2F1td2rn64?entry=ttu', text: '交通資訊', nonLinkText: ' 溪口北極殿 : ' },
        { url: 'https://www.google.com/maps/dir//623%E5%98%89%E7%BE%A9%E7%B8%A3%E6%BA%AA%E5%8F%A3%E9%84%89%E4%B8%AD%E6%AD%A3%E8%B7%AF129%E8%99%9F/@23.6039933,120.313415,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x346ebc5dfb51755b:0x855b29765cbbc196!2m2!1d120.3958166!2d23.604015?entry=ttu', text: '交通資訊', nonLinkText: ' 溪口客家生活館 : ' },
        { url: 'https://www.google.com/maps/place/%E5%BC%B5%E6%BF%9F%E7%94%9F%E4%B8%AD%E8%97%A5%E5%BA%97/@23.6045515,120.3957351,17z/data=!3m1!4b1!4m6!3m5!1s0x346ebc679d54a04b:0x3d14c8adf66e865f!8m2!3d23.6045466!4d120.39831!16s%2Fg%2F11c1359l37?entry=ttu', text: '交通資訊', nonLinkText: '張濟生中藥店 : ' }
      ],
      currentIndex: 0,
      index: 0,
    }
  },
  computed: {
    currentimg() {
      this.index = (this.currentIndex + this.imgs.length) % this.imgs.length;
      
      return [this.currentimg = this.imgs[this.index]];
    },
    preimg() {
      
      return [
        this.preimg = this.imgs[(this.currentIndex - 1 + this.imgs.length) % this.imgs.length],
        
      ];
    },
    nextimg() {
      
      return [
        
        this.nextimg = this.imgs[(this.currentIndex + 1) % this.imgs.length],
      ];
    },
  },
  
  methods: {
    generateGoogleMapsLink() {
      const url = 'https://www.google.com/maps/dir/';
      const destination = '623嘉義縣溪口鄉柴林村1-2號';
      const coordinates = '@23.6036974,120.292325,12z';
      const queryParams = 'data=!4m8!4m7!1m0!1m5!1m1!1s0x346ebcec2e414d81:0x398f1ae840a1cbd9!2m2!1d120.3747266!2d23.6037191?entry=ttu';

     
      return `${url}${destination}/${coordinates}/${queryParams}`;
    },

    handleScroll(event) {
      event.stopPropagation();
    },
    handleMouseEnter(imagePath) {
      this.displayImg = `${imagePath}`;
      if (imagePath == "temple.JPG"){
        this.divOpacity = 1;
        this.divOpacity2 = 0;
      }else{
        this.divOpacity = 0;
        this.divOpacity2 = 1;
      }
      
    },
    handleMouseLeave() {
      this.displayImg = "xi-north.jpg";
      this.divOpacity = 0; 
      this.divOpacity2 = 0;
      
    },

    showFirstSc() {
      this.showMain = false; 
      this.showFirst = true;
      this.showSec = false;
    },
    showMainDiv() {
      this.showMain = true; 
      this.showFirst = false;
      this.showSec = true;
    },
    showSecSc() {
      this.showMain = false; 
      this.showFirst = false;
      this.showSec = true;
    },

    movePre() {
      if (this.currentIndex === 0) {
        this.currentIndex = this.imgs.length - 1; 
      }else{
        this.currentIndex = this.currentIndex - 1;
      }
    },
    moveNext() {
      this.currentIndex = this.currentIndex + 1;
    },
  
  },

  
};
</script>

<style scoped>

.sese{
  background-color: rgb(15, 15, 45,0.4) ;
}

.text-with-opacity {
  color: rgba(255, 255, 255, 1);
  padding: 1px;
  
}
.intro{
  font-family: '標楷體', 'BiauKai', cursive;
  position: absolute;
  width: 40%;
  height: 30%;
  background-color: rgba(40, 40, 40, 0.8);
  display: flex;
  flex-direction: row;
  margin-top: 8%;
  margin-left: 3%;
  border-top-right-radius:10px ;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  text-size-adjust: 14px;
  
}
.imform{
  font-family: '標楷體', 'BiauKai', cursive;
  position: absolute;
  width: 80%;
  height: 40%;
  background-color: rgba(40, 40, 40, 0.8);
  display: flex;
  flex-direction: row;
  margin-top: 35%;
  margin-left: 10%;
  border-top-right-radius:10px ;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  text-size-adjust: 14px;
}
.sele-box{
  position: absolute;
  width: 20%;
  height: 80%;
  background-color: hwb(260 7% 29%);
  z-index: 2;
  margin-top: 8%;
  margin-left: 3%;
  display: flex;
  overflow:hidden;
  justify-content: center; 
  align-items: center; 
  border: 1px solid #f3aa35;
  
}
.land-selec > .sele-box{
  opacity: 1;
}

.pre > img{
  opacity: 0.6;
  height: 100%;
  width: auto;
  display: block;
  
}
.now > img{
  opacity: 1;
  height: 100%;
  width: auto;
  display: block;
}
.next > img{
  opacity: 0.6;
  height: 100%;
  width: auto;
  display: block;
}
.pre{
  margin-left: 10%;
  width: 18%;
  height: 75%;
  margin-top: 10%;
}
.now{
  margin-left: 40%;
  
}
.next{
  margin-left: 70%;
  width: 18%;
  height: 75%;
  margin-top: 10%;
}
.back{
  position: absolute;
  width: 150px;
  height: 30px;
  background-color: rgba(19, 5, 56, 0.4);
  z-index: 1;
  margin-top: 5%;
  margin-left: 14%;
  text-align: left;
  border-left: 5px solid #ea8c21;
  
}

.intro-wrap{
  position: absolute;
  width: 40%;
  height: 60%;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  margin-top: 15%;
  margin-left: 2%;
  
}
.land-selec{
  position: absolute;
  width: 25%;
  height: 60%;
  background-color: rgba(36, 10, 92, 0.2);
 
  display: flex;
  flex-direction: row;
  margin-top: 8%;
  
  margin-left: 70%;
  border-radius: 15px;
}
.box-content{
    position: absolute;
}
.container {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width:100vw;
    top:0;
    left:0;
    padding: 0%;
    margin: 0%;
  }
  .first-block {
    width: 33%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    
    
  }
  .secblock {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  
  .background{
    width: 100vw;
    height: 100vh;
    position: relative;
    background-position: center center;
    background-size: cover;
    
    top: 0;
    left: 0;
    
  }

  
  
  
 
  .top-bar {
    position: fixed;
    width: 100vw;
    height: 80px;
    background-color: rgb(115,176,208);
    top: 0;
    left: 0;
    font-size: 20px;
    z-index: 1;
    display: flex;
  }
  .backimg{
    width: auto;
    height: 90vh;
    margin-top: 55px;
    align-items: center;
  }
  .preview{
    width:300px;
    height:180px;
    right:40px;
    margin-top: 10%;
    margin-right: 3%;
    z-index: 1;
  }
  .picture{
    
    max-height: 95%;
    max-width: 90%;
    align-items: center;
    display: block;
    overflow:hidden;
  }
  .picture img{
    max-height: 100%;
    max-width: 100%;
    align-items: center;
    display: block;
  }
  .select{
    position: absolute;
    width:75px;
    height:110px;
    background-color: transparent;
    border: 4px solid #ea8c21; 
    margin-top: 19%;
    margin-left: 4%;
  }

  .select2{
    position: absolute;
    width: 100px;
    height: 150px;
    background-color: transparent;
    margin-top: 16%;
    margin-left: 15%;
    border: 4px solid #ea8c21; 
    
  }

 

  .select-wrap{
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 65%;
    height: 100%;
    margin-top: 5%;
    margin-left: 1%;
  }
  .main{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    
  }
  .first-sc{
    content: "";
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-image: url("/temple.JPG");
    background-size: cover;
    top:0;
    left:0;
    
  }
  .second-sc{
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    
    top:0;
    left:0;
    
  }
 

  </style>
  