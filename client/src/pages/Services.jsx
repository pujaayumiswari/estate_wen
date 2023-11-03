import './Service.css';
import React, { useEffect, useState } from "react";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkVisibility = () => {
      const elements = document.querySelectorAll(".service-card");
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          element.classList.add("visible");
        } else {
          element.classList.remove("visible");
        }
      });
    };

    window.addEventListener("scroll", checkVisibility);
    checkVisibility();

    return () => {
      window.removeEventListener("scroll", checkVisibility);
    };
  }, []);

  return (
    <section className="pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="mb-2 block text-lg font-semibold text-primary text-blue-800">
            Our Services
          </span>
          <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark text-blue-800 sm:text-4xl md:text-[40px]">
            What We Offer
          </h2>
          <p className="text-base text-body-color dark:text-dark-6">
            Find your dream home at AYESTATE, where you can choose to buy or rent from a variety of options
          </p>
        </div>

        <div className="flex flex-wrap -mx-4 p-10 ">
          <div className="w-full px-4">
            <ServiceCard
              image="https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&q=80&w=1770&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              title="Apartments"
              details="We enjoy working with discerning clients, people for whom quality, service, integrity & aesthetics."
              isVisible={isVisible}
            />
          </div>
          <div className="w-full px-4 p-10">
            <ServiceCard
              image="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&q=80&w=1770&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              title="Hotels"
              details="We enjoy working with discerning clients, people for whom quality, service, integrity & aesthetics."
              isVisible={isVisible}
            />
          </div>
          <div className="w-full px-4 p-10">
            <ServiceCard
              image="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=1770&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              title="Villa"
              details="We enjoy working with discerning clients, people for whom quality, service, integrity & aesthetics."
              isVisible={isVisible}
            />
          </div>
          <div className="w-full px-4 p-10">
            <ServiceCard
              image="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80&w=1770&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              title="House"
              details="We enjoy working with discerning clients, people for whom quality, service, integrity & aesthetics."
              isVisible={isVisible}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

const ServiceCard = ({ title, details, isVisible, image }) => {
  return (
    <div className={`w-full px-4 service-card ${isVisible ? "visible" : ""}`}>
      <div className="mb-9 rounded-[20px] bg-white p-10 shadow-2 hover:shadow-lg dark:bg-dark-2 md:px-7 xl:px-10">
        <div className="m-5">
          <img src={image} alt={title} />
        </div>
        <h4 className="mb-[14px] text-2xl font-semibold text-dark dark:text-white">
          {title}
        </h4>
        <p className="text-body-color dark:text-dark-6">{details}</p>
      </div>
    </div>
  );
};
