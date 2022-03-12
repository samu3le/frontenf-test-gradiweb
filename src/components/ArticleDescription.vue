<template>
  <div class="product_description">
    <div class="product_description--head">
      <span class="product_description--subtitle"> {{ listData?.vendor }}</span>
      <div class="product_description--title">{{ listData?.title }}</div>
      <span class="product_description--price">
        <strong>$</strong>
        <span class="price--min_price">
          <strong>{{ listData?.price_min }}</strong>
        </span>
      </span>
      <span class="product_description--discount">
        $ {{ listData?.compare_at_price_max }}
      </span>
    </div>
    <div class="product_description--option1">
      <span class="variant-title"> Color</span>
      <div class="variant-option-wrap">
        <div
          class="variant-option1"
          v-for="color of listData?.options[0].values"
          :key="color.id"
        >
          <input
            type="radio"
            :id="color"
            name="color"
            :style="{ background: color }"
            @change="changeVariant"
          />
        </div>
      </div>
    </div>
    <div class="product_description--option2">
      <span class="variant-title"> Size</span>

        <div class="variant-option2">
          <div
            class="selector-item"
            v-for="size of listData?.options[1].values"
            :key="size.id"
          >
            <input
              type="radio"
              :id="size"
              name="size"
              class="selector-item_radio"
              @change="changeVariant"
            />
            <label :for="size" class="selector-item_label" checked>{{
              size
            }}</label>
          </div>
      </div>
    </div>
    <div class="product_description--quantity-price">
      <div class="btn-quantity">
        <button type="buttom" @click="btnRmv">-</button>
        <span>{{ quantity }}</span>
        <button type="buttom" @click="btnAdd">+</button>
      </div>
      <div class="price-details">
        <span>Total price:</span><strong>${{ totalPrice }}</strong>
      </div>
    </div>
    <div class="product_description--actions_btn">
      <button class="btn-favourite">Add to favourite</button>
      
      <button class="btn-cart" >
        <a href="#trabajo-1">Add to cart</a>
      </button>
    </div>
    <div class="product_description--description_text">
      <span>
        {{ listData.description }}
      </span>
    </div>
  </div>
  <ModalCart/>
</template>

<script>
import useArticle from "@/composables/useArticle.js";
import { ref } from "vue";
import { onMounted } from "vue";
import ModalCart from "../components/ModalCart";

export default {
  name: "ArticleDescription",
  components:{
    ModalCart,
  },
  setup() {
    const { listData } = useArticle();
    let totalPrice = ref(1);
    let quantity = ref(1);

    const getCurrentPrice = () => {
      const productMinPrice =
        document?.querySelector(".price--min_price ")?.textContent;
      return productMinPrice;
    };

    const calculatePrice = () => {
      return getCurrentPrice() * quantity.value;
    };

    onMounted(() => {
      totalPrice.value = calculatePrice();
    });

    const btnRmv = () => {
      quantity.value = quantity.value > 1 ? quantity.value - 1 : 1;
      totalPrice.value = calculatePrice();
    };

    const btnAdd = () => {
      quantity.value = quantity.value >= 1 ? quantity.value + 1 : 1;
      totalPrice.value = calculatePrice();
    };

    const changeVariant = () => {
      const colorChecked = document?.querySelector(".variant-option1 > input:checked");
      const sizeChecked = document?.querySelector(".selector-item > input:checked");

      if (colorChecked?.checked && sizeChecked?.checked) {
        const variantSearch = `${colorChecked.id} / ${sizeChecked.id}`;
        const variantFilter = listData.value.variants.filter(
          (e) => e.title === variantSearch
        );
        document.querySelector(".product_description--title").innerHTML = variantFilter[0]?.name;
        document.querySelector(".price--min_price").innerHTML = `${variantFilter[0]?.price}`;
        document.querySelector(".product_description--discount").innerHTML = `$ ${variantFilter[0]?.compare_at_price}`;

        totalPrice.value = calculatePrice();

      }
    };

    return {
      listData,
      totalPrice,
      quantity,
      btnRmv,
      btnAdd,
      changeVariant,
    };
  },
};
</script>

<style lang="sass"></style>
