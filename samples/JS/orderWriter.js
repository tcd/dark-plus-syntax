import { ACTIONS } from '../constants/appConstants';
import { orderWriter as config } from '../config/config';

const CONSTANT_VALUE = '';

const defaultTab = config.savedCartTabs[0].value;
const initialState = {
  products: [],
  product: {},
  id: '',
  orderState: '',
  orderContents: [],
  activeID: '',
  multipleCartArray: [],
  isCheckingOutModal: false,
  checkoutSuccess: false,
  invoices: [],
  orderTotal: '',
  initialDates: [],
  savedCarts: [],
  savedProducts: [],
  activeTab: defaultTab,
  displayedProducts: [],
  displayedCart: [],
  selectedRetailer: {},
  retailers: [],
  selectedVendor: '',
  selectedSKU: '',
  selectedProductName: '',
  selectedSortType: '',
  selectedDescription: '',
  broadSearchTerm: ''
};

export const orderWriter = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.response,
      };
    case ACTIONS.GET_PRODUCT_SUCCESS:
      return {
        ...state,
        product: action.response,
      };
    case ACTIONS.CREATE_ORDER_SUCCESS:
      return {
        ...state,
        id: action.response.id,
        activeID: action.response.id,
        orderState: action.response.order_state,
      };
    case ACTIONS.GET_CART_SUCCESS:
      return {
        ...state,
        orderContents: action.response
      };
    case ACTIONS.GET_ACTIVE_CART_SUCCESS:
      return {
        ...state,
        id: action.response.id,
        orderContents: action.response.orderItems,
        activeID: action.response.id,
        orderTotal: action.response.orderTotal,
        orderState: action.response.orderState
      };
    case ACTIONS.ADD_MULTIPLE_TO_CART_SUCCESS:
      return {
        ...state,
        multipleCartArray: []
      };
    case ACTIONS.ADD_MULTIPLE_TO_CART_FAILURE:
      console.log('Change Item Quantities');
      return state;
    case ACTIONS.TOGGLE_CHECKOUT_MODAL:
      return {
        ...state,
        isCheckingOutModal: action.visible,
      };
    case ACTIONS.CHECKOUT_CART_FAILURE:
      return {
        ...state,
        checkoutSuccess: true
      };
    case ACTIONS.GET_INVOICES_SUCCESS:
      return {
        ...state,
        id: '',
        orderState: '',
        orderContents: [],
        activeID: '',
        multipleCartArray: [],
        isCheckingOutModal: false,
        checkoutSuccess: false,
        invoices: action.response,
        orderTotal: '',
      };
    case ACTIONS.SAVE_DATE_LIST:
      return {...state, initialDates: action.shipDates};
    case ACTIONS.GET_SAVED_CARTS_SUCCESS:
      return {...state, savedCarts: action.response};
    case ACTIONS.DELETE_SAVED_CARTS_SUCCESS:
      return {...state, savedCarts: action.response};
    case ACTIONS.CHANGE_ACTIVE_SAVED_CARTS_TAB:
      return {...state, activeTab: action.activeTab || defaultTab};
    case ACTIONS.GET_SAVED_PRODUCTS_SUCCESS:
      return {...state, savedProducts: action.response};
    case ACTIONS.DELETE_SAVED_PRODUCT_SUCCESS:
      return {...state, savedProducts: action.response};
    case ACTIONS.MUTATE_ORDERWRITER_PRODUCTS:
      return {...state, displayedProducts: action.list};
    case ACTIONS.MUTATE_CART_PRODUCTS:
      return {...state, displayedCart: action.list};
    case ACTIONS.GET_INVOICE_ADDRESSES_SUCCESS:
      return {
        ...state,
        addressOptions: action.response.addresses,
        address_id: action.response.addresses[0].id,
      };
    case ACTIONS.SET_INVOICE_ADDRESS_SUCCESS:
      return {
        ...state,
        addressOptions: action.response.addresses,
        addressFormVisible: 'hidden'
      };
    case ACTIONS.GET_RETAILERS_SUCCESS:
      return {
        ...state,
        ...action.response,
        user_id: action.response.retailers[0].id
      }
    case ACTIONS.CHANGE_SELECTED_RETAILER:
      return {
        ...state,
        selectedRetailer: action.newValue,
        user_id: action.newValue.id
      };
    case ACTIONS.FILTER_PRODUCTS_SUCCESS:
      if (action.response.length > 0) {
        return {...state, displayedProducts: action.response};
      }
      break;
    case ACTIONS.SET_SELECTED_PRODUCT_NAME:
      return Object.assign({}, state, {
        selectedSortType: 'NAME',
        selectedProductName: action.name
      });
    case ACTIONS.SET_SELECTED_SKU:
      return Object.assign({}, state, {
        selectedSortType: 'SKU',
        selectedSKU: action.sku
      });
    case ACTIONS.SET_SELECTED_VENDOR:
      return Object.assign({}, state, {
        selectedSortType: 'MANUFACTURER',
        selectedVendor: action.name
      });
      case ACTIONS.SEARCH_SELECTED_DESCRIPTION:
         return Object.assign({}, state, {
           selectedSortType: 'DESCRIPTION',
           selectedDescription: action.term
         });
      case ACTIONS.SET_SELECTED_BROAD_SEARCH:
        return Object.assign({}, state, {
          selectedSortType: 'SEARCHBAR',
          broadSearchTerm: action.input
        });
      case ACTIONS.RESET_FILTER_TYPE:
      return Object.assign({}, state, {
        selectedSortType: '',
        selectedVendor: '',
        selectedSKU: '',
        selectedProductName: '',
        selectedDescription: ''
      });
    default:
      return state;
  }
};
