const puppeteer = require('puppeteer')
const url = require('./url.json')

let search = url.carrefour.search + "pain"
const stitle = url.carrefour.title
// const sprice = url.carrefour.price
// const simage = url.carrefour.image
const getData = async () => {
  const browser = await puppeteer.launch({ headless: false })//
  const page = await browser.newPage()

  await page.goto(search)

  const result = await page.evaluate((stitle) => {
    let title = Array.from(document.querySelectorAll(stitle),e => e.textContent)

    return { title }
  })

  browser.close()
  return result
}

getData().then(value => {
  console.log(value)
})