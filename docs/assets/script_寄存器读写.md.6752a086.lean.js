import{_ as e,v as a,b as i,R as r}from"./chunks/framework.eea9f507.js";const x=JSON.parse('{"title":"寄存器读写","description":"","frontmatter":{},"headers":[],"relativePath":"script/寄存器读写.md","filePath":"script/寄存器读写.md"}'),t={name:"script/寄存器读写.md"},n=r('<h1 id="寄存器读写" tabindex="-1">寄存器读写 <a class="header-anchor" href="#寄存器读写" aria-label="Permalink to &quot;寄存器读写&quot;">​</a></h1><h2 id="registersgetpoint3d-index-number" tabindex="-1">RegistersGetPoint3D(index: number) <a class="header-anchor" href="#registersgetpoint3d-index-number" aria-label="Permalink to &quot;RegistersGetPoint3D(index: number)&quot;">​</a></h2><h3 id="描述" tabindex="-1">描述 <a class="header-anchor" href="#描述" aria-label="Permalink to &quot;描述&quot;">​</a></h3><p>获取寄存器列表中的point3D类型数据</p><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><ul><li>index: 寄存器列表索引号</li></ul><h3 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h3><ul><li>x: 点类型的x坐标</li><li>y: 点类型的y坐标</li><li>z: 点类型的z坐标</li><li>error: 参数类型错误</li></ul><h3 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h3><ol><li>x,y,z = RegistersGetPoint3D(1)</li></ol><h2 id="registerssetpoint3d-index-number-x-number-y-number-z-number" tabindex="-1">RegistersSetPoint3D(index: number, x: number, y:number, z:number) <a class="header-anchor" href="#registerssetpoint3d-index-number-x-number-y-number-z-number" aria-label="Permalink to &quot;RegistersSetPoint3D(index: number, x: number, y:number, z:number)&quot;">​</a></h2><h3 id="描述-1" tabindex="-1">描述 <a class="header-anchor" href="#描述-1" aria-label="Permalink to &quot;描述&quot;">​</a></h3><p>向寄存器列表中写一个值</p><h3 id="参数-1" tabindex="-1">参数 <a class="header-anchor" href="#参数-1" aria-label="Permalink to &quot;参数&quot;">​</a></h3><ul><li>index: 寄存器列表索引号，目前默认只能写0</li><li>x: 点类型的x坐标</li><li>y: 点类型的y坐标</li><li>z: 点类型的z坐标</li></ul><h3 id="返回值-1" tabindex="-1">返回值 <a class="header-anchor" href="#返回值-1" aria-label="Permalink to &quot;返回值&quot;">​</a></h3><ul><li>ok: 函数执行成功</li><li>error: 参数类型错误</li></ul><h3 id="示例-1" tabindex="-1">示例 <a class="header-anchor" href="#示例-1" aria-label="Permalink to &quot;示例&quot;">​</a></h3><ol><li>RegistersGetPoint3D(0, 10, 10, 10)</li></ol>',19),l=[n];function o(s,h,d,u,b,m){return a(),i("div",null,l)}const p=e(t,[["render",o]]);export{x as __pageData,p as default};
