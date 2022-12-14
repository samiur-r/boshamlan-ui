import Description from 'components/Description'
import Title from 'components/Title'
import type { NextPage } from 'next'

const PasswordReset: NextPage = () => {
  return (
    <div className="dir-rtl container max-w-md grid place-items-center py-10">
      <div className="w-full md:w-auto">
        <Title value="تغيير كلمة السر" />
      </div>
      <div className="text-start md:text-center mt-5">
        <Description
          value="سنرسل لك رسالة نصية SMS وفيها رقم تفعيل OTP للتأكد من أن رقم موبايلك
        صحيح"
        />
      </div>
      <form className="mt-8 px-3 md:px-0 w-full">
        <div className="relative">
          <input
            type="number"
            name="phone"
            id="phone"
            className="block px-4 py-2.5 md:py-4 w-full text-black bg-transparent rounded-lg shadow-sm border border-custom-gray-border appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder=" "
          />
          <label
            htmlFor="phone"
            className="absolute text-md text-custom-gray duration-300 transform -translate-y-5 scale-75 top-2 z-10 bg-white px-1 peer-placeholder-shown:px-0 peer-focus:px-1 mx-0 peer-focus:mx-0 peer-placeholder-shown:mx-4 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 right-0"
          >
            رقم الموبايل
          </label>
        </div>
        <div className="mt-8">
          <button
            type="submit"
            className="bg-secondary w-full hover:opacity-90 transition-opacity duration-300 text-white py-3.5 md:py-4 px-8 rounded-lg"
          >
            أرسل لي رقم التفعيل SMS
          </button>
        </div>
      </form>
    </div>
  )
}

export default PasswordReset
