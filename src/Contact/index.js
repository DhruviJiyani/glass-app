import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { useForm } from "react-hook-form";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { PiWarningCircle } from "react-icons/pi";

const Contact = () => {
  const accordionData = [
    {
      title: "Will I receive the same product that I see in the picture?",
      content: [
        "Consectetur cras scelerisque dis nec mi vestibulum ullamcorper turpis enim natoque tempus a malesuada suspendisse iaculis adipiscing himenaeos tincidunt.Tellus pharetra dis nostra urna a scelerisque id parturient ullamcorper ullamcorper class ad consectetur tristique et.",
        "Hendrerit mollis facilisi odio a montes scelerisque a scelerisque justo a praesent conubia aenean mi tempor.",
      ],
    },
    {
      title: "Where can I view my sales receipt?",
      content: [
        "A vel dui a conubia vestibulum class varius vel nunc a gravida ut maecenas quisque a proin condimentum sagittis class at faucibus primis parturient dolor scelerisque himenaeos.",
        "A et ullamcorper vestibulum netus a mauris ac consectetur libero volutpat congue congue turpis a consectetur adipiscing sit.Suspendisse leo fringilla a congue tempus nisi conubia vestibulum a in posuere accumsan.",
      ],
    },
    {
      title: "How can I return an item?",
      content: [
        "Sit rhoncus aptent dis scelerisque penatibus a dis tempor accumsan suspendisse mollis a et odio ullamcorper magnis ullamcorper cum ullamcorper duis nulla egestas massa.",
        "Vitae amet nostra est leo dignissim justo sodales et ac a conubia bibendum duis ad justo suspendisse a a tellus cubilia vestibulum a dictumst a duis risus.Sociosqu curae consequat nisl litora a eros est consectetur nulla rhoncus a a id felis praesent.Tempus dui integer a cursus id fames parturient.",
      ],
    },
    {
      title: "Will you restock items indicated as “out of stock?”",
      content: [
        "Scelerisque parturient sagittis nisi in aliquam dui scelerisque non consectetur aptent hac adipiscing ullamcorper pulvinar sit vestibulum purus facilisi hendrerit mus nisl massa ut parturient consectetur cum justo fames torquent.",
        "Ac curae aliquet vivamus aptent duis congue urna venenatis ridiculus faucibus tincidunt a lorem rutrum nullam potenti adipiscing.Adipiscing.",
      ],
    },
    {
      title: "Where can I ship my order?",
      content: [
        "Ut bibendum a adipiscing purus massa a facilisi congue parturient condimentum urna donec per adipiscing cursus nisl nam tristique parturient id.",
        "Aliquam quam at et in ipsum at venenatis a eget dignissim aliquam tincidunt ultrices lacus ad consectetur imperdiet sem suspendisse ante a dapibus potenti.Eu parturient parturient magnis tempus molestie augue quam vulputate hac facilisis est nisl pretium a cursus.",
      ],
    },
  ];

  const [name, setName] = useState("");
  const [isNameValid, setIsNameValid] = useState(true);

  // const handleSubmit = (e) => {
  //   // e.preventDefault();
  //   // if (!name.trim()) {
  //   //   setIsNameValid(false);
  //   // } else {
  //   //   setIsNameValid(true);
  //   // }
  // };

  const AccordionItem = ({ title, content, isOpen, toggleAccordion }) => {
    return (
      <div className="border-b border-gray-300">
        <div
          className="flex justify-between items-center cursor-pointer py-4 max-auto"
          onClick={toggleAccordion}
        >
          <h3 className="font-medium text-neutral-600 text-[16px]">{title}</h3>
          <span>
            {isOpen ? (
              <MdKeyboardArrowUp className="text-xl" />
            ) : (
              <MdKeyboardArrowDown className="text-xl" />
            )}
          </span>
        </div>
        {isOpen && (
          <div className="py-2 text-sm text-neutral-500 font-light">
            {content.map((text, index) => (
              <p key={index} className="mb-4">
                {text}
              </p>
            ))}
          </div>
        )}
      </div>
    );
  };

  const Accordion = ({ data }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };

    return (
      <div>
        {data.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
            isOpen={openIndex === index}
            toggleAccordion={() => toggleAccordion(index)}
          />
        ))}
      </div>
    );
  };
  const onSubmit = (values) => {
    console.log("values", values);
  };

  const FormSchema = Yup.object({
    name: Yup.string().required("This field is required"),
    email: Yup.string().required("This field is required"),
    phone: Yup.string(),
    comapny: Yup.string(),
    message: Yup.string(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(FormSchema),
  });
  console.log("errors", errors);

  return (
    <div className="">
      <div className="w-full mt-3">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          aria-hidden="false"
          tabIndex="0"
          title="Google Map"
        />
      </div>
      <div className="container mx-auto mt-9">
        <div className="flex lg:flex-row flex-col py-4 gap-8">
          <div className="w-full lg:w-1/2 px-10">
            <p className="text-gray-400 text-sm pb-3">INFORMATION QUESTIONS</p>
            <h2 className="font-bold text-xl pb-6 border-b-2">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <Accordion data={accordionData} />
          </div>
          <div className="hidden lg:block w-px bg-gray-300"></div>
          <div className="px-10">
            <p className="text-gray-400 text-sm pb-3">INFORMATION ABOUT US</p>
            <h2 className="font-bold text-xl mb-8">
              CONTACT US FOR ANY QUESTIONS
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid lg:grid-cols-2 grid-col-1 gap-4">
                <div className="mb-4">
                  <label className="text-sm font-light">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-2 border border-gray-300  focus:outline-none"
                    {...register("name")}
                  />
                  {errors?.name?.message && (
                    <p className="text-red-500">{errors?.name?.message}</p>
                  )}
                </div>
                <div className="mb-4">
                  <label className="text-sm font-light">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    {...register("email")}
                    className="w-full p-2 border border-gray-300  focus:outline-none"
                  />
                  {errors?.email?.message && (
                    <p className="text-red-500">{errors?.email.message}</p>
                  )}
                </div>
                <div className="mb-4">
                  <label className="text-sm font-light">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full p-2 border border-gray-300  focus:outline-none"
                    {...register("phone")}
                  />
                  {errors?.phone?.message && <p>{errors?.phone.message}</p>}
                </div>
                <div className="mb-4">
                  <label className="text-sm font-light">Company</label>
                  <input
                    type="text"
                    id="company"
                    className="w-full p-2 border border-gray-300  focus:outline-none"
                    {...register("company")}
                  />
                  {errors?.comapny?.message && <p>{errors?.comapny.message}</p>}
                </div>
              </div>
              <div>
                <label className="text-sm font-light mb-4">Your Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full p-2 border border-gray-300  focus:outline-none"
                  {...register("message")}
                ></textarea>
                {errors?.message?.message && <p>{errors?.message.message}</p>}
              </div>
              <button
                className="bg-gray-100 h-9 w-40 text-[14px] mt-4 mb-14 hover:bg-gray-200"
                type="submit"
              >
                ASK A QUESTION
              </button>
            </form>
            {errors?.name?.message && errors?.email?.message && (
              <p className="bg-yellow-600 py-4 px-2 text-white flex">
                <p className="text-2xl px-2"><PiWarningCircle /></p>
                One or more fields have an error. Please check and try again.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
