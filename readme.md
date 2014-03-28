### jquery.orzScroll.js

***

偵測視窗捲動到該元素即加入動畫效果，該元素離開視窗範圍則將取消動畫，下次滾動至該元素時可再啟動動畫效果，請搭配[animate css](http://daneden.github.io/animate.css/)服用

### USAGE
需使用jquery然後引入jquery.orzScroll.js

	<script type="text/javascript" src="jquery-1.10.2.min.js"></script>
	<script type="text/javascript" src="jquery.orzScroll.min.js"></script>
	
並且加入animate css
	
	<link rel="stylesheet" href="animate.css">

套用方法只需要將元素加上此function即可
	
	$(function(){
		$('div').orzScroll();
	});

### 設定
目前有三個參數可以作設定

**animation**

指定動畫的效果，請參考[animate css](http://daneden.github.io/animate.css/), 預設為 **'fadeInLeft'**
	
	animation:'fadeInRight'



**delay**

指定動畫觸發的延遲時間，可針對某些特定情形作延遲，預設為 **'0s'**

	delay:'0.5s'


**offset**

在某些情況下，或許會希望往下滾動後不要那麼快消失，一直在那邊跑也很煩，可將offset設定大一點，往下滾動再滾回來時就不會一直消失-觸發，預設為 **0**

	offset:100


### 範例

	$(function(){
		$('div:nth-child(even)').orzScroll();
		$('div:nth-child(odd)').orzScroll({
			animation:'fadeInRight'
		});
	});
