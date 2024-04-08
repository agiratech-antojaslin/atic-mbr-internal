import ViewBill from 'asset/images/table/view.svg'
import VisibilityOff from 'asset/images/form/close-eye.svg'
import Visibility from 'asset/images/form/open-eye.svg'
import Info from 'asset/images/form/info.svg'

import User from 'asset/images/menu/user.svg'
import Mail from 'asset/images/menu/mail.svg'
import Users from 'asset/images/menu/users.svg'
import Logout from 'asset/images/menu/log-out.svg'
import Filters from 'asset/images/form/filters.svg'
import Search from 'asset/images/form/search.svg'
import Examine from 'asset/images/form/examine.svg'

import Reprice from 'asset/images/bill-info/reprice.svg'
import DenyAll from 'asset/images/bill-info/deny-all.svg'
import NyCalculator from 'asset/images/bill-info/ny-calculator.svg'
import Clear from 'asset/images/bill-info/clear.svg'
import ImportBills from 'asset/images/bill-info/import-bills.svg'
import GenerateEOBOrDOC from 'asset/images/bill-info/generate-eob-doc.svg'
import CircleClose from 'asset/images/icons/dialog-close.svg'
import Close from 'asset/images/icons/close.svg'

export const BillsIcon = () => {
  return (
    <div>
      <svg
        width="21"
        height="24"
        viewBox="0 0 21 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.1666 1.45862V5.93337C12.1666 6.54009 12.1666 6.84345 12.2847 7.07519C12.3885 7.27903 12.5543 7.44476 12.7581 7.54863C12.9898 7.6667 13.2932 7.6667 13.8999 7.6667H18.3747M14.3333 13.0833H5.66658M14.3333 17.4166H5.66658M7.83325 8.74996H5.66658M12.1666 1.16663H6.53325C4.71308 1.16663 3.803 1.16663 3.10778 1.52085C2.49626 1.83244 1.99907 2.32963 1.68748 2.94116C1.33325 3.63637 1.33325 4.54646 1.33325 6.36663V17.6333C1.33325 19.4535 1.33325 20.3635 1.68748 21.0588C1.99907 21.6703 2.49626 22.1675 3.10778 22.4791C3.803 22.8333 4.71308 22.8333 6.53325 22.8333H13.4666C15.2868 22.8333 16.1968 22.8333 16.8921 22.4791C17.5036 22.1675 18.0008 21.6703 18.3124 21.0588C18.6666 20.3635 18.6666 19.4535 18.6666 17.6333V7.66663L12.1666 1.16663Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

export const DeniedBillsIcon = () => {
  return (
    <div>
      <svg
        width="21"
        height="24"
        viewBox="0 0 21 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.1666 10.9167H5.66659M7.83325 15.2501H5.66659M14.3333 6.58341H5.66659M18.6666 12.0001V6.36675C18.6666 4.54658 18.6666 3.63649 18.3124 2.94128C18.0008 2.32975 17.5036 1.83257 16.8921 1.52098C16.1968 1.16675 15.2868 1.16675 13.4666 1.16675H6.53325C4.71308 1.16675 3.803 1.16675 3.10778 1.52098C2.49626 1.83257 1.99907 2.32975 1.68748 2.94128C1.33325 3.63649 1.33325 4.54658 1.33325 6.36675V17.6334C1.33325 19.4536 1.33325 20.3637 1.68748 21.0589C1.99907 21.6704 2.49626 22.1676 3.10778 22.4792C3.803 22.8334 4.71308 22.8334 6.53325 22.8334H9.99992M14.3333 16.3334L19.7499 21.7501M19.7499 16.3334L14.3333 21.7501"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

export const AcceptedBillsIcon = () => {
  return (
    <div>
      <svg
        width="21"
        height="24"
        viewBox="0 0 21 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.6666 12.5416V6.36663C18.6666 4.54646 18.6666 3.63637 18.3124 2.94116C18.0008 2.32963 17.5036 1.83244 16.8921 1.52085C16.1968 1.16663 15.2868 1.16663 13.4666 1.16663H6.53325C4.71308 1.16663 3.803 1.16663 3.10778 1.52085C2.49626 1.83244 1.99907 2.32963 1.68748 2.94116C1.33325 3.63637 1.33325 4.54646 1.33325 6.36663V17.6333C1.33325 19.4535 1.33325 20.3635 1.68748 21.0588C1.99907 21.6703 2.49626 22.1675 3.10778 22.4791C3.803 22.8333 4.71308 22.8333 6.53325 22.8333H9.99992M12.1666 10.9166H5.66658M7.83325 15.25H5.66658M14.3333 6.58329H5.66658M12.7083 19.5833L14.8749 21.75L19.7499 16.875"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

export const CptCalculatorIcon = () => {
  return (
    <div>
      {/* <img height={20} width={20} src={calculatorIcon} alt="" /> */}
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_47_325)">
          <path
            d="M20.238 0H3.76178C1.69614 0 0.015625 1.68056 0.015625 3.74616V20.2538C0.015625 22.3194 1.69614 24 3.76178 24H20.238C22.2999 24 23.9804 22.3225 23.9841 20.2606C23.985 19.7429 23.566 19.3224 23.0482 19.3215H23.0465C22.5295 19.3215 22.11 19.7401 22.1091 20.2574C22.1073 21.2872 21.2679 22.125 20.238 22.125H12.9374V12.9375H22.1091V15.5715C22.1091 16.0892 22.5288 16.509 23.0466 16.509C23.5644 16.509 23.9841 16.0892 23.9841 15.5715V3.74616C23.9841 1.68056 22.3036 0 20.238 0ZM1.89062 3.74616C1.89062 2.71439 2.73002 1.875 3.76178 1.875H11.0624V11.0625H1.89062V3.74616ZM1.89062 20.2538V12.9375H11.0624V22.125H3.76178C2.73002 22.125 1.89062 21.2856 1.89062 20.2538ZM12.9374 11.0625V1.875H20.238C21.2697 1.875 22.1091 2.71439 22.1091 3.74616V11.0625H12.9374Z"
            fill="currentColor"
          />
          <path
            d="M7.96142 5.53125H7.41406V4.98389C7.41406 4.46611 6.99434 4.04639 6.47656 4.04639C5.95878 4.04639 5.53906 4.46611 5.53906 4.98389V5.53125H4.9917C4.47392 5.53125 4.0542 5.95096 4.0542 6.46875C4.0542 6.98653 4.47392 7.40625 4.9917 7.40625H5.53906V7.95361C5.53906 8.47139 5.95878 8.89111 6.47656 8.89111C6.99434 8.89111 7.41406 8.47139 7.41406 7.95361V7.40625H7.96142C8.4792 7.40625 8.89892 6.98653 8.89892 6.46875C8.89892 5.95096 8.4792 5.53125 7.96142 5.53125Z"
            fill="currentColor"
          />
          <path
            d="M7.96142 16.578H4.9917C4.47392 16.578 4.0542 16.9977 4.0542 17.5155C4.0542 18.0333 4.47392 18.453 4.9917 18.453H7.96142C8.4792 18.453 8.89892 18.0333 8.89892 17.5155C8.89892 16.9977 8.4792 16.578 7.96142 16.578Z"
            fill="currentColor"
          />
          <path
            d="M19.0083 18.0422H16.0386C15.5208 18.0422 15.1011 18.4619 15.1011 18.9797C15.1011 19.4975 15.5208 19.9172 16.0386 19.9172H19.0083C19.5261 19.9172 19.9458 19.4975 19.9458 18.9797C19.9458 18.4619 19.526 18.0422 19.0083 18.0422Z"
            fill="currentColor"
          />
          <path
            d="M19.0083 15.1138H16.0386C15.5208 15.1138 15.1011 15.5335 15.1011 16.0513C15.1011 16.5691 15.5208 16.9888 16.0386 16.9888H19.0083C19.5261 16.9888 19.9458 16.5691 19.9458 16.0513C19.9458 15.5335 19.526 15.1138 19.0083 15.1138Z"
            fill="currentColor"
          />
          <path
            d="M19.2359 4.75595C18.8698 4.38976 18.2762 4.38981 17.9101 4.75591L17.5231 5.14295L17.136 4.75591C16.7699 4.38976 16.1763 4.38981 15.8102 4.75595C15.4441 5.12209 15.4441 5.71567 15.8103 6.08176L16.1973 6.46876L15.8103 6.85576C15.4441 7.22191 15.4441 7.81548 15.8102 8.18158C15.9933 8.36467 16.2332 8.45617 16.4732 8.45617C16.7131 8.45617 16.953 8.36462 17.1361 8.18162L17.5231 7.79458L17.9102 8.18162C18.0932 8.36467 18.3331 8.45617 18.5731 8.45617C18.813 8.45617 19.0529 8.36462 19.236 8.18158C19.6022 7.81544 19.6021 7.22186 19.236 6.85576L18.8489 6.46876L19.2359 6.08176C19.602 5.71567 19.602 5.12209 19.2359 4.75595Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="clip0_47_325">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}

export const AdministrationIcon = () => {
  return (
    <div>
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.00002 20.8174C3.6026 21 4.41649 21 5.8 21H16.2C17.5835 21 18.3974 21 19 20.8174M3.00002 20.8174C2.87082 20.7783 2.75133 20.7308 2.63803 20.673C2.07354 20.3854 1.6146 19.9265 1.32698 19.362C1 18.7202 1 17.8802 1 16.2V5.8C1 4.11984 1 3.27976 1.32698 2.63803C1.6146 2.07354 2.07354 1.6146 2.63803 1.32698C3.27976 1 4.11984 1 5.8 1H16.2C17.8802 1 18.7202 1 19.362 1.32698C19.9265 1.6146 20.3854 2.07354 20.673 2.63803C21 3.27976 21 4.11984 21 5.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C19.2487 20.7308 19.1292 20.7783 19 20.8174M3.00002 20.8174C3.00035 20.0081 3.00521 19.5799 3.07686 19.2196C3.39249 17.6329 4.63288 16.3925 6.21964 16.0769C6.60603 16 7.07069 16 8 16H14C14.9293 16 15.394 16 15.7804 16.0769C17.3671 16.3925 18.6075 17.6329 18.9231 19.2196C18.9948 19.5799 18.9996 20.0081 19 20.8174M15 8.5C15 10.7091 13.2091 12.5 11 12.5C8.79086 12.5 7 10.7091 7 8.5C7 6.29086 8.79086 4.5 11 4.5C13.2091 4.5 15 6.29086 15 8.5Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

export const ViewBillIcon = () => {
  return (
    <div>
      <img src={ViewBill} alt="View Bill" />
    </div>
  )
}

export const VisibilityOffIcon = () => {
  return (
    <div>
      <img src={VisibilityOff} height={18} width={18} alt="Visibility Off" />
    </div>
  )
}

export const VisibilityIcon = () => {
  return (
    <div>
      <img src={Visibility} height={18} width={18} alt="Visibility" />
    </div>
  )
}

export const InfoIcon = () => {
  return (
    <div>
      <img src={Info} alt="Info" />
    </div>
  )
}

export const MoreIcon = () => {
  return (
    <div>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1640_6451)">
          <path
            d="M17.8185 13.8182C18.8211 13.8182 19.6367 13.0026 19.6367 12.0001C19.6367 10.9975 18.8211 10.1819 17.8185 10.1819C16.816 10.1819 16.0004 10.9975 16.0004 12.0001C16.0004 13.0026 16.816 13.8182 17.8185 13.8182Z"
            fill="#606468"
          />
          <path
            d="M12.0002 13.8182C13.0027 13.8182 13.8184 13.0026 13.8184 12.0001C13.8184 10.9975 13.0027 10.1819 12.0002 10.1819C10.9976 10.1819 10.182 10.9975 10.182 12.0001C10.182 13.0026 10.9976 13.8182 12.0002 13.8182Z"
            fill="#606468"
          />
          <path
            d="M6.18182 13.8182C7.18436 13.8182 8 13.0026 8 12.0001C8 10.9975 7.18436 10.1819 6.18182 10.1819C5.17927 10.1819 4.36364 10.9975 4.36364 12.0001C4.36364 13.0026 5.17927 13.8182 6.18182 13.8182Z"
            fill="#606468"
          />
          <path
            d="M12 24C18.6168 24 24 18.6168 24 12C24 5.3832 18.6168 0 12 0C5.3832 0 0 5.3832 0 12C0 18.6168 5.3832 24 12 24ZM12 2.18182C17.4137 2.18182 21.8182 6.58625 21.8182 12C21.8182 17.4137 17.4137 21.8182 12 21.8182C6.58625 21.8182 2.18182 17.4137 2.18182 12C2.18182 6.58625 6.58625 2.18182 12 2.18182Z"
            fill="#606468"
          />
        </g>
        <defs>
          <clipPath id="clip0_1640_6451">
            <rect
              width="24"
              height="24"
              fill="white"
              transform="matrix(0 -1 1 0 0 24)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}

export const UserIcon = () => {
  return (
    <div>
      <img src={User} alt="User" />
    </div>
  )
}
export const MailIcon = () => {
  return (
    <div>
      <img src={Mail} alt="Mail" />
    </div>
  )
}
export const UsersIcon = () => {
  return (
    <div>
      <img src={Users} alt="Users" />
    </div>
  )
}
export const LogoutIcon = () => {
  return (
    <div>
      <img src={Logout} alt="Logout" />
    </div>
  )
}
export const FiltersIcon = () => {
  return (
    <div style={{ height: '20px' }}>
      <img src={Filters} alt="Filters" />
    </div>
  )
}

export const SearchIcon = () => {
  return (
    <div style={{ height: '20px' }}>
      <img height={20} width={20} src={Search} alt="Search" />
    </div>
  )
}

export const ExamineIcon = () => {
  return (
    <div style={{ height: '20px' }}>
      <img height={20} width={20} src={Examine} alt="Examine" />
    </div>
  )
}

export const ClearIcon = () => {
  return (
    <div style={{ height: '20px' }}>
      <img height={20} width={20} src={Clear} alt="Clear" />
    </div>
  )
}

export const NyCalculatorIcon = () => {
  return (
    <div style={{ height: '20px' }}>
      <img height={20} width={20} src={NyCalculator} alt="NyCalculator" />
    </div>
  )
}

export const RepriceIcon = () => {
  return (
    <div style={{ height: '20px' }}>
      <img height={20} width={20} src={Reprice} alt="Reprice" />
    </div>
  )
}

export const DenyAllIcon = () => {
  return (
    <div style={{ height: '20px' }}>
      <img height={20} width={20} src={DenyAll} alt="DenyAll" />
    </div>
  )
}
export const ImportBillsIcon = () => {
  return (
    <div style={{ height: '20px' }}>
      <img height={20} width={20} src={ImportBills} alt="ImportBills" />
    </div>
  )
}
export const GenerateEOBOrDOCIcon = () => {
  return (
    <div style={{ height: '20px' }}>
      <img
        height={20}
        width={20}
        src={GenerateEOBOrDOC}
        alt="GenerateEOBOrDOC"
      />
    </div>
  )
}
export const CircleCloseIcon = () => {
  return (
    <div style={{ height: '20px' }}>
      <img height={20} width={20} src={CircleClose} alt="CircleClose" />
    </div>
  )
}
export const CloseIcon = () => {
  return (
    <div style={{ height: '12px' }}>
      {/* <img height={12} width={12} src={Close} alt="Close" /> */}
      <svg
        width="8"
        height="7"
        viewBox="0 0 8 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.06808 0.771546L6.29654 0L3.82603 2.4705L1.35553 0L0.583984 0.771546L3.05449 3.24205L0.583984 5.71255L1.35553 6.4841L3.82603 4.01359L6.29654 6.4841L7.06808 5.71255L4.59758 3.24205L7.06808 0.771546Z"
          fill="#201F24"
        />
      </svg>
    </div>
  )
}
