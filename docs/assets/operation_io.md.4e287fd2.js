import{_ as t,o as d,c as r,Q as e}from"./chunks/framework.6ed370c1.js";const p=JSON.parse('{"title":"I/O","description":"","frontmatter":{},"headers":[],"relativePath":"operation/io.md","filePath":"operation/io.md"}'),a={name:"operation/io.md"},o=e('<h1 id="i-o" tabindex="-1">I/O <a class="header-anchor" href="#i-o" aria-label="Permalink to &quot;I/O&quot;">​</a></h1><h2 id="读取i-o" tabindex="-1">读取I/O <a class="header-anchor" href="#读取i-o" aria-label="Permalink to &quot;读取I/O&quot;">​</a></h2><table><thead><tr><th>参数</th><th>类型</th><th>说明</th><th>依赖</th></tr></thead><tbody><tr><td>板卡</td><td>枚举</td><td>指定使用的板卡设备</td><td></td></tr><tr><td>线路</td><td>枚举</td><td>指定要读取的线路：All/DI [0-15]</td><td></td></tr><tr><td>输出.允许创建</td><td>布尔(开关)</td><td>是否允许创建变量，变量不存在自动在运行时创建</td><td></td></tr><tr><td>输出.变量</td><td>枚举</td><td>指定输出到哪个变量</td><td><code>输出.允许创建</code>=关</td></tr><tr><td>输出.变量</td><td>字符串</td><td>指定输出到哪个变量，不存在会自动在运行时创建</td><td><code>输出.允许创建</code>=开</td></tr></tbody></table><h2 id="等待i-o" tabindex="-1">等待I/O <a class="header-anchor" href="#等待i-o" aria-label="Permalink to &quot;等待I/O&quot;">​</a></h2><table><thead><tr><th>参数</th><th>类型</th><th>说明</th><th>依赖</th></tr></thead><tbody><tr><td>板卡</td><td>枚举</td><td>指定使用的板卡设备</td><td></td></tr><tr><td>线路</td><td>整数</td><td>指定要读取的线路：[0-15]</td><td></td></tr><tr><td>等待状态</td><td>枚举</td><td>指定等待哪种状态：低电平/高电平/上升沿/下降沿</td><td></td></tr><tr><td>超时</td><td>整数</td><td>指定超时时间，<code>0</code>表示一直等待</td><td></td></tr></tbody></table><h2 id="写入i-o" tabindex="-1">写入I/O <a class="header-anchor" href="#写入i-o" aria-label="Permalink to &quot;写入I/O&quot;">​</a></h2><table><thead><tr><th>参数</th><th>类型</th><th>说明</th><th>依赖</th></tr></thead><tbody><tr><td>板卡</td><td>枚举</td><td>指定使用的板卡设备</td><td></td></tr><tr><td>OK时.启用</td><td>布尔(开关)</td><td>启用OK状态输出</td><td></td></tr><tr><td>OK时.DO [0-15]</td><td>枚举</td><td>OK状态时每个线路的输出状态：不改变/低电平/高电平</td><td><code>OK时.启用</code>=开</td></tr><tr><td>WARN时.启用</td><td>布尔(开关)</td><td>启用WARN状态输出</td><td></td></tr><tr><td>WARN时.DO 0-15</td><td>枚举</td><td>WARN状态时每个线路的输出状态：不改变/低电平/高电平</td><td><code>WARN时.启用</code>=开</td></tr><tr><td>NG时.启用</td><td>布尔(开关)</td><td>启用NG状态输出</td><td></td></tr><tr><td>NG时.DO [0-15]</td><td>枚举</td><td>NG状态时每个线路的输出状态：不改变/低电平/高电平</td><td><code>NG时.启用</code>=开</td></tr><tr><td>更新状态.启用</td><td>布尔(开关)</td><td>启用更新状态</td><td></td></tr><tr><td>更新状态.允许创建</td><td>布尔(开关)</td><td>是否允许创建变量，变量不存在自动在运行时创建</td><td></td></tr><tr><td>更新状态.变量</td><td>枚举</td><td>指定更新到哪个变量</td><td><code>更新状态.允许创建</code>=关</td></tr><tr><td>更新状态.变量</td><td>字符串</td><td>指定更新到哪个变量，不存在会自动在运行时创建</td><td><code>更新状态.允许创建</code>=开</td></tr></tbody></table>',7),h=[o];function i(c,l,n,s,_,b){return d(),r("div",null,h)}const m=t(a,[["render",i]]);export{p as __pageData,m as default};
