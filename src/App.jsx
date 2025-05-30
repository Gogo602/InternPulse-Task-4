import BillingNew from "./Conponents/Billing"
import PaymentNew from "./Conponents/Invoice"
import SecuritySetting from "./Conponents/Security"
import SettingN from "./Conponents/Setting"


function App() {

  return (
    <div className="text-4xl font-bold">
        welcome

      <SettingN/>
      <BillingNew/>
      <PaymentNew/>
      <SecuritySetting/>
    </div>
  )
}

export default App
