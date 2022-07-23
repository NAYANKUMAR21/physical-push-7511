let array =[
    "Mujhe es plan mein dawaiyon pe discounts ke saath saath HbA1c test bhi milta hai, matlab mai bahar karata hu HbA1c toh mera 250 rupaye lag jate hai aur ye poora diabetes care plan mujhe 200 rupaye ka padta hai Sasta toh hai hi, dusra agar ek hi test kara lenge toh bhi humara poora paisa vasool ho gaya. Esmein minimum purchase ka bhi koi limit nahi hai, shipping charge nahi lagega,aur aapko discount jo hai wo milega hi milega.--SONU SHUKLA",
    "Har purchase pe itna discount kahi nahi milta, pharmacy wale bhi 10% discount hi dete hai,aur baki jangah bas first purchase mein 40% discount dete hai. With this plan I get free delivery on every item, HbA1c tests, and e-consultation. HbA1c test ghar baithe baithe ho jata hai aur reports pe free consultation miljati hain. Waise tests karaoge toh bhi itne paise toh lag hee jaayenge! Otherwise 1200 rslagao doctor ke paas jaane mein aur woh wahi dawaiyyan repeat kar deta tha.---RAKESH KUMAR GUPTA",
    "I use DCP for tests and purchase of other items.There is free delivery on every product with amazing discounts. Also, if I go for the test outside,it would definitely cost me more. Ye bhi hai ki check ho jaata hai aapka.---ANCHIT GUPTA",
    "The Diabetes Care Plan from 1 Mg makes Diabetes care much more affordable for Diabetics.It is well thought out comprehensive plan and is the best in class Diabetic plan in the marketplace today.I have saved some 12-15 thousand using diabetes plan in the first 3 months.---RAKESH GUPTA"
]
let text = document.querySelector('#Crouser_text');
let right = document.querySelector('#right_btn')
let left = document.querySelector('#left_btn');

let paraState=0
right.addEventListener("click",function(){
  paraState++
  if(paraState===array.length){
    paraState=0
  }
  text.innerText = array[paraState]
 
});

left.addEventListener("click",function(){
  paraState--
  if(paraState<0){
    paraState=array.length-1
  }
  text.innerText = array[paraState]
})
// let down_text = document.querySelector('.down_text');
// let down = document.querySelector('.down_btn')
// down.addEventListener("click",function(){
//   console.log("inside down")
//   down_text.innerText = "After you become a Care Plan user, discount coupons will be auto applied on your cart You will get an additional 7% over and above all offers on other health products such as Vitamins, haircare, skin care etc. Your special discount coupon can be used up till 50 times within membership period and you can avail discount for cart value up to Rs.150000 at a time. "
// });