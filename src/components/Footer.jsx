import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <div className="text-2xl font-bold tracking-wider cursor-pointer mb-5">
            EC01
          </div>
          <p className="w-full md:w-2/3 text-gray-600">
            Ea eius beatae dolorem corporis perferendis ducimus saepe, neque
            quisquam aut atque quo esse assumenda libero iste alias ab nulla
            temporibus porro!
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">Company</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">Get in touch</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+1-234-567-8900</li>
            <li>contact@ec01.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright @ 2025 EC01 - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
