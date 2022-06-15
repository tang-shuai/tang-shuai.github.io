<template><div><h4 id="聊项目-看表达能力-对项目的理解、扮演的角色" tabindex="-1"><a class="header-anchor" href="#聊项目-看表达能力-对项目的理解、扮演的角色" aria-hidden="true">#</a> 聊项目（看表达能力，对项目的理解、扮演的角色）</h4>
<h4 id="项目中遇到的问题和如何解决-列举1、2-看思路、总结能力" tabindex="-1"><a class="header-anchor" href="#项目中遇到的问题和如何解决-列举1、2-看思路、总结能力" aria-hidden="true">#</a> 项目中遇到的问题和如何解决（列举1、2）看思路、总结能力</h4>
<h4 id="考察态度-是否积极、主动在开发或问题处理上" tabindex="-1"><a class="header-anchor" href="#考察态度-是否积极、主动在开发或问题处理上" aria-hidden="true">#</a> 考察态度（是否积极、主动在开发或问题处理上）</h4>
<h4 id="项目性能优化、技术细节-看技术深度、项目职责、学习能力" tabindex="-1"><a class="header-anchor" href="#项目性能优化、技术细节-看技术深度、项目职责、学习能力" aria-hidden="true">#</a> 项目性能优化、技术细节（看技术深度、项目职责、学习能力）</h4>
<h2 id="浏览器方面-以下是由易到难" tabindex="-1"><a class="header-anchor" href="#浏览器方面-以下是由易到难" aria-hidden="true">#</a> 浏览器方面：（以下是由易到难）</h2>
<h4 id="兼容性" tabindex="-1"><a class="header-anchor" href="#兼容性" aria-hidden="true">#</a> 兼容性</h4>
<h4 id="存储和缓存" tabindex="-1"><a class="header-anchor" href="#存储和缓存" aria-hidden="true">#</a> 存储和缓存</h4>
<ul>
<li>https://zhuanlan.zhihu.com/p/146050407</li>
</ul>
<h4 id="script标签属性async-和-defer的理解、区别" tabindex="-1"><a class="header-anchor" href="#script标签属性async-和-defer的理解、区别" aria-hidden="true">#</a> script标签属性async 和 defer的理解、区别</h4>
<ul>
<li>
<p>defer</p>
<blockquote>
<p>这个属性的用途是表明脚本在执行时不会影响页面的构造。也就是说，脚本会被延迟到整个页面都解析完毕后再运行。因此，在<code v-pre>&lt;script&gt;</code>元素中设置<code v-pre>defer</code>属性，相当于告诉浏览器立即下载，但延迟执行。</p>
<p>HTML5规范要求脚本按照它们出现的先后顺序执行，因此第一个延迟脚本会先于第二个延迟脚本执行，而这两个脚本会先于<code v-pre>DOMContentLoaded</code>事件执行。<strong>在现实当中</strong>，延迟脚本并不一定会按照顺序执行，也不一定会在<code v-pre>DOMContentLoad</code>时间触发前执行，因此最好只包含一个延迟脚本。</p>
</blockquote>
</li>
<li>
<p>async</p>
<blockquote>
<p>这个属性与<code v-pre>defer</code>类似，都用于改变处理脚本的行为。同样与<code v-pre>defer</code>类似，<code v-pre>async</code>只适用于外部脚本文件，并告诉浏览器立即下载文件。但与<code v-pre>defer</code>不同的是，标记为<code v-pre>async</code>的脚本并不保证按照它们的先后顺序执行。</p>
<p>第二个脚本文件可能会在第一个脚本文件之前执行。因此确保两者之间互不依赖非常重要。指定<code v-pre>async</code>属性的目的是不让页面等待两个脚本下载和执行，从而异步加载页面其他内容。</p>
</blockquote>
</li>
</ul>
<h4 id="http缓存-强缓存和协议-协商缓存" tabindex="-1"><a class="header-anchor" href="#http缓存-强缓存和协议-协商缓存" aria-hidden="true">#</a> http缓存（强缓存和协议/协商缓存）</h4>
<ul>
<li>https://segmentfault.com/a/1190000008956069</li>
</ul>
<h4 id="跨域" tabindex="-1"><a class="header-anchor" href="#跨域" aria-hidden="true">#</a> 跨域</h4>
<ul>
<li>https://segmentfault.com/a/1190000011145364</li>
</ul>
<h4 id="html页面生命周期-和触发的事件" tabindex="-1"><a class="header-anchor" href="#html页面生命周期-和触发的事件" aria-hidden="true">#</a> html页面生命周期（和触发的事件）</h4>
<ul>
<li>
<p><code v-pre>DOMContentLoaded</code> —— 浏览器已完全加载 HTML，并构建了 DOM 树，但像 <code v-pre>&lt;img&gt;</code> 和样式表之类的外部资源可能尚未加载完成。</p>
</li>
<li>
<p><code v-pre>load</code> —— 浏览器不仅加载完成了 HTML，还加载完成了所有外部资源：图片，样式等。</p>
</li>
<li>
<p><code v-pre>beforeunload/unload</code> —— 当用户正在离开页面时。</p>
<p>每个事件都是有用的：</p>
<ul>
<li><code v-pre>DOMContentLoaded</code> 事件 —— DOM 已经就绪，因此处理程序可以查找 DOM 节点，并初始化接口。</li>
<li><code v-pre>load</code> 事件 —— 外部资源已加载完成，样式已被应用，图片大小也已知了。</li>
<li><code v-pre>beforeunload</code> 事件 —— 用户正在离开：我们可以检查用户是否保存了更改，并询问他是否真的要离开。</li>
<li><code v-pre>unload</code> 事件 —— 用户几乎已经离开了，但是我们仍然可以启动一些操作，例如发送统计数据。</li>
</ul>
</li>
</ul>
<h4 id="回流和重绘的优化" tabindex="-1"><a class="header-anchor" href="#回流和重绘的优化" aria-hidden="true">#</a> 回流和重绘的优化</h4>
<blockquote>
<p>回流（Reflow ）:当render树中的一部分或者全部因为大小边距等问题发生改变而需要重建的过程叫做回流；</p>
</blockquote>
<blockquote>
<p>重绘（Repaint ）:当元素的一部分属性发生变化，如外观背景色不会引起布局变化而需要重新渲染的过程叫做重绘。</p>
</blockquote>
<ul>
<li>避免使用触发重绘回流的CSS属性。</li>
<li>尽量减少JS操作修改DOM的CSS次数。</li>
<li>将频繁重绘回流的DOM元素单独作为一个独立图层，那么这个DOM元素的重绘和回流影响只会在这个图层中。页面不能有过多图层。</li>
</ul>
<h4 id="渲染引擎如何工作" tabindex="-1"><a class="header-anchor" href="#渲染引擎如何工作" aria-hidden="true">#</a> 渲染引擎如何工作</h4>
<ul>
<li>https://segmentfault.com/a/1190000017872125</li>
</ul>
<h2 id="css方面考察-以下是由易到难" tabindex="-1"><a class="header-anchor" href="#css方面考察-以下是由易到难" aria-hidden="true">#</a> css方面考察（以下是由易到难）</h2>
<h4 id="垂直居中、水平居中-实现方案有哪些-margin折叠有哪些-如何解决" tabindex="-1"><a class="header-anchor" href="#垂直居中、水平居中-实现方案有哪些-margin折叠有哪些-如何解决" aria-hidden="true">#</a> 垂直居中、水平居中 实现方案有哪些 margin折叠有哪些，如何解决</h4>
<ul>
<li>
<p>flex 布局：</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span>flex<span class="token punctuation">;</span>
    <span class="token property">align-item</span><span class="token punctuation">:</span>center<span class="token punctuation">;</span>
    <span class="token property">justify-content</span><span class="token punctuation">:</span>center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>teble-cell</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span>table-cell<span class="token punctuation">;</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span>center<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span>middle
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h4 id="display-none-与visibility-hidden-的区别" tabindex="-1"><a class="header-anchor" href="#display-none-与visibility-hidden-的区别" aria-hidden="true">#</a> display: none;与visibility: hidden;的区别</h4>
<p><strong><code v-pre>dislay:none:</code></strong></p>
<blockquote>
<p>不为被隐藏的对象保留物理空间  会触发回流 进行渲染   不是继承属性 元素及其子元素都会消失</p>
</blockquote>
<p><strong><code v-pre>visibility:hidden:</code></strong></p>
<blockquote>
<p>为被隐藏的对象保留物理空间 只会触发重绘 位置未发生改变   是继承元素 若子元素使用<code v-pre>visibility:visible</code> 子元素就会显现出来</p>
</blockquote>
<h4 id="flex使用-grid使用" tabindex="-1"><a class="header-anchor" href="#flex使用-grid使用" aria-hidden="true">#</a> flex使用，grid使用</h4>
<h4 id="样式继承" tabindex="-1"><a class="header-anchor" href="#样式继承" aria-hidden="true">#</a> 样式继承</h4>
<h4 id="盒模型" tabindex="-1"><a class="header-anchor" href="#盒模型" aria-hidden="true">#</a> 盒模型</h4>
<h4 id="对bfc的理解-如何创建-解决什么问题" tabindex="-1"><a class="header-anchor" href="#对bfc的理解-如何创建-解决什么问题" aria-hidden="true">#</a> 对BFC的理解，如何创建，解决什么问题</h4>
<h4 id="css样式优先级" tabindex="-1"><a class="header-anchor" href="#css样式优先级" aria-hidden="true">#</a> css样式优先级</h4>
<h4 id="specified-value-computed-value-used-value-计算方法" tabindex="-1"><a class="header-anchor" href="#specified-value-computed-value-used-value-计算方法" aria-hidden="true">#</a> specified value,computed value,used value 计算方法</h4>
<h4 id="css中的层叠概念-层叠上下文-stacking-context-、层叠等级-stacking-level-、层叠顺序-stacking-order-z-index-的理解" tabindex="-1"><a class="header-anchor" href="#css中的层叠概念-层叠上下文-stacking-context-、层叠等级-stacking-level-、层叠顺序-stacking-order-z-index-的理解" aria-hidden="true">#</a> css中的层叠概念（层叠上下文（Stacking Context）、层叠等级(Stacking Level)、层叠顺序(Stacking Order)，z-index 的理解)</h4>
<h2 id="js方面考察-以下是由易到难" tabindex="-1"><a class="header-anchor" href="#js方面考察-以下是由易到难" aria-hidden="true">#</a> js方面考察（以下是由易到难）</h2>
<h4 id="javascript-有哪几种数据类型" tabindex="-1"><a class="header-anchor" href="#javascript-有哪几种数据类型" aria-hidden="true">#</a> javascript 有哪几种数据类型</h4>
<ul>
<li>
<p>number,boolen,string,symbol,undefined,null,object</p>
</li>
<li>
<p>undefined和null 都为空值 <code v-pre>undefined == null</code></p>
<ul>
<li>
<p>区分undefined 和null</p>
<p><code v-pre>typeof undefind = undefind</code></p>
<p><code v-pre>typeof null = object</code></p>
</li>
</ul>
</li>
</ul>
<h4 id="普通函数与箭头函数区别" tabindex="-1"><a class="header-anchor" href="#普通函数与箭头函数区别" aria-hidden="true">#</a> 普通函数与箭头函数区别</h4>
<ul>
<li>
<p>语法更加简洁清晰</p>
</li>
<li>
<p>箭头函数不会创建自己的this</p>
<blockquote>
<p>箭头函数只会捕获 自己在定义时所处外层执行环境的this</p>
</blockquote>
</li>
<li>
<p>箭头函数继承而来的this 指向永远不会改变</p>
</li>
<li>
<p>.call()/.apply()/.bind()无法改变箭头函数中this的指向</p>
</li>
<li>
<p>箭头函数不能作为构造函数使用</p>
</li>
<li>
<p>箭头函数没有自己的arguments</p>
</li>
<li>
<p>箭头函数没有原型<code v-pre>prototype</code></p>
</li>
<li>
<p>箭头函数不能用作<code v-pre>Generator</code> 函数 不能使用<code v-pre>yeild</code>关键字</p>
</li>
</ul>
<h4 id="object与map的区别" tabindex="-1"><a class="header-anchor" href="#object与map的区别" aria-hidden="true">#</a> Object与Map的区别</h4>
<ul>
<li>
<p><code v-pre>Object</code></p>
<blockquote>
<p>本质是哈希结构的键值对集合  <strong>它只能用字符串,数字或者<code v-pre>symbol</code> 等简单的数据类型当做键</strong></p>
</blockquote>
</li>
<li>
<p>Map</p>
<blockquote>
<p>map的键 可以是任意的数据类型</p>
</blockquote>
</li>
<li>
<p><strong>区别：</strong></p>
<ul>
<li>
<p>同名碰撞--- map的 <strong>键</strong>存的就是这块内存的地址，只要地址不一样 就是两个不同的键</p>
</li>
<li>
<p>可迭代  - 可以使用 for..of 遍历 ，而object不行</p>
</li>
<li>
<p>长度 - map 可以使用<code v-pre>size</code> 拿到长度</p>
</li>
<li>
<p>有序性  -  填入map的元素 会保持原有的顺序</p>
</li>
<li>
<p>可展开 - map 可以使用省略号语法展开 <code v-pre>object</code> 不行</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> m <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
m<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">'hello,world'</span><span class="token punctuation">)</span><span class="token comment">//dom对象作为键</span>
m<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'username'</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token string">'jack'</span><span class="token punctuation">)</span><span class="token comment">//数组作为键</span>
m<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token comment">//boolean类型作为键</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>m<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token comment">//可以展开为二维数组</span>

