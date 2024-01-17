import{_ as l,o as t,c as o,Q as r}from"./chunks/framework.6ed370c1.js";const h=JSON.parse('{"title":"3D位置调整","description":"","frontmatter":{},"headers":[],"relativePath":"operation/3d/3D位置调整.md","filePath":"operation/3d/3D位置调整.md","lastUpdated":1695870664000}'),n={name:"operation/3d/3D位置调整.md"},i=r('<h1 id="_3d位置调整" tabindex="-1">3D位置调整 <a class="header-anchor" href="#_3d位置调整" aria-label="Permalink to &quot;3D位置调整&quot;">​</a></h1><h2 id="算子功能" tabindex="-1">算子功能 <a class="header-anchor" href="#算子功能" aria-label="Permalink to &quot;算子功能&quot;">​</a></h2><p>根据输入的位置信息，对点云进行进行平移或者旋转的操作来调整点云的位置。</p><h2 id="算子输入参数" tabindex="-1">算子输入参数 <a class="header-anchor" href="#算子输入参数" aria-label="Permalink to &quot;算子输入参数&quot;">​</a></h2><ul><li><p><strong>输入图像</strong>：图像来源的寄存器编号</p></li><li><p><strong>模式</strong></p><ul><li><strong>仅调整位置</strong></li><li><strong>方位调整</strong></li></ul></li><li><p><strong>位置参数</strong></p><ul><li><strong>变换类型</strong><ul><li><strong>永久</strong>：输出变换后的点云</li><li><strong>临时</strong>：输出变换矩阵</li></ul></li><li><strong>新原点</strong>： <ul><li><strong>类型</strong>： <ul><li><strong>点</strong>：将输入的点坐标作为原点</li><li><strong>线</strong>：将线的位置信息(线的中心点)作为原点</li><li><strong>3D平面</strong>：将平面的位置信息(面的中心点)作为原点</li><li><strong>盒子</strong>：由盒子的起始点和终点计算出中心点，将其作为原点。</li></ul></li></ul></li><li><strong>变换成分</strong>： <ul><li><strong>调整X位置</strong>：仅将新原点的X坐标调整为0</li><li><strong>调整Y位置</strong>：仅将新原点的Y坐标调整为0</li><li><strong>调整Z位置</strong>：仅将新原点的Z坐标调整为0</li></ul></li></ul></li><li><p><strong>方位调整参数</strong></p><ul><li><p><strong>变换类型</strong>：</p><ul><li><strong>永久</strong>：输出变换后的点云</li><li><strong>临时</strong>：输出变换矩阵</li></ul></li><li><p><strong>新方向类型</strong>：</p><ul><li><strong>直线</strong>：将直线的方向向量作为新的方向</li><li><strong>3D平面</strong>：将平面的法向量作为新的方向</li></ul></li><li><p><strong>目标方向</strong>：</p><ul><li><strong>旋转向量至轴</strong>： <ul><li><strong>+X</strong>：目标方向向量为坐标轴+X方向</li><li><strong>+Y</strong>：目标方向向量为坐标轴+Y方向</li><li><strong>-X</strong>：目标方向向量为坐标轴-X方向</li><li><strong>-Y</strong>：目标方向向量为坐标轴-Y方向</li></ul></li><li><strong>角度范围</strong>： <ul><li><strong>360度</strong>：计算新方向和目标方向时，采用[0度, 360度]的角度范围。</li><li><strong>180度</strong>：计算新方向和目标方向时，采用[0度, 180度]的角度范围。</li></ul></li></ul></li><li><p><strong>旋转中心</strong>：</p><ul><li><strong>目标中心</strong>：围绕新方向类型的位置中心进行旋转</li><li><strong>原点(0,0,0)</strong>：围绕z轴旋转</li><li><strong>特殊位置</strong>：设置自定义的旋转中心</li></ul></li><li><p><strong>同时调整位置</strong>：</p><ul><li><strong>调整X位置</strong>：仅将新原点的X坐标调整为0</li><li><strong>调整Y位置</strong>：仅将新原点的Y坐标调整为0</li><li><strong>调整Z位置</strong>：仅将新原点的Z坐标调整为0</li></ul></li><li><p><strong>输出图像</strong>：图像输出的寄存器编号</p></li></ul></li></ul>',5),s=[i];function g(a,e,u,p,_,d){return t(),o("div",null,s)}const m=l(n,[["render",g]]);export{h as __pageData,m as default};
