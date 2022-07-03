import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";import{r as e,o as p,c as d,a as t,d as u,e as s,b as n}from"./app.28c91e0e.js";const i={},l=s(`<h1 id="fastapi" tabindex="-1"><a class="header-anchor" href="#fastapi" aria-hidden="true">#</a> FastAPI</h1><h2 id="_1-\u{1F680}\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#_1-\u{1F680}\u5B89\u88C5" aria-hidden="true">#</a> 1. \u{1F680}\u5B89\u88C5</h2><blockquote><p>\u{1F4CC}<strong>fastapi\u4E2D\u6587\u6587\u6863</strong></p><p>https://fastapi.tiangolo.com/zh/tutorial/first-steps/</p></blockquote><ul><li>\u4F7F\u7528<strong>pip</strong>\u5305\u7BA1\u7406\u5DE5\u5177\u5B89\u88C5\uFF1A</li></ul><div class="language-powershell ext-powershell line-numbers-mode"><pre class="language-powershell"><code>$ pip install fastapi<span class="token namespace">[all]</span> <span class="token operator">/</span><span class="token operator">/</span> \u5176\u4E2D\u5305\u62EC\u4E86fastapi \u548C\u670D\u52A1\u5668 uvicorn
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u4E5F\u53EF\u4EE5\u5206\u5F00\u5B89\u88C5\uFF1A</li></ul><div class="language-powershell ext-powershell line-numbers-mode"><pre class="language-powershell"><code>$ pip install fastapi
$ pip install uvicorn<span class="token namespace">[standard]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-\u{1F36A}demo" tabindex="-1"><a class="header-anchor" href="#_2-\u{1F36A}demo" aria-hidden="true">#</a> 2. \u{1F36A}demo</h2><h3 id="_2-1-\u9879\u76EE\u7684\u521B\u5EFA\u548C\u8FD0\u884C" tabindex="-1"><a class="header-anchor" href="#_2-1-\u9879\u76EE\u7684\u521B\u5EFA\u548C\u8FD0\u884C" aria-hidden="true">#</a> 2.1 \u9879\u76EE\u7684\u521B\u5EFA\u548C\u8FD0\u884C</h3><ul><li>\u5728vs code\u4E2D\u65B0\u5EFA<code>main.py</code>\u6587\u4EF6</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">from</span> fastapi <span class="token keyword">import</span> FastAPI

app <span class="token operator">=</span> FastAPI<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>get</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">root</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token string">&quot;message&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Hello World&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;code&quot;</span><span class="token punctuation">:</span> <span class="token number">200</span><span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5728\u7EC8\u7AEF\u8F93\u51FA\u4EE5\u4E0B\u547D\u4EE4\u8FD0\u884C\u670D\u52A1\u5668</li></ul><div class="language-powershell ext-powershell line-numbers-mode"><pre class="language-powershell"><code>$ uvicorn main:app <span class="token operator">--</span>reload