<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
obj<span class="token punctuation">[</span><span class="token string">'jack'</span><span class="token punctuation">]</span> <span class="token operator">=</span>  <span class="token number">1</span>
obj<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">2</span>
obj<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">3</span>
obj<span class="token punctuation">[</span><span class="token string">'tom'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">4</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>obj<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token comment">//TypeError: obj is not iterable</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
<h4 id="定义函数的方法有几种" tabindex="-1"><a class="header-anchor" href="#定义函数的方法有几种" aria-hidden="true">#</a> 定义函数的方法有几种</h4>
<ul>
<li>
<p>函数声明方式</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fnName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>函数表达式</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">sum</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>函数对象方式</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> sum <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">functiom</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
<h4 id="防抖、节流-理解和不同-可手写" tabindex="-1"><a class="header-anchor" href="#防抖、节流-理解和不同-可手写" aria-hidden="true">#</a> 防抖、节流 理解和不同（可手写）</h4>
<ul>
<li>
<p>防抖</p>
<blockquote>
<p>在某个时间期限内，事件处理函数只执行一次</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span>delay</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> timer <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
   	<span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    	<span class="token keyword">if</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token function">clearnTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>   
        timer <span class="token operator">=</span> <span class="token function">seTimeout</span><span class="token punctuation">(</span>fn<span class="token punctuation">,</span>delay<span class="token punctuation">)</span>
   	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>节流</p>
<blockquote>
<p>当持续触发事件时，保证一定时间段内只调用一次事件处理函数</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> delay</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> timer <span class="token operator">=</span> <span class="token keyword">null</span>
    
    <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>timer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> arguments<span class="token punctuation">)</span>
           	<span class="token function">clearnTimerout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span>
            timer <span class="token operator">=</span> <span class="token keyword">null</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h4 id="闭包" tabindex="-1"><a class="header-anchor" href="#闭包" aria-hidden="true">#</a> 闭包</h4>
<blockquote>
<p>闭包函数就是定义在一个函数内部的函数，他有权访问外部函数作用域中的变量.</p>
</blockquote>
<ul>
<li>
<p>闭包的特性</p>
<ul>
<li>函数嵌套函数</li>
<li>函数内部可以引用外部的参数和变量</li>
<li>参数和变量不会被垃圾回收机制回收</li>
</ul>
</li>
<li>
<p>闭包的优点</p>
<ul>
<li>可以长期存储一个变量</li>
<li>避免全局变量的污染</li>
<li>私有成员的存在</li>
</ul>
</li>
<li>
<p>缺点</p>
<ul>
<li>常驻内存增加内存使用量</li>
<li>很容易造成内存泄漏</li>
</ul>
</li>
</ul>
<h4 id="this理解-如何改变指向" tabindex="-1"><a class="header-anchor" href="#this理解-如何改变指向" aria-hidden="true">#</a> this理解，如何改变指向</h4>
<ul>
<li>
<p>直接调用，指向<code v-pre>window</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> x <span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>x<span class="token punctuation">)</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>在函数里调用，指向<code v-pre>window</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> x<span class="token operator">=</span><span class="token number">1</span>；
<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> x<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>x<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//输出 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>在构造函数里用<code v-pre>new</code> 调用，指向创建的新实例对象</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">//输出{}（指向对象a）</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>在对象的方法里调用 指向调用它的对象</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>x <span class="token operator">=</span> numl
    <span class="token keyword">this</span><span class="token punctuation">,</span><span class="token function-variable function">fn1</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>x<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fn</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
