let string = ``, href = ``, src = ``, alt = ``, rel = ``;

let list = document.getElementById("cont");

let liArr = ['Донецька обл. м.Краматорськ вул.Кирилкіна б.26', 'katyushka.kram.ua@gmail.com', '+380984453534', '@Gyius_228'];

function attribute(k) {
  switch (k) {
    case 0:
      href = `href="https://goo.gl/maps/NZsCrwtT36uzKjcX7"`;
      src = `icon-location.png`;
      alt = `alt="location"`;
      rel = `target="_blank"
              rel="noopener noreferrer nofollow"`
      break;
    case 1:
      href = `href="mailto:katyushka.kram.ua@gmail.com"`;
      src = `icon-gmail.png`;
      alt = `alt="mail"`;
      rel = ``;
      break;
    case 2:
      href = `href="tel:+380984453534"`;
      src = `icon-blue-phone.png`;
      alt = `alt="blue-phone"`;
      rel = ``;
      break;
    case 3:
      href = `href="tg://resolve?domain=Gyius_228"`;
      src = `icon-telegram.png`;
      alt = `alt="telegram"`;
      rel = ``;
      break;
  }
}

liArr.forEach((i, index) => {
  attribute(index);
  string += `<li><a
              class="link-footer" ${href} ${rel}><img
                class="icon"
                src="./image/${src}" ${alt} width="20"
              />${i}</a></li>`;
});

list.innerHTML = string;
console.log(list);