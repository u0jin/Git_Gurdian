<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<!-- jQuery -->
<script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
<!-- iamport.payment.js -->
<script type="text/javascript" src="https://cdn.iamport.kr/js/iamport.payment-1.1.5.js"></script>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<button>테스트</button>
<script>
	var IMP = window.IMP;
	IMP.init('imp24001024');
		 IMP.request_pay({ // param
			    pay_method: "card", // "card"만 지원됩니다
			    merchant_uid: "issue_billingkey_monthly30ㅌa123", // 빌링키 발급용 주문번호
			    customer_uid: "kjs31a24", // 카드(빌링키)와 1:1로 대응하는 값
			    name: "최초인증결제",
			    amount: 0, // 0 으로 설정하여 빌링키 발급만 진행합니다.
			    buyer_email: "gildong@gmail.com",
			    buyer_name: "홍길동",
			    buyer_tel: "010-4242-4242",
			    buyer_addr: "서울특별시 강남구 신사동",
			    buyer_postcode: "01181"
			  }, function (rsp) { // callback
			    if (rsp.success) {
			    	 // jQuery로 HTTP 요청
			    	 alert("빌링키 발급 성공");
			         jQuery.ajax({
			          url: "billingKey.fd", // 서비스 웹서버
			          method: "POST",
			          data: {
			            customer_uid: "kjs3124", // 카드(빌링키)와 1:1로 대응하는 값
			          }, success:function(data){
						/* $.ajax({
							url:"paySuccess.fd",
							method:"POST",
							data:{"imp_key":"8768417829708074"
								, "imp_secret":"gBsllv3A3KCmuf4pIyq6ii5aAyCRzCVQenbASfaWZNiu3mTLVkRdDWodv055D0VSo6shlDdlqwQuTJfO"},
							success:function(data){
							}, error:function(err){
								alert("bye");
							}
						}); */
			          }
			        }); 
			    } else {
			    	
			    }
			  });
			// 밑은 JTNET
	/* 		IMP.request_pay({
				pay_method : 'card', // 'card'만 지원됩니다.
				merchant_uid : 'merchant_' + new Date().getTime(),
				name : '최초인증결제',
				amount : 0, // 빌링키 발급만 진행하며 결제승인을 하지 않습니다.
				customer_uid : 'your-customer-unique-id', //customer_uid 파라메터가 있어야 빌링키 발급을 시도합니다.
				buyer_email : 'iamport@siot.do',
				buyer_name : '아임포트',
				buyer_tel : '02-1234-1234'
			}, function(rsp) {
				if ( rsp.success ) {
					alert('빌링키 발급 성공');
					 // 빌링키 발급 성공
				      // jQuery로 HTTP 요청
				      $.ajax({
				        url: "paySuccess.fd", // 서비스 웹서버
				        method: "POST",
				        data: { customer_uid: "your-customer-unique-id" },
				        success:function(data){
				        	console.log("success");
				        	console.log(data.customer_uid);
				        }, error:function(data){
				        	console.log("error");
				        	console.log(data);
				        }
				      });
				} else {
					alert('빌링키 발급 실패');
				}
			}); */
			
	/* 		IMP.request_pay({
				merchant_uid : 'merchant_',
				name : '최초인증결제',
				amount : 0, // 빌링키 발급만 진행하며 결제승인을 하지 않습니다.
				customer_uid : 'your-customer-unique-id', //customer_uid 파라메터가 있어야 빌링키 발급이 정상적으로 이뤄집니다.
				buyer_email : 'iamport@siot.do',
				buyer_name : '아임포트',
				buyer_tel : '02-1234-1234'
			}, function(rsp) {
				if ( rsp.success ) {
					alert('빌링키 발급 성공');
					console.log(rsp.success);
					$.ajax({
						url:'https://api.iamport.kr/subscribe/payments/schedule',
						method:'POST',
						data:{"customer_uid":"your-customer-unique-id", "merchant_uid":"'merchant_'", "amount":'3000'},
						success:function(data){
							console.log(data);
							console.log("성공");
						}, error:function(err){
							console.log(err);
							console.log("실패");
						}
					});
				} else {
					alert('빌링키 발급 실패');
				}
			}); */
	/* 		IMP.request_pay({
				merchant_uid : 'merchant_',
				name : '최초인증결제',
				amount : 0, // 빌링키 발급만 진행하며 결제승인을 하지 않습니다.
				customer_uid : 'merchant_' + new Date().getTime(),
				buyer_email : 'iamport@siot.do',
				buyer_name : '아임포트',
				buyer_tel : '02-1234-1234'
			}, function(rsp) {
				if ( rsp.success ) {
					alert('빌링키 발급 성공');
					console.log(rsp);
					$.ajax({
						url:'https://api.iamport.kr/subscribe/payments/schedule',
						method:'POST',
						data:{"customer_uid":"kjs", "checking_amount":"0", "card_number":"4854-8002-0836-8235"
							, "expiry":"2022-11","birth":"950207","pwd_2digit":"21","pg":"jtnet.tpaytest2m"
							},
						schedules:[
							{
								"merchant_uid": "your_merchant_uid3",
								"schedule_at": 1567514714,
								"amount": 1,
								"name": "결제테스트",
								"buyer_name": "김진수",
								"buyer_email": "csh4723@naver.com",
								"buyer_tel": "010-7559-8147",
								"buyer_addr": "충남 청양군 화성면 하매길 79-13",
								"buyer_postcode": "345-821"
							}
						],
						success:function(data){
							console.log(data);
							console.log("성공");
						}, error:function(err){
							console.log(err);
							console.log("실패");
						}
					});
				} else {
					alert('빌링키 발급 실패');
				}
			}); */
	 		/* IMP.request_pay({
				merchant_uid : 'merchant_' + new Date().getTime(),
				name : '최초인증결제',
				amount : 0, // 빌링키 발급만 진행하며 결제승인을 하지 않습니다.
				customer_uid : 'merchant_',
				buyer_email : 'iamport@siot.do',
				buyer_name : '아임포트',
				schedule_at: "1567518434",
				buyer_tel : '02-1234-1234'
			}, function(rsp) {
				if ( rsp.success ) {
					$.ajax({
						url:"paySuccess.fd",
						data:"POST",
						success:function(data){
							console.log("hello");
						}
					});
				} else {
					alert('빌링키 발급 실패');
				}
			}); */  
			
	</script>
</body>
</html>