a<span class="token punctuation">.</span><span class="token function">fn1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//输出3</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>改变<code v-pre>this</code>的指向</p>
<ul>
<li>用<code v-pre>new</code> 调用函数改变指向<code v-pre>new</code> 的实例对象</li>
<li>bind</li>
<li>call</li>
<li>apply</li>
</ul>
</li>
</ul>
<h4 id="原型、原型链" tabindex="-1"><a class="header-anchor" href="#原型、原型链" aria-hidden="true">#</a> 原型、原型链</h4>
<ul>
<li>原型</li>
</ul>
<h4 id="等号运算符判断流程" tabindex="-1"><a class="header-anchor" href="#等号运算符判断流程" aria-hidden="true">#</a> 等号运算符判断流程</h4>
<ul>
<li>=== 运算符判断相等的流程
<ul>
<li>类型不同，不等</li>
<li><code v-pre>null</code>，<code v-pre>undefined</code>,<code v-pre>boolean</code>，<code v-pre>number</code> 这四个类型的只要值（数值）相等 就相等 <code v-pre>-0===0</code> //true</li>
<li>只要有一个<code v-pre>NAN</code> ，则不等</li>
<li><code v-pre>string</code> 类型，长度/内容/编码不同，都不相等 相同的位置包含相同的16位，相等</li>
<li>指定相同的对象，数组，函数，则相等，若指向不同对象 不等</li>
</ul>
</li>
<li>== 运算符判断相等的流程
<ul>
<li>若类型相同，则按===规则判断</li>
<li>若类型不同，则启动隐式类型转
<ul>
<li>有<code v-pre>NAN</code>,一律返回<code v-pre>false</code></li>
<li>有布尔类型，布尔类型转换成数字比较</li>
<li>有<code v-pre>string</code>类型, 两种情况：
<ul>
<li>对象，对象用<code v-pre>toString</code> 方法转换成<code v-pre>string</code> 相比</li>
<li>数字，<code v-pre>string</code> 类型转换成数字进行比较</li>
</ul>
</li>
<li><code v-pre>null</code>和<code v-pre>undefined</code> 不会相互转换，相等</li>
<li>有数字类型 和对象相比 对象用<code v-pre>valueof</code> 转换成原始值进行比较</li>
<li>其他情况 一律返回 <code v-pre>false</code></li>
</ul>
</li>
</ul>
</li>
</ul>
<h4 id="不会冒泡的事件有哪些-简单的-mouseover-mouseout-与-mouseenter-mouseleave-的区别与联系" tabindex="-1"><a class="header-anchor" href="#不会冒泡的事件有哪些-简单的-mouseover-mouseout-与-mouseenter-mouseleave-的区别与联系" aria-hidden="true">#</a> 不会冒泡的事件有哪些（简单的：mouseover/mouseout 与 mouseenter/mouseleave 的区别与联系）</h4>
<ul>
<li>
<p><code v-pre>scoll</code></p>
</li>
<li>
<p><code v-pre>blur &amp; focus</code></p>
</li>
<li>
<p><code v-pre>Media 事件</code></p>
</li>
<li>
<p><code v-pre>mouseLeave &amp; mouseenter</code></p>
<ul>
<li><code v-pre>mouseenter</code>和<code v-pre>mouseleave</code>只有离开该元素时才会触发，如果有子元素的话，鼠标移入子元素，还算是在该元素中，所以不会触发；</li>
<li><code v-pre>mouseover</code>和<code v-pre>mouseout</code>是只要有进入和离开就会出触发，无论是从父元素到子元素还是子元素到父元素，或者是只对父元素进行操作（换句话说，会触发<code v-pre>mouseenter</code>和<code v-pre>mouseleave</code>的时候一定会触发<code v-pre>mouseover</code>和<code v-pre>mouseout</code>）</li>
</ul>
<p><strong>注意:</strong> <code v-pre>mouseenter/mouseleve</code> 不会出现冒泡事件，但是<code v-pre>mouseover/mouseout</code> 会出现冒泡事件</p>
</li>
</ul>
<h4 id="手写实现bind-手写实现new" tabindex="-1"><a class="header-anchor" href="#手写实现bind-手写实现new" aria-hidden="true">#</a> 手写实现bind，手写实现new</h4>
<ul>
<li>
<font color='blue'>**`bind实现`**</font>
<blockquote>
<p><code v-pre>bind()</code> 方法创建一个新的函数，在<code v-pre>bind()</code> 被调用时，这个新函数的<code v-pre>this</code> 被指定为<code v-pre>bind()</code> 的第一个参数，而其余参数将作为新函数的参数 供调用时使用</p>
</blockquote>
<p><code v-pre>bind</code> 方法与 <code v-pre>call/apply</code> 最大的不同就是前者返回一个绑定上下文的<strong>函数</strong>，而后两者是<strong>直接执行</strong>了函数</p>
<ul>
<li>
<p>特性:</p>
<ul>
<li>指定<code v-pre>this</code></li>
<li>传入参数</li>
<li>返回一个函数</li>
<li>柯里化</li>
</ul>
</li>
<li>
<p>通过修改返回函数的原型实现：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">bind</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 调用 bind 的不是函数，需要抛出异常</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token keyword">this</span> <span class="token operator">!==</span> <span class="token string">"function"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">"Function.prototype.bind - what is trying to be bound is not callable"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// this 指向调用者</span>
    <span class="token keyword">var</span> self <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token comment">// 实现第2点，因为第1个参数是指定的this,所以只截取第1个之后的参数</span>
    <span class="token keyword">var</span> args <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arguments<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token comment">// 创建一个空对象</span>
    <span class="token keyword">var</span> <span class="token function-variable function">fNOP</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    
    <span class="token comment">// 实现第3点,返回一个函数</span>
    <span class="token keyword">var</span> <span class="token function-variable function">fBound</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 实现第4点，获取 bind 返回函数的参数</span>
        <span class="token keyword">var</span> bindArgs <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 然后同传入参数合并成一个参数数组，并作为 self.apply() 的第二个参数</span>
        <span class="token keyword">return</span> <span class="token function">self</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token keyword">instanceof</span> <span class="token class-name">fNOP</span> <span class="token operator">?</span> <span class="token keyword">this</span> <span class="token operator">:</span> context<span class="token punctuation">,</span> args<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>bindArgs<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 注释1</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 注释2</span>
    <span class="token comment">// 空对象的原型指向绑定函数的原型</span>
    fNOP<span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>prototype<span class="token punctuation">;</span>
    <span class="token comment">// 空对象的实例赋值给 fBound.prototype</span>
    fBound<span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fNOP</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> fBound<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<font color='blue'>**`new`**实现</font>
<blockquote>
<p><code v-pre>new</code> 运算符：创建一个用户定义的对象类型的实例或具有构造函数的内置对象的实例</p>
</blockquote>
<ul>
<li>
<p>**<code v-pre>new</code>**关键字会进行如下的操作:</p>
<ul>
<li>创建一个空的简单<code v-pre>JavaScript</code> 对象(即<code v-pre>{}</code>)</li>
<li>链接该对象(即设置该对象的构造函数) 到另外一个对象</li>
<li>将步骤1 新创建的对象作为<code v-pre>this</code>的上下文</li>
<li>如果该函数没有返回对象，则返回<code v-pre>this</code></li>
</ul>
</li>
<li>
<p>手写优化<code v-pre>new</code> 实现:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 优化后 new 实现</span>
<span class="token keyword">function</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 1、获得构造函数，同时删除 arguments 中第一个参数</span>
  Con <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 2、创建一个空的对象并链接到原型，obj 可以访问构造函数原型中的属性</span>
  <span class="token keyword">let</span> obj <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token class-name">Con</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 3、绑定 this 实现继承，obj 可以访问到构造函数中的属性</span>
  <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token function">Con</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 4、优先返回构造函数返回的对象</span>
  <span class="token keyword">return</span> ret <span class="token keyword">instanceof</span> <span class="token class-name">Object</span> <span class="token operator">?</span> ret <span class="token operator">:</span> obj<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
<h4 id="柯里化理解-手写" tabindex="-1"><a class="header-anchor" href="#柯里化理解-手写" aria-hidden="true">#</a> 柯里化理解，手写</h4>
<blockquote>
<p><strong>柯里化就是把具有较多参数的函数转换成具有较少参数的函数的过程。</strong></p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code> <span class="token keyword">function</span> <span class="token function">curry</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">var</span> length <span class="token operator">=</span> fn<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
   args <span class="token operator">=</span> args <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
   <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>rest</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">var</span> _args <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>args<span class="token punctuation">,</span> <span class="token operator">...</span>rest<span class="token punctuation">]</span><span class="token punctuation">;</span>
     <span class="token keyword">return</span> _args<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> length
       <span class="token operator">?</span> <span class="token function">curry</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> fn<span class="token punctuation">,</span> _args<span class="token punctuation">)</span>
     <span class="token operator">:</span> <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> _args<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">var</span> fn <span class="token operator">=</span> <span class="token function">curry</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">+</span> b <span class="token operator">+</span> c<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token function">fn</span><span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">,</span> <span class="token string">'b'</span><span class="token punctuation">,</span> <span class="token string">'c'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// abc</span>
 <span class="token function">fn</span><span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">,</span> <span class="token string">'b'</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token string">'c'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// abc</span>
 <span class="token function">fn</span><span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token string">'b'</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token string">'c'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// abc</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>工具函数的意义：</p>
