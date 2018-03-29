<template>
  <div class="bg">
		<header>
			<img src="../assets/images/logoLogin.png" >
			<p>管理后台中心工作台登录</p>
		</header>
		<section>
			<div class="tab">
				<span v-bind:class="{active:mashow}" v-on:click="matab()">二维码登录</span>
				<span v-bind:class="{active:phshow}" @click="phonetab()">手机号登录</span>
			</div>
			<div class="dx position">
				<img id="heng" class="heng" v-bind:style="{position:positionName,left:leftSize}"
					 src="../assets/images/login/loginheng.png" height="10" width="160" alt="">
				<div class="isheng"></div>
			</div>
			<!-- 二维码登录 -->
			<div v-show="mashow" class="mabox">
				<div class="ma">
					<img src="http://pc.xingbuxinga.cn/qrcode/d7769e10493cf42cd40fe86d7304d37a" title="二维码扫码登录"
						 width="200px"/>
				</div>
				<p>请使用手机APP-扫一扫功能登录</p>
			</div>
			<!-- 手机号码登录 -->
			<div v-show="phshow" class="phonebox">
				<el-form :model="ruleForm2">
						<div>
							<input type="text" v-model="ruleForm2.phone" auto-complete="off" placeholder="请输入手机号码">
						</div>
						 <!-- <div>
							<input type="text" v-model="ruleForm2.verifyCode" placeholder="请输入图中的字符">
							<img src="http://localhost:8085/captcha/getCaptchaImage" height="61" width="165" alt="">
                     	</div> -->
						<div>
							<input type="text"  v-model="ruleForm2.code"  placeholder="请输入验证码">
						<!--<span class="mabtn" id="mabtn"  @click.native.prevent="getVerifyCode">获取验证码</span>-->
						<span class="mabtn" id="mabtn" v-on:click="sendSmsCode">获取验证码</span>
						</div>
				</el-form>
				<p id="txttip"></p>
				<el-input type="button" value="登录" @click.native.prevent="handleSubmit2" :loading="logining"/>
			</div>
		</section>
		<footer>
			版权所有 ©华宇新动力管理咨询科技公司 2016-2018 
		</footer>	
	</div>
</template>

<script>
	import { requestLogin } from '../api/api';
    import {requestOauth} from '../api/api';
    import {sendSmsCode} from '../api/api';
	import ElButton from "element-ui/packages/button/src/button";
	import Util from '../common/js/util'
	var crypto = require("crypto-js");
	export default {
        components: {ElButton},
		data() {
			return {
				ruleForm2: {
					phone: '18910533000',
					verifyCode:'',
					code: '1234',
					token:''
		        },
				logining: false,
				mashow:true,
				phshow:false,
				positionName:'absolute',
				leftSize:'0'
			}
		},
		methods: {
			
			matab() {
				this.phshow = false;
				this.mashow = true;
				this.positionName = 'absolute';
				this.leftSize = '0';
			},
			phonetab:function() {
				this.phshow = true;
				this.mashow = false;
				this.positionName = 'absolute';
				this.leftSize = '160px';
					
			},
            sendSmsCode(){
                this.logining = true;
                var verifyParams = {
                    phone: this.ruleForm2.phone
                };
                sendSmsCode(verifyParams).then(data => {
                    let code = data.status;
                    if (code == 0) {
                        console.log("验证码发送成功"+data.data.verifyCode)
                    }else {
                        console.log("验证码发送失败")
                    }
                });
            }
            ,
			handleSubmit2(ev) {

				// sessionStorage.setItem('user', '{"userId": "aff5125ae71e4210b62e782c6a0a36d5","userName": "李旭","password": "123456"}');
				// console.log("登录成功1")
				// this.$router.push({path: '/Table'});
	this.$router.push({
					path: '/Table'
				})

			this.logining = true;
			//验证登录获取token
			var oauthParams = {
				grant_type: 'password',
				client_id: 'android',
				client_secret: '009ca97a00ff4aafbb4a0d078e7c24f2',
				username: this.ruleForm2.phone,
				password: this.ruleForm2.code
			};
			let userPwd = Util.encrypt(JSON.stringify(oauthParams))
			requestOauth(userPwd).then(data => {
				// this.logining = false;
				var access_token = JSON.parse(Util.decrypt(data.a)).access_token;
				//登录认证
				var loginParams = {
					phone: this.ruleForm2.phone,
					// verifyCode: this.ruleForm2.verifyCode,
					code: this.ruleForm2.code,
					token: 'bcd67c25-c592-49c7-8e58-d28ba5e3cb81' //access_token
				};
				//加密
				var oauthKey=Util.encrypt(JSON.stringify(loginParams))
				console.log(oauthKey)
				//登录加密
			
				// requestLogin(oauthKey).then(data => {
				// 	this.logining = false;
					
				// 	//解密
				// 	var encryptData = data.a;
				// 	encryptData = encryptData.ciphertext.toString();  

				// 	var encryptedHexStr = crypto.enc.Hex.parse(encryptData);  

				// 	var encryptedBase64Str = crypto.enc.Base64.stringify(encryptedHexStr); 

				// 	var decryptedData = crypto.AES.decrypt(encryptedBase64Str, key, {  
				// 		mode: crypto.mode.ECB,  
				// 		padding: crypto.pad.Pkcs7  
				// 	});  

				// 	var decryptedStr = decryptedData.toString(crypto.enc.Utf8);  
				// 	//console.log("解密后:"+decryptedStr);  
				// 	let {msg, code,userName, user} = decryptedStr;
				// 	if (code == 0) {
				// 		sessionStorage.setItem('user', JSON.stringify(decryptedStr));
				// 		//console.log("登录成功1")
				// 		// this.$router.push({path: '/Table'});
				// 	}else {
				// 		//console.log("登录失败")
				// 	}
				// });
			});
		   }
		}
	}
</script>
<style scoped lang="scss">
	@import '~scss_vars';
	@import "../assets/css/bass.css";

	#app{
		background: #1e2231;
		.bg{
			position:relative;
			width:100%;
			height:920px;
			background: url(../assets/images/login/loginbg.png);
			background-size: cover;
			overflow: hidden;
				header{
				margin-top: 12%;
				text-align: center;
				color: #fff;
				font-size: 20px;

			}
			footer{
				position:absolute;
				bottom:20px;
				left:0;
				width:100%;
				text-align: center;
				color: #fff;
				font-size: 12px;
				margin-bottom: 20px;
			}
			section{
				width: 480px;
				height: 400px;
				margin: 36px auto ;
				padding: 0 80px;
				background: rgba(255,255,255,0.2);
			}
		}
		
	}
</style>
<style >
@import "../assets/css/login.css";
	
</style>

