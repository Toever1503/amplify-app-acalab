<template>
  <div class="package-box">
    <TextView
      class="body12"
      :text="name"
      color="#4B52FF"
      style="font-weight: 700"
    />
    <div class="price-box">
      <p class="text-count">
        {{ count }}개&nbsp;<span>열람권</span>&nbsp;<span
          class="text-discount"
          v-if="discountPercent"
          >{{ discountPercent }}% 할인</span
        >
      </p>
      <p class="text-perprice" :style="makeMarginBottom">
        ₩{{ perPrice }}&nbsp;<span>/ 개</span>
      </p>
      <p class="text-totalprice" v-if="totalUndiscountPrice">
        <span>₩{{ totalUndiscountPrice }}</span
        >&ensp;>&ensp;<span>{{ addComma }}</span>
      </p>
    </div>
    <button class="purchase-button" @click="requestPayment('카드')">
      <TextView text="구매하기" class="strong18" />
    </button>
  </div>
</template>

<script>
import { loadTossPayments } from "@tosspayments/payment-sdk";
import TextView from "~/app.component/TextView.vue";

const clientKey = "test_ck_P24xLea5zVANnxJ4AeyrQAMYNwW6";

export default {
  data() {
    return {
      orderId: "3hUKI8ssCr6uQqLXn0m0g",
      customerName: "양창식",
      cssStyle: { "margin-bottom": "40px" },
    };
  },
  props: {
    name: String,
    count: Number,
    perPrice: String,
    discountPercent: Number,
    totalDiscountPrice: String,
    totalUndiscountPrice: String,
  },
  components: {
    TextView,
  },
  computed: {
    makeMarginBottom() {
      return this.totalUndiscountPrice === null ? this.cssStyle : null;
    },
    // 토스가 지정한 상품명의 변수명
    orderName() {
      const orderName = `${this.count}개 열람권`;
      return orderName;
    },
    // 토스가 지정한 금액의 변수명
    amount() {
      const amount = this.totalDiscountPrice;
      return amount;
    },
    addComma() {
      const moneyWithComma = this.totalDiscountPrice
        // .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return moneyWithComma;
    },
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
          // successUrl: `${location.origin}/success`,  // FIXME: no global location
          // failUrl: `${location.origin}/fail`,
        })
        .catch((error) => {
          if (error.code === "USER_CANCEL") {
            // 결제 고객이 결제창을 닫았을 때 에러 처리
          } else if (error.code === "INVALID_CARD_COMPANY") {
            // 유효하지 않은 카드 코드에 대한 에러 처리
          }
        });
    },
  },
};
</script>

<style lang="scss">
.package-box {
  width: 25%;
  min-width: 204px;
  height: 296px;
  background-color: #ffffff;
  border: 1px solid #d9d9d9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  box-sizing: border-box;
  justify-content: center;
  &:hover {
    box-shadow: 0px 2px 8px rgba(104, 21, 205, 0.2),
      0px 2px 30px 4px rgba(104, 21, 205, 0.25);
  }
  .price-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    .text-count {
      text-align: center;
      font-size: 28px;
      line-height: 130%;
      font-weight: 700;
      color: #1a1a1a;
      display: flex;
      align-items: center;
      justify-content: center;
      span {
        font-size: 24px;
      }
      .text-discount {
        display: inline-block;
        font-size: 12px;
        line-height: 150%;
        color: #c32323;
      }
    }
    .text-perprice {
      font-size: 28px;
      line-height: 130%;
      font-weight: 700;
      color: #1a1a1a;
      span {
        font-size: 16px;
      }
    }
    .text-totalprice {
      font-size: 16px;
      line-height: 24px;
      font-weight: 400;
      color: #9e9e9e;
      span:first-child {
        text-decoration: line-through;
      }
      span:last-child {
        font-weight: 700;
        color: #2219e2;
      }
    }
  }
  .purchase-button {
    width: 100%;
    height: 48px;
    background-color: #ffffff;
    border: 0.5px solid #4b52ff;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover {
      background-color: #4b52ff;
      border: 0.5px solid #4b52ff;
      color: #ffffff;
    }
  }
}
</style>