<p><strong>利用闭包将函数的参数存储起来，等参数达到一定数量时执行函数</strong></p>
<h4 id="promise" tabindex="-1"><a class="header-anchor" href="#promise" aria-hidden="true">#</a> Promise</h4>
<blockquote>
<p><code v-pre>Promise</code> 就是一个容器，里面保存着某个未来才会结束的事件的结果</p>
</blockquote>
<ul>
<li>
<p><code v-pre>Promise</code> 对象的两个特点:</p>
<ul>
<li>对象的状态不受外界影响。有三种状态:<code v-pre>pending</code>（进行中），<code v-pre>fulilled</code>（已成功）,<code v-pre>rejected</code>（已失败）</li>
<li>一旦状态改变，就不会再变，任何时候都可以得到这个结果</li>
</ul>
</li>
<li>
<p><code v-pre>Promise</code> 的缺点:</p>
<ul>
<li>无法取消<code v-pre>Promise</code> ,一旦新建它就会立即执行，无法中途取消</li>
<li>如果不设置回调函数,<code v-pre>Promise</code> 内部抛出的错误，不会反应到外部</li>
<li>当处于<code v-pre>pending</code> 状态时，无法得知目前进展到哪一阶段</li>
</ul>
</li>
<li>
<p>手写<code v-pre>Promise：</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 三种状态</span>
<span class="token keyword">const</span> <span class="token constant">PENDING</span> <span class="token operator">=</span> <span class="token string">"pending"</span>
<span class="token keyword">const</span> <span class="token constant">FULFILLED</span> <span class="token operator">=</span> <span class="token string">"fulfilled"</span>
<span class="token keyword">const</span> <span class="token constant">REJECTED</span> <span class="token operator">=</span> <span class="token string">"rejected"</span>
<span class="token keyword">function</span> <span class="token function">MyPromise</span><span class="token punctuation">(</span><span class="token parameter">callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> _this <span class="token operator">=</span> <span class="token keyword">this</span>
    _this<span class="token punctuation">.</span>currentState <span class="token operator">=</span> <span class="token constant">PENDING</span> <span class="token comment">// Promise当前的状态</span>
    _this<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token keyword">void</span> <span class="token number">0</span> <span class="token comment">// Promise的值</span>
    <span class="token comment">// 用于保存 then 的回调， 只有当 promise</span>
    <span class="token comment">// 状态为 pending 时才会缓存，并且每个实例至多缓存一个</span>
    _this<span class="token punctuation">.</span>onResolvedCallbacks <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// Promise resolve时的回调函数集</span>
    _this<span class="token punctuation">.</span>onRejectedCallbacks <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// Promise reject时的回调函数集</span>
    _this<span class="token punctuation">.</span><span class="token function-variable function">resolve</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token keyword">instanceof</span> <span class="token class-name">MyPromise</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 如果 value 是个 Promise， 递归执行</span>
            <span class="token keyword">return</span> value<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>_this<span class="token punctuation">.</span>resolve<span class="token punctuation">,</span> _this<span class="token punctuation">.</span>reject<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token comment">// 异步执行，保证顺序执行</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>_this<span class="token punctuation">.</span>currentState <span class="token operator">===</span> <span class="token constant">PENDING</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                _this<span class="token punctuation">.</span>currentState <span class="token operator">=</span> <span class="token constant">FULFILLED</span> <span class="token comment">// 状态管理</span>
                _this<span class="token punctuation">.</span>value <span class="token operator">=</span> value
                _this<span class="token punctuation">.</span>onResolvedCallbacks<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">cb</span> <span class="token operator">=></span> <span class="token function">cb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token comment">// resolve 处理函数</span>
    _this<span class="token punctuation">.</span><span class="token function-variable function">reject</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token comment">// 异步执行，保证顺序执行</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>_this<span class="token punctuation">.</span>currentState <span class="token operator">===</span> <span class="token constant">PENDING</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                _this<span class="token punctuation">.</span>currentState <span class="token operator">=</span> <span class="token constant">REJECTED</span> <span class="token comment">// 状态管理</span>
                _this<span class="token punctuation">.</span>value <span class="token operator">=</span> value
                _this<span class="token punctuation">.</span>onRejectedCallbacks<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">cb</span> <span class="token operator">=></span> <span class="token function">cb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token comment">// reject 处理函数</span>

    <span class="token comment">// 异常处理</span>
    <span class="token comment">// new Promise(() => throw Error('error'))</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token function">callback</span><span class="token punctuation">(</span>_this<span class="token punctuation">.</span>resolve<span class="token punctuation">,</span> _this<span class="token punctuation">.</span>reject<span class="token punctuation">)</span> <span class="token comment">// 执行callback并传入相应的参数</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        _this<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// then 方法接受两个参数，onFulfilled，onRejected，分别为Promise成功或失败的回调</span>
<span class="token class-name">MyPromise</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">then</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">onFulfilled<span class="token punctuation">,</span> onRejected</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> _this <span class="token operator">=</span> <span class="token keyword">this</span>
    <span class="token comment">// 规范 2.2.7，then 必须返回一个新的 promise</span>
    <span class="token keyword">var</span> promise2
    <span class="token comment">// 根据规范 2.2.1 ，onFulfilled、onRejected 都是可选参数</span>
    <span class="token comment">// onFulfilled、onRejected不是函数需要忽略，同时也实现了值穿透</span>
    onFulfilled <span class="token operator">=</span> <span class="token keyword">typeof</span> onFulfilled <span class="token operator">===</span> <span class="token string">'function'</span> <span class="token operator">?</span> <span class="token function-variable function">onFulfilled</span> <span class="token operator">:</span> <span class="token parameter">value</span> <span class="token operator">=></span> value
    onRejected <span class="token operator">=</span> <span class="token keyword">typeof</span> onRejected <span class="token operator">===</span> <span class="token string">'function'</span> <span class="token operator">?</span> <span class="token function-variable function">onRejected</span> <span class="token operator">:</span> <span class="token parameter">error</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token keyword">throw</span> error<span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>_this<span class="token punctuation">.</span>currentState <span class="token operator">===</span> <span class="token constant">FULFILLED</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 如果promise1（此处为self/this）的状态已经确定并且为fulfilled，我们调用onFulfilled</span>
        <span class="token comment">// 如果考虑到有可能throw，所以我们将其包在try/catch块中</span>
        <span class="token keyword">return</span> promise2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyPromise</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                <span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token function">onFulfilled</span><span class="token punctuation">(</span>_this<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
                <span class="token comment">// 如果 onFulfilled 的返回值是一个 Promise 对象，直接取它的结果作为 promise2 的结果</span>
                <span class="token function">resolutionProcedure</span><span class="token punctuation">(</span>promise2<span class="token punctuation">,</span> x<span class="token punctuation">,</span> resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token comment">// 如果出错，以捕获到的错误作为promise2的结果</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 此处实现与FULFILLED相似，区别在使用的是onRejected而不是onFulfilled</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>_this<span class="token punctuation">.</span>currentState <span class="token operator">===</span> <span class="token constant">REJECTED</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> promise2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyPromise</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                <span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token function">onRejected</span><span class="token punctuation">(</span>_this<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
                <span class="token function">resolutionProcedure</span><span class="token punctuation">(</span>promise2<span class="token punctuation">,</span> x<span class="token punctuation">,</span> resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>_this<span class="token punctuation">.</span>currentState <span class="token operator">===</span> <span class="token constant">PENDING</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 如果当前的Promise还处于PENDING状态，我们并不能确定调用onFulfilled还是onRejected</span>
        <span class="token comment">// 只有等待Promise的状态确定后，再做处理</span>
        <span class="token comment">// 所以我们需要把我们的两种情况的处理逻辑做成callback放入promise1（此处即_this/this）的回调数组内</span>
        <span class="token comment">// 处理逻辑和以上相似</span>
        <span class="token keyword">return</span> promise2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyPromise</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            _this<span class="token punctuation">.</span>onResolvedCallbacks<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">try</span> <span class="token punctuation">{</span>
                    <span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token function">onFulfilled</span><span class="token punctuation">(</span>_this<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
                    <span class="token function">resolutionProcedure</span><span class="token punctuation">(</span>promise2<span class="token punctuation">,</span> x<span class="token punctuation">,</span> resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span>
                <span class="token punctuation">}</span> <span class="token keyword">catch</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
            _this<span class="token punctuation">.</span>onRejectedCallbacks<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">try</span> <span class="token punctuation">{</span>
                    <span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token function">onRejected</span><span class="token punctuation">(</span>_this<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
                    <span class="token function">resolutionProcedure</span><span class="token punctuation">(</span>promise2<span class="token punctuation">,</span> x<span class="token punctuation">,</span> resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span>
                <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 规范 2.3</span>
    <span class="token comment">/*
    resolutionProcedure函数即为根据x的值来决定promise2的状态的函数
    也即标准中的[Promise Resolution Procedure](https://promisesaplus.com/#point-47)
    x 为 promise2 = promise1.then(onFulfilled, onRejected)里onFulfilled/onRejected的返回值
    resolve 和 reject 实际上是 promise2 的executor的两个实参，因为很难挂在其他地方，所以一并传过来。
    相信各位一定可以对照标准转换成代码，这里就只标出代码在标准中对应的位置，只在必要的地方做一些解释。
    */</span>
    <span class="token keyword">function</span> <span class="token function">resolutionProcedure</span><span class="token punctuation">(</span><span class="token parameter">promise2<span class="token punctuation">,</span> x<span class="token punctuation">,</span> resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 规范 2.3.1，x 不能和 promise2 相同，避免循环引用</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>promise2 <span class="token operator">===</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token function">reject</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span><span class="token string">"Chaining cycle detected for promise!"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 规范 2.3.2</span>
        <span class="token comment">// 如果 x 为 Promise，状态为 pending 需要继续等待否则执行</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token keyword">instanceof</span> <span class="token class-name">MyPromise</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 2.3.2.1 如果x为pending状态，promise必须保持pending状态，直到x为fulfilled/rejected</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>x<span class="token punctuation">.</span>currentState <span class="token operator">===</span> <span class="token constant">PENDING</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                x<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token comment">// 再次调用该函数是为了确认 x resolve 的</span>
                    <span class="token comment">// 参数是什么类型，如果是基本类型就再次 resolve</span>
                    <span class="token comment">// 把值传给下个 then</span>
                    <span class="token function">resolutionProcedure</span><span class="token punctuation">(</span>promise2<span class="token punctuation">,</span> value<span class="token punctuation">,</span> resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span> reject<span class="token punctuation">)</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token comment">// 但如果这个promise的状态已经确定了，那么它肯定有一个正常的值，而不是一个thenable，所以这里可以取它的状态</span>
                x<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">let</span> called <span class="token operator">=</span> <span class="token boolean">false</span>
        <span class="token comment">// 规范 2.3.3，判断 x 是否为对象或函数</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">!==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> x <span class="token operator">===</span> <span class="token string">"object"</span> <span class="token operator">||</span> <span class="token keyword">typeof</span> x <span class="token operator">===</span> <span class="token string">"function"</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 规范 2.3.3.2，如果不能取出 then，就 reject</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                <span class="token comment">// 规范2.3.3.1 因为x.then可能是一个getter，这种情况下多次读取就有可能产生副作用</span>
                <span class="token comment">// 既要判断它的类型，又要调用它，这就是两次读取</span>
                <span class="token keyword">let</span> then <span class="token operator">=</span> x<span class="token punctuation">.</span>then
                <span class="token comment">// 规范2.3.3.3，如果 then 是函数，调用 x.then</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> then <span class="token operator">===</span> <span class="token string">"function"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token comment">// 规范 2.3.3.3</span>
                    <span class="token comment">// reject 或 reject 其中一个执行过的话，忽略其他的</span>
                    <span class="token function">then</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>
                        x<span class="token punctuation">,</span>
                        <span class="token parameter">y</span> <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token comment">// 规范 2.3.3.3.1</span>
                            <span class="token keyword">if</span> <span class="token punctuation">(</span>called<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token comment">// 规范 2.3.3.3.3，即这三处谁先执行就以谁的结果为准</span>
                            called <span class="token operator">=</span> <span class="token boolean">true</span>
                            <span class="token comment">// 规范 2.3.3.3.1</span>
                            <span class="token keyword">return</span> <span class="token function">resolutionProcedure</span><span class="token punctuation">(</span>promise2<span class="token punctuation">,</span> y<span class="token punctuation">,</span> resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token parameter">r</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                            <span class="token keyword">if</span> <span class="token punctuation">(</span>called<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token comment">// 规范 2.3.3.3.3，即这三处谁先执行就以谁的结果为准</span>
                            called <span class="token operator">=</span> <span class="token boolean">true</span>
                            <span class="token keyword">return</span> <span class="token function">reject</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">)</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    <span class="token comment">// 规范 2.3.3.4</span>
                    <span class="token function">resolve</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 规范 2.3.3.2</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>called<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token comment">// 规范 2.3.3.3.3，即这三处谁先执行就以谁的结果为准</span>
                called <span class="token operator">=</span> <span class="token boolean">true</span>
                <span class="token keyword">return</span> <span class="token function">reject</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// 规范 2.3.4，x 为基本类型</span>
            <span class="token function">resolve</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// catch 的实现</span>
<span class="token class-name">MyPromise</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">catch</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">onRejected</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> onRejected<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// finally 的实现</span>
<span class="token class-name">MyPromise</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">finally</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> MyPromise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> value
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> MyPromise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> err
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// race</span>
MyPromise<span class="token punctuation">.</span><span class="token function-variable function">race</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">values</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">MyPromise</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        values<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            MyPromise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// all</span>
MyPromise<span class="token punctuation">.</span><span class="token function-variable function">all</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> args <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">MyPromise</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>args<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token keyword">var</span> remaining <span class="token operator">=</span> args<span class="token punctuation">.</span>length
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> args<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">res</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> args<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">function</span> <span class="token function">res</span><span class="token punctuation">(</span><span class="token parameter">i<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>val <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> val <span class="token operator">===</span> <span class="token string">'object'</span> <span class="token operator">||</span> <span class="token keyword">typeof</span> val <span class="token operator">===</span> <span class="token string">'function'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>val <span class="token keyword">instanceof</span> <span class="token class-name">MyPromise</span> <span class="token operator">&amp;&amp;</span> val<span class="token punctuation">.</span>then <span class="token operator">===</span> <span class="token class-name">MyPromise</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>then<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>val<span class="token punctuation">.</span>currentState <span class="token operator">===</span> <span class="token constant">FULFILLED</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">res</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> val<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>val<span class="token punctuation">.</span>currentState <span class="token operator">===</span> <span class="token constant">REJECTED</span><span class="token punctuation">)</span> <span class="token function">reject</span><span class="token punctuation">(</span>val<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
                    val<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token function">res</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> val<span class="token punctuation">)</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span> reject<span class="token punctuation">)</span>
                    <span class="token keyword">return</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    <span class="token keyword">var</span> then <span class="token operator">=</span> val<span class="token punctuation">.</span>then
                    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> then <span class="token operator">===</span> <span class="token string">'function'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token keyword">var</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyPromise</span><span class="token punctuation">(</span><span class="token function">then</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">)</span>
                        p<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                            <span class="token function">res</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> val<span class="token punctuation">)</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span> reject<span class="token punctuation">)</span>
                        <span class="token keyword">return</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            args<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> val
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">--</span>remaining <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">resolve</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// allSettled</span>
MyPromise<span class="token punctuation">.</span><span class="token function-variable function">allSettled</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">promises</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">MyPromise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      promises <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>promises<span class="token punctuation">)</span> <span class="token operator">?</span> promises <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
      <span class="token keyword">let</span> len <span class="token operator">=</span> promises<span class="token punctuation">.</span>length
      <span class="token keyword">const</span> argslen <span class="token operator">=</span> len
      <span class="token comment">// 如果传入的是一个空数组，那么就直接返回一个resolved的空数组promise对象</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>len <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token comment">// 将传入的参数转化为数组，赋给args变量</span>
      <span class="token keyword">let</span> args <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>promises<span class="token punctuation">)</span>
      <span class="token comment">// 计算当前是否所有的 promise 执行完成，执行完毕则resolve</span>
      <span class="token keyword">const</span> <span class="token function-variable function">compute</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">--</span>len <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
          <span class="token function">resolve</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">function</span> <span class="token function">resolvePromise</span><span class="token punctuation">(</span><span class="token parameter">index<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 判断传入的是否是 promise 类型</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>value <span class="token keyword">instanceof</span> <span class="token class-name">MyPromise</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
          <span class="token keyword">const</span> then <span class="token operator">=</span> value<span class="token punctuation">.</span>then
          <span class="token function">then</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            args<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">'fulfilled'</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> val<span class="token punctuation">}</span>
            <span class="token function">compute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            args<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">'rejected'</span><span class="token punctuation">,</span> <span class="token literal-property property">reason</span><span class="token operator">:</span> e <span class="token punctuation">}</span>
            <span class="token function">compute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          args<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">'fulfilled'</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> value<span class="token punctuation">}</span>
          <span class="token function">compute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
   
      <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> argslen<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">resolvePromise</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> args<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h4 id="事件循环-event-loop-浏览器的、node的" tabindex="-1"><a class="header-anchor" href="#事件循环-event-loop-浏览器的、node的" aria-hidden="true">#</a> 事件循环----<code v-pre>Event Loop</code>（浏览器的、node的）</h4>
<p><a href="https://www.ruanyifeng.com/blog/2014/10/event-loop.html" target="_blank" rel="noopener noreferrer">任务队列<ExternalLinkIcon/></a></p>
<ul>
<li>
<p>浏览器的（Event Loop）</p>
<blockquote>
<p>执行栈中的代码执行(同步代码)完成之后，才回去读取<strong>任务队列（异步任务）</strong></p>
</blockquote>
<p><code v-pre>setTimeout(fn,0)</code> 含义是,指定某个任务在主线程最早可得时间执行, 它是在“任务队列”尾部 添加一个事件。</p>
<ul>
<li>HTML5 规定 <code v-pre>setTimer()</code> 第二个参数的最小值不得低于4ms</li>
</ul>
<p><strong>注意：</strong> <code v-pre>setTimerout()</code> 只是将事件插入了<code v-pre>任务队列</code> 必须要等到当前代码（执行栈）执行完，主线程才会执行它指定的回调函数 <font color='red'>要是当前代码耗时过长，有可能要等很久，所以没法保证，回调函数一定会在<code v-pre>setTimeout（）指定的时间执行</code></font></p>
</li>
<li>
<p>node的（Event Loop）</p>
<ul>
<li>运行机制:
<ul>
<li>V8引擎解析<code v-pre>JavaScript</code>脚本</li>
<li>解析后的代码,调用<code v-pre>Node API</code></li>
<li><code v-pre>libuv</code> 库负责 <code v-pre>Node API</code> 的执行 他将不同的任务分配给不同的线程,形成一个 <code v-pre>Event Loop</code> （事件循环），已异步的方式将任务的执行结果返回给V8引擎</li>
<li>V8 引擎在将结果返回给用户</li>
</ul>
</li>
</ul>
<p>除了<code v-pre>setTimeout</code> 和<code v-pre>setInterval</code>这两个方法 <code v-pre>node</code> 还提供了 另外两个方法:<code v-pre>process.nextTick</code> 和<code v-pre>setImmediate</code></p>
<ul>
<li><code v-pre>process.nextTick</code></li>
</ul>
<blockquote>
<p><code v-pre>process.nextTick</code> 可以在当前“执行栈”的尾部-----下一次<code v-pre>Event Loop</code> 之前 --触发回调函数。它指定的任务总是樊胜在所有异步任务之前</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>process<span class="token punctuation">.</span><span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token constant">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  process<span class="token punctuation">.</span><span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token constant">B</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">timeout</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'TIMEOUT FIRED'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
<span class="token comment">// 1</span>
<span class="token comment">// 2</span>
<span class="token comment">// TIMEOUT FIRED</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于<code v-pre>process.nextTick</code>方法指定的回调函数，总是在当前&quot;执行栈&quot;的尾部触发，所以不仅函数A比<code v-pre>setTimeout</code>指定的回调函数<code v-pre>timeout</code>先执行，而且函数B也比<code v-pre>timeout</code>先执行。这说明，如果有多个<code v-pre>process.nextTick</code>语句（不管它们是否嵌套），将全部在当前&quot;执行栈&quot;执行</p>
<ul>
<li>
<p><code v-pre>setImmediate</code></p>
<blockquote>
<p><code v-pre>setImmdiate </code> 则是在当前&quot;任务队列&quot;的尾部添加事件,与<code v-pre>setTimeout(fn,0)</code> 很像</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">setImmediate</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token constant">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">setImmediate</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token constant">B</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">timeout</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'TIMEOUT FIRED'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>setImmediate与setTimeout(fn,0)各自添加了一个回调函数A和timeout，都是在下一次Event Loop触发。那么，哪个回调函数先执行呢？答案是不确定。运行结果可能是1--TIMEOUT FIRED--2，也可能是TIMEOUT FIRED--1--2。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">setImmediate</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token function">setImmediate</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token constant">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setImmediate</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token constant">B</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">timeout</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'TIMEOUT FIRED'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 1</span>
<span class="token comment">// TIMEOUT FIRED</span>
<span class="token comment">// 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：<code v-pre>setImmediate</code>指定的回调函数，总是排在<code v-pre>setTimeout</code>前面。实际上，这种情况只发生在递归调用的时候</p>
</li>
</ul>
</li>
</ul>
<h4 id="编写一个-eventutil-工具类实现事件管理兼容-主要考察-思路" tabindex="-1"><a class="header-anchor" href="#编写一个-eventutil-工具类实现事件管理兼容-主要考察-思路" aria-hidden="true">#</a> 编写一个 EventUtil 工具类实现事件管理兼容(主要考察 思路)</h4>
<h4 id="实现继承的方法有几种-优缺点" tabindex="-1"><a class="header-anchor" href="#实现继承的方法有几种-优缺点" aria-hidden="true">#</a> 实现继承的方法有几种，优缺点</h4>
<ul>
<li>
<p>原型链继承</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">SuperType</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
　　<span class="token keyword">this</span><span class="token punctuation">.</span>property <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
<span class="token class-name">SuperType</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">getSuperValue</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
　　<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>property
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">SubType</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
　　<span class="token keyword">this</span><span class="token punctuation">.</span>subproperty <span class="token operator">=</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
<span class="token comment">// 继承了SuperType //</span>
<span class="token class-name">SubType</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SuperType</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
SubType<span class="token punctuation">.</span>protype<span class="token punctuation">.</span><span class="token function-variable function">getSubValue</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
　　<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>subproperty
<span class="token punctuation">}</span>
<span class="token keyword">var</span> instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SubType</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>构造继承</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">SuperType</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
　　<span class="token keyword">this</span><span class="token punctuation">.</span>colors <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"red"</span><span class="token punctuation">,</span> <span class="token string">"blue"</span><span class="token punctuation">,</span> <span class="token string">"green"</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">SubType</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
　　<span class="token comment">// 继承了SuperType</span>
　　<span class="token function">SuperType</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
　　<span class="token comment">// 只能继承构造函数上的属性</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>实例继承</p>
</li>
<li>
<p>拷贝继承</p>
</li>
<li>
<p>寄生组合继承</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Parent</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">say</span><span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'111'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token class-name">Parent</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">play</span><span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'22'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
 <span class="token keyword">function</span> <span class="token function">Children</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
     <span class="token function">Parent</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
     <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
 <span class="token punctuation">}</span>
<span class="token class-name">Children</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> Objcet<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token class-name">Parent</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span>
<span class="token class-name">Children</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor <span class="token operator">=</span> Children
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h4 id="作用域、作用域链、变量对象、-执行上下文-理解" tabindex="-1"><a class="header-anchor" href="#作用域、作用域链、变量对象、-执行上下文-理解" aria-hidden="true">#</a> 作用域、作用域链、变量对象、 执行上下文 理解</h4>
<h4 id="算法-冒泡、选择排序、插入排序、归并排序、快速排序、堆排序、计数排序、基数排序" tabindex="-1"><a class="header-anchor" href="#算法-冒泡、选择排序、插入排序、归并排序、快速排序、堆排序、计数排序、基数排序" aria-hidden="true">#</a> 算法（冒泡、选择排序、插入排序、归并排序、快速排序、堆排序、计数排序、基数排序）</h4>
<ul>
<li>
<p>冒泡排序</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">bubbleSort</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> len <span class="token operator">=</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>len<span class="token operator">></span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
     <span class="token keyword">return</span> arr
    <span class="token punctuation">}</span>
     <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>len<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> j<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>j<span class="token operator">&lt;</span>len<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">></span>arr<span class="token punctuation">[</span>j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    <span class="token punctuation">[</span>arr<span class="token punctuation">{</span>j<span class="token punctuation">}</span><span class="token punctuation">,</span>arr<span class="token punctuation">[</span>j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>arr<span class="token punctuation">[</span>j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">]</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
   	 <span class="token keyword">return</span> arr
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>选择排序</p>
<blockquote>
<p>首先从原始数组中找到最小的元素，并把该元素放在数组的最前面，然后再从剩下的元素中寻找最小的元素，放在之前最小元素的后面，知道排序完毕。</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">selectSort</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> len <span class="token operator">=</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">var</span> minIndex<span class="token punctuation">,</span> temp<span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		minIndex <span class="token operator">=</span> i<span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span>j <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&lt;</span> arr<span class="token punctuation">[</span>minIndex<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				minIndex <span class="token operator">=</span> j<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		temp <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
		arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>minIndex<span class="token punctuation">]</span><span class="token punctuation">;</span>
		arr<span class="token punctuation">[</span>minIndex<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> arr<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>插入排序</p>
<blockquote>
<p>通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">InsertionSort</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> len <span class="token operator">=</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    
    
    
    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>归并排序</p>
</li>
<li>
<p>快速排序</p>
</li>
<li>
<p>堆排序</p>
</li>
<li>
<p>计数排序</p>
</li>
<li>
<p>基数排序</p>
</li>
</ul>
<h2 id="vue方面-以下是由易到难" tabindex="-1"><a class="header-anchor" href="#vue方面-以下是由易到难" aria-hidden="true">#</a> vue方面（以下是由易到难）</h2>
<h4 id="v-if和v-show" tabindex="-1"><a class="header-anchor" href="#v-if和v-show" aria-hidden="true">#</a> v-if和v-show</h4>
<ul>
<li><code v-pre>v-if</code> 是通过控制节点的存在与否来控制元素的显隐</li>
<li><code v-pre>v-show</code> 是通过设置DOM元素的<code v-pre>display</code> 样式</li>
</ul>
<h4 id="v-if和v-for优先级" tabindex="-1"><a class="header-anchor" href="#v-if和v-for优先级" aria-hidden="true">#</a> v-if和v-for优先级</h4>
<ul>
<li>v-for比v-if优先，如果每一次都需要遍历整个数组，将会影响速度</li>
</ul>
<h4 id="生命周期-钩子函数-各自的作用" tabindex="-1"><a class="header-anchor" href="#生命周期-钩子函数-各自的作用" aria-hidden="true">#</a> 生命周期（钩子函数）各自的作用</h4>
<ul>
<li><code v-pre>beforeCreate</code>  创建前的状态，初始化事件和生命周期。</li>
<li><code v-pre>created</code>创建完毕状态Init (初始化) injections (依赖注入) &amp; reactivity (开始响应)。</li>
<li><code v-pre>beforeMount</code> 挂载前状态， 是否有元素el，是否有模板，是否渲染到了函数内，是否作为模板进行了<code v-pre>outerHTML</code>渲染到了页面，向虚拟DOM上挂载的过程，并且还是把我们的‘#app’生成虚拟DOM，生成完毕后并渲染到view层。</li>
<li><code v-pre>mounted </code>挂载结束状态，渲染到真正的DOM。</li>
<li><code v-pre>beforeUpdate</code>可以拿到<code v-pre>Vue</code>实例化改变前的状态。</li>
<li><code v-pre>Updated</code>拿到变动完成的状态。</li>
<li><code v-pre>beforeDestroy</code>消亡前的状态。</li>
<li><code v-pre>destroyed</code>实例化或组件被摧毁消亡。</li>
</ul>
<h4 id="key的作用" tabindex="-1"><a class="header-anchor" href="#key的作用" aria-hidden="true">#</a> key的作用</h4>
<ul>
<li><strong>key的作用主要是为了高效的更新虚拟DOM。<strong>另外<code v-pre>vue</code>中在使用</strong>相同标签名元素的过渡切换</strong>时，也会使用到key属性，其目的也是为了让<code v-pre>vue</code>可以区分它们，否则<code v-pre>vue</code>只会替换其内部属性而不会触发过渡效果</li>
</ul>
<h4 id="delete和vue-delete删除数组的区别" tabindex="-1"><a class="header-anchor" href="#delete和vue-delete删除数组的区别" aria-hidden="true">#</a> delete和<code v-pre>Vue.delete</code>删除数组的区别</h4>
<ul>
<li>
<p><code v-pre>delete</code></p>
<ul>
<li>只是被删除的元素变成了<code v-pre>empty/undefined</code> 其他元素的键值不变</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> aa <span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span>
<span class="token keyword">delete</span> aa<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>
<span class="token comment">//[1,empty,3,4]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><code v-pre>Vue.delete</code></p>
<ul>
<li>**<code v-pre>Vue.delete</code>**直接删除了数组 <strong>改变了数组的键值</strong>。</li>
</ul>
</li>
</ul>
<h4 id="重新的数组方法有哪几个-为什么重写" tabindex="-1"><a class="header-anchor" href="#重新的数组方法有哪几个-为什么重写" aria-hidden="true">#</a> 重新的数组方法有哪几个，为什么重写</h4>
<ul>
<li>
<p><code v-pre>push、pop、shift、unshift、splice、sort、reverse</code>七个</p>
<blockquote>
<p>重写方法在实现时除了将数组方法名对应的原始方法调用一遍并将执行结果返回外，还通过执行<code v-pre>ob.dep.notify()</code>将当前数组的变更通知给其订阅者，这样当使用重写后方法改变数组后，数组订阅者会将这边变化更新到页面中</p>
</blockquote>
</li>
</ul>
<h4 id="set的使用" tabindex="-1"><a class="header-anchor" href="#set的使用" aria-hidden="true">#</a> $set的使用</h4>
<h4 id="父子组件生命周期顺序-渲染、更新、销毁" tabindex="-1"><a class="header-anchor" href="#父子组件生命周期顺序-渲染、更新、销毁" aria-hidden="true">#</a> 父子组件生命周期顺序（渲染、更新、销毁）</h4>
<h4 id="computed和watch" tabindex="-1"><a class="header-anchor" href="#computed和watch" aria-hidden="true">#</a> computed和watch</h4>
<ul>
<li><strong>计算属性computed</strong>
<ul>
<li>支持缓存，只有依赖数据发生改变，才会重新进行计算</li>
<li>不支持异步，当<code v-pre>computed</code>内有异步操作时无效，无法监听数据的变化</li>
<li><code v-pre>computed</code> 属性值会默认走缓存，计算属性是基于它们的响应式依赖进行缓存的，也就是基于data中声明过或者父组件传递的props中的数据通过计算得到的值</li>
<li>如果一个属性是由其他属性计算而来的，这个属性依赖其他属性，是一个多对一或者一对一，一般用<code v-pre>computed</code></li>
<li>如果<code v-pre>computed</code>属性属性值是函数，那么默认会走<code v-pre>get</code>方法；函数的返回值就是属性的属性值；在<code v-pre>computed</code>中的，属性都有一个get和一个set方法，当数据变化时，调用set方法。</li>
</ul>
</li>
<li><strong>侦听属性watch</strong>
<ul>
<li>不支持缓存，数据变，直接会触发相应的操作；</li>
<li><code v-pre>watch</code>支持异步；</li>
<li>监听的函数接收两个参数，第一个参数是最新的值；第二个参数是输入之前的值；</li>
<li>当一个属性发生变化时，需要执行对应的操作；一对多；</li>
<li>监听数据必须是data中声明过或者父组件传递过来的props中的数据，当数据变化时，触发其他操作，函数有两个参数，
<ul>
<li>immediate：组件加载立即触发回调函数执行，</li>
<li>deep: 深度监听，为了发现<strong>对象内部值</strong>的变化，复杂类型的数据时使用，例如数组中的对象内容的改变，注意监听数组的变动不需要这么做。注意：deep无法监听到数组的变动和对象的新增，参考vue数组变异,只有以响应式的方式触发才会被监听到。</li>
</ul>
</li>
</ul>
</li>
</ul>
<h4 id="route-和-router-的区别" tabindex="-1"><a class="header-anchor" href="#route-和-router-的区别" aria-hidden="true">#</a> $route 和 $router 的区别</h4>
<ul>
<li>
<p><code v-pre>$router</code></p>
<blockquote>
<p><code v-pre>router</code> 是<code v-pre>VueRouter</code>的一个对象，通过<code v-pre>Vue.use(VueRouter)</code>和<code v-pre>VueRouter</code>构造函数得到一个router的实例对象，这个对象中是一个全局的对象，他包含了所有的路由包含了许多关键的对象和属性。</p>
</blockquote>
</li>
<li>
<p><code v-pre>$route</code></p>
<blockquote>
<p><code v-pre>route</code>是一个跳转的路由对象，每一个路由都会有一个<code v-pre>route</code>对象，是一个局部的对象，可以获取对应的<code v-pre>name</code>,<code v-pre>path</code>,<code v-pre>params</code>,<code v-pre>query</code>等</p>
</blockquote>
</li>
</ul>
<h4 id="nexttick理解-原理" tabindex="-1"><a class="header-anchor" href="#nexttick理解-原理" aria-hidden="true">#</a> $nextTick理解/原理</h4>
<ul>
<li><strong><font color='red'><code v-pre>VUE</code> 对内部异步队列方法 </font></strong>
<ul>
<li><code v-pre>Promise.then</code></li>
<li><code v-pre>MutationObserver</code></li>
<li><code v-pre>setImmerdiate</code></li>
<li><code v-pre>setTimeOut(fn,0)</code></li>
</ul>
</li>
</ul>
<h4 id="vue中双向数据绑定是如何实现的" tabindex="-1"><a class="header-anchor" href="#vue中双向数据绑定是如何实现的" aria-hidden="true">#</a> Vue中双向数据绑定是如何实现的</h4>
<h4 id="组件通信有哪几种" tabindex="-1"><a class="header-anchor" href="#组件通信有哪几种" aria-hidden="true">#</a> 组件通信有哪几种</h4>
<h4 id="mvvm-框架是什么" tabindex="-1"><a class="header-anchor" href="#mvvm-框架是什么" aria-hidden="true">#</a> mvvm 框架是什么</h4>
<h4 id="vuex有哪几种属性" tabindex="-1"><a class="header-anchor" href="#vuex有哪几种属性" aria-hidden="true">#</a> vuex有哪几种属性？</h4>
<h4 id="vue-的响应式原理" tabindex="-1"><a class="header-anchor" href="#vue-的响应式原理" aria-hidden="true">#</a> Vue 的响应式原理</h4>
<h4 id="vue-diff-原理" tabindex="-1"><a class="header-anchor" href="#vue-diff-原理" aria-hidden="true">#</a> Vue diff 原理</h4>
<ul>
<li>
<p><code v-pre>VUE</code> 怎么更新节点的</p>
<ul>
<li>先根据真实<code v-pre>DOM</code> 生成 虚拟<code v-pre>DOM</code> 树</li>
<li>当虚拟DOM某个节点数据改变后会生成一个新的<code v-pre>VNode</code></li>
<li>然后<code v-pre>Vnode</code>和<code v-pre>oldVnode</code>作对比，发现有不一样的地方就直接修改在真实的DOM上</li>
</ul>
</li>
<li>
<p>diff 的比较方式</p>
<p><strong>在采取<code v-pre>diff</code> 算法比较新旧节点的时候 只会在同层级进行不会跨层比较</strong></p>
<p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/5/19/163776ba7bda2d47~tplv-t2oaga2asx-watermark.awebp" alt="img"></p>
</li>
<li>
<p>diff流程图</p>
<ul>
<li>
<p>当数据发生变化的时候 <code v-pre>set</code>方法会调用<code v-pre>Dep.notify</code>  通知所有的订阅者<code v-pre>Watcher</code> 订阅者就会调用 <code v-pre>patch</code> 跟真实的DOM打补丁,更新相对应的视图</p>
<p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/5/19/163777930be304eb~tplv-t2oaga2asx-watermark.awebp" alt="img"></p>
</li>
</ul>
</li>
</ul>
<h4 id="vue-router-导航守卫有哪些" tabindex="-1"><a class="header-anchor" href="#vue-router-导航守卫有哪些" aria-hidden="true">#</a> Vue-router 导航守卫有哪些</h4>
<ul>
<li>
<p>全局前置守卫</p>
<ul>
<li><code v-pre>router.beforeEach</code></li>
</ul>
</li>
<li>
<p>全局解析守卫</p>
<ul>
<li><code v-pre>router.beforeResolve</code></li>
</ul>
</li>
<li>
<p>全局后置钩子</p>
<ul>
<li><code v-pre>router.afterEach</code></li>
</ul>
</li>
<li>
<p>路由独享的守卫</p>
<ul>
<li><code v-pre>beforeEnter</code></li>
</ul>
</li>
<li>
<p>组件内的守卫</p>
<ul>
<li><code v-pre>beforeRouteEnter</code></li>
<li><code v-pre>beforeRouteUpdate</code> (2.2 新增)</li>
<li><code v-pre>beforeRouteLeave</code></li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> Foo <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">...</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
  <span class="token function">beforeRouteEnter</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 在渲染该组件的对应路由被 confirm 前调用</span>
    <span class="token comment">// 不！能！获取组件实例 `this`</span>
    <span class="token comment">// 因为当守卫执行前，组件实例还没被创建</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">beforeRouteUpdate</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 在当前路由改变，但是该组件被复用时调用</span>
    <span class="token comment">// 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，</span>
    <span class="token comment">// 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。</span>
    <span class="token comment">// 可以访问组件实例 `this`</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">beforeRouteLeave</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 导航离开该组件的对应路由时调用</span>
    <span class="token comment">// 可以访问组件实例 `this`</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h4 id="vue-router完整的导航解析流程" tabindex="-1"><a class="header-anchor" href="#vue-router完整的导航解析流程" aria-hidden="true">#</a> Vue-router完整的导航解析流程</h4>
<ul>
<li>
<p>导航被触发。</p>
</li>
<li>
<p>在失活的组件里调用 <code v-pre>beforeRouteLeave</code> 守卫。</p>
</li>
<li>
<p>调用全局的 <code v-pre>beforeEach</code> 守卫。</p>
</li>
<li>
<p>在重用的组件里调用 <code v-pre>beforeRouteUpdate</code> 守卫 (2.2+)。</p>
</li>
<li>
<p>在路由配置里调用 <code v-pre>beforeEnter</code>。</p>
</li>
<li>
<p>解析异步路由组件。</p>
</li>
<li>
<p>在被激活的组件里调用 <code v-pre>beforeRouteEnter</code>。</p>
</li>
<li>
<p>调用全局的 <code v-pre>beforeResolve</code> 守卫 (2.5+)。</p>
</li>
<li>
<p>导航被确认。</p>
</li>
<li>
<p>调用全局的 <code v-pre>afterEach</code> 钩子。</p>
</li>
<li>
<p>触发 DOM 更新。</p>
</li>
<li>
<p>调用 <code v-pre>beforeRouteEnter</code> 守卫中传给 <code v-pre>next</code> 的回调函数，创建好的组件实例会作为回调函数的参数传入。</p>
</li>
</ul>
<h3 id="react-方面-以下是由易到难" tabindex="-1"><a class="header-anchor" href="#react-方面-以下是由易到难" aria-hidden="true">#</a> react 方面（以下是由易到难）</h3>
<h4 id="state-和-props-区别" tabindex="-1"><a class="header-anchor" href="#state-和-props-区别" aria-hidden="true">#</a> state 和 props 区别</h4>
<h4 id="什么是高阶组件" tabindex="-1"><a class="header-anchor" href="#什么是高阶组件" aria-hidden="true">#</a> 什么是高阶组件</h4>
<h4 id="createelement-和-cloneelement-有什么区别" tabindex="-1"><a class="header-anchor" href="#createelement-和-cloneelement-有什么区别" aria-hidden="true">#</a> createElement 和 cloneElement 有什么区别</h4>
<h4 id="类组件和函数组件之间有什么区别" tabindex="-1"><a class="header-anchor" href="#类组件和函数组件之间有什么区别" aria-hidden="true">#</a> 类组件和函数组件之间有什么区别</h4>
<h4 id="受控组件和非受控组件" tabindex="-1"><a class="header-anchor" href="#受控组件和非受控组件" aria-hidden="true">#</a> 受控组件和非受控组件</h4>
<h4 id="react-hooks-理解-遇到过什么问题" tabindex="-1"><a class="header-anchor" href="#react-hooks-理解-遇到过什么问题" aria-hidden="true">#</a> react hooks 理解（遇到过什么问题）</h4>
<h4 id="生命周期-旧的、新的16-4之后" tabindex="-1"><a class="header-anchor" href="#生命周期-旧的、新的16-4之后" aria-hidden="true">#</a> 生命周期(旧的、新的16.4之后)</h4>
<h4 id="什么是虚拟dom" tabindex="-1"><a class="header-anchor" href="#什么是虚拟dom" aria-hidden="true">#</a> 什么是虚拟DOM</h4>
<h4 id="组件通信有哪几种-1" tabindex="-1"><a class="header-anchor" href="#组件通信有哪几种-1" aria-hidden="true">#</a> 组件通信有哪几种</h4>
<h4 id="列出-redux-的组件" tabindex="-1"><a class="header-anchor" href="#列出-redux-的组件" aria-hidden="true">#</a> 列出 Redux 的组件</h4>
<h4 id="react-diff-原理" tabindex="-1"><a class="header-anchor" href="#react-diff-原理" aria-hidden="true">#</a> react diff 原理</h4>
<h4 id="react-context是什么" tabindex="-1"><a class="header-anchor" href="#react-context是什么" aria-hidden="true">#</a> React context是什么？</h4>
<h4 id="react-fiber是什么" tabindex="-1"><a class="header-anchor" href="#react-fiber是什么" aria-hidden="true">#</a> React Fiber是什么？</h4>
<h3 id="小程序方向" tabindex="-1"><a class="header-anchor" href="#小程序方向" aria-hidden="true">#</a> 小程序方向</h3>
<h4 id="简单描述下微信小程序的相关文件类型-wxss-wxml-js-json" tabindex="-1"><a class="header-anchor" href="#简单描述下微信小程序的相关文件类型-wxss-wxml-js-json" aria-hidden="true">#</a> 简单描述下微信小程序的相关文件类型  wxss wxml js json</h4>
<h4 id="简述微信小程序原理" tabindex="-1"><a class="header-anchor" href="#简述微信小程序原理" aria-hidden="true">#</a> 简述微信小程序原理</h4>
<h4 id="小程序的双向绑定和vue哪里不一样" tabindex="-1"><a class="header-anchor" href="#小程序的双向绑定和vue哪里不一样" aria-hidden="true">#</a> 小程序的双向绑定和vue哪里不一样</h4>
<h4 id="小程序的wxss和css有哪些不一样的地方" tabindex="-1"><a class="header-anchor" href="#小程序的wxss和css有哪些不一样的地方" aria-hidden="true">#</a> 小程序的wxss和css有哪些不一样的地方</h4>
<h4 id="小程序页面间有哪些传递数据的方法" tabindex="-1"><a class="header-anchor" href="#小程序页面间有哪些传递数据的方法" aria-hidden="true">#</a> 小程序页面间有哪些传递数据的方法</h4>
<h4 id="小程序生命周期" tabindex="-1"><a class="header-anchor" href="#小程序生命周期" aria-hidden="true">#</a> 小程序生命周期</h4>
<h4 id="微信小程序的优劣势" tabindex="-1"><a class="header-anchor" href="#微信小程序的优劣势" aria-hidden="true">#</a> 微信小程序的优劣势</h4>
<h4 id="如何实现下拉刷新-上拉加载" tabindex="-1"><a class="header-anchor" href="#如何实现下拉刷新-上拉加载" aria-hidden="true">#</a> 如何实现下拉刷新 上拉加载</h4>
<h4 id="简述小程序的路由跳转有哪些" tabindex="-1"><a class="header-anchor" href="#简述小程序的路由跳转有哪些" aria-hidden="true">#</a> 简述小程序的路由跳转有哪些</h4>
<h4 id="小程序事件传值" tabindex="-1"><a class="header-anchor" href="#小程序事件传值" aria-hidden="true">#</a> 小程序事件传值</h4>
<h4 id="小程序对wx-if-和-hidden使用的理解" tabindex="-1"><a class="header-anchor" href="#小程序对wx-if-和-hidden使用的理解" aria-hidden="true">#</a> 小程序对wx:if 和 hidden使用的理解</h4>
<h4 id="小程序关联微信公众号如何确定用户的唯一性" tabindex="-1"><a class="header-anchor" href="#小程序关联微信公众号如何确定用户的唯一性" aria-hidden="true">#</a> 小程序关联微信公众号如何确定用户的唯一性</h4>
</div></template>
