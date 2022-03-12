<template>
  <article class="modal" id="trabajo-1">
    <div class="modal-content">
      <article class="portfolio_modal">
        <div class="portfolio_modal--image">
          <img :src="listData?.media[0].src" alt="image_cart" />
        </div>
        <div class="portfolio-info">
          <h2 class="title">Products List</h2>
          <strong> {{ listCartData.title }} </strong>
          <p><strong>Quantity: </strong>{{ listCartData.quantity }}</p>
          <p><strong>Price: $ </strong>{{ listCartData.price }}</p>
          <p><strong>Total: $ </strong>{{ listCartData.total_pay }}</p>
          <div class="portfolio_info--btn_action">
            <a class="btn-buy" href="#">Return</a>
            <a href="#" class="btn-pay">Pay</a>
          </div>
        </div>
      </article>
    </div>
  </article>
</template>

<script>
import useArticle from "@/composables/useArticle.js";

export default {
  name: "ModalCart",
  setup(){
    const { listCartData, listData } = useArticle();
    return {
      listCartData,
      listData,
    };
  },
};
</script>
