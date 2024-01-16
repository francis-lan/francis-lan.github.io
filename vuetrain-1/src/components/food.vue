<template>
    <div class="container" :key="$route.fullPath">
      <div class="top-bar">
        <div class="first-block"></div>
        <div class="first-block">
          <div class="secblock"><router-link to="/" style="color: black;align-self: center;">首頁</router-link></div>
          <div class="secblock sese" ><router-link to="/food" style="color:black;align-self:center;">美食</router-link></div>
          <div class="secblock"><router-link to="/map" style="color:black;align-self:center;">地圖</router-link></div>
        </div>
      </div>
        <div class="background" :style="{backgroundImage:backgroundImg}" >
          <div class="place-slect">
            <div class="shi-north place" @click="toggleTotalWrap('food-show')" :style="{ opacity: divOpacity }" ></div>
            <div class="temp place" @click="toggleTotalWrap('food2-show')" :style="{ opacity: divOpacity2 }"></div>
          </div>
          <div class="select-wrap">
            <div class="move left"  @click="moveLeft">
            </div>
            <div class="total-wrap" id="food-show" v-show="activeBox === 'food-show'">
              <div class="wrap-1 active "  id="first" ref="targetDiv">
                <div class="total-top">
                <div class="store_wrap">
                  <div class="store-pic">
                  <img src="/niku.jpg">

                  </div>
                </div>
                <div class="store-intro">
                  <span>溪口肉圓 : </span>
                  <a href="https://www.google.com/maps/dir//623%E5%98%89%E7%BE%A9%E7%B8%A3%E6%BA%AA%E5%8F%A3%E9%84%89%E6%96%B0%E7%94%9F%E8%A1%972%E8%99%9F/@23.6030688,120.3125681,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x346ebc5e50dd27fd:0x24839da0faccf4c2!2m2!1d120.3949643!2d23.6030845?entry=ttu" target="_blank">交通資訊</a>
                </div>
              </div>
            
                <div class="conclu"> 這家店傳承數十年的味道讓人難以忘懷。起初只是想試試口味點了一顆肉圓。店內牆上掛著『肉圓配甜麵醬是一絕』的標語，獨特的搭配也是其他地方吃不到的，同時還提供肉圓、蚵仔麵線等選擇，內用更有柴魚高湯可品嚐。最重要的是，冷氣夠強阿 ! </div>
              </div>
              <div class="wrap-1  "  id="sec" ref="targetDiv">
                <div class="total-top">
                <div class="store_wrap">
                  <div class="store-pic">
                  <img src="/chick.jpg">

                  </div>
                </div>
                <div class="store-intro">
                  <span>K靠轟炸雞 : </span>
                  <a href="https://www.google.com/maps/dir//623%E5%98%89%E7%BE%A9%E7%B8%A3%E6%BA%AA%E5%8F%A3%E9%84%89%E6%B0%91%E7%94%9F%E8%A1%9753%E8%99%9F/@23.6038839,120.3159789,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x346ebdae7f43169b:0x52ada07d17066200!2m2!1d120.3983805!2d23.6039056?entry=ttu" target="_blank">交通資訊</a>
                </div>
              </div>
            
            <div class="conclu">
              這間店是溪口少少在下午還有營業的店。K靠是溪口的台語充滿著地方特色，他們的炸物平價好吃，老闆也熱情招待我們這群大學生，雖說只是小小攤位也讓我們印象深刻。
            </div>
              </div>
              <div class="wrap-1  "  id="thir" ref="targetDiv">
                <div class="total-top">
                <div class="store_wrap">
                  <div class="store-pic">
                  <img src="/ice_food.JPG">

                  </div>
                </div>
                <div class="store-intro">
                  <span>溪口冰店 : </span>
                  <a href="https://www.google.com/maps/dir//623%E5%98%89%E7%BE%A9%E7%B8%A3%E6%BA%AA%E5%8F%A3%E9%84%89%E6%B0%91%E7%94%9F%E8%A1%9720%E8%99%9F/@23.604445,120.3168855,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x346ebd59515d12c1:0x4c57df662cf9fda9!2m2!1d120.3992871!2d23.6044667?entry=ttu" target="_blank">交通資訊</a>
                  <br>
                  <span>冰店FB : </span>
                  <a href="https://www.facebook.com/Xikou.icestore/" target="_blank">點我出發</a>
                </div>
              </div>
            
            <div class="conclu"> 他們提供多樣化的冰品選擇，涵蓋蛋綿冰、挫冰、雪花冰、冰沙、豆花、咖啡以及多種飲料。店家每日手工熬煮配料，保持新鮮，提供多種口味如紅豆、大豆、粉圓、地瓜圓、芋圓、薏仁、花生、鳳梨等。蛋綿冰可任選三種配料，口感類似於雪花冰和冰沙混合的質感。另外店家也有養貓，吃冰之餘也能跟貓咪互動 !</div>
              </div>
              <div class="wrap-1  "  id="forth" ref="targetDiv">
                <div class="total-top">
                <div class="store_wrap">
                  <div class="store-pic">
                  <img src="/temp_food.jpg">

                  </div>
                </div>
                <div class="store-intro">
                  <span>蚵爹黑輪湯 : </span>
                  <br>
                  <a href="https://www.google.com/maps/dir/24.5701285,120.8110278/%E6%BA%AA%E5%8F%A3%E5%8C%97%E6%A5%B5%E6%AE%BF/@24.0991946,119.9354082,9z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x346ebc5e132376fb:0xfa78145082ab5773!2m2!1d120.394876!2d23.6032734?entry=ttu" target="_blank">直接導到北極殿門口</a>
                    
                </div>
              </div>
            
            <div class="conclu"> 廟口小吃，便宜好吃，雖然有點油，但 好吃就好 </div>
              </div>
              <div class="wrap-1  "  id="fif" ref="targetDiv">
                <div class="total-top">
                <div class="store_wrap">
                  <div class="store-pic">
                  <img src="/pig_blood.jpg">

                  </div>
                </div>
                <div class="store-intro">
                  <span>溪口唐媽媽豬血湯 : </span>
                  <a href="https://www.google.com/maps/dir//623%E5%98%89%E7%BE%A9%E7%B8%A3%E6%BA%AA%E5%8F%A3%E9%84%89%E5%BF%A0%E5%AD%9D%E8%A1%9730%E8%99%9F/@23.6046686,120.3144186,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x346ebc676843bcab:0xff9c628e98d20514!2m2!1d120.396835!2d23.604686?entry=ttu" target="_blank">交通資訊</a>
                    
                </div>
              </div>
            
            <div class="conclu"> 這攤位的綜合豬血湯真是太棒了！味道絕佳，料份十足且沒有腥味。湯裡有豐富的大腸料理，吃起來香氣四溢，尤其是油蔥的香味，更重要是份量十分大碗，值得一試！</div>
              </div>
              <div class="wrap-1  "  id="six" ref="targetDiv">
                <div class="total-top">
                <div class="store_wrap">
                  <div class="store-pic">
                  <img src="/milk_drink.png">

                  </div>
                </div>
                <div class="store-intro">
                  <span>天一酪梨牛奶 : </span>
                  <a href="https://www.google.com/maps/dir//%E5%A4%A9%E4%B8%80%E9%85%AA%E6%A2%A8%E7%89%9B%E5%A5%B6+623%E5%98%89%E7%BE%A9%E7%B8%A3%E6%BA%AA%E5%8F%A3%E9%84%89%E4%B8%AD%E6%AD%A3%E8%B7%AF1%E8%99%9F/@23.6047853,120.358044,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x346ebdb20553c7c3:0x96deaa444fb8a988!2m2!1d120.399247!2d23.6047474?entry=ttu" target="_blank">交通資訊</a>
                    
                </div>
              </div>
            
            <div class="conclu"> 打酪梨牛奶味道極佳，沒有添加過多糖分，既解暑又健康。這種以塑膠袋盛裝並附上吸管的酪梨牛奶，彷彿回到了童年。期待之後再去溪口有機會再次品嚐這懷舊的味道。 </div>
              </div>
              
            </div>
            <div class="total-wrap" id="food2-show" v-show="activeBox === 'food2-show'">
              <div class="wrap-1 active ">
                <div class="total-top">
                <div class="store_wrap">
                  <div class="store-pic">
                  <img src="/cat_sad.png" id="nothin">

                  </div>
                </div>
                <div class="store-intro">
                  <span> 不是我不給 是真的沒看到</span>
                </div>
              </div>
            
            <div class="conclu">404 NOT FOUND</div>
              </div>
            </div>
            <div class="move right" @click="moveRight">
            </div>
          </div>
        </div>
    </div>
