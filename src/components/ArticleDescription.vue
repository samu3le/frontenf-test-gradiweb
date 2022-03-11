<template>
  <div class="product_description">
    <div class="product_description--head">
      <span class="product_description--subtitle"> by Nike x ALYX</span>
      <div class="product_description--title">Free Trainer 3 / MMW</div>
      <span class="product_description--price"> $ 285.00</span>
      <span class="product_description--discount"> $ 370.00</span>
    </div>
    <div class="product_description--option1">
      <span class="variant-title"> Color</span>
      <div class="variant-option1">
        <input type="radio" name="radio" />
        <input type="radio" name="radio" />
      </div>
    </div>
    <div class="product_description--option2">
      <span class="variant-title"> Size</span>
      <div class="variant-option2">
        <div class="selecotr-item">
            <input type="radio" id="radio1" name="selector" class="selector-item_radio" checked>
            <label for="radio1" class="selector-item_label">7</label>
        </div>
        <div class="selecotr-item">
            <input type="radio" id="radio2" name="selector" class="selector-item_radio" >
            <label for="radio2" class="selector-item_label">10</label>
        </div>
        <div class="selecotr-item">
            <input type="radio" id="radio3" name="selector" class="selector-item_radio" >
            <label for="radio3" class="selector-item_label">5</label>
        </div>
      </div>
    </div>
    <div class="product_description--quantity-price">
        <div class="btn-quantity">
           <button type="buttom">-</button>
            <span>1</span>
           <button type="buttom">+</button>
        </div>
        <div class="price-details">
        <span>Total price:</span><strong>$570</strong>
        </div>
    </div>
    <div class="product_description--actions_btn">
      <button class="btn-favourite">Add to favourite</button>
      <button class="btn-cart">Add to cart</button>
    </div>
    <div class="product_description--description_text">
      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass"></style>
