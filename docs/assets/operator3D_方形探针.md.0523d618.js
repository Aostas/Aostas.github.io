import{_ as a,v as l,b as i,R as e}from"./chunks/framework.eea9f507.js";const q=JSON.parse('{"title":"方形探针","description":"","frontmatter":{},"headers":[],"relativePath":"operator3D/方形探针.md","filePath":"operator3D/方形探针.md"}'),r={name:"operator3D/方形探针.md"},t=e('<h1 id="方形探针" tabindex="-1">方形探针 <a class="header-anchor" href="#方形探针" aria-label="Permalink to &quot;方形探针&quot;">​</a></h1><h2 id="算子功能" tabindex="-1">算子功能 <a class="header-anchor" href="#算子功能" aria-label="Permalink to &quot;算子功能&quot;">​</a></h2><p>在特定的方向上搜索边缘点，返回点、直线、平面、区域等几何参数。</p><h2 id="算子输入参数" tabindex="-1">算子输入参数 <a class="header-anchor" href="#算子输入参数" aria-label="Permalink to &quot;算子输入参数&quot;">​</a></h2><h3 id="来源" tabindex="-1">来源 <a class="header-anchor" href="#来源" aria-label="Permalink to &quot;来源&quot;">​</a></h3><p>设置输入点云区域的来源。</p><ul><li>从寄存器：从几何寄存器中获取</li><li>从调用列表：</li><li>手动：手动框选点云区域</li></ul><h3 id="起始" tabindex="-1">起始 <a class="header-anchor" href="#起始" aria-label="Permalink to &quot;起始&quot;">​</a></h3><ul><li>x：最小的x坐标</li><li>y：最小的y坐标</li><li>z：最小的z坐标</li></ul><h3 id="结尾" tabindex="-1">结尾 <a class="header-anchor" href="#结尾" aria-label="Permalink to &quot;结尾&quot;">​</a></h3><ul><li>x：最大的x坐标</li><li>y：最大的y坐标</li><li>z：最大的z坐标</li></ul><h3 id="仅探测前景" tabindex="-1">仅探测前景 <a class="header-anchor" href="#仅探测前景" aria-label="Permalink to &quot;仅探测前景&quot;">​</a></h3><p>是否只搜索前景边缘点。</p><p>若勾选，则需要手动设置z方向阈值，以此来分离前景和背景。</p><h3 id="探针方向" tabindex="-1">探针方向 <a class="header-anchor" href="#探针方向" aria-label="Permalink to &quot;探针方向&quot;">​</a></h3><ul><li>+X：沿着X轴正方向搜索</li><li>-X：沿着X轴负方向搜索</li><li>+Y：沿着Y轴正方向搜索</li><li>-Y：沿着Y轴负方向搜索</li><li>+Z：沿着Z轴正方向搜索</li><li>-Z：沿着Z轴负方向搜索</li><li>没有探测(选择所有点)：选择ROI内所有点</li></ul><h3 id="搜索分辨率" tabindex="-1">搜索分辨率 <a class="header-anchor" href="#搜索分辨率" aria-label="Permalink to &quot;搜索分辨率&quot;">​</a></h3><p>沿着选定方向搜索时的步长倒数，增大分辨率意味着采样点个数的增加，但同时会增加算子的运行时间。</p><h3 id="排除锥近似角度" tabindex="-1">排除锥近似角度 <a class="header-anchor" href="#排除锥近似角度" aria-label="Permalink to &quot;排除锥近似角度&quot;">​</a></h3><p>沿着选定方向搜索时的圆锥角度，圆锥以外的点将会被保留。</p><h3 id="输出几何" tabindex="-1">输出几何 <a class="header-anchor" href="#输出几何" aria-label="Permalink to &quot;输出几何&quot;">​</a></h3><p>指定输出的几何参数，可以选择的参数有：</p><ul><li>点：点云区域的质心坐标点</li><li>线：包含直线段的中心点和直线的方向向量</li><li>平面：包含平面的几何中心点和平面的法向量</li></ul><p>相应的几何参数将会保存至几何寄存器中。</p><h3 id="使用滤波方式" tabindex="-1">使用滤波方式 <a class="header-anchor" href="#使用滤波方式" aria-label="Permalink to &quot;使用滤波方式&quot;">​</a></h3><p>该选项中包含离群点滤波方法：</p><ul><li>无滤波处理</li><li>统计离群点滤波</li><li>RANSAC</li></ul>',27),o=[t];function h(n,d,s,u,c,p){return l(),i("div",null,o)}const f=a(r,[["render",h]]);export{q as __pageData,f as default};
