import Index from "../components/index.vue";
import About from "../components/about.vue";
import Spec from "../components/spec.vue";

import CreateAccount from '../components/create-account.vue'
import GeneralInfo from '../components/general-info.vue'
import UpdateProfilePicture from '../components/update-profile-picture.vue'
import PaymentMethod from '../components/payment-method.vue'
import Congratulations from '../components/congratulations.vue'

export default {
  routes: [{
      path: "/",
      component: Index,
      alias: "/index",
      children: [{
        name: 'CreateAccount',
        path: '', // default sub page
        component: CreateAccount
      }, {
        name: 'GeneralInfo',
        path: 'general-info',
        component: GeneralInfo
      }, {
        name: 'UpdateProfilePicture',
        path: 'update-profile-picture',
        component: UpdateProfilePicture
      }, {
        name: 'PaymentMethod',
        path: 'payment-method',
        component: PaymentMethod
      }, {
        name: 'Congratulations',
        path: 'congratulations',
        component: Congratulations
      }]
    },
    {
      path: "/spec",
      component: Spec
    },
    {
      path: "/about",
      component: About
    },
    {
      path: "*",
      alias: "/404",
      component: () =>
        import ('../components/404.vue'),
    }
  ]
};
