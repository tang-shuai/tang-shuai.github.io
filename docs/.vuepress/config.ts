import {defineUserConfig} from "vuepress";
import {path} from '@vuepress/utils'
export default defineUserConfig({
    lang:'zh-CN',
    title:"个人博客",
    description:"个人博客内容",
    public:path.resolve(__dirname,'../../static'),
})