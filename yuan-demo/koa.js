const Koa = require('koa')
const Router = require('koa-router')
const multer = require('koa-multer')
const { join } = require('path')

const app = new Koa
const router = new Router

const storage = multer.diskStorage({
  // 存储的位置
  destination: join(process.cwd(), "upload"),
  // 文件名
  filename(req, file, cb){
    const filename = file.originalname.split(".")
    let savsName = ''
    filename.map((items,index) => {
      if (index !== filename.length - 1)  {
        savsName = savsName + items + '.'
      }
    })
    // Date.now()
    cb(null, `${savsName}${filename[filename.length - 1]}`)
  }
})

const upload = multer({storage})

router.post('/profile', upload.single('file'), async ctx => {
  ctx.body = {
    msg: '成功！',
    filename: ctx.req.file.filename
  }
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000);

