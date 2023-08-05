
import  InputMask  from 'react-input-mask';
        
function ContactForm({ handleSubmit, info, setInfo }) {
  const handleChange = (e) => {
    console.log(e.target.value);
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-full lg:w-4/12 p-5 border  border-gray-300 bg-white bg-opacity-50 rounded-lg shadow-lg lg:mt-5"
      >
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              First Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Jane"
              name="name"
              value={info.name}
              onChange={handleChange}
            />
            {/* <p className="text-red-500 text-xs italic">
              Please fill out this field.
            </p> */}
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Last Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Doe"
              name="lastName"
              onChange={handleChange}
              value={info.lastName}
            />
          </div>
          {/* <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Email
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="email"
              placeholder="Enter your email"
              name="email"
              onChange={handleChange}
              value={info.email}
            />
            <p className="text-red-500 text-xs italic">
              Please fill out this field.
            </p>
          </div> */}
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Department
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Enter your Department"
              name="department"
              onChange={handleChange}
              value={info.department}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Phone NUMBER
            </label>
            <InputMask
              className="text-gray-700 appearance-none block w-full bg-gray-200  border border-gray-200 rounded  py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              // type="date"
              placeholder="Enter your Phone Number"
              name="number"
              maskChar="-"
              mask="99/99/9999"
              onChange={handleChange}
              value={info.number}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className=" uppercase tracking-wide text-white text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              SAVE
            </label>
            <button
              className="appearance-none block w-full bg-red-400 text-gray-700 border border-gray-200 rounded  py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="submit"
            >
              {info.id ? <span className="animate-pulse w-full text-white font-bold py-2 px-4 rounded">UPDATE</span> :
             <span>SAVE</span> }
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default ContactForm;
