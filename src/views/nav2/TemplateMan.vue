<template>
	<div>
		<el-col :span="24" class="breadcrumb-container">
			<el-breadcrumb separator="/" class="breadcrumb-inner">
				<el-breadcrumb-item v-for="item in $route.matched" :key="item.path">
					{{ item.name }}
				</el-breadcrumb-item>
				<el-button type="warning" size="small">保存</el-button>
				<el-button type="primary" size="small">保存并送审</el-button>
				<router-link to="/page4">
					<el-button type="info" size="small" to='/page4'>取消</el-button>
				</router-link>
			</el-breadcrumb>
		</el-col>
		<el-col :span="24" class="contents">
			<el-col :span="16" class="contents-left">
				<el-col :span="12">
					<div class="content-left">
						<el-col :span="24">
							<p class="title" v-if="isName === false">模板名称</p>
							<el-button 
							v-if="isName === false" 
							type="primary" 
							size="mini"
							@click.native="isNameClick()">编辑</el-button>
							<el-col :span="8" v-if="isName === true">
								<el-input placeholder="请输入模板名称" :style="{'margin-bottom':'10px', 'margin-top': '20px'}">123</el-input>
								<el-input type="textarea" placeholder="请输入备注信息"></el-input>
								<el-button :style="{'margin':'20px 0 0 20px'}"  type="primary" size="small">保存</el-button>
								<el-button type="info" size="small" @click.native="CloseisName">取消</el-button>
							</el-col>
							<p class="note" v-if="isName === false">
								备注信息备注信息备注信息
								备注信息备注信息备注信息
								备注信息备注信息备注信息
								备注信息备注信息备注信息
							</p>
						</el-col>
						<el-col :span="24">
							<div class="list">
								<ul>
									<li v-for="(item,index) in list" :class="{active : item.xxx}">
										<a href="javascript:;" @click="listClick(index)">
											{{item.name}}
										</a>
									</li>
								</ul>
							</div>
						</el-col>
						
					</div>
					
				</el-col>
				<el-col :span="12" :style="{'margin-top': '114px'}">
					<p :style="{'padding' : '0 50px 0 20px', 'color': '#FFF'}">
						你可以依据以下初始模板进行调整，调整后的新模板一旦启用，将会租不替换老模版，正在执行中的订单将依然按照老模版执行，直到老模版全部完结
					</p>
				</el-col>
			</el-col>
			<el-col :span="8" class="contents-right">
				<div>
					<div class="head">
						<p>客户信息模板</p>
						<el-button type="primary" size="mini" v-if="ChangeTemplate === false" round @click="isChangeTemplate">更换模板</el-button>
						<el-form ref="form" label-width="110px" v-if="ChangeTemplate === false">
							<el-form-item label="模板名称">
								<p>131231</p>
							</el-form-item>
							<el-form-item label="模板名称">
								<p>131231</p>
							</el-form-item>
							<el-form-item label="末次编辑日期">
								<p>131231</p>
							</el-form-item>
							<el-form-item label="模板名称">
								<p>131231
									131231
									131231
									131231
									131231
								</p>
							</el-form-item>
						</el-form>
						<el-dropdown trigger="click" szie="mini" v-if="ChangeTemplate === true">
							<el-button type="primary" size="mini">
								请选择<i class="el-icon-arrow-down el-icon--right"></i>
							</el-button>
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item>模板1</el-dropdown-item>
								<el-dropdown-item>模板2</el-dropdown-item>
								<el-dropdown-item>模板3</el-dropdown-item>
								<el-dropdown-item>模板4</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>
					</div>
					<el-col :span="24" class="" id="TemplatePre">
						<el-col :span="24">
							<p>模板预览</p>
							<el-button type="primary" size="mini" round>编辑当前模板</el-button>
							<el-button type="danger" size="mini" round>删除当前模板</el-button>
						</el-col>
						<el-col :span="24" class="autos">
							<img src="../../assets/logo4.png" alt="">
						</el-col>
					</el-col>
				</div>
			</el-col>
		</el-col>
	</div>
</template>
<script>
export default {
  data () {
	  return {
		  isName: false, // 控制模板编辑显示的输入框
		  ChangeTemplate: false,
		  // 订单列表
		  list: [ 
			  {
				  name: '客户信息',
				  xxx: true
			  },
			  {
				  name: '产品信息',
				  xxx: false
			  },
			  {
				  name: '合同信息',
				  xxx: false
			  },
			  {
				  name: '支付信息',
				  xxx: false
			  },
			  {
				  name: '业务信息',
				  xxx: false
			  },
			  {
				  name: '设备信息',
				  xxx: false
			  },
			  {

				  name: '筹备信息',
				  xxx: false
			  },
			  {
				  name: '实施信息',
				  xxx: false
			  }
		  ]
	  }
  },
  methods: {
	  CloseisName () {
		  this.isName = false
	  },
	  listClick ( keys) {
		  for (const iterator of this.list) {
			  iterator.xxx = false
		  }
		  this.list[keys].xxx = true
	  },
	  isNameClick () {
		  this.isName = true
	  },
	  isChangeTemplate () {
		  this.ChangeTemplate = true
	  }
  } 
}
</script>

<style lang="scss" scoped>
@import '~scss_vars';
.breadcrumb-container {
	border-top: 1px solid #CCC;
	border-bottom: 1px solid #CCC;
	.title {
		width: 200px;
		float: left;
		color: #475669;
	}
	.breadcrumb-inner {
		height: 54px;
		line-height: 54px;
		border-bottom: 1px solid #CCC;
		background-color: #ffffff;
		.el-breadcrumb__item__inner{
			color: #000000 !important;
		}
	}
}
.contents{
	padding: 0 20px;
	.contents-left{
		position: absolute;
		left: 0;
		top: 55px;
		background-color: #696969;
		height: 100%;
	}
	.contents-right{
		position: absolute;
		right: 0;
		top: 55px;
		background-color: #ffffff;
		height: 100%;
		div{
			padding: 0 10px;
			.head{
				padding-top: 10px;
				padding-bottom: 20px;
				p{
					float: left;
					margin: 2px 10px 0 0;
					font-size: 16px;
					color: #737373;
				}
			}
		}
	}
}
.content-left{
	margin-left: 20px;
	.title{
		color: #ffffff;
		font-size: 18px;
		float: left;
		padding-right: 10px;
		margin-top: 7px;
	}
	.note{
		padding-top: 10px;
		color: #ffffff;
	}
	button{
		padding: 4px 12px;
		margin-top: 10px;
	}
}
.list{
	float: right;
	padding-top: 20px;
	li{
		height: 80px;
		width: 240px;
		background-color: #ffffff;
		text-align: center;
		line-height: 80px;
		border-bottom: 1px solid #CCC;
		a{
			color: #AAAAAA;
			display: block;
		}
		a:hover{
			color: #000;
			width: 236px;
			height: 76px;
			border: 2px solid blue;
			line-height: 76px;
			border-bottom: 2px solid blue;
		}
	}
	.active a{
		color: #000;
		width: 236px;
		height: 76px;
		border: 2px solid blue;
		line-height: 76px;
		border-bottom: 2px solid blue;
	}
}
#TemplatePre{
	padding: 0;
	p{
		float: left;
		margin: 2px 10px 0 0;
		font-size: 16px;
		color: #737373;
	}
	.autos{
		text-align: center;
		padding-top: 20px;
		overflow: hidden;
		background-size: 100% 100%;
	}
}
.el-button--mini, .el-button--small{
	border-radius: 20px;
}
</style>