</template>

<style scoped>

.sese{
  background-color: rgb(15, 15, 45,0.4) ;
}
.shi-north{
  display:block;
  background-image: url('xi-north.jpg');
  background-size: cover;
  align-items: center;
}
.temp{
  display:block;
  background-image: url('chailin_but.png');
  background-size: cover;
  align-items: center;
}
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;

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
.store-pic >img {
  width: auto;
  height: 100%;
  max-width: 100%;
  display: block;
  align-self: center;
  background-size: cover;
  border-radius: 10px;
  
  
}
.store-pic{
  width: 100%;
  height: 100%;
  display: block;
  background-size: cover;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.background{
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  background-color: rgba(35, 35, 70, 1);
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
.place-slect {
  width: 18%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  margin-top: 5%;
  margin-left: 5%;
  justify-content: flex-start;
  background-color: rgba(35, 35, 35, 0.7);
  border-radius: 8px;
  
}
.place{
  width: 90%;
  height: 100px;
  background-color: white;
  margin-top: 30px;
  justify-content: flex-start;
  border-radius: 10px;
  margin-left: 5%;
}
.move{
  width: 10%;
  height: 100%;
  background-color: transparent;
  align-items: center;
  margin-top: 5%;
}
.right{
  margin-right: 0.2%;
  justify-content: flex-end;
  background-image: url('left-side.png');
}
.left{
  margin-left: 0.2%;
  justify-content: flex-start;
  background-image: url('right-side.png');
}
.select-wrap{
  width: 60%;
  height: 80%;
  display: flex;
  position: absolute;
  align-items: center;
  margin-top: 5%;
  margin-left: 35%;

}
.total-wrap{
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 5%;
  
}
.wrap-1.active{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  animation: slideInLeft 0.5s forwards;
  
}
.wrap-1{
  display: none;
}

.store_wrap{
  width: 55%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  justify-content: flex-start;
  margin-left: 5px;
  
}
.store-intro{
  width: 44%;
  height: 80%;
  background-color: rgba(35, 35, 35, 0.7);
  margin-top: 20px;
  margin-left: 3px;
  margin-right: 3px;
  font-family: '標楷體', 'BiauKai', cursive;
  text-size-adjust: 14px;
  border-radius: 7px;
}
.total-top{
  width: 100%;
  height: 45%;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.conclu{
  width: 99%;
  height: 50%;
  background-color: rgba(35, 35, 35, 0.7);
  margin-top: 10px;
  margin-left: 3px;
  margin-right: 3px;
  font-family: '標楷體', 'BiauKai', cursive;
  text-size-adjust: 14px;
}
@keyframes slideInLeft {
    from {
        opacity: 0;
        transform: translateX(100%);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.wrap-1.active.reverse {
    animation: slideInRight 0.5s forwards;
}

@keyframes slideInRight {
    from {
        opacity: 0;
        transform: translateX(-100%);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}
</style>

<script>
export default {
  data() {
    return {
      imgs: [
        'niku_shop.jpg',
        'K_shop.JPG',
        'ice_shop.JPG',
        'temp_shop.jpg',
        'pig_shop.jpg',
        'milk_shop.jpg'
      ],
      activeIndex: 0,
      activeBox: 'food-show',
      activeWrap: '',
      divOpacity: 1,
      divOpacity2: 0.4,
    };
  },
  watch: {
    '$route': 'setActiveWrap'
  },

  mounted() {
    this.$nextTick(() => {
    this.setActiveWrap();
  });
  },
  
  methods: {

    setActiveWrap() {
      
      const activeDiv = document.querySelector('.wrap-1.active');
      if (activeDiv) {
        this.activeWrap = activeDiv.id;
      } else {
        this.activeWrap = '';
      }
    },
    toggleTotalWrap(boxId) {
      if (boxId === this.activeBox) return;
      this.activeBox = boxId;
      if (boxId === 'food-show') {
        this.activeWrap = 'first';
        this.divOpacity = 1;
        this.divOpacity2 = 0.4;
      } else if (boxId === 'food2-show') {
        this.activeWrap = 'nothin';
        this.divOpacity = 0.4;
        this.divOpacity2 = 1;
      }
    },
    changeDiv(boxId, direction) {

      if (this.activeBox === 'food2-show') {
      if (boxId === 'food2-show') return;
    }
      const box = document.getElementById(boxId);
      const contents = box.querySelectorAll('.wrap-1');
      let activeIndex = -1;

      contents.forEach((content, index) => {
        if (content.classList.contains('active')) {
          activeIndex = index;
          
        }
      });

      if (direction === 'left') {
        contents[activeIndex].classList.remove('active');
        if (activeIndex === contents.length - 1) {
          contents[0].classList.add('active');
        } else {
          contents[activeIndex + 1].classList.add('active');
        }
      } else if (direction === 'right') {
        contents[activeIndex].classList.remove('active');
        if (activeIndex === 0) {
          contents[contents.length - 1].classList.add('active');
        } else {
          contents[activeIndex - 1].classList.add('active');
        }
      }
      contents.forEach((content) => {
        if (content.classList.contains('active')) {
          this.activeWrap = content.id;
          
        }
      });
      
    },
    moveLeft() {
      if (this.activeBox === 'food2-show') {
        this.changeDiv('food2-show', 'left')
      }else if(this.activeBox === 'food-show'){
        this.changeDiv('food-show', 'left')
      }
    },
    moveRight() {
      if (this.activeBox === 'food2-show') {
        this.changeDiv('food2-show', 'right')
      }else if(this.activeBox === 'food-show'){
        this.changeDiv('food-show', 'right')
      }
    }
  },
  computed: {
    
    backgroundImg() {
      if(this.activeWrap === 'first'){
        return `url(${this.imgs[0]})`;
      }else if(this.activeWrap === 'sec'){
        return `url(${this.imgs[1]})`;
      }else if(this.activeWrap === 'thir'){
        return `url(${this.imgs[2]})`;
      }else if(this.activeWrap === 'forth'){
        return `url(${this.imgs[3]})`;
      }else if(this.activeWrap === 'nothin'){
        return `url(aqua_fuanshin.png)`;
      }else if(this.activeWrap === 'fif'){
        return `url(${this.imgs[4]})`;
      }else if(this.activeWrap === 'six'){
        return `url(${this.imgs[5]})`;
      }
    }
  },
  
  
 
};


</script>