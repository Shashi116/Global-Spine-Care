import React from "react";
import InformationCard from "./InformationCard";
import { faHeartPulse, faTruckMedical,  faHouseMedicalCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
        <p className="info-description">
          We bring healthcare to your convenience, offering a comprehensive
          range of on-demand medical services tailored to your needs. Our
          platform allows you to connect with experienced online doctors who
          provide expert medical advice, issue online prescriptions, and offer
          quick refills whenever you require them.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Emergency Care"
          description="Our Emergency Care service is designed to be your reliable support
            in critical situations. Whether it's a sudden illness, injury, or
            any medical concern that requires immediate attention, our team of
            dedicated healthcare professionals is always available to provide
            prompt and efficient care."
          icon={faTruckMedical}
        />

        <InformationCard
          title="Orthopedic Spine Surgeon"
          description="Our Orthopedic Spine Surgeon team, under the leadership of Dr. Raj Sakhrekar, specializes in advanced treatments for spinal disorders. 
            With expertise in minimally invasive procedures, we focus on comprehensive and compassionate care. 
            From diagnosis to surgery, our team is dedicated to enhancing mobility and improving the quality of life for our patients. 
            Committed to innovation and personalized approaches, we strive for optimal outcomes and support individuals on their path to spinal health."
          icon={faHeartPulse}
        />

        <InformationCard
          title="24/7"
          description="We offer round-the-clock care. Our 24/7 service ensures immediate access to expert assistance, 
            providing timely support for all your spinal health concerns. 
            Whether you need urgent advice or ongoing treatment, our dedicated team is here to prioritize your well-being at any hour."
          icon={faHouseMedicalCircleExclamation}
        />
      </div>
    </div>
  );
}

export default Info;