<span class="token string">&#39;&#39;&#39; \u8F93\u51FA\u5982\u4E0B\u7ED3\u679C\u5219\u8868\u793A\u542F\u52A8\u6210\u529F  &#39;&#39;&#39;</span>
INFO:     Will watch <span class="token keyword">for</span> changes in these directories: <span class="token punctuation">[</span><span class="token string">&#39;F:\\\\python\u6570\u636E\u5904\u7406\\\\fastAPI&#39;</span><span class="token punctuation">]</span>
INFO:     Uvicorn running on http:<span class="token operator">/</span><span class="token operator">/</span>127<span class="token punctuation">.</span>0<span class="token punctuation">.</span>0<span class="token punctuation">.</span>1:8000 <span class="token punctuation">(</span>Press CTRL+C to quit<span class="token punctuation">)</span>
INFO:     Started reloader <span class="token keyword">process</span> <span class="token punctuation">[</span>10320<span class="token punctuation">]</span> <span class="token keyword">using</span> watchgod
WARNING:  The <span class="token operator">--</span>reload flag should not be used in production on Windows<span class="token punctuation">.</span>
ERROR:    Error loading ASGI app<span class="token punctuation">.</span> Could not import module <span class="token string">&quot;main&quot;</span><span class="token punctuation">.</span>
INFO:     Stopping reloader <span class="token keyword">process</span> <span class="token punctuation">[</span>10320<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD0\u884C\u6210\u529F\u540E\uFF0C\u5728\u8F93\u51FA\u4E2D\u4F1A\u6709\u4E0B\u9762\u8FD9\u6837\u4E00\u884C\u4FE1\u606F\uFF1A</p><div class="language-powershell ext-powershell line-numbers-mode"><pre class="language-powershell"><code>INFO:     Uvicorn running on http:<span class="token operator">/</span><span class="token operator">/</span>127<span class="token punctuation">.</span>0<span class="token punctuation">.</span>0<span class="token punctuation">.</span>1:8000 <span class="token punctuation">(</span>Press CTRL+C to quit<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8BE5\u884C\u663E\u793A\u4E86\u4F60\u7684\u5E94\u7528\u5728\u672C\u673A\u6240\u63D0\u4F9B\u670D\u52A1\u7684URL\u5730\u5740\u3002</p><hr><h3 id="_2-2-\u67E5\u770B\u63A5\u53E3\u548C\u63A5\u53E3\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#_2-2-\u67E5\u770B\u63A5\u53E3\u548C\u63A5\u53E3\u6587\u6863" aria-hidden="true">#</a> 2.2 \u67E5\u770B\u63A5\u53E3\u548C\u63A5\u53E3\u6587\u6863</h3>`,18),r=n("\u6253\u5F00\u6D4F\u89C8\u5668\u8BBF\u95EE "),c={href:"http://127.0.0.1:8000/",target:"_blank",rel:"noopener noreferrer"},q=n("http://127.0.0.1:8000"),k=n("\uFF0C\u53EF\u4EE5\u770B\u5230\u5982\u4E0BJSON\u6570\u636E\uFF1A"),h=s(`<div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span><span class="token property">&quot;message&quot;</span><span class="token operator">:</span><span class="token string">&quot;Hello World&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;code&quot;</span><span class="token operator">:</span><span class="token number">200</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u4EA4\u4E92\u5F0FAPI\u6587\u6863\uFF1Ahttp://127.0.0.1:8000/docs\u3002</li></ul><p><img src="http://182.61.149.102/fastapi/fastapi.png" alt="image-20220503204502886"></p><h3 id="_2-3-\u8DEF\u5F84\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#_2-3-\u8DEF\u5F84\u53C2\u6570" aria-hidden="true">#</a> 2.3 \u8DEF\u5F84\u53C2\u6570</h3><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>get</span><span class="token punctuation">(</span><span class="token string">&quot;/items/{item_id}&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">read_item</span><span class="token punctuation">(</span>item_id<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token string">&quot;item_id&quot;</span><span class="token punctuation">:</span> item_id<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8DEF\u5F84\u53C2\u6570 <code>item_id</code> \u7684\u503C\u5C06\u4F5C\u4E3A\u53C2\u6570 <code>item_id</code> \u4F20\u9012\u7ED9\u8FD4\u56DE\u503C</p><ul><li>\u8FD0\u884C\u5B9E\u4F8B\u5E76\u8BBF\u95EEhttp://127.0.0.1:8000/items/foo\uFF0C\u5C06\u4F1A\u8FD4\u56DE\u5982\u4E0B<code>JSON</code>\u6570\u636E\uFF1A</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span><span class="token property">&quot;item_id&quot;</span><span class="token operator">:</span><span class="token string">&quot;foo&quot;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2-3-1-\u6709\u7C7B\u578B\u7684\u6570\u636E\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#_2-3-1-\u6709\u7C7B\u578B\u7684\u6570\u636E\u53C2\u6570" aria-hidden="true">#</a> 2.3.1 \u6709\u7C7B\u578B\u7684\u6570\u636E\u53C2\u6570</h4><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>get</span><span class="token punctuation">(</span><span class="token string">&quot;/items/{item_id}&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">read_item</span><span class="token punctuation">(</span>item_id<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token string">&quot;item_id&quot;</span><span class="token punctuation">:</span> item_id<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C<code>item_id</code>\u88AB\u58F0\u660E\u4E3A<code>int</code>\u7C7B\u578B</p><ul><li>\u4F20\u5165\u7684\u8DEF\u5F84\u53C2\u6570\u4E0D\u4E3A<code>int</code>\u65F6\uFF0C\u4F1A\u62A5\u5982\u4E0B\u9519\u8BEF\uFF1A</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;detail&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;loc&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token string">&quot;path&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;item_id&quot;</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;msg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;value is not a valid integer&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;type_error.integer&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-3-2-\u4F7F\u7528\u679A\u4E3E\u7C7B\u578B\u7684\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#_2-3-2-\u4F7F\u7528\u679A\u4E3E\u7C7B\u578B\u7684\u53C2\u6570" aria-hidden="true">#</a> 2.3.2 \u4F7F\u7528\u679A\u4E3E\u7C7B\u578B\u7684\u53C2\u6570</h4><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">from</span> enum <span class="token keyword">import</span> Enum

<span class="token keyword">from</span> fastapi <span class="token keyword">import</span> FastAPI


<span class="token keyword">class</span> <span class="token class-name">ModelName</span><span class="token punctuation">(</span><span class="token builtin">str</span><span class="token punctuation">,</span> Enum<span class="token punctuation">)</span><span class="token punctuation">:</span>
    alexnet <span class="token operator">=</span> <span class="token string">&quot;alexnet&quot;</span>
    resnet <span class="token operator">=</span> <span class="token string">&quot;resnet&quot;</span>
    lenet <span class="token operator">=</span> <span class="token string">&quot;lenet&quot;</span>


app <span class="token operator">=</span> FastAPI<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>get</span><span class="token punctuation">(</span><span class="token string">&quot;/models/{model_name}&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">get_model</span><span class="token punctuation">(</span>model_name<span class="token punctuation">:</span> ModelName<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> model_name <span class="token operator">==</span> ModelName<span class="token punctuation">.</span>alexnet<span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token string">&quot;model_name&quot;</span><span class="token punctuation">:</span> model_name<span class="token punctuation">,</span> <span class="token string">&quot;message&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Deep Learning FTW!&quot;</span><span class="token punctuation">}</span>

    <span class="token keyword">if</span> model_name<span class="token punctuation">.</span>value <span class="token operator">==</span> <span class="token string">&quot;lenet&quot;</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token string">&quot;model_name&quot;</span><span class="token punctuation">:</span> model_name<span class="token punctuation">,</span> <span class="token string">&quot;message&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;LeCNN all the images&quot;</span><span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token string">&quot;model_name&quot;</span><span class="token punctuation">:</span> model_name<span class="token punctuation">,</span> <span class="token string">&quot;message&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Have some residuals&quot;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-3-3-\u8BF7\u6C42\u4F53" tabindex="-1"><a class="header-anchor" href="#_2-3-3-\u8BF7\u6C42\u4F53" aria-hidden="true">#</a> 2.3.3 \u8BF7\u6C42\u4F53</h4><ul><li>\u53EA\u80FD\u4F20\u9012<code>JSON</code>\u6570\u636E</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">from</span> fastapi <span class="token keyword">import</span> FastAPI
<span class="token keyword">from</span> typing <span class="token keyword">import</span> Optional
<span class="token keyword">from</span> pydantic <span class="token keyword">import</span> BaseModel

app <span class="token operator">=</span> FastAPI<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">class</span> <span class="token class-name">Item</span><span class="token punctuation">(</span>BaseModel<span class="token punctuation">)</span><span class="token punctuation">:</span>
    name<span class="token punctuation">:</span> <span class="token builtin">str</span>
    description<span class="token punctuation">:</span> Optional<span class="token punctuation">[</span><span class="token builtin">str</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">None</span>
    price<span class="token punctuation">:</span> <span class="token builtin">float</span>
    tax<span class="token punctuation">:</span> Optional<span class="token punctuation">[</span><span class="token builtin">float</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">None</span>

<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>post</span><span class="token punctuation">(</span><span class="token string">&quot;/items/&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">create_item</span><span class="token punctuation">(</span>item<span class="token punctuation">:</span> Item<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> item
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-3-4-\u8868\u5355\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#_2-3-4-\u8868\u5355\u6570\u636E" aria-hidden="true">#</a> 2.3.4 \u8868\u5355\u6570\u636E</h4><ul><li>\u53EF\u4EE5\u4F20\u9012<code>FORM</code>\u8868\u5355\u6570\u636E</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">from</span> fastapi <span class="token keyword">import</span> FastAPI<span class="token punctuation">,</span> Form
<span class="token keyword">from</span> pydantic <span class="token keyword">import</span> BaseModel

app <span class="token operator">=</span> FastAPI<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>post</span><span class="token punctuation">(</span><span class="token string">&quot;/login/&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">login</span><span class="token punctuation">(</span>username<span class="token punctuation">:</span> <span class="token builtin">str</span> <span class="token operator">=</span> Form<span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">,</span> password<span class="token punctuation">:</span> <span class="token builtin">str</span> <span class="token operator">=</span> Form<span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token string">&quot;username&quot;</span><span class="token punctuation">:</span> username<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-\u{1F4DA}\u63A5\u53E3\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#_3-\u{1F4DA}\u63A5\u53E3\u6587\u6863" aria-hidden="true">#</a> 3. \u{1F4DA}\u63A5\u53E3\u6587\u6863</h2><blockquote><p>\u63A5\u53E3\u57FA\u51C6\u5730\u5740<code>BserURL:</code><strong>127.0.0.1:8000</strong></p></blockquote><h3 id="_3-1-\u7528\u6237\u76F8\u5173\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#_3-1-\u7528\u6237\u76F8\u5173\u63A5\u53E3" aria-hidden="true">#</a> 3.1 \u7528\u6237\u76F8\u5173\u63A5\u53E3</h3><h4 id="_3-1-1-\u83B7\u53D6\u7528\u6237\u8D44\u6599" tabindex="-1"><a class="header-anchor" href="#_3-1-1-\u83B7\u53D6\u7528\u6237\u8D44\u6599" aria-hidden="true">#</a> 3.1.1 \u83B7\u53D6\u7528\u6237\u8D44\u6599</h4><blockquote><p>\u57FA\u672C\u4FE1\u606F</p></blockquote><ul><li><strong>Path\uFF1A</strong>/api/users/me</li><li>**Method\uFF1A**GET</li></ul><blockquote><p>\u8BF7\u6C42\u53C2\u6570</p></blockquote><p>Header</p><table><thead><tr><th style="text-align:left;">\u53C2\u6570\u540D\u79F0</th><th>\u53C2\u6570\u503C</th><th>\u662F\u5426\u5FC5\u987B</th><th>\u793A\u4F8B</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td style="text-align:left;">Authorization</td><td></td><td>\u662F</td><td>Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDMyODQzNjYsInVzZXJfaWQiOjF9.mLYitrKsn4E4KdQd0CNPugKrH8uQmXEQTlG_JutC8jU</td><td>\u7528\u6237\u4EE4\u724Ctoken\uFF0C\u5FC5\u4F20</td></tr></tbody></table><p>Body</p><table><thead><tr><th>\u540D\u79F0</th><th>\u7C7B\u578B</th><th>\u662F\u5426\u5FC5\u987B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5907\u6CE8</th><th>\u5176\u4ED6\u4FE1\u606F</th></tr></thead><tbody><tr><td>user_id</td><td>integer</td><td>\u5FC5\u987B</td><td></td><td>\u7528\u6237id</td><td></td></tr></tbody></table><blockquote><p>\u8FD4\u56DE\u6570\u636E</p></blockquote><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;phone&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;blockaddress&quot;</span><span class="token operator">:</span> <span class="token string">&quot;fasfasg1sa5g45a4gasg1as5g5as1ga2s1ga5sad&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pokemon&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;avatar&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://s1.ax1x.com/2022/05/07/OQeNjg.png&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;intro&quot;</span><span class="token operator">:</span> <span class="token string">&quot;TA\u8FD8\u4EC0\u4E48\u90FD\u6CA1\u7559\u4E0B~&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;folllow_count&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;fans_count&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>\u540D\u79F0</th><th>\u7C7B\u578B</th><th>\u662F\u5426\u5FC5\u987B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5907\u6CE8</th><th>\u5176\u4ED6\u4FE1\u606F</th></tr></thead><tbody><tr><td>photo</td><td>string</td><td>\u5FC5\u987B</td><td></td><td>\u7528\u6237\u624B\u673A\u53F7</td><td></td></tr><tr><td>id</td><td>integer</td><td>\u5FC5\u987B</td><td></td><td>\u7528\u6237id</td><td></td></tr><tr><td>blockaddress</td><td>string</td><td>\u5FC5\u987B</td><td></td><td>\u7528\u6237\u533A\u5757\u94FE\u5730\u5740</td><td></td></tr><tr><td>name</td><td>string</td><td>\u5FC5\u987B</td><td></td><td>\u7528\u6237\u6635\u79F0</td><td></td></tr><tr><td>avatar</td><td>string</td><td>\u5FC5\u987B</td><td>https://s1.ax1x.com/2022/05/07/OQeNjg.png</td><td>\u7528\u6237\u5934\u50CF</td><td></td></tr><tr><td>intro</td><td>string</td><td>\u5FC5\u987B</td><td>&quot;TA\u8FD8\u4EC0\u4E48\u90FD\u6CA1\u7559\u4E0B~&quot;</td><td>\u7528\u6237\u7B80\u4ECB</td><td></td></tr><tr><td>follow_count</td><td>integer</td><td>\u5FC5\u987B</td><td></td><td>\u5173\u6CE8\u7684\u6570\u76EE</td><td></td></tr><tr><td>fans_count</td><td>integer</td><td>\u5FC5\u987B</td><td></td><td>\u88AB\u5173\u6CE8\u7684\u6570\u76EE\uFF08\u7C89\u4E1D\u6570\u76EE\uFF09</td><td></td></tr></tbody></table><hr><h4 id="_3-1-2-\u66F4\u65B0\u7528\u6237\u8D44\u6599" tabindex="-1"><a class="header-anchor" href="#_3-1-2-\u66F4\u65B0\u7528\u6237\u8D44\u6599" aria-hidden="true">#</a> 3.1.2 \u66F4\u65B0\u7528\u6237\u8D44\u6599</h4><blockquote><p>\u57FA\u672C\u4FE1\u606F</p></blockquote><ul><li><strong>Path\uFF1A</strong>/api/users/me</li><li>**Method\uFF1A**PUT</li></ul><blockquote><p>\u8BF7\u6C42\u53C2\u6570</p></blockquote><p>Header</p><table><thead><tr><th style="text-align:left;">\u53C2\u6570\u540D\u79F0</th><th>\u53C2\u6570\u503C</th><th>\u662F\u5426\u5FC5\u987B</th><th>\u793A\u4F8B</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td style="text-align:left;">Authorization</td><td></td><td>\u662F</td><td>Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDMyODQzNjYsInVzZXJfaWQiOjF9.mLYitrKsn4E4KdQd0CNPugKrH8uQmXEQTlG_JutC8jU</td><td>\u7528\u6237\u4EE4\u724Ctoken\uFF0C\u5FC5\u4F20</td></tr></tbody></table><p>Body</p><table><thead><tr><th></th><th></th><th></th><th></th><th></th><th></th></tr></thead><tbody><tr><td>\u540D\u79F0</td><td>\u7C7B\u578B</td><td>\u662F\u5426\u5FC5\u987B</td><td>\u9ED8\u8BA4\u503C</td><td>\u5907\u6CE8</td><td>\u5176\u4ED6\u4FE1\u606F</td></tr><tr><td>name</td><td>string</td><td>\u975E\u5FC5\u987B</td><td></td><td>\u6635\u79F0</td><td></td></tr><tr><td>avatar</td><td>string</td><td>\u975E\u5FC5\u987B</td><td></td><td>\u5934\u50CF</td><td></td></tr><tr><td>intro</td><td>string</td><td>\u975E\u5FC5\u987B</td><td></td><td>\u4E2A\u4EBA\u4ECB\u7ECD</td><td></td></tr></tbody></table><blockquote><p>\u8FD4\u56DE\u6570\u636E</p></blockquote><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;blockaddress&quot;</span><span class="token operator">:</span> <span class="token string">&quot;fasfasg1sa5g45a4gasg1as5g5as1ga2s1ga5sad&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;intro&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;folllow_count&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;phone&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ddd&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;hashed_password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;$2b$12$6iZtvj45K1bajb6JYLi1Ne3FxwI6ES9HHdiR2rDuFNmozWgJMzLla&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;avatar&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;fans_count&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>\u540D\u79F0</th><th>\u7C7B\u578B</th><th>\u662F\u5426\u5FC5\u987B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5907\u6CE8</th><th>\u5176\u4ED6\u4FE1\u606F</th></tr></thead><tbody><tr><td>status</td><td>int</td><td>\u5FC5\u987B</td><td></td><td>\u72B6\u6001\u7801</td><td></td></tr><tr><td>data</td><td>object</td><td>\u5FC5\u987B</td><td></td><td>\u66F4\u65B0\u540E\u7684\u7528\u6237\u4FE1\u606F</td><td></td></tr></tbody></table><blockquote><p>\u8FD4\u56DE\u72B6\u6001\u7801</p></blockquote><ul><li>401 \u7528\u6237\u4E3A\u767B\u5F55\u8BA4\u8BC1</li><li>201 \u66F4\u65B0\u7528\u6237\u8D44\u6599\u6210\u529F</li></ul><h4 id="_3-1-3-\u4FEE\u6539\u7528\u6237\u5BC6\u7801" tabindex="-1"><a class="header-anchor" href="#_3-1-3-\u4FEE\u6539\u7528\u6237\u5BC6\u7801" aria-hidden="true">#</a> 3.1.3 \u4FEE\u6539\u7528\u6237\u5BC6\u7801</h4><blockquote><p>\u57FA\u672C\u4FE1\u606F</p></blockquote><ul><li><strong>Path\uFF1A</strong>/api/users/pwd</li><li>**Method\uFF1A**PUT</li></ul><blockquote><p>\u8BF7\u6C42\u53C2\u6570</p></blockquote><p>Header</p><table><thead><tr><th style="text-align:left;">\u53C2\u6570\u540D\u79F0</th><th>\u53C2\u6570\u503C</th><th>\u662F\u5426\u5FC5\u987B</th><th>\u793A\u4F8B</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td style="text-align:left;">Authorization</td><td></td><td>\u662F</td><td>Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDMyODQzNjYsInVzZXJfaWQiOjF9.mLYitrKsn4E4KdQd0CNPugKrH8uQmXEQTlG_JutC8jU</td><td>\u7528\u6237\u4EE4\u724Ctoken\uFF0C\u5FC5\u4F20</td></tr></tbody></table><p>Body</p><table><thead><tr><th></th><th></th><th></th><th></th><th></th><th></th></tr></thead><tbody><tr><td>\u540D\u79F0</td><td>\u7C7B\u578B</td><td>\u662F\u5426\u5FC5\u987B</td><td>\u9ED8\u8BA4\u503C</td><td>\u5907\u6CE8</td><td>\u5176\u4ED6\u4FE1\u606F</td></tr><tr><td>password</td><td>string</td><td>\u5FC5\u987B</td><td></td><td>\u65B0\u5BC6\u7801</td><td></td></tr></tbody></table><blockquote><p>\u8FD4\u56DE\u6570\u636E</p></blockquote><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token number">201</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u4FEE\u6539\u7528\u6237\u5BC6\u7801\u6210\u529F&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>\u540D\u79F0</th><th>\u7C7B\u578B</th><th>\u662F\u5426\u5FC5\u987B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5907\u6CE8</th><th>\u5176\u4ED6\u4FE1\u606F</th></tr></thead><tbody><tr><td>status</td><td>int</td><td>\u5FC5\u987B</td><td></td><td>\u72B6\u6001\u7801</td><td></td></tr><tr><td>data</td><td>string</td><td>\u5FC5\u987B</td><td></td><td>\u63D0\u793A\u4FE1\u606F</td><td></td></tr></tbody></table><blockquote><p>\u8FD4\u56DE\u72B6\u6001\u7801</p></blockquote><ul><li>401 \u7528\u6237\u4E3A\u767B\u5F55\u8BA4\u8BC1</li><li>201 \u4FEE\u6539\u7528\u6237\u5BC6\u7801\u6210\u529F</li></ul><hr><h3 id="_3-2-\u5361\u7247\u63A5\u53E3\u76F8\u5173\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#_3-2-\u5361\u7247\u63A5\u53E3\u76F8\u5173\u63A5\u53E3" aria-hidden="true">#</a> 3.2 \u5361\u7247\u63A5\u53E3\u76F8\u5173\u63A5\u53E3</h3><h4 id="_3-2-1-\u83B7\u53D6\u5361\u7247\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#_3-2-1-\u83B7\u53D6\u5361\u7247\u4FE1\u606F" aria-hidden="true">#</a> 3.2.1 \u83B7\u53D6\u5361\u7247\u4FE1\u606F</h4><blockquote><p>\u57FA\u672C\u4FE1\u606F</p></blockquote><ul><li><strong>Path\uFF1A</strong>/cards/card_id}</li><li>**Method\uFF1A**GET</li></ul><blockquote><p>\u8BF7\u6C42\u53C2\u6570</p></blockquote><p>Header</p><table><thead><tr><th style="text-align:left;">\u53C2\u6570\u540D\u79F0</th><th>\u53C2\u6570\u503C</th><th>\u662F\u5426\u5FC5\u987B</th><th>\u793A\u4F8B</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td style="text-align:left;">Content-Type</td><td>application/json</td><td>\u662F</td><td></td><td></td></tr></tbody></table><p>Body</p><table><thead><tr><th>\u540D\u79F0</th><th>\u7C7B\u578B</th><th>\u662F\u5426\u5FC5\u987B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5907\u6CE8</th><th>\u5176\u4ED6\u4FE1\u606F</th></tr></thead><tbody><tr><td>card_id</td><td>integer</td><td>\u5FC5\u987B</td><td></td><td>\u5361\u7247id</td><td></td></tr></tbody></table><blockquote><p>\u8FD4\u56DE\u6570\u636E</p></blockquote><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;date_release&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2022-05-08T15:01:58.992000&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;amount&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;owner_id&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>\u540D\u79F0</th><th>\u7C7B\u578B</th><th>\u662F\u5426\u5FC5\u987B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td>title</td><td>string</td><td>\u5FC5\u987B</td><td></td><td>\u6807\u9898</td></tr><tr><td>url</td><td>string</td><td>\u5FC5\u987B</td><td>https://s1.ax1x.com/2022/05/07/OQuSc8.jpg</td><td>\u56FE\u7247url</td></tr><tr><td>author</td><td>string</td><td>\u5FC5\u987B</td><td></td><td>\u4F5C\u8005</td></tr><tr><td>description</td><td>string</td><td>\u5FC5\u987B</td><td></td><td>\u63CF\u8FF0</td></tr><tr><td>date_release</td><td>string</td><td>\u5FC5\u987B</td><td></td><td>\u53D1\u5E03\u65E5\u671F</td></tr><tr><td>amount</td><td>integer</td><td>\u5FC5\u987B</td><td></td><td>\u53D1\u552E\u603B\u91CF</td></tr><tr><td>price</td><td>integer</td><td>\u5FC5\u987B</td><td></td><td>\u53D1\u552E\u4EF7</td></tr><tr><td>owner_id</td><td>integer</td><td>\u5FC5\u987B</td><td></td><td>\u5361\u7247\u62E5\u6709\u8005</td></tr></tbody></table><h4 id="_3-2-2-\u83B7\u53D6\u53D1\u552E\u65E5\u5386\u5361\u7247\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#_3-2-2-\u83B7\u53D6\u53D1\u552E\u65E5\u5386\u5361\u7247\u4FE1\u606F" aria-hidden="true">#</a> 3.2.2 \u83B7\u53D6\u53D1\u552E\u65E5\u5386\u5361\u7247\u4FE1\u606F</h4><blockquote><p>\u57FA\u672C\u4FE1\u606F</p></blockquote><ul><li><strong>Path\uFF1A</strong>/cards/aftertwodays/</li><li>**Method\uFF1A**GET</li></ul><blockquote><p>\u8BF7\u6C42\u53C2\u6570</p></blockquote><p>Header</p><table><thead><tr><th style="text-align:left;">\u53C2\u6570\u540D\u79F0</th><th>\u53C2\u6570\u503C</th><th>\u662F\u5426\u5FC5\u987B</th><th>\u793A\u4F8B</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td style="text-align:left;">Content-Type</td><td>application/json</td><td>\u662F</td><td></td><td></td></tr></tbody></table><p>Body</p><blockquote><p>\u8FD4\u56DE\u6570\u636E</p></blockquote><details><summary>\u70B9\u51FB\u67E5\u770B\u8BE6\u7EC6\u5185\u5BB9</summary><pre><code>
 {
  &quot;today_release&quot;: [
    {
      &quot;title&quot;: &quot;string&quot;,
      &quot;url&quot;: &quot;string&quot;,
      &quot;author&quot;: &quot;string&quot;,
      &quot;description&quot;: &quot;string&quot;,
      &quot;date_release&quot;: &quot;2022-05-10T08:00:05.384000&quot;,
      &quot;amount&quot;: 0,
      &quot;price&quot;: 0,
      &quot;id&quot;: 1,
      &quot;owner_id&quot;: 1
    },
    {
      &quot;title&quot;: &quot;string&quot;,
      &quot;url&quot;: &quot;string&quot;,
      &quot;author&quot;: &quot;string&quot;,
      &quot;description&quot;: &quot;string&quot;,
      &quot;date_release&quot;: &quot;2022-05-10T08:00:05.384000&quot;,
      &quot;amount&quot;: 0,
      &quot;price&quot;: 0,
      &quot;id&quot;: 2,
      &quot;owner_id&quot;: 1
    },
    {
      &quot;title&quot;: &quot;string&quot;,
      &quot;url&quot;: &quot;string&quot;,
      &quot;author&quot;: &quot;string&quot;,
      &quot;description&quot;: &quot;string&quot;,
      &quot;date_release&quot;: &quot;2022-05-10T10:00:05.384000&quot;,
      &quot;amount&quot;: 0,
      &quot;price&quot;: 0,
      &quot;id&quot;: 3,
      &quot;owner_id&quot;: 1
    },
    {
      &quot;title&quot;: &quot;string&quot;,
      &quot;url&quot;: &quot;string&quot;,
      &quot;author&quot;: &quot;string&quot;,
      &quot;description&quot;: &quot;string&quot;,
      &quot;date_release&quot;: &quot;2022-05-10T10:00:05.384000&quot;,
      &quot;amount&quot;: 0,
      &quot;price&quot;: 0,
      &quot;id&quot;: 4,
      &quot;owner_id&quot;: 1
    }
  ],
  &quot;released_cards&quot;: [
    {
      &quot;title&quot;: &quot;string&quot;,
      &quot;url&quot;: &quot;string&quot;,
      &quot;author&quot;: &quot;string&quot;,
      &quot;description&quot;: &quot;string&quot;,
      &quot;date_release&quot;: &quot;2022-05-08T01:05:57.502000&quot;,
      &quot;amount&quot;: 0,
      &quot;price&quot;: 0,
      &quot;id&quot;: 9,
      &quot;owner_id&quot;: 1
    },
    {
      &quot;title&quot;: &quot;string&quot;,
      &quot;url&quot;: &quot;string&quot;,
      &quot;author&quot;: &quot;string&quot;,
      &quot;description&quot;: &quot;string&quot;,
      &quot;date_release&quot;: &quot;2022-05-08T01:05:57.502000&quot;,
      &quot;amount&quot;: 0,
      &quot;price&quot;: 0,
      &quot;id&quot;: 10,
      &quot;owner_id&quot;: 1
    },
    {
      &quot;title&quot;: &quot;string&quot;,
      &quot;url&quot;: &quot;string&quot;,
      &quot;author&quot;: &quot;string&quot;,
      &quot;description&quot;: &quot;string&quot;,
      &quot;date_release&quot;: &quot;2022-05-08T01:05:57.502000&quot;,
      &quot;amount&quot;: 0,
      &quot;price&quot;: 0,
      &quot;id&quot;: 11,
      &quot;owner_id&quot;: 1
    }
  ]
}
  </code></pre></details><table><thead><tr><th>\u540D\u79F0</th><th>\u7C7B\u578B</th><th>\u662F\u5426\u5FC5\u987B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td>after_one8</td><td>List[Card]</td><td>\u5FC5\u987B</td><td></td><td>\u660E\u59298\u70B9\u573A\u7684\u9884\u552E</td></tr><tr><td>after_one12</td><td>List[Card]</td><td>\u5FC5\u987B</td><td></td><td>\u660E\u592912\u70B9\u573A\u7684\u9884\u552E</td></tr><tr><td>after_two8</td><td>List[Card]</td><td>\u5FC5\u987B</td><td></td><td>\u540E\u59298\u70B9\u573A\u7684\u9884\u552E</td></tr><tr><td>after_two12</td><td>List[Card]</td><td>\u5FC5\u987B</td><td></td><td>\u540E\u592912\u70B9\u573A\u7684\u9884\u552E</td></tr></tbody></table><h4 id="_3-2-3-\u83B7\u53D6\u9996\u9875\u6570\u5B57\u85CF\u54C1\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#_3-2-3-\u83B7\u53D6\u9996\u9875\u6570\u5B57\u85CF\u54C1\u6570\u636E" aria-hidden="true">#</a> 3.2.3 \u83B7\u53D6\u9996\u9875\u6570\u5B57\u85CF\u54C1\u6570\u636E</h4><blockquote><p>\u57FA\u672C\u4FE1\u606F</p></blockquote><ul><li><strong>Path\uFF1A</strong>/cards/nfts/</li><li>**Method\uFF1A**GET</li></ul><blockquote><p>\u8BF7\u6C42\u53C2\u6570</p></blockquote><p>Header</p><table><thead><tr><th style="text-align:left;">\u53C2\u6570\u540D\u79F0</th><th>\u53C2\u6570\u503C</th><th>\u662F\u5426\u5FC5\u987B</th><th>\u793A\u4F8B</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td style="text-align:left;">Content-Type</td><td>application/json</td><td>\u662F</td><td></td><td></td></tr></tbody></table><p>Body</p><blockquote><p>\u8FD4\u56DE\u6570\u636E</p></blockquote><details><summary>\u70B9\u51FB\u67E5\u770B\u8BE6\u7EC6\u5185\u5BB9</summary><pre><code>
  {
  &quot;after_one8&quot;: [
    {
      &quot;title&quot;: &quot;string&quot;,
      &quot;url&quot;: &quot;string&quot;,
      &quot;author&quot;: &quot;string&quot;,
      &quot;description&quot;: &quot;string&quot;,
      &quot;date_release&quot;: &quot;2022-05-10T08:00:05.384000&quot;,
      &quot;amount&quot;: 0,
      &quot;price&quot;: 0,
      &quot;id&quot;: 1,
      &quot;owner_id&quot;: 1
    },
    {
      &quot;title&quot;: &quot;string&quot;,
      &quot;url&quot;: &quot;string&quot;,
      &quot;author&quot;: &quot;string&quot;,
      &quot;description&quot;: &quot;string&quot;,
      &quot;date_release&quot;: &quot;2022-05-10T08:00:05.384000&quot;,
      &quot;amount&quot;: 0,
      &quot;price&quot;: 0,
      &quot;id&quot;: 2,
      &quot;owner_id&quot;: 1
    }
  ],
  &quot;after_one12&quot;: [
    {
      &quot;title&quot;: &quot;string&quot;,
      &quot;url&quot;: &quot;string&quot;,
      &quot;author&quot;: &quot;string&quot;,
      &quot;description&quot;: &quot;string&quot;,
      &quot;date_release&quot;: &quot;2022-05-10T10:00:05.384000&quot;,
      &quot;amount&quot;: 0,
      &quot;price&quot;: 0,
      &quot;id&quot;: 3,
      &quot;owner_id&quot;: 1
    },
    {
      &quot;title&quot;: &quot;string&quot;,
      &quot;url&quot;: &quot;string&quot;,
      &quot;author&quot;: &quot;string&quot;,
      &quot;description&quot;: &quot;string&quot;,
      &quot;date_release&quot;: &quot;2022-05-10T10:00:05.384000&quot;,
      &quot;amount&quot;: 0,
      &quot;price&quot;: 0,
      &quot;id&quot;: 4,
      &quot;owner_id&quot;: 1
    }
  ],
  &quot;after_two8&quot;: [
    {
      &quot;title&quot;: &quot;string&quot;,
      &quot;url&quot;: &quot;string&quot;,
      &quot;author&quot;: &quot;string&quot;,
      &quot;description&quot;: &quot;string&quot;,
      &quot;date_release&quot;: &quot;2022-05-11T08:00:05.384000&quot;,
      &quot;amount&quot;: 0,
      &quot;price&quot;: 0,
      &quot;id&quot;: 5,
      &quot;owner_id&quot;: 1
    },
    {
      &quot;title&quot;: &quot;string&quot;,
      &quot;url&quot;: &quot;string&quot;,
      &quot;author&quot;: &quot;string&quot;,
      &quot;description&quot;: &quot;string&quot;,
      &quot;date_release&quot;: &quot;2022-05-11T08:00:05.384000&quot;,
      &quot;amount&quot;: 0,
      &quot;price&quot;: 0,
      &quot;id&quot;: 6,
      &quot;owner_id&quot;: 1
    }
  ],
  &quot;after_two12&quot;: [
    {
      &quot;title&quot;: &quot;string&quot;,
      &quot;url&quot;: &quot;string&quot;,
      &quot;author&quot;: &quot;string&quot;,
      &quot;description&quot;: &quot;string&quot;,
      &quot;date_release&quot;: &quot;2022-05-11T10:00:05.384000&quot;,
      &quot;amount&quot;: 0,
      &quot;price&quot;: 0,
      &quot;id&quot;: 7,
      &quot;owner_id&quot;: 1
    },
    {
      &quot;title&quot;: &quot;string&quot;,
      &quot;url&quot;: &quot;string&quot;,
      &quot;author&quot;: &quot;string&quot;,
      &quot;description&quot;: &quot;string&quot;,
      &quot;date_release&quot;: &quot;2022-05-11T10:00:05.384000&quot;,
      &quot;amount&quot;: 0,
      &quot;price&quot;: 0,
      &quot;id&quot;: 8,
      &quot;owner_id&quot;: 1
    }
  ]
}
  </code></pre></details><table><thead><tr><th>\u540D\u79F0</th><th>\u7C7B\u578B</th><th>\u662F\u5426\u5FC5\u987B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td>today_release</td><td>List[Card]</td><td>\u5FC5\u987B</td><td></td><td>\u4ECA\u5929\u6B63\u5728\u53D1\u552E\u7684\u5361\u7247</td></tr><tr><td>released_cards</td><td>List[Card]</td><td>\u5FC5\u987B</td><td></td><td>\u5DF2\u7ECF\u53D1\u552E\u7684\u5361\u7247</td></tr></tbody></table><h4 id="_3-2-4-\u83B7\u53D6\u7528\u6237\u6240\u62E5\u6709\u7684\u5361\u7247" tabindex="-1"><a class="header-anchor" href="#_3-2-4-\u83B7\u53D6\u7528\u6237\u6240\u62E5\u6709\u7684\u5361\u7247" aria-hidden="true">#</a> 3.2.4 \u83B7\u53D6\u7528\u6237\u6240\u62E5\u6709\u7684\u5361\u7247</h4><blockquote><p>\u57FA\u672C\u4FE1\u606F</p></blockquote><ul><li><strong>Path\uFF1A</strong>/api/my-cards</li><li>**Method\uFF1A**GET</li></ul><blockquote><p>\u8BF7\u6C42\u53C2\u6570</p></blockquote><p>Header</p><table><thead><tr><th style="text-align:left;">\u53C2\u6570\u540D\u79F0</th><th>\u53C2\u6570\u503C</th><th>\u662F\u5426\u5FC5\u987B</th><th>\u793A\u4F8B</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td style="text-align:left;">Authorization</td><td></td><td>\u662F</td><td>Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDMyODQzNjYsInVzZXJfaWQiOjF9.mLYitrKsn4E4KdQd0CNPugKrH8uQmXEQTlG_JutC8jU</td><td>\u7528\u6237\u4EE4\u724Ctoken\uFF0C\u5FC5\u4F20</td></tr></tbody></table><p>Body</p><blockquote><p>\u8FD4\u56DE\u6570\u636E</p></blockquote><details><summary>\u70B9\u51FB\u67E5\u770B\u8BE6\u7EC6\u5185\u5BB9</summary><pre><code>
[
  {
    &quot;title&quot;: &quot;string&quot;,
    &quot;url&quot;: &quot;string&quot;,
    &quot;author&quot;: &quot;string&quot;,
    &quot;description&quot;: &quot;string&quot;,
    &quot;date_release&quot;: &quot;2022-05-10T12:43:04.333000&quot;,
    &quot;amount&quot;: 0,
    &quot;price&quot;: 0,
    &quot;id&quot;: 7,
    &quot;owner_id&quot;: 2
  }
]
  </code></pre></details><table><thead><tr><th>\u540D\u79F0</th><th>\u7C7B\u578B</th><th>\u662F\u5426\u5FC5\u987B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td>List</td><td>List[Card]</td><td>\u5FC5\u987B</td><td></td><td>\u8FD4\u56DE\u6240\u62E5\u6709\u7684\u5361\u7247\u6570\u7EC4</td></tr></tbody></table><blockquote><p>\u8FD4\u56DE\u72B6\u6001\u7801</p></blockquote><ul><li>401 \u7528\u6237\u672A\u8BA4\u8BC1</li><li><strong>201 OK</strong></li></ul><hr><h3 id="_3-3-\u4F5C\u8005\u76F8\u5173\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#_3-3-\u4F5C\u8005\u76F8\u5173\u63A5\u53E3" aria-hidden="true">#</a> 3.3 \u4F5C\u8005\u76F8\u5173\u63A5\u53E3</h3><h4 id="_3-3-1-\u8BFB\u53D6\u4F5C\u8005\u53CA\u4F5C\u8005\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#_3-3-1-\u8BFB\u53D6\u4F5C\u8005\u53CA\u4F5C\u8005\u6587\u7AE0" aria-hidden="true">#</a> 3.3.1 \u8BFB\u53D6\u4F5C\u8005\u53CA\u4F5C\u8005\u6587\u7AE0</h4><blockquote><p>\u57FA\u672C\u4FE1\u606F</p></blockquote><ul><li><strong>Path\uFF1A</strong>/authors/</li><li>**Method\uFF1A**GET</li></ul><blockquote><p>\u8BF7\u6C42\u53C2\u6570</p></blockquote><p>Header</p><table><thead><tr><th style="text-align:left;"></th><th></th><th></th><th></th><th></th></tr></thead><tbody><tr><td style="text-align:left;"></td><td></td><td></td><td></td><td></td></tr></tbody></table><p>Body</p><table><thead><tr><th>\u540D\u79F0</th><th>\u7C7B\u578B</th><th>\u662F\u5426\u5FC5\u987B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5907\u6CE8</th><th>\u5176\u4ED6\u4FE1\u606F</th></tr></thead><tbody><tr><td></td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table><blockquote><p>\u8FD4\u56DE\u6570\u636E</p></blockquote><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;avatar&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;posts&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;owner_id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;date_created&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2022-05-12T09:16:03.925720&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;date_last_updated&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2022-05-12T09:16:03.925720&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>\u540D\u79F0</th><th>\u7C7B\u578B</th><th>\u662F\u5426\u5FC5\u987B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5907\u6CE8</th><th>\u5176\u4ED6\u4FE1\u606F</th></tr></thead><tbody><tr><td>email</td><td>string</td><td>\u5FC5\u987B</td><td></td><td>\u4F5C\u8005\u90AE\u7BB1</td><td></td></tr><tr><td>name</td><td>string</td><td>\u5FC5\u987B</td><td></td><td>\u4F5C\u8005\u6635\u79F0</td><td></td></tr><tr><td>avatar</td><td>string</td><td>\u5FC5\u987B</td><td>https://s1.ax1x.com/2022/05/07/OQeNjg.png</td><td>\u4F5C\u8005\u5934\u50CF</td><td></td></tr><tr><td>posts</td><td>List[Post]</td><td>\u5FC5\u987B</td><td></td><td>\u4F5C\u8005\u6587\u7AE0\u6570\u7EC4</td><td></td></tr></tbody></table><hr><h3 id="_3-4-\u6587\u7AE0\u76F8\u5173\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#_3-4-\u6587\u7AE0\u76F8\u5173\u63A5\u53E3" aria-hidden="true">#</a> 3.4 \u6587\u7AE0\u76F8\u5173\u63A5\u53E3</h3><h4 id="_3-4-1-\u65B0\u589E\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#_3-4-1-\u65B0\u589E\u6587\u7AE0" aria-hidden="true">#</a> 3.4.1 \u65B0\u589E\u6587\u7AE0</h4><blockquote><p>\u57FA\u672C\u4FE1\u606F</p></blockquote><ul><li><strong>Path\uFF1A</strong>/authors/{authod_id}/posts/</li><li>**Method\uFF1A**POST</li></ul><blockquote><p>\u8BF7\u6C42\u53C2\u6570</p></blockquote><p>Header</p><table><thead><tr><th style="text-align:left;"></th><th></th><th></th><th></th><th></th></tr></thead><tbody><tr><td style="text-align:left;"></td><td></td><td></td><td></td><td></td></tr></tbody></table><p>Body</p><table><thead><tr><th>\u540D\u79F0</th><th>\u7C7B\u578B</th><th>\u662F\u5426\u5FC5\u987B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5907\u6CE8</th><th>\u5176\u4ED6\u4FE1\u606F</th></tr></thead><tbody><tr><td>title</td><td>string</td><td>\u5FC5\u987B</td><td></td><td>\u6587\u7AE0\u6807\u9898</td><td></td></tr><tr><td>content</td><td>string</td><td>\u5FC5\u987B</td><td></td><td>\u6587\u7AE0\u5185\u5BB9</td><td></td></tr></tbody></table><blockquote><p>\u8FD4\u56DE\u6570\u636E</p></blockquote><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token property">&quot;owner_id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;date_created&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2022-05-12T09:20:55.480939&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;date_last_updated&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2022-05-12T09:20:55.480939&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>\u540D\u79F0</th><th>\u7C7B\u578B</th><th>\u662F\u5426\u5FC5\u987B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5907\u6CE8</th><th>\u5176\u4ED6\u4FE1\u606F</th></tr></thead><tbody><tr><td>title</td><td>string</td><td>\u5FC5\u987B</td><td></td><td>\u6587\u7AE0\u6807\u9898</td><td></td></tr><tr><td>content</td><td>string</td><td>\u5FC5\u987B</td><td></td><td>\u6587\u7AE0\u5185\u5BB9</td><td></td></tr><tr><td>id</td><td>int</td><td>\u5FC5\u987B</td><td></td><td>\u6587\u7AE0id</td><td></td></tr><tr><td>owner_id</td><td>int</td><td>\u5FC5\u987B</td><td>\u6587\u7AE0\u4F5C\u8005id</td><td></td><td></td></tr><tr><td>date_created</td><td>datetime</td><td>\u5FC5\u987B</td><td></td><td>\u6587\u7AE0\u521B\u5EFA\u65F6\u95F4</td><td></td></tr><tr><td>date_last_updated</td><td>datetime</td><td>\u5FC5\u987B</td><td></td><td>\u6587\u7AE0\u6700\u65B0\u4FEE\u6539\u65F6\u95F4</td><td></td></tr></tbody></table>`,133);function b(v,m){const a=e("ExternalLinkIcon");return p(),d("div",null,[l,t("ul",null,[t("li",null,[r,t("a",c,[q,u(a)]),k])]),h])}var _=o(i,[["render",b],["__file","article3.html.vue"]]);export{_ as default};
