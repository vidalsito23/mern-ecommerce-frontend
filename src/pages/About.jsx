import React from "react";
import Title from "../components/Title";
import NewsletterBox from "../components/NewsletterBox";
import { RiInformation2Line } from "react-icons/ri";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"About"} text2={"Us"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <RiInformation2Line className="w-full md:max-w-[480px]" size={50} />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sed
            minus, quam soluta repellendus mollitia dicta omnis reprehenderit et
            accusamus, impedit totam fugiat magnam, earum animi deserunt
            consectetur eligendi! Eligendi.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            deserunt, animi odio deleniti vero aut, recusandae nobis minima
            doloribus dolores harum nam facere debitis numquam quam, sunt quis
            non ut.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
            molestias impedit neque eveniet quidem laboriosam ab distinctio,
            nam, dolorum similique, repudiandae veritatis earum deleniti. Dolore
            ea dolorum enim quae eos.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"Why"} text2={"Choose Us"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
            tenetur iste hic eum, fuga qui veritatis beatae modi blanditiis.
            Consequuntur natus temporibus eligendi accusamus quibusdam eveniet
            cum atque tenetur nisi!
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
            tenetur iste hic eum, fuga qui veritatis beatae modi blanditiis.
            Consequuntur natus temporibus eligendi accusamus quibusdam eveniet
            cum atque tenetur nisi!
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
            tenetur iste hic eum, fuga qui veritatis beatae modi blanditiis.
            Consequuntur natus temporibus eligendi accusamus quibusdam eveniet
            cum atque tenetur nisi!
          </p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default About;
