document.addEventListener('DOMContentLoaded', function() {
    const quantityButtons = document.querySelectorAll('.quantity-btn');
  
    quantityButtons.forEach(button => {
      button.addEventListener('click', function() {
        const action = this.dataset.action;
        const cartItem = this.closest('.cart-item');
        const itemid = cartItem.dataset.itemid;
        const itemmodel = cartItem.dataset.itemmodel;
  
        const requestData = {
          itemid: itemid,
          itemmodel: itemmodel,
          action: action
        };
  
        fetch('/cart/update', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(requestData)
        })
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            const newQuantity = data.newQuantity;
            const quantityElement = cartItem.querySelector('.quantity');
            if (newQuantity > 0) {
              quantityElement.textContent = newQuantity;
            } else {
              cartItem.remove();
            }
          } else {
            alert('Error updating cart');
          }
        })
        .catch(error => {
          console.error('Error:', error);
          alert('Error updating cart');
        });
      });
    });
  });