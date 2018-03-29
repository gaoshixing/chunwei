<template>
 <el-row>
    <el-col :span="24">
        <div class="grid-content bg-purple">
            <product-header></product-header>
        </div>
    </el-col>
    <el-col :span="12">
        <el-row>
            <el-col :span="24">
                <div class="grid-content bg-purple-dark">
                    <div class="grid-content bg-purple-light save-and-other-action">
                        <el-row>
                            <el-col :span="9">
                                <div class="grid-content bg-purple">
                                   <el-button type="primary" size="small">保存送审并添加同名产品</el-button>
                                </div>
                            </el-col>
                            <el-col :span="4">
                                <div class="grid-content bg-purple-light">
                                    <el-button type="primary" size="small">保存</el-button>
                                </div>
                            </el-col>
                            <el-col :span="4">
                                <div class="grid-content bg-purple">
                                    <el-button type="info" size="small">返回</el-button>
                                </div>
                            </el-col>
            						</el-row>
        						</div>
                </div>
            </el-col>
        </el-row>

				<el-row>
  				<el-col :span="24">
						<div class="grid-content bg-purple-dark all-modify-options">
							<el-row>
  							<el-col :span="12">
									<div class="grid-content bg-purple">
										产品类型 :
										<el-select v-model="value2" placeholder="请选择" size = 'small'>
											<el-option
												v-for="item in options2"
												:key="item.value"
												:label="item.label"
												:value="item.value"
												:disabled="item.disabled">
											</el-option>
										</el-select>
									</div>
								</el-col>
								<el-col :span="12">
									<div class="grid-content bg-purple-light" style="padding:0;">
										<el-popover
						ref="popover4"
						placement="right-start"
						width="260"
						popper-class="bgc"
						trigger="click">
	<el-col :span="24">
		<div>
		1414
		</div>
	</el-col>
</el-popover>

<el-button v-popover:popover4>click 激活</el-button>


									</div>
								</el-col>
							</el-row>
						</div>
					</el-col>
				</el-row>
        
    </el-col>
    <el-col :span="12">
        <div class="grid-content bg-purple-light">
2
        </div>  
    </el-col>
</el-row>

    

</template>

<script>
import productHeader from "../../components/common/product-header.vue";
export default {
	data(){
		return {
			
			options2: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶',
          disabled: true
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value2: ''
		}
	},
  components: {
    productHeader
  }
};
</script>

<style scoped lang=scss>
.save-and-other-action {
  margin-top: 15px;
  padding-left: 30px;
}
.all-modify-options{
	margin-top: 40px;
	padding-left: 30px;
}
.bgc{
	text-align: right !important;
	text-indent: 2;
	background: red;
}

</style>


