<template>
  <div id="app">
    <h1>결제하기</h1>
    <input type="text" v-model="amount" placeholder="총 주문금액" />
    <input type="text" v-model="orderId" placeholder="주문번호" />
    <input type="text" v-model="orderName" placeholder="주문명" />
    <input type="text" v-model="customerName" placeholder="고객명" />
    <button v-on:click="requestPayment('카드')">주문 금액 결제하기</button>
  </div>
</template>

<script>
import { loadTossPayments } from "@tosspayments/payment-sdk";

const clientKey = "test_ck_P24xLea5zVANnxJ4AeyrQAMYNwW6";

export default {
  name: "App",
  async created() {
    //this.getMembers();
  },
  data() {
    return {
      amount: "49000",
      orderId: "3hUKI8ssCr6uQqLXn0m0g",
      orderName: "송주원 생기부 외 2건",
      customerName: "김재철",
    };
  },
  methods: {
    async requestPayment(method) {
      const { amount, orderId, orderName, customerName } = this;
      if (!amount || !orderId || !orderName || !customerName) return;
      const order = { amount, orderId, orderName, customerName };

      const tossPayments = await loadTossPayments(clientKey);
      tossPayments
        .requestPayment(method, {
          amount: order.amount,
          orderId: order.orderId,
          orderName: order.orderName,
          customerName: order.customerName,
          successUrl: location.origin + "/success",
          failUrl: location.origin + "/fail",
        })
        .catch(function (error) {
          if (error.code === "USER_CANCEL") {
            // 결제 고객이 결제창을 닫았을 때 에러 처리
          } else if (error.code === "INVALID_CARD_COMPANY") {
            // 유효하지 않은 카드 코드에 대한 에러 처리
          }
        });
      this.amount = "";
      (this.orderId = ""), (this.orderName = ""), (this.customerName = "");
    },
    async requestConfirm() {
      //승인 요청
      //const order = await ...;
    },
  },
};
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
