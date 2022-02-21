"use strict";(self["webpackChunkhalo_admin"]=self["webpackChunkhalo_admin"]||[]).push([[849],{62849:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}});var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("page-view",[a("a-row",{attrs:{gutter:12}},[a("a-col",{staticClass:"pb-3",attrs:{lg:10,md:10,sm:24,xl:10,xs:24}},[a("a-card",{attrs:{bodyStyle:{padding:"16px"},title:e.title}},[a("a-form-model",{ref:"linkForm",attrs:{model:e.form.model,rules:e.form.rules,layout:"horizontal"}},[a("a-form-model-item",{attrs:{label:"网站名称：",prop:"name"}},[a("a-input",{model:{value:e.form.model.name,callback:function(t){e.$set(e.form.model,"name",t)},expression:"form.model.name"}})],1),a("a-form-model-item",{attrs:{help:"* 需要加上 http://",label:"网站地址：",prop:"url"}},[a("a-input",{model:{value:e.form.model.url,callback:function(t){e.$set(e.form.model,"url",t)},expression:"form.model.url"}})],1),a("a-form-model-item",{attrs:{label:"Logo：",prop:"logo"}},[a("a-input",{model:{value:e.form.model.logo,callback:function(t){e.$set(e.form.model,"logo",t)},expression:"form.model.logo"}})],1),a("a-form-model-item",{attrs:{label:"分组：",prop:"team"}},[a("a-auto-complete",{attrs:{dataSource:e.computedTeams,allowClear:""},model:{value:e.form.model.team,callback:function(t){e.$set(e.form.model,"team",t)},expression:"form.model.team"}})],1),a("a-form-model-item",{attrs:{label:"排序编号：",prop:"priority"}},[a("a-input-number",{staticStyle:{width:"100%"},attrs:{min:0},model:{value:e.form.model.priority,callback:function(t){e.$set(e.form.model,"priority",t)},expression:"form.model.priority"}})],1),a("a-form-model-item",{attrs:{label:"描述：",prop:"description"}},[a("a-input",{attrs:{autoSize:{minRows:5},type:"textarea"},model:{value:e.form.model.description,callback:function(t){e.$set(e.form.model,"description",t)},expression:"form.model.description"}})],1),a("a-form-model-item",[e.isUpdateMode?a("a-button-group",[a("ReactiveButton",{attrs:{errored:e.form.errored,loading:e.form.saving,erroredText:"更新失败",loadedText:"更新成功",text:"更新",type:"primary"},on:{callback:e.handleSavedCallback,click:e.handleCreateOrUpdateLink}}),e.isUpdateMode?a("a-button",{attrs:{type:"dashed"},on:{click:function(t){e.form.model={}}}},[e._v("返回添加")]):e._e()],1):a("ReactiveButton",{attrs:{errored:e.form.errored,loading:e.form.saving,erroredText:"保存失败",loadedText:"保存成功",text:"保存",type:"primary"},on:{callback:e.handleSavedCallback,click:e.handleCreateOrUpdateLink}})],1)],1)],1)],1),a("a-col",{staticClass:"pb-3",attrs:{lg:14,md:14,sm:24,xl:14,xs:24}},[a("a-card",{attrs:{bodyStyle:{padding:"16px"},title:"所有友情链接"}},[e.isMobile()?a("a-list",{attrs:{dataSource:e.table.data,loading:e.table.loading,itemLayout:"vertical",size:"large"},scopedSlots:e._u([{key:"renderItem",fn:function(t,o){return a("a-list-item",{key:o},[a("template",{slot:"actions"},[a("a-dropdown",{attrs:{trigger:["click"],placement:"topLeft"}},[a("span",[a("a-icon",{attrs:{type:"bars"}})],1),a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",{on:{click:function(a){e.form.model=t}}},[e._v("编辑")]),a("a-menu-item",[a("a-popconfirm",{attrs:{title:"你确定要删除【"+t.name+"】链接？",cancelText:"取消",okText:"确定"},on:{confirm:function(a){return e.handleDeleteLink(t.id)}}},[e._v(" 删除 ")])],1)],1)],1)],1),a("template",{slot:"extra"},[a("span",[e._v(" "+e._s(t.team)+" ")])]),a("a-list-item-meta",[a("template",{slot:"description"},[e._v(" "+e._s(t.description)+" ")]),a("span",{staticStyle:{"max-width":"300px",display:"block","white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"},attrs:{slot:"title"},slot:"title"},[e._v(" "+e._s(t.name)+" ")])],2),a("a",{attrs:{href:t.url,target:"_blank"}},[e._v(e._s(t.url))])],2)}}],null,!1,3158558575)}):a("a-table",{attrs:{columns:e.table.columns,dataSource:e.table.data,loading:e.table.loading,rowKey:function(e){return e.id},scrollToFirstRowOnChange:!0},scopedSlots:e._u([{key:"url",fn:function(t){return[a("a",{attrs:{href:t,target:"_blank"}},[e._v(e._s(t))])]}},{key:"name",fn:function(t){return a("ellipsis",{attrs:{length:15,tooltip:""}},[e._v(e._s(t))])}},{key:"action",fn:function(t,o){return a("span",{},[a("a-button",{staticClass:"!p-0",attrs:{type:"link"},on:{click:function(t){e.form.model=o}}},[e._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-popconfirm",{attrs:{title:"你确定要删除【"+o.name+"】链接？",cancelText:"取消",okText:"确定"},on:{confirm:function(t){return e.handleDeleteLink(o.id)}}},[a("a-button",{staticClass:"!p-0",attrs:{type:"link"}},[e._v("删除")])],1)],1)}}])})],1)],1)],1),a("div",{staticStyle:{position:"fixed",bottom:"30px",right:"30px"}},[a("a-button",{attrs:{icon:"setting",shape:"circle",size:"large",type:"primary"},on:{click:function(t){e.optionsModal.visible=!0}}})],1),a("a-modal",{attrs:{afterClose:function(){return e.optionsModal.visible=!1},title:"页面设置"},model:{value:e.optionsModal.visible,callback:function(t){e.$set(e.optionsModal,"visible",t)},expression:"optionsModal.visible"}},[a("template",{slot:"footer"},[a("a-button",{key:"submit",attrs:{type:"primary"},on:{click:function(t){return e.handleSaveOptions()}}},[e._v("保存")])],1),a("a-form",{attrs:{layout:"vertical"}},[a("a-form-item",{attrs:{help:"* 需要主题进行适配",label:"页面标题："}},[a("a-input",{model:{value:e.optionsModal.data.links_title,callback:function(t){e.$set(e.optionsModal.data,"links_title",t)},expression:"optionsModal.data.links_title"}})],1)],1)],2)],1)},l=[],i=a(50990),r=a(98906),s=a(3832),n=a(1540);const d=[{title:"名称",dataIndex:"name",ellipsis:!0,scopedSlots:{customRender:"name"}},{title:"网址",dataIndex:"url",ellipsis:!0,scopedSlots:{customRender:"url"}},{title:"分组",ellipsis:!0,dataIndex:"team"},{title:"排序",dataIndex:"priority"},{title:"操作",key:"action",scopedSlots:{customRender:"action"}}];var m={mixins:[s.jB,s.KT],components:{PageView:i.B4},data(){return{table:{columns:d,data:[],loading:!1},form:{model:{},saving:!1,errored:!1,rules:{name:[{required:!0,message:"* 友情链接名称不能为空",trigger:["change"]},{max:255,message:"* 友情链接名称的字符长度不能超过 255",trigger:["change"]}],url:[{required:!0,message:"* 友情链接地址不能为空",trigger:["change"]},{max:1023,message:"* 友情链接地址的字符长度不能超过 1023",trigger:["change"]},{type:"url",message:"* 友情链接地址格式有误",trigger:["change"]}],logo:[{max:1023,message:"* 友情链接 Logo 的字符长度不能超过 1023",trigger:["change"]}],description:[{max:255,message:"* 友情链接描述的字符长度不能超过 255",trigger:["change"]}],team:[{max:255,message:"* 友情链接分组的字符长度 255",trigger:["change"]}]}},optionsModal:{visible:!1,data:[]},teams:[]}},computed:{title(){return this.isUpdateMode?"修改友情链接":"添加友情链接"},isUpdateMode(){return!!this.form.model.id},computedTeams(){return this.teams.filter((e=>""!==e))}},created(){this.handleListLinks(),this.handleListLinkTeams(),this.handleListOptions()},methods:{...(0,r.nv)(["refreshOptionsCache"]),handleListLinks(){this.table.loading=!0,n.Z.link.list().then((e=>{this.table.data=e.data})).finally((()=>{this.table.loading=!1}))},handleListLinkTeams(){n.Z.link.listTeams().then((e=>{this.teams=e.data}))},handleListOptions(){n.Z.option.list().then((e=>{this.optionsModal.data=e.data}))},handleDeleteLink(e){n.Z.link["delete"](e).then((()=>{this.$message.success("删除成功！")})).finally((()=>{this.handleListLinks(),this.handleListLinkTeams()}))},handleCreateOrUpdateLink(){const e=this;e.$refs.linkForm.validate((t=>{t&&(e.form.saving=!0,e.isUpdateMode?n.Z.link.update(e.form.model.id,e.form.model).catch((()=>{this.form.errored=!0})).finally((()=>{setTimeout((()=>{e.form.saving=!1}),400)})):n.Z.link.create(e.form.model).catch((()=>{this.form.errored=!0})).finally((()=>{setTimeout((()=>{e.form.saving=!1}),400)})))}))},handleSavedCallback(){this.form.errored?this.form.errored=!1:(this.form.model={},this.handleListLinks(),this.handleListLinkTeams())},handleSaveOptions(){n.Z.option.save(this.optionsModal.data).then((()=>{this.$message.success("保存成功！"),this.optionsModal.visible=!1})).finally((()=>{this.handleListOptions(),this.refreshOptionsCache()}))}}},c=m,p=a(18156),u=(0,p.Z)(c,o,l,!1,null,null,null),f=u.exports}}]);