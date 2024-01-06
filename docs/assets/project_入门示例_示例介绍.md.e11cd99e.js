import{_ as a,o as r,c as t,Q as e}from"./chunks/framework.6ed370c1.js";const p="/docs/assets/加载点云.ce8a8ba0.jpeg",o="/docs/assets/保存点云.5ff62d5d.jpeg",c="/docs/assets/3D斑点.42fc46eb.jpeg",d="/docs/assets/平移.6d469ea6.jpeg",i="/docs/assets/旋转.73ea3556.jpeg",_="/docs/assets/缩放.89ae6b6d.jpeg",b="/docs/assets/镜像.f4dbfdde.jpeg",l="/docs/assets/x范围裁切.b6437fd7.jpeg",n="/docs/assets/y范围裁切.c109be38.jpeg",m="/docs/assets/z范围裁切.9c80090a.jpeg",s="/docs/assets/区域.6b985de4.jpeg",h="/docs/assets/复制.7717ef2b.jpeg",g="/docs/assets/点.9c832b09.jpeg",f="/docs/assets/线.0ed5bfa2.jpeg",D="/docs/assets/面.e5fcc4b7.jpeg",u="/docs/assets/3D高度.61670230.jpeg",j="/docs/assets/3D平面.15b3fd41.jpeg",q="/docs/assets/基于邻域的离群点去除.cfefb5ed.jpeg",x="/docs/assets/半径离群点去除.be20f679.jpeg",P="/docs/assets/仅位置调整.14ad725d.jpeg",k="/docs/assets/方位调整.be012ce3.jpeg",E=JSON.parse('{"title":"入门示例：","description":"","frontmatter":{},"headers":[],"relativePath":"project/入门示例/示例介绍.md","filePath":"project/入门示例/示例介绍.md"}'),v={name:"project/入门示例/示例介绍.md"},T=e('<h1 id="入门示例" tabindex="-1">入门示例： <a class="header-anchor" href="#入门示例" aria-label="Permalink to &quot;入门示例：&quot;">​</a></h1><h2 id="load-and-save" tabindex="-1">load and save <a class="header-anchor" href="#load-and-save" aria-label="Permalink to &quot;load and save&quot;">​</a></h2><p>[00] 加载点云算子，可以选择文件夹中循环读取，也可以选择直接读取文件，文件仅支持pcd类型。<br></p><p><img src="'+p+'" alt="本地图片"><br></p><p>[01]保存点云算子，可以进行单张图片保存，也可以按照时间为索引在指定文件夹中进行循环保存。<br></p><p><img src="'+o+'" alt="本地图片"><br></p><h2 id="_3d斑点" tabindex="-1">3D斑点 <a class="header-anchor" href="#_3d斑点" aria-label="Permalink to &quot;3D斑点&quot;">​</a></h2><p>[01] 3D斑点算子，共有窗口或者盒子两种区域选择方式，算法中可限制所取斑点包含点的数量大小，输出设置中可以进行斑点排序以及斑点个数限制。算子运行后，点云坐标结果会保存在寄存器中。<br></p><p><img src="'+c+'" alt="本地图片"><br></p><h2 id="_3d变换预处理" tabindex="-1">3D变换预处理 <a class="header-anchor" href="#_3d变换预处理" aria-label="Permalink to &quot;3D变换预处理&quot;">​</a></h2><p>3D变换预处理算子可以对输入的图像进行平移，旋转，缩放与镜像等操作，方便后续对于图像的进一步处理。<br></p><p>[01]平移<br></p><p><img src="'+d+'" alt="本地图片"><br></p><p>[02]旋转<br></p><p><img src="'+i+'" alt="本地图片"><br></p><p>[03]缩放<br></p><p><img src="'+_+'" alt="本地图片"><br></p><p>[05]镜像<br></p><p><img src="'+b+'" alt="本地图片"><br></p><h2 id="_3d裁切预处理" tabindex="-1">3D裁切预处理 <a class="header-anchor" href="#_3d裁切预处理" aria-label="Permalink to &quot;3D裁切预处理&quot;">​</a></h2><p>3D裁切预处理算子可以对输入的图像进行x，y，z轴范围裁切，区域裁切以及图像复制操作，方便后续对于图像的进一步处理。<br></p><p>[01]x范围裁切<br></p><p><img src="'+l+'" alt="本地图片"><br></p><p>[02]y范围裁切<br></p><p><img src="'+n+'" alt="本地图片"><br></p><p>[03]z范围裁切<br></p><p><img src="'+m+'" alt="本地图片"><br></p><p>[04]区域<br></p><p><img src="'+s+'" alt="本地图片"><br></p><p>[05]复制<br></p><p><img src="'+h+'" alt="本地图片"><br></p><h2 id="_3d方形探针" tabindex="-1">3D方形探针 <a class="header-anchor" href="#_3d方形探针" aria-label="Permalink to &quot;3D方形探针&quot;">​</a></h2><p>3D方形探针可以通过移动box与方形窗口或读取寄存器中的值来对点云进行搜索，根据不同的参数设定，可以输出点，线，面等不同的结果。<br></p><p>[01]点<br></p><p><img src="'+g+'" alt="本地图片"><br></p><p>[02]线<br></p><p><img src="'+f+'" alt="本地图片"><br></p><p>[03]面<br></p><p><img src="'+D+'" alt="本地图片"><br></p><h2 id="_3d高度" tabindex="-1">3D高度 <a class="header-anchor" href="#_3d高度" aria-label="Permalink to &quot;3D高度&quot;">​</a></h2><p>3D高度算子可以得到选中区域的高度。<br></p><p><img src="'+u+'" alt="本地图片"><br></p><h2 id="_3d平面-区域" tabindex="-1">3D平面&amp;区域 <a class="header-anchor" href="#_3d平面-区域" aria-label="Permalink to &quot;3D平面&amp;区域&quot;">​</a></h2><p>区域算子可以通过寄存器，方形窗口或者box选定区域，并通过点云相交，相加，相减三种模式得到不同的结果。3D平面算子可以对寄存器，方形窗口或者box所选定的区域进行平面拟合并将参数输出到寄存器中，点云变换根据平面参数将输入的点云区域调整至xoy平面。<br></p><p><img src="'+s+'" alt="本地图片"><br></p><p><img src="'+j+'" alt="本地图片"><br></p><h2 id="_3d离群点滤波" tabindex="-1">3D离群点滤波 <a class="header-anchor" href="#_3d离群点滤波" aria-label="Permalink to &quot;3D离群点滤波&quot;">​</a></h2><p>3D离群点滤波算子可以通过不同的算法来去除输入点云中的离群点。<br></p><p>[02]基于邻域的离群点去除<br></p><p><img src="'+q+'" alt="本地图片"><br></p><p>[03]半径离群点去除<br></p><p><img src="'+x+'" alt="本地图片"><br></p><h2 id="_3d位置调整" tabindex="-1">3D位置调整 <a class="header-anchor" href="#_3d位置调整" aria-label="Permalink to &quot;3D位置调整&quot;">​</a></h2><p>3D位置调整算子会根据输入的位置信息，对点云进行进行平移或者旋转的操作来调整点云的位置。<br></p><p>[03]仅位置调整<br></p><p><img src="'+P+'" alt="本地图片"><br></p><p>[06]方位调整<br></p><p><img src="'+k+'" alt="本地图片"><br></p>',58),S=[T];function y($,z,A,N,V,B){return r(),t("div",null,S)}const I=a(v,[["render",y]]);export{E as __pageData,I as default};
