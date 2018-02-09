<div class="title">logo</div>
<div class="banner">banner</div>
<h1><#=name#></h1>
<ul>
  <#for(var i=0; i<list.length; i++){#>
    <li>
      <#=list[i]#>
    </li>
  <#}#>
</ul>
<img src="<#=logoUrl#>"/>
<img src="<#=bannerUrl#>"/>
