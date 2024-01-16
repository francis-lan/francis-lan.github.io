<template>
  <div class="container">
    <div class="top-bar">
      <div class="first-block"></div>
      <div class="first-block">
        <div class="secblock sese"><router-link to="/" style="color: black;align-self: center;">首頁</router-link></div>
        <div class="secblock"><router-link to="/food" style="color:black;align-self:center; border-color: black text-size-adjust: 20px;">美食</router-link></div>
        <div class="secblock"><router-link to="/map" style="color:black;align-self:center;">景點</router-link></div>
      </div>
    </div>
    <div class="background">
    <div class="home-wrap">
    <div class="video-wrap" >
      <div class="video">
        <embed src="https://www.youtube.com/embed/YW69Ll684wg?si=_MGlKbmDcxRxPGo-" type="video/mp4" width="80%" height="60%" autoplay="true" loop="false" controls="true" />
      </div>
      </div>
      <div class="info" >
        <div class="intro">
          <span>溪口鄉公所 : </span>
          <a href="https://sikou.cyhg.gov.tw/" target="_blank">點我轉移</a>
          
        </div>
        <div class="exp">
          <p>
            溪口鄉，位於嘉義縣的北端，是該縣最小的鄉鎮。這個地方原名為「雙溪口」，因兩條溪流會合得名。溪口鄉是嘉南平原唯一的客家街市，擁有著深厚的客家文化底蘊和獨特的地方特色。
說道溪口鄉的美食，不得不提的就是「鳥仔餅」，一種用番薯粉製成的傳統糕點&#40;雖然我們沒有更進一步的介紹，以及廟口的現炸蚵嗲和肉圓等實惠的地道小吃。另外，古早味豬血湯、炸雞和酪梨牛奶也是不可錯過的選擇。在景點方面，客家文化館、後港北極殿以及文化生活館展現了這個小鎮的歷史和多元文化。
使用我們的網站，你可以透過我們自製的Vlog、美食介紹和照片深入了解溪口鄉。從每條街道到每家小吃店，我們的介紹將帶你發掘這個美麗鄉鎮的每一個角落和故事。讓我們一起探索這個歷史悠久、文化豐富的溪口鄉，一起來深呼溪一口吧！
          </p>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>


<script>
export default {
  methods: {
    handleScroll(event) {
      event.stopPropagation();
    },
  },
};
</script>

<style scoped>

.sese{
  background-color: rgb(15, 15, 45,0.4) ;
}
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.video{
  width: 100%;
  height: 100%;
  display:block;
  top: 0;
  left: 0;
  align-items: center;
}
.video img{
  width: 100%;
  height: auto;
  object-fit: cover;
}
.background{
  width: 100vw;
  height: 100vh;
  background-image: "take1.jpg";
  position: relative;
  display: flex;
}

.background::before {
  content: "";
  
  background-image: url("/take1.jpg");
  background-size: cover;
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-position: center center;
  top: 0;
  left: 0;
  z-index: -1;
}



.video-wrap {
  width: 50%;
  height: 80vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  opacity: 1;
 margin-top: 5%;
  margin-left: 5%;
  position: relative;
}
.info {
  width: 30%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 5%;
  margin-right: 15%;
}

.intro{
  width: 50%;
  height: 15%;
  margin-bottom: 5px;
  background-color: rgba(26, 39, 59, 0.8);
  border-radius: 10px;
  font-family: '標楷體', 'BiauKai', cursive;
  text-size-adjust: 20px;
  margin-top: 20%;
  margin-left: 50%;
}
.exp{
  width: 90%;
  height: 61%;
  background-color: rgba(32, 35, 40, 0.8);
  border-radius: 10px;
  font-family: '標楷體', 'BiauKai', cursive;
  text-size-adjust: 14px;
  margin-left: 0%;
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

.home-wrap{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction:row;
  align-items: center;
}

</style>
