console.log(process.argv.slice(2), '拿到script传递的参数')
console.log(process.env.npm_package_name, '通过环境变量拿到package.json的name属性')
console.log(process.env.MODE, '获取参数') //输出 deploy 



const vite = require("vite")
console.log(vite, 8899)
// 编译部署模式
const buildMode = process.env.MODE;
export default defineConfig(({ command, mode }) => {
    // 根据当前工作目录中的 `mode` 加载 .env 文件
    // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
    const env = loadEnv(mode, process.cwd(), '')
    console.log(env, 8899)
    // return {
    //   // vite 配置
    //   define: {
    //     __APP_ENV__: JSON.stringify(env.APP_ENV),
    //   },
    // }
  })