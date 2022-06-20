const html = document.documentElement;
const canvas = document.getElementById("one-a");
const context = canvas.getContext("2d");

const frameCount = 21;
const currentFrame = (index) =>
  `http://127.0.0.1:5500/static/animations/section_2/${index
    .toString()
    .padStart(4, "0")}.png`;

const preloadImages = () => {
  for (let i = 1; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
  }
};

const img = new Image();
img.src = currentFrame(1);
canvas.width = 1200;
canvas.height = 700;
img.onload = function () {
  context.clearRect( 0, 0, context.canvas.width, context.canvas.height );
  context.drawImage(img, 0, 0);
};

const updateImage = (index) => {
  img.src = currentFrame(index);
  context.drawImage(img, 0, 0);
};

window.addEventListener("scroll", () => {
  const scrollTop = html.scrollTop;
  const maxScrollTop = html.scrollHeight - window.innerHeight;
  const scrollFraction = scrollTop / maxScrollTop;
  const frameIndex = Math.min(
    frameCount - 1,
    Math.ceil(scrollFraction * frameCount)
  );

  requestAnimationFrame(() => updateImage(frameIndex + 1));
});

preloadImages();










// window.onbeforeunload = function () {
//   window.scrollTo(0, 0);
// }

// window.onload = function() {
//   var wh = window.innerHeight;
//   var ww = window.innerWidth;
//   var slider = document.getElementById('slider');
//   var pan = document.getElementById('pan');
//   var item_wrap = document.getElementById('item_wrap').scrollWidth + wh/1.25;
//   pan.style.height = item_wrap + 'px';

//   window.addEventListener('scroll', function (event) {
//       if (event.path[1].scrollY >= slider.offsetTop ) {
//           if (event.path[1].scrollY < pan.offsetTop + pan.clientHeight) {
//               slider.style.position = 'fixed'; //set position fixed
//               let aa = event.path[1].scrollY - pan.offsetTop;
//               document.getElementById('item_wrap').style.transform = 'translate3d(-' + aa + 'px, 0px, 0px)';   
//           }
//       }
//       if (event.path[1].scrollY <= pan.offsetTop) {
//           slider.style.position = 'relative'; //set position relative
//       }
//   });
// }