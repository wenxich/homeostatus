/** OPPONENTS SETUP **/

let opponents = new Map();
opponents.set("harry", {
    relation: "friend",
    img: "https://64.media.tumblr.com/eb72a78ad1586e0e5d7d1e8f60297c9b/615fd7d5e1ae8445-89/s250x400/a40297ce522a6e34c2b3e659ca7c076c4914ece0.jpg"
})
// opponents.set("mary", {
//     relation: "associate",
//     img: "https://64.media.tumblr.com/128fe31060a730af4bc3a2a44e9874a8/615fd7d5e1ae8445-83/s250x400/e7a4b9a9c94abab80a9ba5cceecdd35b00ed21cb.jpg"
// })
// opponents.set("gary", {
//     relation: "stranger",
//     img: "https://64.media.tumblr.com/a88f840682b5cdc81ad39c6b6cac0ea9/615fd7d5e1ae8445-ff/s250x400/58127abeeebc92a991f5fa9c271ff7431e94f697.jpg"
// })
// opponents.set("joe", {
//     relation: "friend",
//     img: "https://64.media.tumblr.com/c98c4be96c6d1c9f7e9ad26224971a88/615fd7d5e1ae8445-d1/s250x400/b998ca8a621ea457e07ffa22ec195f8dd9fb8694.jpg"
// })
// opponents.set("sarah", {
//     relation: "friend",
//     img: "https://64.media.tumblr.com/bc564cdab7b91593fd217a8f585b8d35/8fc8ec52fc20e567-2c/s250x400/ec703290448115fcfe5c1fca6af4d53f389765d3.jpg"
// })
// opponents.set("nathan", {
//     relation: "stranger",
//     img: "https://64.media.tumblr.com/cd2082c829436bc3d04218e680a33e69/8fc8ec52fc20e567-38/s400x600/8d92685bc6be551af7959fc4048b9dcde245be10.pnj"
// })
// opponents.set("anthony", {
//     relation: "associate",
//     img: "https://64.media.tumblr.com/f10cc30ef1c1c1b36fdfc9c00a956395/8fc8ec52fc20e567-93/s250x400/1db95cf5e0aa4c6591d318e3b4ab90dbc469d6b0.jpg"
// })
// opponents.set("daniel", {
//     relation: "stranger",
//     img: "https://64.media.tumblr.com/f572e5f7e58924ef77571857bd563ae7/8fc8ec52fc20e567-98/s250x400/f081aac3f7c36d54193c31fb6627c9ca0d545543.jpg"
// })
// opponents.set("jerry", {
//     relation: "friend",
//     img: "https://64.media.tumblr.com/cc555505541edd1a43f3826f4042d5cf/8fc8ec52fc20e567-41/s250x400/d2eb6a314d94178191cbc292c11c910c650777ee.jpg"
// })
opponents.set("elle", {
    relation: "friend",
    img: "https://64.media.tumblr.com/aac2e48f9d45418089a30f08bf482540/8fc8ec52fc20e567-61/s400x600/41879643e9fb8a305681726ca1995ee1a3f34dad.jpg"
})

/** USER SETUP **/
let userImg = "https://64.media.tumblr.com/ce8da05f67f3ed392e7497b532ce70ed/4483dcbf4b49edb7-6e/s250x400/2263829ce1f2a4d1392459be6d84e0f84f433b78.pnj"
document.getElementById("u-img").style.backgroundImage = "url('"+userImg+"')";