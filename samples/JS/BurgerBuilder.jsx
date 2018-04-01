import React, { Component } from 'react'
import Aux from '../../hoc/Aux1'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

const INGREDIENTS_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.5,
  bacon: 0.7
}

export default class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },

    totalPrice: 4,
    purchasable: false,
    purchasing: false
  }

  componentDidUpdate = (_, prevState) => {
    if (this.state.ingredients !== prevState.ingredients) {
      this.updatePurchase()
    }
  }

  updatePurchase = () => {
    const stateIng = { ...this.state.ingredients }
    const sum = Object.keys(stateIng)
      .map(igKey => {
        return stateIng[igKey]
      })
      .reduce((sum, el) => sum + el, 0)

    this.setState({ purchasable: sum > 0 })
  }

  addIngredients = type =>
    this.setState(prevState => ({
      ingredients: {
        ...this.state.ingredients,
        [type]: prevState.ingredients[type] + 1
      },

      totalPrice: prevState.totalPrice + INGREDIENTS_PRICES[type]
    }))

  removeIngredients = type => {
    if (this.state.ingredients[type] <= 0) return

    this.setState(prevState => ({
      ingredients: {
        ...this.state.ingredients,
        [type]: prevState.ingredients[type] - 1
      },

      totalPrice: prevState.totalPrice - INGREDIENTS_PRICES[type]
    }))
  }

  purchasingHandler = () => this.setState({ purchasing: true })

  modalClose = () => this.setState({ purchasing: false })

  purchaseContinue = () => alert('Ok, we are continue...')

  render() {
    const disabledInfo = { ...this.state.ingredients }
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }
    return (
      <Aux>
        <div>Hello Edward</div>
        {/* <Modal modalClose={this.modalClose} show={this.state.purchasing}> */}
        <Modal>
          {/* <OrderSummary
            modalClose={this.modalClose}
            purchaseContinue={this.purchaseContinue}
            ingredients={this.state.ingredients}
            price={this.state.totalPrice}
          /> */}
          <div>Menu</div>
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          onRemove={this.removeIngredients}
          onAdd={this.addIngredients}
          disabledInfo={disabledInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
          ordred={this.purchasingHandler}
        />
      </Aux>
    )
  }
}
