import { createStore } from 'vuex'

export default createStore({
  state: {
    modalFlag: false,
    modalItem: Object,
    modalFlagCustom: false,
    flavors: [{
      title: 'Chocolate Cake',
      key: 'chocolate',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam vel accusantium voluptatem magnam quaerat sit.',
      price: 130,
      quantity: 10
    }, {
      title: '3 Milk Cake',
      key: '3-milk',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam vel accusantium voluptatem magnam quaerat sit.',
      price: 100,
      quantity: 15
    }, {
      title: 'Capuchino Cake',
      key: 'capuchino',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam vel accusantium voluptatem magnam quaerat sit.',
      price: 130,
      quantity: 12
    }, {
      title: 'Carrot Cake',
      key: 'carrot',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam vel accusantium voluptatem magnam quaerat sit.',
      price: 100,
      quantity: 15
    }, {
      title: 'Cheesecake',
      key: 'cheesecake',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam vel accusantium voluptatem magnam quaerat sit.',
      price: 115,
      quantity: 17
    }],
    toppings: [{
      title: 'Berries',
      key: 'berries',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam vel accusantium voluptatem magnam quaerat sit.',
      price: 40,
      quantity: 10
    }, {
      title: 'Chocolate Chips',
      key: 'chocolate-chips',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam vel accusantium voluptatem magnam quaerat sit.',
      price: 20,
      quantity: 20
    }, {
      title: 'Colored Chips',
      key: 'colored-chips',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam vel accusantium voluptatem magnam quaerat sit.',
      price: 15,
      quantity: 15
    }, {
      title: 'Fruits',
      key: 'fruits',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam vel accusantium voluptatem magnam quaerat sit.',
      price: 30,
      quantity: 20
    }, {
      title: 'Melted Chocolate',
      key: 'melted-chocolate',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam vel accusantium voluptatem magnam quaerat sit.',
      price: 30,
      quantity: 14
    }, {
      title: 'White Chocolate',
      key: 'white-chocolate',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam vel accusantium voluptatem magnam quaerat sit.',
      price: 35,
      quantity: 10
    }],
    currentOrder: {
      orderKey: '',
      customerName: '',
      customerPhone: '',
      customerEmail: '',
      items: [],
      customCakes: [],
      totalPrice: 0
    },
    orderExamples: [{
      orderKay: 'o1',
      customerName: 'Jhon Smith',
      customerPhone: '1234567890',
      customerEmail: 'jhonsmith@email.com',
      items: [{
        title: 'Chocolate Cake',
        key: 'chocolate',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam vel accusantium voluptatem magnam quaerat sit.',
        price: 130,
        quantity: 10
      }, {
        title: 'Carrot Cake',
        key: 'carrot',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam vel accusantium voluptatem magnam quaerat sit.',
        price: 100,
        quantity: 15
      }, {
        title: 'Berries',
        key: 'berries',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam vel accusantium voluptatem magnam quaerat sit.',
        price: 40,
        quantity: 10
      }],
      customCakes: [{
        flavors: ['chocolate', 'capuchino', 'carrot'],
        toppings: ['berries', 'chocolate-chips', 'melted-chocolate'],
        description: 'Put the melted chocolate as a base, above it the berries and on the top the chocolate chips.',
        price: 600
      }, {
        flavors: ['carrot', 'carrot', 'carrot'],
        toppings: ['berries', 'colored-chips', 'fruits'],
        description: 'I would like to have divided the top of the cake in 3 partss, and in each part put each topping.',
        price: 535
      }],
      totalPrice: 2065
    }, {
      orderKay: 'o2',
      customerName: 'Michael Jones',
      customerPhone: '1234567890',
      customerEmail: 'michaeljones@email.com',
      items: [{
        title: 'Carrot Cake',
        key: 'carrot',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam vel accusantium voluptatem magnam quaerat sit.',
        price: 100,
        quantity: 10
      }, {
        title: 'Cheesecake',
        key: 'cheesecake',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam vel accusantium voluptatem magnam quaerat sit.',
        price: 115,
        quantity: 15
      }],
      customCakes: [{
        flavors: ['chocolate', '3-milk', '3-milk'],
        toppings: ['melted-chocolate', 'white-chocolate'],
        description: 'Combine both toppings please.',
        price: 585
      }],
      totalPrice: 1403
    }]
  },
  getters: {
    getBestSeller(state) {
      return state.flavors[0];
    }
  },
  mutations: {
    // Codigo de Add to Order
    updateOrder(context, item) {
      let price = 0;

      if (item.title.includes('Cake') || item.title.includes('cake')) {
        price = item.price * 3 + 100;
        this.state.flavors.forEach(element => {
          if (element.key == item.key) {
            element.quantity = element.quantity - 3;
          }
        });
      } else {
        price = item.price;
        this.state.toppings.forEach(element => {
          if (element.key == item.key) {
            element.quantity = element.quantity - 1;
          }
        });
      }

      this.state.currentOrder.items.push(item);
      this.state.currentOrder.totalPrice += price;

      this.state.modalFlag = !this.state.modalFlag;
      console.log(this.state.currentOrder);
    },
    addCustomCake(context) {
      let price = 0;

      // Get Flavors Selection
      let flavor1 = document.getElementById('flavor1').value;
      let flavor2 = document.getElementById('flavor2').value;
      let flavor3 = document.getElementById('flavor3').value;

      let selectedFlavors = [];
      selectedFlavors.push(flavor1, flavor2, flavor3);
      
      selectedFlavors.forEach(element => {
        this.state.flavors.forEach(element2 => {
          if (element2.key == element) {
            price += element2.price;
            element2.quantity = element2.quantity - 1;
          }
        });
      });

      // Get Toppings Checked
      let selectedToppings = [];
      const toppings = this.state.toppings;

      toppings.forEach(element => {
        var topping = document.getElementById(element.key + '-check');
        
        if (topping.checked) {
          selectedToppings.push(element.key);
          price += element.price;
          element.quantity -= 1;
        }
      });
      
      // Get Form data
      let name = document.getElementById('nameInput').value;
      let phone = document.getElementById('phoneInput').value;
      let email = document.getElementById('emailInput').value;
      let description = document.getElementById('descriptionInput').value;

      if (name == '' || phone == '' || email == '' || description == '') {
        this.state.modalFlagCustom = !this.state.modalFlagCustom;
        return alert('Favor de llenar correctamente los campos');
      }

      let fee = 150;
      // Update Customer data
      this.state.currentOrder.customerName = name;
      this.state.currentOrder.customerPhone = phone;
      this.state.currentOrder.customerEmail = email;

      this.state.currentOrder.customCakes.push({
        flavors: selectedFlavors,
        toppings: selectedToppings,
        description: description,
        price: price + fee
      });

      //Update Price
      this.state.currentOrder.totalPrice = this.state.currentOrder.totalPrice + price + fee;
      this.state.modalFlagCustom = !this.state.modalFlagCustom;

      console.log(this.state.currentOrder);
    },
    switchFlag(context, item) {
      this.state.modalFlag = !this.state.modalFlag;
      this.state.modalItem = item;
    },
    switchFlagCustom(context) {
      this.state.modalFlagCustom = !this.state.modalFlagCustom;
    }
  },
  actions: {
  },
  modules: {
  }
})
