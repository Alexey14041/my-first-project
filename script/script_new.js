document.addEventListener('DOMContentLoaded', () => {
  const addressElement = document.querySelector('address ul');
  const addresses = [
    {
      link: {
        href: 'https://goo.gl/maps/NZsCrwtT36uzKjcX7',
        target: '_blank',
        rel: 'noopener noreferrer nofollow'
      },
      image: {
        className: 'icon',
        src: 'icon-location.png',
        alt: 'location'
      },
      title: 'Донецька обл. м.Краматорськ вул.Кирилкіна б.26'
    },
    {
      link: {
        href: 'href="mailto:katyushka.kram.ua@gmail.com"'
      },
      image: {
        className: 'icon',
        src: 'icon-gmail.png',
        alt: 'mail'
      },
      title: 'katyushka.kram.ua@gmail.com'
    },
    {
      link: {
        href: 'href="tel:+380984453534"'
      },
      image: {
        className: 'icon',
        src: 'icon-blue-phone.png',
        alt: 'blue-phone'
      },
      title: '+380984453534'
    },
    {
      link: {
        href: 'href="tg://resolve?domain=Gyius_228"'
      },
      image: {
        className: 'icon',
        src: 'icon-telegram.png',
        alt: 'telegram'
      },
      title: '@Gyius_228'
    }
  ]

  const buildRow = (address) => (
    `<li>
        <a class="link-footer" href="${valueOrEmpty(address.link.href)}" rel="${valueOrEmpty(address.link.rel)}"
         target="${valueOrEmpty(address.link.target)}">
          <img class="${valueOrEmpty(address.image.className)}" src="${imagePath(address.image.src)}"
           alt="${valueOrEmpty(address.image.alt)}" width="20"/>
          ${valueOrEmpty(address.title)}
        </a>
     </li>`
  )

  const valueOrEmpty = (val) => (val || '')
  const imagePath = (val) => (val ? `./image/${val}` : '')

  const string = addresses.reduce((acc, i) => (acc + buildRow(i)), '')
  console.log(string)

  addressElement.innerHTML = string;
})