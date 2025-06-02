import { FaUpload } from "react-icons/fa";

export default function SettingN() {
  return (
    <div className="min-h-screen bg-gray-100 font-inter p-4 sm:p-8">
      <div className="w-full max-w-6xl mx-auto">
        <SettingHeading />
        <Content />
      </div>
    </div>
  );
}

function SettingHeading() {
  return (
    <div className="flex items-center justify-between w-full mb-8 md:ml-60">
      <div className="flex flex-col items-start">
        <h1 className="text-2xl font-bold mb-2">Setting Details</h1>
        <span className="text-base text-gray-500">
          Update your photo and personal details here
        </span>
      </div>
      <div className="flex justify-end space-x-4">
        <button className="px-4 py-2 rounded-md border border-white text-2xl">
          Cancel
        </button>
        <button className="px-4 py-2 rounded-md bg-purple-800 text-white border border-white text-2xl">
          Save
        </button>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="grid grid-cols-[70%_1fr] gap-8 mt-8">
      <Main />
      <Aside />
    </div>
  );
}

function Main() {
  return (
    <main className="bg-white rounded-xl shadow md:ml-60">
      <form className="form">
        <h2 className="p-8 border-b border-[#f4f5f9] text-xl font-medium">
          Personal Information
        </h2>
        <div className="flex flex-col gap-12 p-8">
          <div className="grid grid-cols-2 gap-8">
            <InputField
              label="Full Name"
              id="fname"
              placeholder="Enter first name"
            />
            <InputField
              label="Last Name"
              id="lname"
              placeholder="Enter last name"
            />
          </div>
          <div className="grid grid-cols-2 gap-8">
            <InputField
              label="Email Address"
              id="email"
              type="email"
              placeholder="Enter email address"
            />
            <InputField
              label="Username"
              id="username"
              placeholder="Enter username"
            />
          </div>
          <div className="grid grid-cols-2 gap-8">
            <InputField
              label="Phone No"
              id="phone"
              type="tel"
              pattern="[0-9]{10}"
              placeholder="Enter phone no"
            />
            <InputField label="City" id="city" placeholder="Enter city" />
          </div>
          <div className="grid grid-cols-2 gap-8">
            <InputField
              label="Country Name"
              id="countryname"
              placeholder="Enter country name"
            />
            <InputField
              label="Zip Code"
              id="zipcode"
              pattern="[0-9]{5}"
              placeholder="Enter zip code"
            />
          </div>
          <div className="grid grid-cols-2 gap-8">
            <SelectField label="Bio (Write a short introduction)" id="bio">
              <option value="normal">Normal</option>
            </SelectField>
          </div>
          <p className="text-sm bg-[rgba(244,245,249,0.5)] border border-[#f4f5f9] p-8 rounded">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            maximus, metus sed venenatis convallis, sem purus ornare ipsum, ac
            feugiat magna lorem in purus. Phasellus iaculis quam ullamcorper
            nibh gravida, at blandit ipsum ornare. In luctus lacinia mi sed
            pharetra.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <SelectField label="Timezone" id="timezone">
              <option value="PST">Pacific Standard Time</option>
              <option value="MST">Mountain Standard Time</option>
              <option value="CST">Central Standard Time</option>
              <option value="EST">Eastern Standard Time</option>
              <option value="AKST">Alaska Standard Time</option>
              <option value="HST">Hawaii Standard Time</option>
            </SelectField>
          </div>
        </div>
      </form>
    </main>
  );
}

function Aside() {
  return (
    <aside className="rounded-xl">
      <h2 className="p-8 bg-white rounded-t-xl border-b border-[#f4f5f9] text-xl font-medium">
        Your Photo
      </h2>
      <div className="bg-white px-8 pb-8 flex flex-col gap-6">
        <div className="flex flex-col items-center">
          <div className="w-full flex items-center gap-4">
            <img
              src="./assets/edit_your_profile.png"
              alt="Profile"
              className="w-[80px] h-[80px] rounded-full bg-gray-200"
            />
            <div>
              <h4 className="text-base font-medium">Edit your photo</h4>
              <button className="bg-purple-200 text-purple-700 mt-2 px-4 py-1 rounded text-sm">
                Delete
              </button>
            </div>
          </div>
          <div className="mt-6 text-center w-full">
            <input
              type="file"
              id="file-upload"
              accept=".svg,.png,.jpg,.jpeg,.gif"
              hidden
            />
            <label
              htmlFor="file-upload"
              className="block border border-dashed border-purple-600 rounded-lg p-20 cursor-pointer hover:bg-gray-100 hover:border-gray-400 transition"
            >
              <div className="text-gray-700">
                <FaUpload className="inline-block text-xl mr-2" />
                <span className="text-purple-600 font-medium text-2xl">
                  Click to upload
                </span>{" "}
                <span className="text-2xl">
                or drag and drop
                </span>
                <br />
                <small className="text-gray-500 text-sm">
                  SVG, PNG, JPG or GIF (max. 800×400px)
                </small>
              </div>
            </label>
            <p className="mt-2 text-sm text-gray-500" id="file-name">
              No file selected
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center w-full p-4 border rounded-md">
          <img
            src="./assets/my-google_logo.png"
            alt="Google Logo"
            className="w-[60px] text-2xl"
          />
          <button className="bg-purple-200 text-purple-700 py-1 px-4 rounded-md text-sm">
            Connected
          </button>
        </div>
        <p className="text-base">
          Use Google to sign into your account{" "}
          <a href="https://www.google.com" className="text-blue-500 underline">
            Click here to learn more
          </a>
        </p>
      </div>
    </aside>
  );
}

function InputField({ label, id, type = "text", pattern, placeholder }) {
  return (
    <div>
      <label htmlFor={id} className="block text-base font-semibold mb-2">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        pattern={pattern}
        placeholder={placeholder}
        className="w-full text-base p-4 rounded-md bg-[rgba(244,245,249,0.5)] border border-[#f4f5f9] transition-all duration-300"
      />
    </div>
  );
}

function SelectField({ label, id, children }) {
  return (
    <div>
      <label htmlFor={id} className="block text-base font-semibold mb-2">
        {label}
      </label>
      <select
        id={id}
        name={id}
        className="w-full text-base p-4 rounded bg-[rgba(244,245,249,0.5)] border border-[#f4f5f9] transition-all duration-300"
      >
        {children}
      </select>
    </div>
  );
}
